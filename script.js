// Update author objects in postsData to include status
const postsData = [
    {
        id: 1,
        author: {
            name: "Rofia Ghoul",
            title: "Product Manager at TechCorp",
            avatar: "/assets/f1.png",
            status: "online"  // Add status field
        },
        content: "Just launched our new product feature! 🚀 After months of hard work and collaboration with our amazing team, we're excited to share this with our users. The feedback so far has been incredibly positive!",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        likes: 124,
        comments: [
            { 
                id: 1, 
                author: "Guermit Hossine", 
                text: "Congrats on the launch! The UI looks amazing.", 
                avatar: "assets/m2.png", 
                status: "busy",  // Add status field
                liked: false 
            },
            { id: 2, author: "Othmane Friha", text: "Great job team! Can't wait to try it out.", avatar: "assets/m1.png", liked: false },
            { id: 3, author: "Boudjadja Rima", text: "This is exactly what our users needed. Well done!", avatar: "assets/f1.png", liked: false }
        ],
        timestamp: "2 hours ago",
        liked: false
    },
    {
        id: 2,
        author: {
            name: "Hemili Mohamed",
            title: "Senior Developer at DevSolutions",
            avatar: "assets/m1.png",
            status: "busy"  // Add status field
        },
        content: "Sharing some insights from my recent experience with React 18 and the new concurrent features. The performance improvements are significant, especially for large-scale applications. Here's a quick summary of the key benefits:",
        image: null,
        likes: 89,
        comments: [
            { id: 1, author: "Benhadid Adnane", text: "Thanks for sharing! The automatic batching is a game changer.", avatar: "assets/m1.png", liked: false },
            { id: 2, author: "Didouche Sakina Radia", text: "Have you tested it with SSR? Curious about the improvements there.", avatar: "assets/f2.png", liked: false }
        ],
        timestamp: "5 hours ago",
        liked: true
    },
    {
        id: 3,
        author: {
            name: "Boudjadja Rima",
            title: "UX Designer at CreativeMinds",
            avatar: "assets/f1.png",
            status: "away"  // Add status field
        },
        content: "Design tip of the day: Always consider accessibility from the start. Here are some quick checks you can do to ensure your designs are inclusive:",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        likes: 156,
        comments: [
            { id: 1, author: "Rofia Ghoul", text: "Great reminders! Color contrast is so important.", avatar: "assets/f1.png", liked: false },
            { id: 2, author: "Mahseur Mohamed", text: "Do you have any favorite tools for accessibility testing?", avatar: "assets/m1.png", liked: false }
        ],
        timestamp: "1 day ago",
        liked: false
    },
    {
        id: 4,
        author: {
            name: "Othmane Friha",
            title: "CTO at StartupHub",
            avatar: "assets/m1.png",
            status: "offline"  // Add status field
        },
        content: "Just wrapped up an amazing tech conference! Met so many inspiring people and learned about the latest trends in AI and machine learning. Here are my key takeaways:",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        likes: 203,
        comments: [
            { id: 1, author: "Boudjadja Rima", text: "Wish I could have been there! Which session was your favorite?", avatar: "assets/f1.png", liked: false },
            { id: 2, author: "Hemili Mohamed", text: "The AI ethics panel was particularly thought-provoking.", avatar: "assets/m1.png", liked: false }
        ],
        timestamp: "2 days ago",
        liked: false
    },
    {
        id: 5,
        author: {
            name: "Didouche Sakina Radia",
            title: "Data Scientist at AnalyticsPro",
            avatar: "assets/f2.png",
            status: "meeting"  // Add status field
        },
        content: "Excited to share that our research paper on predictive modeling techniques has been published! It's been a long journey but definitely worth it. Special thanks to my co-authors and advisors.",
        image: null,
        likes: 178,
        comments: [
            { id: 1, author: "Benhadid Adnane", text: "Congratulations! Looking forward to reading it.", avatar: "assets/m1.png", liked: false },
            { id: 2, author: "Othmane Friha", text: "Amazing achievement! Where can we access it?", avatar: "assets/m1.png", liked: false }
        ],
        timestamp: "3 days ago",
        liked: false
    },
    {
        id: 6,
        author: {
            name: "Boumela Nora",
            title: "Frontend Developer at WebTech",
            avatar: "assets/f1.png",
            status: "meeting"
        },
        content: "Just finished a big UI refactor! The new design system is live and the feedback has been great. Consistency and accessibility were our top priorities. 🚀",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        likes: 98,
        comments: [
            { id: 1, author: "Hemili Mohamed", text: "Congrats Nora! The new look is super clean.", avatar: "assets/m1.png", status: "busy", liked: false },
            { id: 2, author: "Rofia Ghoul", text: "Love the accessibility improvements!", avatar: "assets/f1.png", status: "online", liked: false }
        ],
        timestamp: "6 hours ago",
        liked: false
    },
    {
        id: 7,
        author: {
            name: "Rofia Ghoul",
            title: "Product Manager at TechCorp",
            avatar: "assets/f1.png",
            status: "online"
        },
        content: "We just wrapped up sprint planning. Excited for the new features coming soon. Shoutout to the dev team for their hard work and creativity! 💡",
        image: null,
        likes: 112,
        comments: [
            { id: 1, author: "Boumela Nora", text: "Looking forward to building these features!", avatar: "assets/f1.png", status: "meeting", liked: false },
            { id: 2, author: "Hemili Mohamed", text: "Great planning session, team!", avatar: "assets/m1.png", status: "busy", liked: false }
        ],
        timestamp: "9 hours ago",
        liked: false
    },
    {
        id: 8,
        author: {
            name: "Hemili Mohamed",
            title: "Senior Developer at DevSolutions",
            avatar: "assets/m1.png",
            status: "busy"
        },
        content: "Started experimenting with new testing frameworks for our React apps. Early results are promising! Anyone else using something other than Jest?",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
        likes: 76,
        comments: [
            { id: 1, author: "Boumela Nora", text: "I've tried Cypress for end-to-end tests, works great!", avatar: "assets/f1.png", status: "meeting", liked: false },
            { id: 2, author: "Rofia Ghoul", text: "Curious to hear your thoughts after a few weeks!", avatar: "assets/f1.png", status: "online", liked: false }
        ],
        timestamp: "12 hours ago",
        liked: false
    }
];

