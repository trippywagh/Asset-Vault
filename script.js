// Sample data for assets
const sampleAssets = [
    {
        id: 1,
        title: "Math Equation Example",
        type: "image",
        thumbnail: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=500&h=400&fit=crop",
        tags: ["math", "equation", "algebra"],
        views: 1247,
        downloads: 342
    },
    {
        id: 2,
        title: "Physics Experiment Video",
        type: "video",
        thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=400&fit=crop",
        tags: ["physics", "experiment", "video"],
        views: 2891,
        downloads: 567
    },
    {
        id: 3,
        title: "3D Human Anatomy",
        type: "3d",
        thumbnail: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500&h=400&fit=crop",
        tags: ["biology", "anatomy", "3d"],
        views: 4532,
        downloads: 891
    },
    {
        id: 4,
        title: "Chemistry Lab Manual",
        type: "text",
        thumbnail: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?w=500&h=400&fit=crop",
        tags: ["chemistry", "lab", "manual"],
        views: 978,
        downloads: 234
    },
    {
        id: 5,
        title: "Historical Timeline",
        type: "image",
        thumbnail: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=500&h=400&fit=crop",
        tags: ["history", "timeline", "social studies"],
        views: 3421,
        downloads: 678
    },
    {
        id: 6,
        title: "Programming Tutorial",
        type: "text",
        thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=400&fit=crop",
        tags: ["coding", "computer science", "tutorial"],
        views: 5678,
        downloads: 1243
    },
    {
        id: 7,
        title: "Geography Atlas",
        type: "image",
        thumbnail: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=500&h=400&fit=crop",
        tags: ["geography", "maps", "world"],
        views: 2134,
        downloads: 456
    },
    {
        id: 8,
        title: "Music Theory Basics",
        type: "video",
        thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500&h=400&fit=crop",
        tags: ["music", "theory", "arts"],
        views: 3567,
        downloads: 789
    },
    {
        id: 9,
        title: "Solar System Model",
        type: "3d",
        thumbnail: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&h=400&fit=crop",
        tags: ["astronomy", "space", "science"],
        views: 6789,
        downloads: 1567
    },
    {
        id: 10,
        title: "Literature Anthology",
        type: "text",
        thumbnail: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=500&h=400&fit=crop",
        tags: ["literature", "english", "books"],
        views: 1876,
        downloads: 432
    },
    {
        id: 11,
        title: "Cell Biology Animation",
        type: "video",
        thumbnail: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&h=400&fit=crop",
        tags: ["biology", "cell", "animation"],
        views: 4321,
        downloads: 876
    },
    {
        id: 12,
        title: "Ancient Egypt Virtual Tour",
        type: "3d",
        thumbnail: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=500&h=400&fit=crop",
        tags: ["history", "egypt", "virtual tour"],
        views: 7890,
        downloads: 1432
    },
    {
        id: 13,
        title: "Quantum Physics Guide",
        type: "text",
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop",
        tags: ["physics", "quantum", "advanced"],
        views: 2345,
        downloads: 567
    },
    {
        id: 14,
        title: "Art History Timeline",
        type: "image",
        thumbnail: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=500&h=400&fit=crop",
        tags: ["art", "history", "culture"],
        views: 3456,
        downloads: 789
    },
    {
        id: 15,
        title: "DNA Structure Model",
        type: "3d",
        thumbnail: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500&h=400&fit=crop",
        tags: ["biology", "genetics", "molecular"],
        views: 5432,
        downloads: 987
    },
    {
        id: 16,
        title: "World War II Documentary",
        type: "video",
        thumbnail: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?w=500&h=400&fit=crop",
        tags: ["history", "war", "documentary"],
        views: 8901,
        downloads: 1654
    },
    {
        id: 17,
        title: "Periodic Table Interactive",
        type: "3d",
        thumbnail: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=500&h=400&fit=crop",
        tags: ["chemistry", "elements", "interactive"],
        views: 4567,
        downloads: 876
    },
    {
        id: 18,
        title: "Shakespeare Collection",
        type: "text",
        thumbnail: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500&h=400&fit=crop",
        tags: ["literature", "shakespeare", "plays"],
        views: 3210,
        downloads: 654
    },
    {
        id: 19,
        title: "Marine Biology Study",
        type: "image",
        thumbnail: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=500&h=400&fit=crop",
        tags: ["biology", "ocean", "marine"],
        views: 2987,
        downloads: 543
    },
    {
        id: 20,
        title: "Geometric Patterns",
        type: "image",
        thumbnail: "https://images.unsplash.com/photo-1544616326-a041e9e3b348?w=500&h=400&fit=crop",
        tags: ["math", "geometry", "patterns"],
        views: 4123,
        downloads: 765
    },
    {
        id: 21,
        title: "French Language Course",
        type: "video",
        thumbnail: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?w=500&h=400&fit=crop",
        tags: ["language", "french", "learning"],
        views: 6543,
        downloads: 1234
    },
    {
        id: 22,
        title: "Climate Change Data",
        type: "text",
        thumbnail: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=500&h=400&fit=crop",
        tags: ["science", "climate", "environment"],
        views: 3789,
        downloads: 876
    },
    {
        id: 23,
        title: "Ancient Rome Architecture",
        type: "3d",
        thumbnail: "https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?w=500&h=400&fit=crop",
        tags: ["history", "architecture", "rome"],
        views: 5678,
        downloads: 1098
    },
    {
        id: 24,
        title: "Psychology Basics",
        type: "text",
        thumbnail: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500&h=400&fit=crop",
        tags: ["psychology", "mental health", "science"],
        views: 4321,
        downloads: 876
    }
];

