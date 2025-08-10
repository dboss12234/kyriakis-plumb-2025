<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php echo get_bloginfo('description'); ?>">
    
    <!-- SEO Meta Tags -->
    <meta property="og:title" content="<?php wp_title('|', true, 'right'); bloginfo('name'); ?>">
    <meta property="og:description" content="<?php echo get_bloginfo('description'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo home_url(); ?>">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/kyriakis-logo.png">
    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php wp_title('|', true, 'right'); bloginfo('name'); ?>">
    <meta name="twitter:description" content="<?php echo get_bloginfo('description'); ?>">
    <meta name="twitter:image" content="<?php echo get_template_directory_uri(); ?>/assets/kyriakis-logo.png">
    
    <!-- Schema.org markup -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "<?php bloginfo('name'); ?>",
        "description": "<?php echo get_bloginfo('description'); ?>",
        "telephone": "<?php echo get_theme_mod('phone_number', '+30 210 123 4567'); ?>",
        "email": "<?php echo get_theme_mod('email_address', 'info@kyriakis-plumbing.gr'); ?>",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "<?php echo get_theme_mod('business_address', 'Αθήνα, Ελλάδα'); ?>"
        },
        "url": "<?php echo home_url(); ?>",
        "priceRange": "€€",
        "serviceArea": {
            "@type": "Place",
            "name": "Αθήνα και περιχώρα"
        }
    }
    </script>
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <div class="header-content">
            <div class="logo">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <a href="<?php echo home_url(); ?>">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/kyriakis-logo.png" alt="<?php bloginfo('name'); ?>">
                    </a>
                <?php endif; ?>
            </div>
            
            <nav class="main-nav" role="navigation" aria-label="Κύρια πλοήγηση">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'fallback_cb' => 'kyriakis_default_menu'
                ));
                ?>
            </nav>
            
            <a href="tel:<?php echo get_theme_mod('phone_number', '+30 210 123 4567'); ?>" class="contact-button">
                📞 Κλήση Τώρα
            </a>
            
            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" onclick="toggleMobileMenu()" aria-label="Άνοιγμα μενού">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</header>

<div class="mobile-menu" id="mobile-menu">
    <div class="mobile-menu-content">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'container' => false,
            'fallback_cb' => 'kyriakis_default_menu',
            'menu_class' => 'mobile-nav-menu'
        ));
        ?>
        <div class="mobile-contact">
            <a href="tel:<?php echo get_theme_mod('phone_number', '+30 210 123 4567'); ?>" class="contact-button">
                📞 Κλήση Τώρα
            </a>
        </div>
    </div>
</div>

<?php
function kyriakis_default_menu() {
    echo '<ul>';
    echo '<li><a href="' . home_url() . '">Αρχική</a></li>';
    echo '<li><a href="#services">Υπηρεσίες</a></li>';
    echo '<li><a href="#about">Σχετικά</a></li>';
    echo '<li><a href="#contact">Επικοινωνία</a></li>';
    echo '</ul>';
}
?>

<style>
/* Mobile Menu Styles */
.mobile-menu-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.mobile-menu-toggle span {
    width: 25px;
    height: 3px;
    background: #1a1a1a;
    margin: 3px 0;
    transition: 0.3s;
}

.mobile-menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    z-index: 999;
    padding-top: 80px;
}

.mobile-menu-content {
    padding: 2rem;
    text-align: center;
}

.mobile-nav-menu {
    list-style: none;
    padding: 0;
}

.mobile-nav-menu li {
    margin: 1rem 0;
}

.mobile-nav-menu a {
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    color: #1a1a1a;
}

.mobile-contact {
    margin-top: 2rem;
}

@media (max-width: 768px) {
    .mobile-menu-toggle {
        display: flex;
    }
    
    .main-nav {
        display: none;
    }
    
    .contact-button {
        display: none;
    }
}
</style>

<script>
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        toggle.classList.remove('active');
    } else {
        mobileMenu.style.display = 'block';
        toggle.classList.add('active');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (!toggle.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.style.display = 'none';
        toggle.classList.remove('active');
    }
});
</script>