// Update peopleData to include status
const peopleData = [
    {
        name: "Rofia Ghoul",
        avatar: "assets/f1.png",
        title: "Product Manager at TechCorp",
        status: "online" // Add status field
    },
    {
        name: "Hemili Mohamed",
        avatar: "assets/m1.png",
        title: "Senior Developer at DevSolutions",
        status: "busy"
    },
    {
        name: "Boumela Nora",
        avatar: "assets/f1.png",
        title: "Frontend Developer at WebTech",
        status: "meeting"
    }
];

// Add getStatusIndicator helper function
function getStatusIndicator(status) {
    const statusClasses = {
        online: 'status-online',
        busy: 'status-busy',
        away: 'status-away',
        offline: 'status-offline',
        meeting: 'status-meeting'
    };
    
    return `<div class="status-indicator ${statusClasses[status] || 'status-offline'}"></div>`;
}

// DOM elements
const postsContainer = document.getElementById('postsContainer');
const loadingSpinner = document.getElementById('loadingSpinner');
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const postModal = document.getElementById('postModal');
const postDetailModal = document.getElementById('postDetailModal');
const postDetailContent = document.getElementById('postDetailContent');
const postContent = document.getElementById('postContent');
const profileSection = document.getElementById('profile');

// State
let currentPage = 1;
let isLoading = false;
let filteredPosts = [...postsData];
let darkMode = localStorage.getItem('darkMode') === 'true';

// Shuffle helper
function shuffleArray(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// State for shuffled posts
let shuffledPosts = shuffleArray(filteredPosts);
let postPointer = 0;
const postsPerPage = 2;

// Initialize the app
function init() {
    // Set initial theme
    if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
    }
    
    // Load initial posts
    loadPosts();
    
    // Set up infinite scroll
    window.addEventListener('scroll', handleScroll);
    
    // Set up event listeners
    themeToggle.addEventListener('click', toggleTheme);
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    // Check if we're on the profile page
    if (window.location.hash === '#profile') {
        showProfilePage();
    }
    
    window.addEventListener('hashchange', () => {
        if (window.location.hash === '#profile') {
            showProfilePage();
        } else {
            hideProfilePage();
        }
    });

    renderPeopleYouMayKnow();
    updateLeftSidebarProfile();
    updateNotificationBadges();
}

// Show profile page
function showProfilePage() {
    profileSection.classList.remove('hidden');
    document.querySelector('main').classList.add('hidden');
}

// Hide profile page
function hideProfilePage() {
    profileSection.classList.add('hidden');
    document.querySelector('main').classList.remove('hidden');
}

// Load posts
function loadPosts() {
    isLoading = true;
    loadingSpinner.classList.remove('hidden');

    setTimeout(() => {
        // If we've reached the end, reshuffle and start over
        if (postPointer >= shuffledPosts.length) {
            shuffledPosts = shuffleArray(filteredPosts);
            postPointer = 0;
        }
        const postsToAdd = shuffledPosts.slice(postPointer, postPointer + postsPerPage);

        postsToAdd.forEach(post => {
            const postElement = createPostElement(post);
            postsContainer.appendChild(postElement);
        });
        postPointer += postsPerPage;

        isLoading = false;
        loadingSpinner.classList.add('hidden');
    }, 800);
}

// Handle scroll for infinite loading
function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
    if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
        loadPosts();
    }
}

