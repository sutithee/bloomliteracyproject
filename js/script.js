// Bloom Literacy Project - JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Donation Amount Selection
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmountWrapper = document.querySelector('.custom-amount-wrapper');
    const customAmountInput = document.getElementById('custom-amount');

    if (amountButtons.length > 0) {
        amountButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                amountButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');

                // Show/hide custom amount input
                if (this.dataset.amount === 'other') {
                    if (customAmountWrapper) {
                        customAmountWrapper.style.display = 'block';
                        if (customAmountInput) {
                            customAmountInput.focus();
                        }
                    }
                } else {
                    if (customAmountWrapper) {
                        customAmountWrapper.style.display = 'none';
                    }
                }
            });
        });
    }

    // Donation Form Submit
    const donationForm = document.querySelector('.donation-form');
    if (donationForm) {
        const submitBtn = donationForm.querySelector('.donate-submit-btn');
        if (submitBtn) {
            submitBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get selected amount
                const selectedAmountBtn = document.querySelector('.amount-btn.active');
                let amount = 0;
                
                if (selectedAmountBtn) {
                    if (selectedAmountBtn.dataset.amount === 'other') {
                        amount = customAmountInput ? customAmountInput.value : 0;
                    } else {
                        amount = selectedAmountBtn.dataset.amount;
                    }
                }

                // Get form values
                const name = document.getElementById('donor-name')?.value;
                const email = document.getElementById('donor-email')?.value;
                const frequency = document.querySelector('input[name="frequency"]:checked')?.value;

                // Basic validation
                if (!name || !email) {
                    alert('Please fill in all required fields (Name and Email).');
                    return;
                }

                if (!amount || amount <= 0) {
                    alert('Please select or enter a donation amount.');
                    return;
                }

                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }

                // Show confirmation message
                alert(`Thank you for your ${frequency === 'monthly' ? 'monthly' : 'one-time'} donation of $${amount}!\n\nNote: This is a demonstration form. Payment integration will be configured soon. For immediate donations, please contact us directly at info@bloomliteracyproject.org`);
            });
        }
    }

    // Contact Form - Now handled by FormSubmit.co
    // Form submits directly to info@bloomliteracyproject.org
    // No JavaScript needed - native HTML form submission

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.stat-card, .help-card, .partner-card, .event-card, .objective-card, .benefit-card, .cause-card, .mvv-card, .approach-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Active navigation highlighting based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function highlightNavigation() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Throttle function for scroll event
    function throttle(func, delay) {
        let lastCall = 0;
        return function(...args) {
            const now = new Date().getTime();
            if (now - lastCall < delay) {
                return;
            }
            lastCall = now;
            return func(...args);
        };
    }

    window.addEventListener('scroll', throttle(highlightNavigation, 100));

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    // Progress bar animation for goals
    const progressFills = document.querySelectorAll('.progress-fill, .goal-fill');
    progressFills.forEach(fill => {
        const targetWidth = fill.style.width;
        fill.style.width = '0%';
        
        const observerProgress = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        fill.style.width = targetWidth;
                    }, 200);
                    observerProgress.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observerProgress.observe(fill);
    });

    // FAQ Accordion (if needed in future)
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            item.style.cursor = 'pointer';
            // Can add accordion functionality here if needed
        });
    }

    // Custom amount input validation
    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            // Remove non-numeric characters except decimal point
            this.value = this.value.replace(/[^0-9.]/g, '');
            
            // Ensure only one decimal point
            const parts = this.value.split('.');
            if (parts.length > 2) {
                this.value = parts[0] + '.' + parts.slice(1).join('');
            }
            
            // Limit to 2 decimal places
            if (parts[1] && parts[1].length > 2) {
                this.value = parts[0] + '.' + parts[1].substring(0, 2);
            }
        });
    }

    // Social media links are now live!
    // Instagram: @bloomliteracyinitiative
    // LinkedIn: Bloom Literacy Project

    // Console message
    console.log('%c🌸 Bloom Literacy Project 🌸', 'color: #FF6B9D; font-size: 20px; font-weight: bold;');
    console.log('%cEmpowering girls through education in Nepal', 'color: #5DBE7A; font-size: 14px;');
    console.log('%cWebsite by Bloom Literacy Project | 501(c)(3) Nonprofit', 'color: #666; font-size: 12px;');
});

// Back to top button (optional enhancement)
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #FF6B9D 0%, #5DBE7A 100%);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTopButton);

// Page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Form field focus effects
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});

// Stats counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Image lazy loading fallback
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
});

// Print functionality
function printPage() {
    window.print();
}

// Export functionality for future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        animateCounter,
        printPage
    };
}

