// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close menu when link is clicked
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scroll function
function scrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Contact Button Click Handler
document.querySelectorAll('button[onclick*="scrollTo"]').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.textContent.includes('KONTAK')) {
            scrollTo('office');
        }
    });
});

// Form submission handler (if needed)
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.textContent.includes('Pesan') || this.textContent.includes('Hubungi') || this.textContent.includes('Kontak')) {
            // Show toast notification
            showNotification('Terima kasih telah menghubungi kami! Kami akan segera merespon.');
        }
    });
});

// Toast Notification
function showNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Add active state to navigation links
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-blue-600', 'font-bold');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('text-blue-600', 'font-bold');
        }
    });
});

// Prevent default link behavior for hash links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#!' && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add animation to counters if needed
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + '+';
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 30);
    });
}

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Log when page is ready
console.log('JAKIR Website loaded successfully!');