// Update the createHoverCard function
function createHoverCard(user, isOwnProfile = false) {
        const getStatusText = (status) => {
        const statusMap = {
            'online': 'Online',
            'busy': 'Busy',
            'away': 'Away',
            'meeting': 'In a meeting',
            'offline': 'Offline'
        };
        return statusMap[status] || 'Offline';
    
    // Check if this is your profile
    isOwnProfile = user.name === "Tarek Fersous" || isOwnProfile;

    const currentUserInfo = {
        stats: "4 years experience",
        education: "Computer Science, MIT",
        connections: "423",
        company: "Tech Solutions Inc."
    };
};

    // Check if this is your profile
    isOwnProfile = user.name === "Tarek Fersous" || isOwnProfile;

    const currentUserInfo = {
        stats: "4 years experience",
        education: "Computer Science, MIT",
        connections: "423",
        company: "Tech Solutions Inc."
    };

    return `
    <div class="hover-card">
        <div class="hover-card-content bg-white dark:bg-gray-800 rounded-lg p-4">
            <div class="flex items-start space-x-4">
                <div class="relative">
                    <img src="${user.avatar}" 
                         alt="${user.name}" 
                         class="w-16 h-16 rounded-full">
                                    </div>
                <div class="flex-1">
                    <h4 class="font-medium text-gray-900 dark:text-white">${user.name}</h4>
                    <p class="text-sm text-gray-500 dark:text-gray-400">${user.title}</p>
                    <p class="text-sm mt-2 flex items-center">
                        <span class="status-inline status-${user.status || 'offline'}"></span>
                        <span class="text-gray-500 dark:text-gray-400">${getStatusText(user.status)}</span>
                    </p>
                </div>
            </div>
            ${isOwnProfile ? `
                <div class="mt-4">
                    <button class="w-full px-4 py-2 rounded-full border border-gray-600 text-gray-600 hover:bg-gray-50 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 font-medium text-sm transition-colors">
                        <i class="fas fa-pen mr-2"></i>Edit Profile
                    </button>
                </div>
                <div class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        <i class="fas fa-briefcase mr-2"></i>${currentUserInfo.stats}
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        <i class="fas fa-university mr-2"></i>${currentUserInfo.education}
                    </p>
                </div>
            ` : `
                <div class="mt-4 flex space-x-2">
                    <button class="btn-connect flex-1 px-4 py-2 rounded-full border border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900 font-medium text-sm transition-colors">
                        <i class="fas fa-user-plus mr-2"></i>Connect
                    </button>
                    <button class="btn-message flex-1 px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900 font-medium text-sm transition-colors">
                        <i class="fas fa-comment mr-2"></i>Message
                    </button>
                </div>
            `}
        </div>
    </div>`;
}

// Add this function to update the left sidebar profile
function updateLeftSidebarProfile() {
    const profileSection = document.querySelector('.left-sidebar-profile');
    if (profileSection) {
        profileSection.innerHTML = `
            <div class="relative">
                <a href="#profile" class="hover-trigger">
                    <img src="assets/pfp.jpg" alt="Tarek Fersous" class="w-12 h-12 rounded-full">
                </a>
                ${createHoverCard({
                    name: "Tarek Fersous",
                    avatar: "assets/pfp.jpg",
                    title: "Software Engineer at Tech Solutions Inc."
                }, true)}
            </div>
        `;
    }
}

// Create post element
function createPostElement(post) {
    const authorSection = `
    <div class="relative">
        <a href="#" class="hover-trigger">
            <img src="${post.author.avatar}" alt="${post.author.name}" class="w-10 h-10 rounded-full">
            ${post.author.status ? getStatusIndicator(post.author.status) : ''}
        </a>
        ${createHoverCard(post.author)}
    </div>
`;
    // In the author section, wrap the name in a hover trigger
    const postElement = document.createElement('div');
    postElement.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-6 fade-in';
    postElement.setAttribute('data-post-id', post.id);
    postElement.innerHTML = `
        <div class="p-4">
            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center space-x-3">
                    <div class="relative">
                        <a href="#" class="hover-trigger">
                            <img src="${post.author.avatar}" alt="${
      post.author.name
    }" class="w-10 h-10 rounded-full">
                        </a>
                        ${createHoverCard(post.author)}
                    </div>
                    <div>
                        <div class="relative">
                            <a href="#" class="hover-trigger font-medium dark:text-white">${
                              post.author.name
                            }</a>
                            ${createHoverCard(post.author)}
                        </div>
                        <p class="text-sm text-gray-500 dark:text-gray-400">${
                          post.author.title
                        }</p>
                    </div>
                </div>
                <button class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <i class="fas fa-ellipsis-h"></i>
                </button>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-3">${post.content}</p>
            ${
              post.image
                ? `<img src="${post.image}" alt="Post image" class="w-full h-auto rounded-lg mb-3 cursor-pointer" onclick="viewPostDetail(${post.id})">`
                : ""
            }
            <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                <div class="flex items-center space-x-2">
                    <div class="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs">
                        <i class="fas fa-thumbs-up"></i>
                    </div>
                    <span class="like-count-${post.id}">${post.likes}</span>
                </div>
                <div>
                    <span class="comment-count">${post.comments.length} ${post.comments.length === 1 ? 'comment' : 'comments'}</span>
                </div>
            </div>
            <div class="border-t border-b border-gray-200 dark:border-gray-700 py-2 my-2 flex justify-between">
                <button onclick="toggleLike(${
                  post.id
                })" class="flex items-center justify-center space-x-2 w-full py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 ${
      post.liked ? "text-primary-600 dark:text-primary-400" : ""
    }">
                    <i class="${post.liked ? "fas" : "far"} fa-thumbs-up"></i>
                    <span>Like</span>
                </button>
                <button onclick="focusComment(${
                  post.id
                })" class="flex items-center justify-center space-x-2 w-full py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
                    <i class="far fa-comment"></i>
                    <span>Comment</span>
                </button>
                <button class="flex items-center justify-center space-x-2 w-full py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
                    <i class="fas fa-share"></i>
                    <span>Share</span>
                </button>
            </div>
                        <div class="mt-3">
                            <div class="comments-container">
                                ${post.comments.slice(0, 2).map(comment => createCommentElement(comment, post.id)).join('')}
                            </div>
                            <div class="flex items-center justify-between mb-3">
                                ${post.comments.length > 2 ? `
                                    <button onclick="viewPostDetail(${post.id})" 
                                            class="view-all-comments text-sm text-primary-600 dark:text-primary-400 hover:underline">
                                        View all ${post.comments.length} comments
                                    </button>
                                ` : ''}
                                <span class="comment-count text-sm text-gray-500 dark:text-gray-400">
                                    ${post.comments.length} ${post.comments.length === 1 ? 'comment' : 'comments'}
                                </span>
                            </div>
                            ${createCommentInput(post.id)}
                        </div>
            <div class="text-xs text-gray-500 dark:text-gray-400 mt-2">${post.timestamp}</div>
        </div>
    `;
    return postElement;
}

