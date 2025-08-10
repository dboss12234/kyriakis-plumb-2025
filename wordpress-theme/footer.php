<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-logo">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/kyriakis-logo.png" alt="<?php bloginfo('name'); ?>" style="height: 40px;">
                <?php endif; ?>
            </div>
            
            <div class="footer-info">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Όλα τα δικαιώματα κατοχυρωμένα.</p>
            </div>
            
            <div class="footer-links-container">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'container' => false,
                    'menu_class' => 'footer-links',
                    'fallback_cb' => 'kyriakis_default_footer_menu'
                ));
                ?>
            </div>
        </div>
        
        <?php if (is_active_sidebar('footer-widgets')) : ?>
            <div class="footer-widgets">
                <?php dynamic_sidebar('footer-widgets'); ?>
            </div>
        <?php endif; ?>
        
        <div class="footer-contact" style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #333;">
            <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 1rem;">
                <a href="tel:<?php echo get_theme_mod('phone_number', '+30 210 123 4567'); ?>" style="color: #9ca3af; text-decoration: none;">
                    📞 <?php echo get_theme_mod('phone_number', '+30 210 123 4567'); ?>
                </a>
                <a href="mailto:<?php echo get_theme_mod('email_address', 'info@kyriakis-plumbing.gr'); ?>" style="color: #9ca3af; text-decoration: none;">
                    📧 <?php echo get_theme_mod('email_address', 'info@kyriakis-plumbing.gr'); ?>
                </a>
                <span style="color: #9ca3af;">
                    📍 <?php echo get_theme_mod('business_address', 'Αθήνα, Ελλάδα'); ?>
                </span>
            </div>
            
            <div style="color: #6b7280; font-size: 0.9rem;">
                <p>Επαγγελματικές υπηρεσίες υδραυλικών | Διαθέσιμοι 24/7 για επείγουσες επισκευές</p>
                <p>Εξυπηρετούμε την Αθήνα και τα περίχωρα με αξιοπιστία και ποιότητα</p>
            </div>
        </div>
    </div>
</footer>

<?php
function kyriakis_default_footer_menu() {
    echo '<ul class="footer-links">';
    echo '<li><a href="' . home_url() . '">Αρχική</a></li>';
    echo '<li><a href="#services">Υπηρεσίες</a></li>';
    echo '<li><a href="#about">Σχετικά</a></li>';
    echo '<li><a href="#contact">Επικοινωνία</a></li>';
    echo '<li><a href="' . home_url('/privacy-policy') . '">Πολιτική Απορρήτου</a></li>';
    echo '</ul>';
}
?>

<!-- Scroll to Top Button -->
<button id="scroll-to-top" style="display: none; position: fixed; bottom: 20px; right: 20px; background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; border: none; border-radius: 50%; width: 50px; height: 50px; cursor: pointer; z-index: 1000; font-size: 20px; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);">
    ↑
</button>

<!-- Contact Form Modal (if needed) -->
<div id="contact-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); z-index: 10000; align-items: center; justify-content: center;">
    <div style="background: white; padding: 2rem; border-radius: 20px; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <h3>Επικοινωνήστε μαζί μας</h3>
            <button onclick="closeContactModal()" style="background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
        </div>
        
        <form id="contact-form" onsubmit="submitContactForm(event)">
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Όνομα *</label>
                <input type="text" name="name" required style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px; font-size: 1rem;">
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email *</label>
                <input type="email" name="email" required style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px; font-size: 1rem;">
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Τηλέφωνο</label>
                <input type="tel" name="phone" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px; font-size: 1rem;">
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Μήνυμα *</label>
                <textarea name="message" required rows="4" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px; font-size: 1rem; resize: vertical;"></textarea>
            </div>
            
            <button type="submit" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 0.75rem 2rem; border: none; border-radius: 50px; font-weight: 600; cursor: pointer; width: 100%; font-size: 1rem;">
                Αποστολή Μηνύματος
            </button>
        </form>
        
        <div id="form-message" style="margin-top: 1rem; text-align: center; display: none;"></div>
    </div>
</div>

<script>
// Scroll to top functionality
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

document.getElementById('scroll-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact modal functions
function openContactModal() {
    document.getElementById('contact-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    document.getElementById('contact-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Contact form submission
function submitContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    formData.append('action', 'kyriakis_contact');
    formData.append('nonce', '<?php echo wp_create_nonce("kyriakis_nonce"); ?>');
    
    const messageDiv = document.getElementById('form-message');
    
    fetch('<?php echo admin_url("admin-ajax.php"); ?>', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        messageDiv.style.display = 'block';
        if (data.success) {
            messageDiv.style.color = 'green';
            messageDiv.textContent = data.data;
            form.reset();
            setTimeout(() => {
                closeContactModal();
            }, 2000);
        } else {
            messageDiv.style.color = 'red';
            messageDiv.textContent = data.data || 'Παρουσιάστηκε σφάλμα';
        }
    })
    .catch(error => {
        messageDiv.style.display = 'block';
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Παρουσιάστηκε σφάλμα δικτύου';
    });
}

// Close modal when clicking outside
document.getElementById('contact-modal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeContactModal();
    }
});
</script>

<?php wp_footer(); ?>
</body>
</html>