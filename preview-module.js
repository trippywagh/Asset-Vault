// Preview Module
class PreviewModule {
    constructor() {
        this.previewModal = null;
        this.currentAsset = null;
        this.init();
    }

    init() {
        // Create preview modal structure
        this.createModal();
        // Add event listeners
        this.addEventListeners();
    }

    createModal() {
        // Create modal container
        this.previewModal = document.createElement('div');
        this.previewModal.className = 'preview-modal';
        this.previewModal.innerHTML = `
            <button class="close-preview" aria-label="Close preview">
                <i class="fas fa-times"></i>
            </button>
            <div class="preview-modal-content">
                <div class="preview-main-section">
                    <div class="preview-header">
                        <div class="preview-title"></div>
                        <div class="preview-actions">
                            <button class="action-btn bookmark-btn" data-tooltip="Bookmark">
                                <i class="fas fa-bookmark"></i>
                            </button>
                            <button class="action-btn copy-btn" data-tooltip="Copy URL">
                                <i class="fas fa-link"></i>
                            </button>
                            <button class="action-btn download-btn" data-tooltip="Download">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                    </div>
                    <div class="preview-body">
                        <div class="preview-media"></div>
                        <div class="preview-info">
                            <div class="preview-tags"></div>
                        </div>
                    </div>
                </div>
                <div class="preview-related-section">
                    <h2>Related Assets</h2>
                    <div class="related-assets-grid"></div>
                </div>
            </div>
        `;
        document.body.appendChild(this.previewModal);
    }

    addEventListeners() {
        // Close modal when clicking outside or on close button
        this.previewModal.addEventListener('click', (e) => {
            if (e.target === this.previewModal || e.target.closest('.close-preview')) {
                this.closePreview();
            }
        });

        // Handle keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.previewModal.classList.contains('show')) {
                this.closePreview();
            }
        });

        // Handle action buttons
        const bookmarkBtn = this.previewModal.querySelector('.bookmark-btn');
        const copyBtn = this.previewModal.querySelector('.copy-btn');
        const downloadBtn = this.previewModal.querySelector('.download-btn');

        bookmarkBtn.addEventListener('click', () => {
            bookmarkBtn.classList.toggle('active');
            const isBookmarked = bookmarkBtn.classList.contains('active');
            bookmarkBtn.style.color = isBookmarked ? '#2563eb' : '#64748b';
            showToast(isBookmarked ? 'Asset bookmarked' : 'Bookmark removed');
        });

        copyBtn.addEventListener('click', () => {
            const dummyUrl = `https://yourdomain.com/assets/${this.currentAsset.id}`;
            navigator.clipboard.writeText(dummyUrl)
                .then(() => showToast('URL copied to clipboard'))
                .catch(() => showToast('Failed to copy URL'));
        });

        downloadBtn.addEventListener('click', () => {
            showToast('Downloading asset...');
        });
    }

    openPreview(asset) {
        this.currentAsset = asset;
        this.updatePreviewContent();
        this.previewModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closePreview() {
        this.previewModal.classList.remove('show');
        document.body.style.overflow = '';
    }

    updatePreviewContent() {
        const title = this.previewModal.querySelector('.preview-title');
        const media = this.previewModal.querySelector('.preview-media');
        const info = this.previewModal.querySelector('.preview-info');

        // Update title
        title.textContent = this.currentAsset.title || 'Untitled Asset';

        // Update media content based on type
        media.innerHTML = '';
        switch (this.currentAsset.type) {
            case 'image':
                media.innerHTML = `<img src="${this.currentAsset.thumbnail}" alt="${this.currentAsset.title}">`;
                break;
            case 'video':
                media.innerHTML = `
                    <video controls>
                        <source src="${this.currentAsset.thumbnail}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;
                break;
            case '3d':
                media.innerHTML = `
                    <div class="preview-3d">
                        <img src="${this.currentAsset.thumbnail}" alt="${this.currentAsset.title}">
                        <div class="preview-3d-controls">
                            <button class="rotate-btn"><i class="fas fa-sync-alt"></i></button>
                            <button class="zoom-btn"><i class="fas fa-search-plus"></i></button>
                        </div>
                    </div>
                `;
                break;
            case 'text':
                media.innerHTML = `
                    <div class="text-preview">
                        <div class="text-content">
                            ${this.currentAsset.content || 'No content available'}
                        </div>
                    </div>
                `;
                break;
        }

        // Update info section with metadata
        info.innerHTML = `
            <div class="metadata-section">
                <div class="metadata-field">
                    <span class="metadata-label">Topic</span>
                    <span class="metadata-value">${this.currentAsset.topic || 'General'}</span>
                </div>
                <div class="metadata-field">
                    <span class="metadata-label">Sub Topic</span>
                    <span class="metadata-value">${this.currentAsset.subTopic || 'Not specified'}</span>
                </div>
            </div>

            <div class="stats-section">
                <div class="stat-item">
                    <span class="stat-value">${this.currentAsset.views || 0}</span>
                    <span class="stat-label">Views</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${this.currentAsset.downloads || 0}</span>
                    <span class="stat-label">Downloads</span>
                </div>
            </div>

            <div class="featured-section">
                <h3>Featured in</h3>
                <div class="featured-list">
                    ${this.getFeaturedList()}
                </div>
            </div>

            <div class="preview-tags">
                ${this.currentAsset.tags
                    .filter(tag => tag !== 'recommended')
                    .map(tag => `<span class="tag">${tag}</span>`)
                    .join('')}
            </div>
        `;
    }

    getFeaturedList() {
        const featuredIn = this.currentAsset.featuredIn || ['Flash cards', 'Revision notes'];
        return featuredIn
            .map(item => `<span class="featured-item">${item}</span>`)
            .join('');
    }
}

// Initialize preview module
const previewModule = new PreviewModule();

// Add click handler to asset cards
document.addEventListener('click', (e) => {
    const assetCard = e.target.closest('.asset-card');
    if (assetCard) {
        const assetId = assetCard.getAttribute('data-id');
        const asset = sampleAssets.find(a => a.id === parseInt(assetId));
        if (asset) {
            previewModule.openPreview(asset);
        }
    }
}); 