// Enhanced toggle like function for posts
function toggleLike(postId) {
    const post = postsData.find(p => p.id === postId);
    if (post) {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
        
        // Update the UI in both feed and detail view
        const allPostInstances = document.querySelectorAll(`[onclick="toggleLike(${postId})"]`);
        allPostInstances.forEach(button => {
            if (post.liked) {
                button.classList.add('text-primary-600', 'dark:text-primary-400');
                button.querySelector('i').classList.remove('far');
                button.querySelector('i').classList.add('fas');
            } else {
                button.classList.remove('text-primary-600', 'dark:text-primary-400');
                button.querySelector('i').classList.remove('fas');
                button.querySelector('i').classList.add('far');
            }
            
            // Add pulse animation
            const icon = button.querySelector('i');
            icon.classList.add('animate-pulse');
            setTimeout(() => {
                icon.classList.remove('animate-pulse');
            }, 500);
        });
        
        // Update all like count instances
        const likeCounts = document.querySelectorAll(`.like-count-${postId}`);
        likeCounts.forEach(count => {
            count.textContent = post.likes;
        });

        // Update detail view like count if open
        const detailLikeCount = document.querySelector('#postDetailModal .like-count');
        if (detailLikeCount) {
            detailLikeCount.textContent = `${post.likes} people like this`;
        }
    }
}

// Focus comment input
function focusComment(postId) {
    const commentInput = document.getElementById(`commentInput-${postId}`);
    if (commentInput) {
        commentInput.focus();
    }
}

// Update the viewPostDetail function
function viewPostDetail(postId) {
    const post = postsData.find(p => p.id === postId);
    if (post) {
        postDetailContent.innerHTML = `
            <div class="mb-6">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                        <div class="relative">
                            <a href="#" class="hover-trigger">
                                <img src="${post.author.avatar}" alt="${post.author.name}" class="w-12 h-12 rounded-full">
                            </a>
                            ${createHoverCard(post.author)}
                        </div>
                        <div>
                            <div class="relative">
                                <a href="#" class="hover-trigger font-medium dark:text-white">${post.author.name}</a>
                                ${createHoverCard(post.author)}
                            </div>
                            <p class="text-sm text-gray-500 dark:text-gray-400">${post.author.title}</p>
                        </div>
                    </div>
                    <button class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
                <p class="text-gray-700 dark:text-gray-300 mb-4">${post.content}</p>
                ${post.image ? `<img src="${post.image}" alt="Post image" class="w-full h-auto rounded-lg mb-4">` : ''}
                <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div class="flex items-center space-x-2">
                        <div class="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs">
                            <i class="fas fa-thumbs-up"></i>
                        </div>
                        <span class="like-count">${post.likes} people like this</span>
                    </div>
                    <div>
                        <span>${post.comments.length} comments</span>
                    </div>
                </div>
                <div class="border-t border-b border-gray-200 dark:border-gray-700 py-3 my-3 flex justify-between">
                    <button onclick="toggleLike(${post.id})" 
                            class="flex items-center justify-center space-x-2 w-full py-2 rounded hover:bg-gray-100 
                                   dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 
                                   ${post.liked ? 'text-primary-600 dark:text-primary-400' : ''}">
                        <i class="${post.liked ? 'fas' : 'far'} fa-thumbs-up"></i>
                        <span>Like</span>
                    </button>
                    <button class="flex items-center justify-center space-x-2 w-full py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
                        <i class="far fa-comment"></i>
                        <span>Comment</span>
                    </button>
                    <button class="flex items-center justify-center space-x-2 w-full py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
                        <i class="fas fa-share"></i>
                        <span>Share</span>
                    </button>
                </div>
            </div>
            <div class="mb-6">
                <h3 class="font-medium dark:text-white mb-4">Comments (${post.comments.length})</h3>
                <div class="space-y-4" id="commentsContainer">
                    ${post.comments.map(comment => `
                        <div class="flex items-start space-x-3">
                            <div class="relative">
                                <a href="#" class="hover-trigger">
                                    <img src="${comment.avatar}" alt="${comment.author}" class="w-10 h-10 rounded-full">
                                </a>
                                ${createHoverCard({ 
                                    name: comment.author, 
                                    avatar: comment.avatar,
                                    title: "Network Member"
                                })}
                            </div>
                            <div class="flex-1">
                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                                    <div class="relative">
                                        <a href="#" class="hover-trigger text-sm font-medium dark:text-white">${comment.author}</a>
                                        ${createHoverCard({ 
                                            name: comment.author, 
                                            avatar: comment.avatar,
                                            title: "Network Member"
                                        })}
                                    </div>
                                    <p class="text-sm text-gray-700 dark:text-gray-300">${comment.text}</p>
                                </div>
                                <div class="flex items-center space-x-4 mt-1 ml-3 text-xs text-gray-500 dark:text-gray-400">
                                    <button onclick="toggleCommentLike(${comment.id})" 
                                            data-comment-id="${comment.id}" 
                                            class="hover:underline ${comment.liked ? 'text-primary-600 dark:text-primary-400 font-medium' : ''}">
                                        ${comment.liked ? 'Liked' : 'Like'}
                                    </button>
                                    <button onclick="replyToComment(${comment.id}, '${comment.author}', ${post.id})" class="hover:underline">Reply</button>
                                    <span>2h</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="sticky bottom-0 bg-white dark:bg-gray-800 pt-4 pb-2">
                <div class="comment-input-wrapper">
                    <img src="assets/pfp.jpg" alt="Profile" class="w-10 h-10 rounded-full">
                    <div class="flex-1 relative">
                        <textarea 
                            class="detail-comment-input w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
                            placeholder="Write a comment..."
                            id="detailCommentInput-${postId}"
                            rows="1"
                            oninput="handleCommentInput(this)"
                        ></textarea>
                        <div class="comment-actions">
                            <button class="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                                <i class="far fa-smile"></i>
                            </button>
                            <button class="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                                <i class="fas fa-paperclip"></i>
                            </button>
                            <button 
                                class="send-button text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                                onclick="submitDetailComment(${postId})"
                            >
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Initialize hover cards after content is added
        initializeHoverCards();
        openPostDetailModal();
    }
}

