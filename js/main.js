/**
 * Portfolio Website Main JavaScript
 * Handles navigation, scroll animations, form validation, and interactions
 */

(function() {
    'use strict';
    
    // =============================================
    // NAVIGATION
    // =============================================
    
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (hamburger && navMenu) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // =============================================
    // SCROLL ANIMATIONS
    // =============================================
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in-section class
    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // =============================================
    // CONTACT FORM
    // =============================================
    
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Clear previous messages
            formMessage.className = 'form-message';
            formMessage.textContent = '';
            
            // Get form fields
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');
            
            // Clear previous errors
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            
            // Validation
            let isValid = true;
            
            // Name validation
            if (nameInput.value.trim().length < 2) {
                nameError.textContent = 'Please enter a valid name (at least 2 characters)';
                isValid = false;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            // Message validation
            if (messageInput.value.trim().length < 10) {
                messageError.textContent = 'Please enter a message (at least 10 characters)';
                isValid = false;
            }
            
            if (!isValid) {
                return;
            }
            
            // Get submit button and show loading state
            const submitBtn = contactForm.querySelector('.btn-submit');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            // Show loading state
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-block';
            submitBtn.disabled = true;
            
            // Prepare form data
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim()
            };
            
            // Save form data to localStorage
            try {
                // Simulate a brief network request delay for UX
                await new Promise(resolve => setTimeout(resolve, 800));
                
                // Get existing messages or initialize empty array
                const existingMessages = JSON.parse(localStorage.getItem('portfolioMessages')) || [];
                
                // Add new message with timestamp
                const newMessage = {
                    ...formData,
                    id: Date.now(),
                    date: new Date().toISOString()
                };
                
                existingMessages.push(newMessage);
                
                // Save back to localStorage
                localStorage.setItem('portfolioMessages', JSON.stringify(existingMessages));
                
                console.log('Form saved locally:', newMessage);
                
                // Show success message
                formMessage.className = 'form-message success';
                formMessage.textContent = '✓ Thank you! Your message has been saved locally. I\'ll get back to you soon.';
                
                // Reset form
                contactForm.reset();
                
            } catch (error) {
                console.error('Form save error:', error);
                formMessage.className = 'form-message error';
                formMessage.textContent = '✗ Oops! Something went wrong while saving locally. Please try again.';
            } finally {
                // Reset button state
                btnText.style.display = 'inline-block';
                btnLoading.style.display = 'none';
                submitBtn.disabled = false;
            }
        });
        
        // Real-time validation on input
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                // Clear error when user starts typing
                const errorElement = document.getElementById(this.id + 'Error');
                if (errorElement) {
                    errorElement.textContent = '';
                }
            });
        });
    }
    
    // Individual field validation
    function validateField(field) {
        const errorElement = document.getElementById(field.id + 'Error');
        if (!errorElement) return;
        
        errorElement.textContent = '';
        
        if (field.id === 'name' && field.value.trim().length < 2) {
            errorElement.textContent = 'Please enter a valid name';
        }
        
        if (field.id === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(field.value.trim())) {
                errorElement.textContent = 'Please enter a valid email';
            }
        }
        
        if (field.id === 'message' && field.value.trim().length < 10) {
            errorElement.textContent = 'Message must be at least 10 characters';
        }
    }
    
    // =============================================
    // PROFILE IMAGE PLACEHOLDER
    // =============================================
    
    // If profile image fails to load, show a default placeholder
    const profileImg = document.getElementById('profileImg');
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            // Create a colored placeholder if image fails to load
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 4rem;
                color: white;
                font-weight: bold;
            `;
            placeholder.textContent = 'YN'; // Replace with your initials
            this.parentElement.appendChild(placeholder);
        });
    }
    
    // =============================================
    // DYNAMIC YEAR IN FOOTER
    // =============================================
    
    // Update copyright year automatically
    const footer = document.querySelector('.footer p');
    if (footer && footer.textContent.includes('2024')) {
        const currentYear = new Date().getFullYear();
        footer.textContent = footer.textContent.replace('2024', currentYear);
    }
    
    // =============================================
    // PERFORMANCE OPTIMIZATIONS
    // =============================================
    
    // Debounce scroll events for better performance
    function debounce(func, wait = 10) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Optimized scroll handler
    const handleScroll = debounce(function() {
        // Add any scroll-based functionality here
    }, 10);
    
    window.addEventListener('scroll', handleScroll);
    
    // =============================================
    // ACCESSIBILITY ENHANCEMENTS
    // =============================================
    
    // Add keyboard navigation for hamburger menu
    if (hamburger) {
        hamburger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
    
    // Trap focus in mobile menu when open
    if (navMenu) {
        navMenu.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && this.classList.contains('active')) {
                hamburger.classList.remove('active');
                this.classList.remove('active');
                hamburger.focus();
            }
        });
    }
    
    // =============================================
    // INITIALIZE
    // =============================================
    
    console.log('Portfolio website loaded successfully! 🚀');
    
    // Log a message to help with setup
    console.log('%cWelcome to the Portfolio Site!', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
    console.log('%cRemember to replace all placeholder content with your actual information:', 'color: #6b7280; font-size: 14px;');
    console.log('1. Update [Your Name] and other text placeholders');
    console.log('2. Replace profile image in assets/images/');
    console.log('3. Add your project details and links');
    console.log('4. Update social media links');
    console.log('5. View submitted contact forms in Local Storage');
    
})();