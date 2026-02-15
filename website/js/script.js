// SK Industries & AS Industries - JavaScript
// Professional industrial website interactions

(function() {
    'use strict';

    // Sticky Header on Scroll
    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Navigation Highlight
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // WhatsApp Button Hover Effect
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        whatsappBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Product Card Interactions
    const productCards = document.querySelectorAll('.product-card, .category-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Rate Table Row Hover Enhancement
    const rateTableRows = document.querySelectorAll('.rate-table tbody tr');
    rateTableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(47, 79, 111, 0.08)';
        });
        
        row.addEventListener('mouseleave', function() {
            // Restore original background
            const isEvenRow = Array.from(this.parentElement.children).indexOf(this) % 2 === 1;
            if (isEvenRow) {
                this.style.backgroundColor = 'var(--light-grey)';
            } else {
                this.style.backgroundColor = 'transparent';
            }
        });
    });

    // Design Gallery Item Click (for future modal implementation)
    const designItems = document.querySelectorAll('.design-item');
    designItems.forEach(item => {
        item.style.cursor = 'pointer';
        
        item.addEventListener('click', function() {
            const designCode = this.querySelector('.design-code')?.textContent;
            if (designCode) {
                // For now, just show an alert. In production, this would open a modal
                console.log('Design clicked:', designCode);
            }
        });
    });

    // Phone Number Click Tracking (for analytics)
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            const phoneNumber = this.getAttribute('href').replace('tel:', '');
            console.log('Phone call initiated:', phoneNumber);
            // In production, you would send this to analytics
        });
    });

    // Print functionality for Rate List page
    if (window.location.pathname.includes('ratelist.html')) {
        // Add print button functionality if needed
        const printBtn = document.getElementById('printRates');
        if (printBtn) {
            printBtn.addEventListener('click', function() {
                window.print();
            });
        }
    }

    // Lazy Loading Images (if product images are added)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Back to Top functionality (optional - can be added)
    let backToTopBtn;
    
    function createBackToTop() {
        backToTopBtn = document.createElement('button');
        backToTopBtn.innerHTML = '↑';
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: var(--steel-blue);
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s;
            z-index: 998;
        `;
        
        document.body.appendChild(backToTopBtn);
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
            }
        });
    }

    // Initialize back to top button
    // createBackToTop(); // Uncomment if needed

    // Form validation (if contact form is added in future)
    const contactForms = document.querySelectorAll('form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Add validation logic here if forms are added
            console.log('Form submitted');
        });
    });

    // Console log for initialization
    console.log('SK Industries & AS Industries - Website Loaded Successfully');
    console.log('Serving since 1981');

})();