// Add this function to initialize hover cards
function initializeHoverCards() {
    const hoverTriggers = document.querySelectorAll('.hover-trigger');
    hoverTriggers.forEach(trigger => {
        const card = trigger.nextElementSibling;
        if (card && card.classList.contains('hover-card')) {
            trigger.addEventListener('mouseenter', () => {
                positionHoverCard(card, trigger);
            });
        }
    });
}

// Toggle theme
function toggleTheme() {
    darkMode = !darkMode;
    if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
    }
}

// Handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filteredPosts = postsData.filter(post => 
            post.content.toLowerCase().includes(searchTerm) || 
            post.author.name.toLowerCase().includes(searchTerm)
        );
    } else {
        filteredPosts = [...postsData];
    }
    postsContainer.innerHTML = '';
    // Reset shuffle state
    shuffledPosts = shuffleArray(filteredPosts);
    postPointer = 0;
    loadPosts();
}

// Open post modal
function openPostModal() {
    postModal.classList.remove('hidden');
}

// Close post modal
function closePostModal() {
    postModal.classList.add('hidden');
    postContent.value = '';
}

// Open post detail modal
function openPostDetailModal() {
    postDetailModal.classList.remove('hidden');
}

// Close post detail modal
function closePostDetailModal() {
    postDetailModal.classList.add('hidden');
}

// Create a new post
function createPost() {
    const content = postContent.value.trim();
    if (content) {
        const newPost = {
            id: postsData.length + 1,
            author: {
                name: "Tarek Fersous",
                title: "Software Engineer at Tech Solutions Inc.",
                avatar: "assets/pfp.jpg"
            },
            content: content,
            image: null,
            likes: 0,
            comments: [],
            timestamp: "Just now",
            liked: false
        };
        
        postsData.unshift(newPost);
        filteredPosts.unshift(newPost);

        postsContainer.innerHTML = '';
        // Reset shuffle state
        shuffledPosts = shuffleArray(filteredPosts);
        postPointer = 0;
        loadPosts();

        closePostModal();
    }
}

// Function to toggle follow button
function toggleFollow(button) {
    const icon = button.querySelector('i');
    
    // Add transition effect
    button.style.transition = 'all 0.3s ease';
    
    if (icon.classList.contains('fa-plus')) {
        // Change to check icon with animation
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-check');
        button.classList.add('text-green-600');
        
        // Add pulse animation
        icon.classList.add('animate-pulse');
        setTimeout(() => {
            icon.classList.remove('animate-pulse');
        }, 500);
    } else {
        // Change back to plus icon
        icon.classList.remove('fa-check');
        icon.classList.add('fa-plus');
        button.classList.remove('text-green-600');
    }
}

