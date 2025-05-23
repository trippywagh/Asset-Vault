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
        const relatedGrid = this.previewModal.querySelector('.related-assets-grid');

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
                    .map(tag => `<span class="tag" role="button" tabindex="0">${tag}</span>`)
                    .join('')}
            </div>
        `;

        // Add click handlers for tags
        info.querySelectorAll('.preview-tags .tag').forEach(tagElement => {
            tagElement.addEventListener('click', (e) => {
                const tag = e.target.textContent;
                addFilter(tag);
                this.closePreview();
            });
            
            // Add keyboard support
            tagElement.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const tag = e.target.textContent;
                    addFilter(tag);
                    this.closePreview();
                }
            });
        });

        // Update related assets grid
        relatedGrid.innerHTML = '';
        const relatedAssets = this.getRelatedAssets();
        relatedAssets.forEach(asset => {
            const card = this.createRelatedAssetCard(asset);
            relatedGrid.appendChild(card);
        });
    }

    getFeaturedList() {
        const featuredIn = this.currentAsset.featuredIn || ['Flash cards', 'Revision notes'];
        return featuredIn
            .map(item => `<span class="featured-item">${item}</span>`)
            .join('');
    }

    getRelatedAssets() {
        // Filter out current asset and get assets with similar tags
        return sampleAssets
            .filter(asset => asset.id !== this.currentAsset.id)
            .filter(asset => {
                const commonTags = asset.tags.filter(tag => 
                    this.currentAsset.tags.includes(tag)
                );
                return commonTags.length > 0;
            })
            .slice(0, 4); // Show up to 4 related assets
    }

    createRelatedAssetCard(asset) {
        const card = document.createElement('div');
        card.className = 'related-asset-card';
        card.setAttribute('data-id', asset.id);

        card.innerHTML = `
            <div class="related-asset-thumbnail-container">
                <img src="${asset.thumbnail}" 
                     alt="${asset.title}" 
                     class="related-asset-thumbnail"
                     loading="lazy"
                     onerror="this.onerror=null; this.src=''; this.parentElement.classList.add('fallback')">
                <div class="related-asset-type">
                    <i class="fas ${this.getTypeIcon(asset.type)}"></i>
                    ${asset.type}
                </div>
                <div class="thumbnail-actions">
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
            <div class="related-asset-info">
                <h4 class="related-asset-title">${asset.title || 'Untitled Asset'}</h4>
                <div class="related-asset-tags">
                    ${asset.tags
                        .filter(tag => tag !== 'recommended')
                        .slice(0, 2)
                        .map(tag => `<span class="tag" role="button" tabindex="0">${tag}</span>`)
                        .join('')}
                </div>
            </div>
        `;

        // Add click event to open preview
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.thumbnail-actions') && !e.target.closest('.tag')) {
                this.openPreview(asset);
            }
        });

        // Add click handlers for tags in related cards
        card.querySelectorAll('.tag').forEach(tagElement => {
            tagElement.addEventListener('click', (e) => {
                e.stopPropagation();
                const tag = e.target.textContent;
                addFilter(tag);
                this.closePreview();
            });
            
            // Add keyboard support
            tagElement.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const tag = e.target.textContent;
                    addFilter(tag);
                    this.closePreview();
                }
            });
        });

        // Add action button event listeners
        const bookmarkBtn = card.querySelector('.bookmark-btn');
        const copyBtn = card.querySelector('.copy-btn');
        const downloadBtn = card.querySelector('.download-btn');

        bookmarkBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            bookmarkBtn.classList.toggle('active');
            const isBookmarked = bookmarkBtn.classList.contains('active');
            bookmarkBtn.style.color = isBookmarked ? '#2563eb' : '#64748b';
            showToast(isBookmarked ? 'Asset bookmarked' : 'Bookmark removed');
        });

        copyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const dummyUrl = `https://yourdomain.com/assets/${asset.id}`;
            navigator.clipboard.writeText(dummyUrl)
                .then(() => showToast('URL copied to clipboard'))
                .catch(() => showToast('Failed to copy URL'));
        });

        downloadBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showToast('Downloading asset...');
        });

        return card;
    }

    getTypeIcon(type) {
        const iconMap = {
            'image': 'fa-image',
            'video': 'fa-video',
            '3d': 'fa-cube',
            'text': 'fa-file-alt'
        };
        return iconMap[type] || 'fa-file';
    }
}

// Initialize preview module
const previewModule = new PreviewModule();

// Add click handler to asset cards
document.addEventListener('click', (e) => {
    const assetCard = e.target.closest('.asset-card');
    if (assetCard && !e.target.closest('.thumbnail-actions') && !e.target.closest('.tag')) {
        const assetId = assetCard.getAttribute('data-id');
        const asset = sampleAssets.find(a => a.id === parseInt(assetId));
        if (asset) {
            previewModule.openPreview(asset);
        }
    }
}); 