// DOM Elements
const assetGrid = document.querySelector('.asset-grid');
const searchInput = document.getElementById('searchInput');
const tabs = document.querySelectorAll('.tab');
const uploadModal = document.getElementById('uploadModal');
const uploadForm = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const uploadArea = document.querySelector('.upload-area');
const uploadButton = document.querySelector('.upload-btn');
const backButton = document.querySelector('.back-button');
const homeButton = document.querySelector('.home-button');
const visualSearchModal = document.getElementById('visualSearchModal');
const visualSearchArea = document.querySelector('.visual-search-area');
const visualSearchInput = document.getElementById('visualSearchInput');
const imageUrlInput = document.getElementById('imageUrlInput');

// Filter dropdown functionality
const filterButton = document.querySelector('.filter-button');
const filterDropdown = document.querySelector('.filter-dropdown');
const filterOptions = document.querySelectorAll('.filter-option');

// Search functionality
const clearSearchBtn = document.getElementById('clearSearch');
const visualSearchBtn = document.querySelector('.visual-search-btn');
const audioSearchBtn = document.querySelector('.audio-search-btn');

// Pagination configuration
const ITEMS_PER_PAGE = 20;
let currentPage = 1;

// Initialize the grid with pagination on page load
filterAssets();

// Create pagination controls
function createPaginationControls() {
    const totalPages = Math.ceil(sampleAssets.length / ITEMS_PER_PAGE);
    
    // Remove existing pagination if any
    const existingPagination = document.querySelector('.pagination-container');
    if (existingPagination) {
        existingPagination.remove();
    }
    
    // Create container
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination-container';
    
    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    
    // Previous button
    const prevButton = document.createElement('button');
    prevButton.className = 'pagination-btn prev';
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            filterAssets();
        }
    });
    
    // Page numbers
    const pageNumbers = document.createElement('div');
    pageNumbers.className = 'page-numbers';
    
    // Calculate visible page numbers
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);
    
    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }
    
    // First page
    if (startPage > 1) {
        const firstPage = document.createElement('button');
        firstPage.className = 'page-number';
        firstPage.textContent = '1';
        firstPage.addEventListener('click', () => {
            currentPage = 1;
            filterAssets();
        });
        pageNumbers.appendChild(firstPage);
        
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'page-ellipsis';
            ellipsis.textContent = '...';
            pageNumbers.appendChild(ellipsis);
        }
    }
    
    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
        const pageNumber = document.createElement('button');
        pageNumber.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageNumber.textContent = i;
        pageNumber.addEventListener('click', () => {
            if (currentPage !== i) {
                currentPage = i;
                filterAssets();
            }
        });
        pageNumbers.appendChild(pageNumber);
    }
    
    // Last page
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'page-ellipsis';
            ellipsis.textContent = '...';
            pageNumbers.appendChild(ellipsis);
        }
        
        const lastPage = document.createElement('button');
        lastPage.className = 'page-number';
        lastPage.textContent = totalPages;
        lastPage.addEventListener('click', () => {
            currentPage = totalPages;
            filterAssets();
        });
        pageNumbers.appendChild(lastPage);
    }
    
    // Next button
    const nextButton = document.createElement('button');
    nextButton.className = 'pagination-btn next';
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            filterAssets();
        }
    });
    
    // Assemble pagination
    pagination.appendChild(prevButton);
    pagination.appendChild(pageNumbers);
    pagination.appendChild(nextButton);
    
    paginationContainer.appendChild(pagination);
    
    // Add pagination after the asset grid
    const assetGrid = document.querySelector('.asset-grid');
    assetGrid.parentElement.insertBefore(paginationContainer, assetGrid.nextSibling);
}

// Initialize the grid with sample assets
function initializeGrid() {
    assetGrid.innerHTML = '';
    sampleAssets.forEach(asset => {
        createAssetCard(asset);
    });
}