// Function to toggle like on comments
function toggleCommentLike(commentId) {
    // Find the comment in all posts
    let targetComment = null;
    
    // Search through all posts to find the comment
    for (let post of postsData) {
        const comment = post.comments.find(c => c.id === commentId);
        if (comment) {
            targetComment = comment;
            break;
        }
    }

    if (targetComment) {
        // Toggle liked status
        targetComment.liked = !targetComment.liked;
        
        // Update all instances of this comment's like button (both in feed and detail view)
        const likeButtons = document.querySelectorAll(`[data-comment-id="${commentId}"]`);
        likeButtons.forEach(likeButton => {
            if (targetComment.liked) {
                likeButton.classList.add('text-primary-600', 'dark:text-primary-400', 'font-medium');
                likeButton.textContent = 'Liked';
            } else {
                likeButton.classList.remove('text-primary-600', 'dark:text-primary-400', 'font-medium');
                likeButton.textContent = 'Like';
            }
            
            // Add pulse animation
            likeButton.classList.add('animate-pulse');
            setTimeout(() => {
                likeButton.classList.remove('animate-pulse');
            }, 500);
        });
    }
}

// Add this new function after toggleCommentLike:
function replyToComment(commentId, authorName, postId) {  // Add postId parameter
    // Try to get detail view input first, then feed view input
    const detailInput = document.getElementById(`detailCommentInput-${postId}`);
    const feedInput = document.getElementById(`commentInput-${postId}`);
    
    // Use the appropriate input based on which view is active
    const input = document.getElementById('postDetailModal').classList.contains('hidden') 
        ? feedInput 
        : detailInput;

    if (input) {
        // Set the @ mention and focus the input
        input.value = `@${authorName} `;
        input.focus();
        
        // Place cursor at the end of the input
        const len = input.value.length;
        input.setSelectionRange(len, len);
        
        // Trigger input handler to show send button and resize
        handleCommentInput(input);
        
        // Scroll the input into view with smooth behavior
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Back to Top functionality
const backToTopButton = document.getElementById('backToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Show button after scrolling 300px
        backToTopButton.classList.remove('translate-y-20', 'opacity-0');
        backToTopButton.classList.add('translate-y-0', 'opacity-100');
    } else {
        backToTopButton.classList.remove('translate-y-0', 'opacity-100');
        backToTopButton.classList.add('translate-y-20', 'opacity-0');
    }
});

// Smooth scroll to top
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Theme Toggle Functionality
function initializeTheme() {
    // Check for system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    
    // Set initial theme based on stored preference or system preference
    if (storedTheme) {
        document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
        document.documentElement.classList.toggle('dark', prefersDark);
    }
    
    // Update button icons
    updateThemeButton();
}

function updateThemeButton() {
    const isDark = document.documentElement.classList.contains('dark');
    const moonIcon = document.querySelector('#themeToggle .fa-moon');
    const sunIcon = document.querySelector('#themeToggle .fa-sun');
    
    moonIcon.classList.toggle('hidden', isDark);
    sunIcon.classList.toggle('hidden', !isDark);
}

function toggleTheme() {
    // Toggle dark class
    document.documentElement.classList.toggle('dark');
    
    // Store preference
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update button icons
    updateThemeButton();
}

// Add event listeners
document.addEventListener('DOMContentLoaded', initializeTheme);
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        document.documentElement.classList.toggle('dark', e.matches);
        updateThemeButton();
    }
});

// Add this to your existing JavaScript
function positionHoverCard(card, trigger) {
    const triggerRect = trigger.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const viewport = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    
    // Check if card would go off-screen to the right
    if (triggerRect.left + cardRect.width > viewport.width) {
        card.style.left = 'auto';
        card.style.right = '0';
    } else {
        card.style.left = '0';
        card.style.right = 'auto';
    }
    
    // Check if card would go off-screen at the bottom
    if (triggerRect.bottom + cardRect.height > viewport.height) {
        card.style.bottom = '100%';
        card.style.top = 'auto';
    } else {
        card.style.top = '100%';
        card.style.bottom = 'auto';
    }
}

// Initialize hover cards
document.addEventListener('DOMContentLoaded', () => {
    const hoverTriggers = document.querySelectorAll('.hover-trigger');
    
    hoverTriggers.forEach(trigger => {
        const card = trigger.nextElementSibling;
        if (card && card.classList.contains('hover-card')) {
            trigger.addEventListener('mouseenter', () => {
                positionHoverCard(card, trigger);
            });
        }
    });
});

