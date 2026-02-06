// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    } else if (pageId === '') {
        // If hash is empty, show home
        document.getElementById('page-home').classList.add('active');
    }

    // Update URL hash
    if (pageId === 'home') {
        // Remove hash for home
        history.pushState(null, null, ' ');
    } else {
        // Update hash
        window.location.hash = pageId;
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Close mobile menu if open
    const navLinks = document.getElementById('navLinks');
    if (navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
    }

    // Update page title
    const titles = {
        'home': 'Themis Project — Semantic Validity Architecture',
        'problem': 'The Problem | Themis Project',
        'architecture': 'The Architecture | Themis Project',
        'proof': 'The Proof | Themis Project',
        'vocabulary': 'The Vocabulary | Themis Project',
        'warrior': 'The Warrior | Themis Project',
        'statesman': 'The Statesman | Themis Project',
        'merchant': 'The Merchant | Themis Project',
        'teacher': 'The Teacher | Themis Project',
        'healer': 'The Healer | Themis Project',
        'judge': 'The Judge | Themis Project',
        'telos': 'The Telos of Service | Themis Project',
        'examined': 'The Examined Life | Themis Project',
        'cosmos': 'The Cosmos | Themis Project',
        'tool': 'The Tool | Themis Project',
        'manifesto': 'Manifesto | Themis Project',
        'about': 'About | Themis Project'
    };
    document.title = titles[pageId] || titles['home'];
}

// Mobile Menu Toggle implementation
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('open');
    }
}

// Handle initial page load from URL hash
window.addEventListener('DOMContentLoaded', function () {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        showPage(hash);
    } else {
        showPage('home');
    }

    // Mobile menu toggle listener (if button exists)
    // const menuBtn = document.querySelector('.menu-btn'); // Add if implemented
});

// Handle browser back/forward buttons
window.addEventListener('hashchange', function () {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        showPage(hash);
    } else {
        showPage('home');
    }
});

function toggleAskThemis() {
    document.getElementById('askThemisPanel').classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    var context = document.getElementById('askThemisContext');
    var sections = document.querySelectorAll('section[id]');
    var names = {
        'journey': 'The Journey — Phases of Echosphere',
        'applications': 'Phase I Applications — The Six Constraints Applied',
        'tools': 'Coming Soon — AI Tools',
        'manifesto': 'The Manifesto'
    };

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                context.textContent = 'You are viewing: ' + (names[entry.target.id] || 'The Landing Page');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(function (section) {
        observer.observe(section);
    });
});
