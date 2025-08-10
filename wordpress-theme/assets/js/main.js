/**
 * Kyriakis Plumbing Theme JavaScript
 */

(function($) {
    'use strict';

    // Document ready
    $(document).ready(function() {
        initializeTheme();
    });

    // Initialize all theme functionality
    function initializeTheme() {
        setupSmoothScrolling();
        setupMobileMenu();
        setupScrollToTop();
        setupAnimations();
        setupContactForm();
        setupHeaderScroll();
    }

    // Smooth scrolling for anchor links
    function setupSmoothScrolling() {
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            
            const target = $(this.getAttribute('href'));
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 800);
            }
        });
    }

    // Mobile menu functionality
    function setupMobileMenu() {
        $('.mobile-menu-toggle').on('click', function() {
            $('.mobile-menu').toggleClass('active');
            $(this).toggleClass('active');
            $('body').toggleClass('menu-open');
        });

        // Close mobile menu when clicking on a link
        $('.mobile-menu a').on('click', function() {
            $('.mobile-menu').removeClass('active');
            $('.mobile-menu-toggle').removeClass('active');
            $('body').removeClass('menu-open');
        });

        // Close mobile menu when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.mobile-menu, .mobile-menu-toggle').length) {
                $('.mobile-menu').removeClass('active');
                $('.mobile-menu-toggle').removeClass('active');
                $('body').removeClass('menu-open');
            }
        });
    }

    // Scroll to top button
    function setupScrollToTop() {
        const scrollButton = $('#scroll-to-top');
        
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 300) {
                scrollButton.fadeIn();
            } else {
                scrollButton.fadeOut();
            }
        });

        scrollButton.on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        });
    }

    // Scroll animations
    function setupAnimations() {
        // Fade in animation for elements
        function animateOnScroll() {
            $('.feature-card, .service-card').each(function() {
                const elementTop = $(this).offset().top;
                const windowBottom = $(window).scrollTop() + $(window).height();
                
                if (elementTop < windowBottom - 100) {
                    $(this).addClass('animate-in');
                }
            });
        }

        // Run on scroll
        $(window).on('scroll', animateOnScroll);
        
        // Run on load
        animateOnScroll();
    }

    // Contact form handling
    function setupContactForm() {
        $('#contact-form').on('submit', function(e) {
            e.preventDefault();
            
            const form = $(this);
            const submitButton = form.find('button[type="submit"]');
            const messageDiv = $('#form-message');
            
            // Disable submit button
            submitButton.prop('disabled', true).text('Αποστολή...');
            
            // Prepare form data
            const formData = new FormData(this);
            formData.append('action', 'kyriakis_contact');
            formData.append('nonce', kyriakis_ajax.nonce);
            
            // Submit form via AJAX
            $.ajax({
                url: kyriakis_ajax.ajax_url,
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                    messageDiv.show();
                    
                    if (response.success) {
                        messageDiv.css('color', 'green').text(response.data);
                        form[0].reset();
                        
                        // Close modal after 2 seconds
                        setTimeout(function() {
                            closeContactModal();
                        }, 2000);
                    } else {
                        messageDiv.css('color', 'red').text(response.data || 'Παρουσιάστηκε σφάλμα');
                    }
                },
                error: function() {
                    messageDiv.show().css('color', 'red').text('Παρουσιάστηκε σφάλμα δικτύου');
                },
                complete: function() {
                    // Re-enable submit button
                    submitButton.prop('disabled', false).text('Αποστολή Μηνύματος');
                }
            });
        });
    }

    // Header scroll effect
    function setupHeaderScroll() {
        $(window).on('scroll', function() {
            const header = $('.site-header');
            
            if ($(window).scrollTop() > 100) {
                header.addClass('scrolled');
            } else {
                header.removeClass('scrolled');
            }
        });
    }

    // Phone number click tracking
    $('a[href^="tel:"]').on('click', function() {
        // Track phone clicks (can be used with Google Analytics)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'phone_call', {
                'event_category': 'Contact',
                'event_label': 'Phone Number Click'
            });
        }
    });

    // Email click tracking
    $('a[href^="mailto:"]').on('click', function() {
        // Track email clicks
        if (typeof gtag !== 'undefined') {
            gtag('event', 'email_click', {
                'event_category': 'Contact',
                'event_label': 'Email Click'
            });
        }
    });

    // Service card hover effects
    $('.service-card, .feature-card').hover(
        function() {
            $(this).addClass('hovered');
        },
        function() {
            $(this).removeClass('hovered');
        }
    );

    // Lazy loading for images (simple implementation)
    function lazyLoadImages() {
        const images = $('img[data-src]');
        
        images.each(function() {
            const img = $(this);
            const imageTop = img.offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (imageTop < windowBottom + 200) {
                img.attr('src', img.data('src')).removeAttr('data-src');
            }
        });
    }

    // Run lazy loading on scroll and load
    $(window).on('scroll load', lazyLoadImages);

})(jQuery);

// Contact modal functions (vanilla JS for compatibility)
function openContactModal() {
    document.getElementById('contact-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Track modal open
    if (typeof gtag !== 'undefined') {
        gtag('event', 'contact_modal_open', {
            'event_category': 'Contact',
            'event_label': 'Contact Modal Opened'
        });
    }
}

function closeContactModal() {
    document.getElementById('contact-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Clear form message
    const messageDiv = document.getElementById('form-message');
    if (messageDiv) {
        messageDiv.style.display = 'none';
    }
}

// Service worker registration for better performance (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('SW registered: ', registration);
        }).catch(function(registrationError) {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

// Performance optimization: Preload critical resources
document.addEventListener('DOMContentLoaded', function() {
    // Preload hero image
    const heroImage = new Image();
    heroImage.src = '/assets/hero-plumber.jpg';
    
    // Preload other critical images
    const criticalImages = [
        '/assets/pipe-installation.jpg',
        '/assets/water-heaters.jpg',
        '/assets/emergency-repairs.jpg'
    ];
    
    criticalImages.forEach(function(src) {
        const img = new Image();
        img.src = src;
    });
});