// Update renderPeopleYouMayKnow function to include status indicators
function renderPeopleYouMayKnow() {
    const container = document.getElementById('peopleYouMayKnow');
    container.innerHTML = peopleData.map(person => `
        <div class="flex items-center space-x-3">
            <div class="relative">
                <a href="#" class="hover-trigger">
                    <img src="${person.avatar}" alt="${person.name}" class="w-10 h-10 rounded-full">
                    ${getStatusIndicator(person.status)}
                </a>
                <div class="hover-card">
                    <div class="hover-card-content bg-white dark:bg-gray-800 rounded-lg p-4">
                        <div class="flex items-start space-x-4">
                            <img src="${person.avatar}" alt="${person.name}" class="w-16 h-16 rounded-full">
                            <div class="flex-1">
                                <h4 class="font-medium text-gray-900 dark:text-white">${person.name}</h4>
                                <p class="text-sm text-gray-500 dark:text-gray-400">${person.title}</p>
                                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    <span class="font-medium">250+</span> connections
                                </p>
                            </div>
                        </div>
                        <div class="mt-4 flex space-x-2">
                            <button class="btn-connect flex-1 px-4 py-2 rounded-full border border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900 font-medium text-sm">
                                <i class="fas fa-user-plus mr-2"></i>Connect
                            </button>
                            <button class="btn-message flex-1 px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900 font-medium text-sm">
                                <i class="fas fa-comment mr-2"></i>Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1">
                <div class="relative">
                    <a href="#" class="hover-trigger text-sm font-medium dark:text-white">${person.name}</a>
                    <div class="hover-card">
                        <div class="hover-card-content bg-white dark:bg-gray-800 rounded-lg p-4">
                            <!-- Same content as above hover card -->
                            <div class="flex items-start space-x-4">
                                <img src="${person.avatar}" alt="${person.name}" class="w-16 h-16 rounded-full">
                                <div class="flex-1">
                                    <h4 class="font-medium text-gray-900 dark:text-white">${person.name}</h4>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">${person.title}</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        <span class="font-medium">250+</span> connections
                                    </p>
                                </div>
                            </div>
                            <div class="mt-4 flex space-x-2">
                                <button class="btn-connect flex-1 px-4 py-2 rounded-full border border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900 font-medium text-sm">
                                    <i class="fas fa-user-plus mr-2"></i>Connect
                                </button>
                                <button class="btn-message flex-1 px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900 font-medium text-sm">
                                    <i class="fas fa-comment mr-2"></i>Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-400">${person.title}</p>
            </div>
            <button class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300" onclick="toggleFollow(this)">
                <i class="fas fa-plus"></i>
            </button>
        </div>
    `).join('');
}

// Add this to your initialization code
document.addEventListener('DOMContentLoaded', () => {
    renderPeopleYouMayKnow();
    // ...other initialization code
});

// Add this to your existing JavaScript
function updateNotificationBadges() {
    const badges = {
        network: { count: 12, type: 'new' },
        messages: { count: 5, type: 'normal' },
        notifications: { count: 3, type: 'urgent' }
    };

    // Update badge classes based on count
    Object.entries(badges).forEach(([type, data]) => {
        const badge = document.querySelector(`.notification-badge[data-type="${type}"]`);
        if (badge) {
            badge.textContent = data.count > 99 ? '99+' : data.count;
            badge.className = `notification-badge ${data.type} ${data.count > 50 ? 'high-count' : ''}`;
        }
    });
}

// Add this to your initialization
document.addEventListener('DOMContentLoaded', () => {
    updateNotificationBadges();
    // ... other initialization code
});

// Simulate new notifications
function simulateNewNotification(type) {
    const badge = document.querySelector(`.notification-badge[data-type="${type}"]`);
    if (badge) {
        const currentCount = parseInt(badge.textContent);
        badge.textContent = currentCount + 1;
        badge.classList.add('animate-pop');
        setTimeout(() => badge.classList.remove('animate-pop'), 300);
    }
}