// Create an asset card
function createAssetCard(asset, isRecommended = false, parentElement = assetGrid) {
    const card = document.createElement('div');
    card.className = `asset-card ${asset.type}-asset`;
    if (isRecommended) card.classList.add('recommended-card');
    card.setAttribute('data-id', asset.id);
    
    // Create card content
    card.innerHTML = `
        <div class="asset-thumbnail-container">
            <img src="${asset.thumbnail}" 
                 alt="${asset.title}" 
                 class="asset-thumbnail"
                 onerror="this.onerror=null; this.src=''; this.parentElement.classList.add('fallback'); this.parentElement.setAttribute('data-type', '${asset.type.toUpperCase()}')">
            ${isRecommended ? '<span class="recommended-badge"><i class="fas fa-star"></i></span>' : ''}
            <div class="asset-type-badge">
                <i class="fas ${getTypeIcon(asset.type)}"></i>
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
        <div class="asset-info">
            <h3 class="asset-title">${asset.title || 'Untitled Asset'}</h3>
            <div class="asset-tags">
                ${asset.tags.filter(tag => tag !== 'recommended').map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    // Add event listeners for the action buttons
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

    parentElement.appendChild(card);
    return card;
}

function getTypeIcon(type) {
    const iconMap = {
        'image': 'fa-image',
        'video': 'fa-video',
        '3d': 'fa-cube',
        'text': 'fa-file-alt'
    };
    return iconMap[type] || 'fa-file';
}

// Toast notification function
function showToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Add show class after a small delay to trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Update filter assets function to include pagination and loading state
function filterAssets() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeTab = document.querySelector('.tab.active').getAttribute('data-type');
    
    // Add loading state
    assetGrid.classList.add('loading');
    
    const filteredAssets = sampleAssets.filter(asset => {
        const matchesSearch = asset.title.toLowerCase().includes(searchTerm) ||
                            asset.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
                            asset.type.toLowerCase().includes(searchTerm);
        
        const matchesType = activeTab === 'all' || asset.type === activeTab;
        
        return matchesSearch && matchesType;
    });
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedAssets = filteredAssets.slice(startIndex, endIndex);
    
    // Clear and update grid with a slight delay to show loading state
    setTimeout(() => {
        assetGrid.innerHTML = '';
        paginatedAssets.forEach(asset => createAssetCard(asset));
        
        // Remove loading state
        assetGrid.classList.remove('loading');
        
        // Remove existing pagination if any
        const existingPagination = document.querySelector('.pagination-container');
        if (existingPagination) {
            existingPagination.remove();
        }
        
        // Add pagination controls if there are enough items
        if (filteredAssets.length > ITEMS_PER_PAGE) {
            createPaginationControls();
        }
    }, 300);
}

// Modal functions
function openUploadModal() {
    uploadModal.classList.add('show');
}

function closeUploadModal() {
    uploadModal.classList.remove('show');
    uploadForm.reset();
    
    // Disable all fields again
    const formFields = document.querySelector('.form-fields');
    formFields.classList.add('disabled');
    
    const inputs = formFields.querySelectorAll('input, textarea, select');
    inputs.forEach(input => input.disabled = true);
    
    document.querySelector('.upload-submit-btn').disabled = true;
}

// Handle file upload
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Enable form fields and submit button
        const formFields = document.querySelector('.form-fields');
        formFields.classList.remove('disabled');
        
        const inputs = formFields.querySelectorAll('input, textarea, select');
        inputs.forEach(input => input.disabled = false);
        
        document.querySelector('.upload-submit-btn').disabled = false;

        // Auto-populate form fields based on file
        const title = file.name.split('.')[0];
        document.getElementById('title').value = title;
        document.getElementById('description').value = `Uploaded ${file.name}`;
        document.getElementById('tags').value = 'AI generating tags...'; // Placeholder for AI-generated tags
        
        // Set asset type based on file extension
        const extension = file.name.split('.').pop().toLowerCase();
        const typeMap = {
            'jpg': 'image',
            'jpeg': 'image',
            'png': 'image',
            'gif': 'gif',
            'mp4': 'video',
            'txt': 'text',
            'obj': '3d'
        };
        
        const assetType = typeMap[extension] || 'text';
        document.getElementById('assetType').value = assetType;

        // Simulate AI processing (in a real app, this would be an API call)
        setTimeout(() => {
            document.getElementById('tags').value = 'education, learning, digital asset';
            document.getElementById('description').value = 'AI-generated description for ' + file.name;
        }, 1000);
    }
}

// Event Listeners
searchInput.addEventListener('input', filterAssets);

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        // Reset to first page when switching tabs
        currentPage = 1;
        // Filter assets based on new active tab
        filterAssets();
    });
});

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real application, you would handle the file upload here
    alert('Asset uploaded successfully!');
    closeUploadModal();
});

// Drag and drop functionality
const selectFileBtn = document.querySelector('.select-file-btn');

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#2196F3';
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.borderColor = '#ccc';
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#ccc';
    fileInput.files = e.dataTransfer.files;
    handleFileUpload({ target: fileInput });
});

// Click on upload area or select file button
uploadArea.addEventListener('click', () => {
    fileInput.click();
});

selectFileBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent triggering the upload area click
    fileInput.click();
});

// Toggle filter dropdown
filterButton.addEventListener('click', () => {
    filterButton.classList.toggle('active');
    filterDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!filterButton.contains(e.target) && !filterDropdown.contains(e.target)) {
        filterButton.classList.remove('active');
        filterDropdown.classList.remove('show');
    }
});

// Handle filter option selection
filterOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remove active class from all options
        filterOptions.forEach(opt => opt.classList.remove('active'));
        // Add active class to clicked option
        option.classList.add('active');
        // Update button text
        const filterText = filterButton.querySelector('span');
        filterText.textContent = `Sort by ${option.querySelector('span').textContent}`;
        // Close dropdown
        filterButton.classList.remove('active');
        filterDropdown.classList.remove('show');
        // Sort assets based on selected option
        sortAssets(option.getAttribute('data-value'));
    });
});

function sortAssets(sortType) {
    const sortedAssets = [...sampleAssets];
    
    switch(sortType) {
        case 'most-relevant':
            // Implement relevance sorting logic
            break;
        case 'highest-rated':
            // Sort by rating (you would need to add rating property to assets)
            sortedAssets.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            break;
        case 'most-recent':
            // Sort by date (you would need to add date property to assets)
            sortedAssets.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
            break;
        case 'most-used':
            // Sort by usage count (you would need to add usage property to assets)
            sortedAssets.sort((a, b) => (b.usageCount || 0) - (a.usageCount || 0));
            break;
    }
    
    // Refresh the grid with sorted assets
    assetGrid.innerHTML = '';
    sortedAssets.forEach(asset => createAssetCard(asset));
}

// Add click event listener for upload button
uploadButton.addEventListener('click', () => {
    openUploadModal();
});

// Initialize the grid when the page loads
document.addEventListener('DOMContentLoaded', initializeGrid);

// Clear search input
clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.focus();
});

// Handle visual search
visualSearchBtn.addEventListener('click', () => {
    openVisualSearchModal();
});

// Handle audio search
audioSearchBtn.addEventListener('click', () => {
    // TODO: Implement audio search functionality
    console.log('Audio search clicked');
});

// Search input handler
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    // TODO: Implement search functionality
    console.log('Searching for:', searchTerm);
});

// Add event listeners for navigation buttons
backButton.addEventListener('click', () => {
    // In a real app, this would navigate back
    console.log('Navigate back');
});

homeButton.addEventListener('click', () => {
    // In a real app, this would navigate to home
    console.log('Navigate to home');
});

// Visual Search Modal functions
function openVisualSearchModal() {
    visualSearchModal.classList.add('show');
}

function closeVisualSearchModal() {
    visualSearchModal.classList.remove('show');
    imageUrlInput.value = '';
    visualSearchInput.value = '';
}

// Visual search drag and drop
visualSearchArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    visualSearchArea.classList.add('drag-over');
});

visualSearchArea.addEventListener('dragleave', () => {
    visualSearchArea.classList.remove('drag-over');
});

visualSearchArea.addEventListener('drop', (e) => {
    e.preventDefault();
    visualSearchArea.classList.remove('drag-over');
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        handleVisualSearch(file);
    }
});

// Handle file selection for visual search
visualSearchArea.addEventListener('click', () => {
    visualSearchInput.click();
});

visualSearchInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        handleVisualSearch(file);
    }
});

// Handle image URL input
imageUrlInput.addEventListener('paste', (e) => {
    const url = e.clipboardData.getData('text');
    if (url) {
        handleVisualSearchUrl(url);
    }
});

function handleVisualSearch(file) {
    // Here you would implement the actual visual search functionality
    console.log('Processing visual search with file:', file.name);
    // For demo purposes, we'll just close the modal after a delay
    setTimeout(() => {
        closeVisualSearchModal();
        // You would typically show search results here
    }, 1000);
}

function handleVisualSearchUrl(url) {
    // Here you would implement the visual search with URL functionality
    console.log('Processing visual search with URL:', url);
    // For demo purposes, we'll just close the modal after a delay
    setTimeout(() => {
        closeVisualSearchModal();
        // You would typically show search results here
    }, 1000);
}

// Close modal when clicking outside
visualSearchModal.addEventListener('click', (e) => {
    if (e.target === visualSearchModal) {
        closeVisualSearchModal();
    }
}); 