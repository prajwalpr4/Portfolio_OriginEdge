/**
 * Theme Management
 * Handles dark/light mode toggle and persistence
 */

(function() {
    'use strict';
    
    // Get theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply the saved theme on page load
    if (currentTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    }
    
    // Theme toggle functionality
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // Toggle theme classes
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            }
            
            // Add a small rotation animation to the button
            this.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 300);
        });
    }
    
    // Listen for system theme changes (optional enhancement)
    if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        darkModeQuery.addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                if (e.matches) {
                    body.classList.remove('light-mode');
                    body.classList.add('dark-mode');
                } else {
                    body.classList.remove('dark-mode');
                    body.classList.add('light-mode');
                }
            }
        });
    }
    
})();