// Update the comment input section in createPostElement
function createCommentInput(postId) {
    return `
        <div class="comment-input-wrapper">
            <img src="assets/pfp.jpg" alt="Profile" class="w-8 h-8 rounded-full flex-shrink-0">
            <div class="flex-1 relative">
                <textarea 
                    class="comment-input w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
                    placeholder="Write a comment..."
                    id="commentInput-${postId}"
                    rows="1"
                    oninput="handleCommentInput(this)"
                ></textarea>
                <div class="comment-actions">
                    <button class="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                        <i class="far fa-smile"></i>
                    </button>
                    <button class="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                        <i class="fas fa-paperclip"></i>
                    </button>
                    <button 
                        class="send-button text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                        onclick="submitComment(${postId})"
                    >
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Auto-resize textarea
function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    
    // Show/hide send button based on content
    const sendButton = textarea.parentElement.querySelector('.send-button');
    if (textarea.value.trim()) {
        sendButton.classList.add('visible');
    } else {
        sendButton.classList.remove('visible');
    }
}

// Submit comment
function submitComment(postId) {
    const input = document.getElementById(`commentInput-${postId}`);
    const content = input.value.trim();
    
    if (content) {
        const newComment = {
            id: Date.now(),
            author: "Tarek Fersous",
            avatar: "assets/pfp.jpg",
            text: formatComment(content),
            liked: false,
            timestamp: "Just now"
        };
        
        // Add comment to post data
        const post = postsData.find(p => p.id === postId);
        if (post) {
            post.comments.unshift(newComment); // Add to beginning of array
            
            // Update UI in feed view
            const postElement = document.querySelector(`[data-post-id="${postId}"]`);
            if (postElement) {
                // Get comments container
                const commentsContainer = postElement.querySelector('.comments-container');
                if (commentsContainer) {
                    // Remove the last comment if there are already 2 visible
                    const visibleComments = commentsContainer.children;
                    if (visibleComments.length >= 2) {
                        visibleComments[visibleComments.length - 1].remove();
                    }
                    
                    // Add new comment at the top with animation
                    const commentElement = createCommentElement(newComment, postId);
                    commentsContainer.insertAdjacentHTML('afterbegin', commentElement);
                    
                    // Add animation class to new comment
                    const newCommentEl = commentsContainer.firstElementChild;
                    newCommentEl.classList.add('comment-new');
                }
                
                // Update comment count and "View all comments" button
                const commentCount = postElement.querySelector('.comment-count');
                const viewAllButton = postElement.querySelector('.view-all-comments');
                if (commentCount) {
                    commentCount.textContent = `${post.comments.length} comments`;
                }
                if (viewAllButton && post.comments.length > 2) {
                    viewAllButton.textContent = `View all ${post.comments.length} comments`;
                    viewAllButton.classList.remove('hidden');
                }
            }
            
            // Clear input and reset
            input.value = '';
            input.style.height = 'auto';
            const actions = input.parentElement.querySelector('.comment-actions');
            actions.classList.remove('visible');
        }
    }
}

// Format comment content with mentions
function formatComment(text) {
    return text.replace(/@(\w+)/g, '<span class="mention hover-trigger">@$1</span>');
}

// Create comment element
function createCommentElement(comment, postId) {
    return `
        <div class="flex items-start space-x-3 mb-3 animate-fadeIn">
            <div class="relative">
                <a href="#" class="hover-trigger">
                    <img src="${comment.avatar}" alt="${comment.author}" class="w-8 h-8 rounded-full mt-1">
                </a>
                ${createHoverCard({
                    name: comment.author,
                    avatar: comment.avatar,
                    title: "Network Member"
                })}
            </div>
            <div class="flex-1">
                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <div class="relative">
                        <a href="#" class="hover-trigger text-sm font-medium dark:text-white">${comment.author}</a>
                        ${createHoverCard({
                            name: comment.author,
                            avatar: comment.avatar,
                            title: "Network Member"
                        })}
                    </div>
                    <p class="text-sm text-gray-700 dark:text-gray-300">${comment.text}</p>
                </div>
                <div class="flex items-center space-x-4 mt-1 ml-3 text-xs text-gray-500 dark:text-gray-400">
                    <button onclick="toggleCommentLike(${comment.id})" data-comment-id="${comment.id}" class="hover:underline">Like</button>
                    <button onclick="replyToComment(${comment.id}, '${comment.author}', ${postId})" class="hover:underline">Reply</button>
                    <span>${comment.timestamp}</span>
                </div>
            </div>
        </div>
    `;
}

// Add event listener for Enter key
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        const input = e.target;
        if (input.classList.contains('comment-input')) {
            e.preventDefault();
            const postId = input.id.split('-')[1];
            submitComment(postId);
        }
    }
});

// Add new function for detail view comment submission
function submitDetailComment(postId) {
    const input = document.getElementById(`detailCommentInput-${postId}`);
    const content = input.value.trim();
    
    if (content) {
        const newComment = {
            id: Date.now(),
            author: "Tarek Fersous",
            avatar: "assets/pfp.jpg",
            text: formatComment(content),
            liked: false,
            timestamp: "Just now"
        };
        
        // Add comment to post data
        const post = postsData.find(p => p.id === postId);
        if (post) {
            post.comments.unshift(newComment); // Add to beginning of array
            
            // Update UI in detail view
            const detailCommentsContainer = document.querySelector('#commentsContainer');
            if (detailCommentsContainer) {
                const commentElement = createCommentElement(newComment, postId);
                detailCommentsContainer.insertAdjacentHTML('afterbegin', commentElement);
                
                // Add animation class to new comment
                const newCommentEl = detailCommentsContainer.firstElementChild;
                newCommentEl.classList.add('comment-new');
            }
            
            // Clear input and reset
            input.value = '';
            input.style.height = 'auto';
            const actions = input.parentElement.querySelector('.comment-actions');
            actions.classList.remove('visible');
            
            // Update comment count
            const commentCount = document.querySelector('#postDetailModal h3');
            if (commentCount) {
                commentCount.textContent = `Comments (${post.comments.length})`;
            }
        }
    }
}

// Update event listener for Enter key
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        const input = e.target;
        if (input.classList.contains('comment-input') || input.classList.contains('detail-comment-input')) {
            e.preventDefault();
            const postId = input.id.split('-')[1];
            if (input.classList.contains('detail-comment-input')) {
                submitDetailComment(postId);
            } else {
                submitComment(postId);
            }
        }
    }
});

// Update autoResize function
function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    
    // Show/hide actions based on content
    const actions = textarea.parentElement.querySelector('.comment-actions');
    if (textarea.value.trim()) {
        actions.classList.add('visible');
    } else {
        actions.classList.remove('visible');
    }
}

// Add new function to handle comment input
function handleCommentInput(textarea) {
    // Auto resize
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    
    // Show/hide send button
    const sendButton = textarea.parentElement.querySelector('.send-button');
    if (textarea.value.trim()) {
        sendButton.classList.add('visible');
    } else {
        sendButton.classList.remove('visible');
    }
}

// Update event listeners for comment submission
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey && e.target.matches('.comment-input, .detail-comment-input')) {
        e.preventDefault();
        const postId = e.target.id.split('-')[1];
        if (e.target.classList.contains('detail-comment-input')) {
            submitDetailComment(postId);
        } else {
            submitComment(postId);
        }
    }
});