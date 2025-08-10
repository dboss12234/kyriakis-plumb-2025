<?php
/**
 * Kyriakis Plumbing Theme Functions
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function kyriakis_plumbing_setup() {
    // Add theme support for various features
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'kyriakis-plumbing'),
        'footer' => __('Footer Menu', 'kyriakis-plumbing'),
    ));
    
    // Set content width
    if (!isset($content_width)) {
        $content_width = 1200;
    }
}
add_action('after_setup_theme', 'kyriakis_plumbing_setup');

/**
 * Enqueue Styles and Scripts
 */
function kyriakis_plumbing_scripts() {
    // Enqueue Google Fonts
    wp_enqueue_style(
        'kyriakis-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        array(),
        null
    );
    
    // Enqueue main stylesheet
    wp_enqueue_style(
        'kyriakis-plumbing-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get('Version')
    );
    
    // Enqueue custom JavaScript
    wp_enqueue_script(
        'kyriakis-plumbing-script',
        get_template_directory_uri() . '/assets/js/main.js',
        array('jquery'),
        wp_get_theme()->get('Version'),
        true
    );
    
    // Localize script for AJAX
    wp_localize_script('kyriakis-plumbing-script', 'kyriakis_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('kyriakis_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'kyriakis_plumbing_scripts');

/**
 * Add Custom Post Types
 */
function kyriakis_register_post_types() {
    // Services Post Type
    register_post_type('services', array(
        'labels' => array(
            'name' => 'Υπηρεσίες',
            'singular_name' => 'Υπηρεσία',
            'add_new' => 'Προσθήκη Νέας',
            'add_new_item' => 'Προσθήκη Νέας Υπηρεσίας',
            'edit_item' => 'Επεξεργασία Υπηρεσίας',
            'new_item' => 'Νέα Υπηρεσία',
            'view_item' => 'Προβολή Υπηρεσίας',
            'search_items' => 'Αναζήτηση Υπηρεσιών',
            'not_found' => 'Δεν βρέθηκαν υπηρεσίες',
            'not_found_in_trash' => 'Δεν βρέθηκαν υπηρεσίες στα σκουπίδια'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-admin-tools',
        'rewrite' => array('slug' => 'services')
    ));
    
    // Testimonials Post Type
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => 'Μαρτυρίες',
            'singular_name' => 'Μαρτυρία',
            'add_new' => 'Προσθήκη Νέας',
            'add_new_item' => 'Προσθήκη Νέας Μαρτυρίας',
            'edit_item' => 'Επεξεργασία Μαρτυρίας',
            'new_item' => 'Νέα Μαρτυρία',
            'view_item' => 'Προβολή Μαρτυρίας',
            'search_items' => 'Αναζήτηση Μαρτυριών',
            'not_found' => 'Δεν βρέθηκαν μαρτυρίες',
            'not_found_in_trash' => 'Δεν βρέθηκαν μαρτυρίες στα σκουπίδια'
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-testimonial',
        'show_in_admin_bar' => true
    ));
}
add_action('init', 'kyriakis_register_post_types');

/**
 * Customize Theme Customizer
 */
function kyriakis_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title' => 'Κύρια Ενότητα (Hero)',
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('hero_title', array(
        'default' => 'Επαγγελματικές Υπηρεσίες Υδραυλικών',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label' => 'Τίτλος Hero',
        'section' => 'hero_section',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'Αξιόπιστες λύσεις υδραυλικών για το σπίτι και την επιχείρησή σας',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('hero_subtitle', array(
        'label' => 'Υπότιτλος Hero',
        'section' => 'hero_section',
        'type' => 'textarea',
    ));
    
    // Contact Information
    $wp_customize->add_section('contact_info', array(
        'title' => 'Στοιχεία Επικοινωνίας',
        'priority' => 40,
    ));
    
    $wp_customize->add_setting('phone_number', array(
        'default' => '+30 210 123 4567',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('phone_number', array(
        'label' => 'Τηλέφωνο',
        'section' => 'contact_info',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('email_address', array(
        'default' => 'info@kyriakis-plumbing.gr',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('email_address', array(
        'label' => 'Email',
        'section' => 'contact_info',
        'type' => 'email',
    ));
    
    $wp_customize->add_setting('business_address', array(
        'default' => 'Αθήνα, Ελλάδα',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('business_address', array(
        'label' => 'Διεύθυνση',
        'section' => 'contact_info',
        'type' => 'text',
    ));
    
    // About Section
    $wp_customize->add_section('about_section', array(
        'title' => 'Ενότητα Σχετικά',
        'priority' => 50,
    ));
    
    $wp_customize->add_setting('about_title', array(
        'default' => 'Σχετικά με Εμάς',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('about_title', array(
        'label' => 'Τίτλος Σχετικά',
        'section' => 'about_section',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('about_description', array(
        'default' => 'Η εταιρεία μας δραστηριοποιείται στον τομέα των υδραυλικών εργασιών εδώ και πάνω από 15 χρόνια.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('about_description', array(
        'label' => 'Περιγραφή Σχετικά',
        'section' => 'about_section',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'kyriakis_customize_register');

/**
 * Add Meta Boxes for Services
 */
function kyriakis_add_service_meta_boxes() {
    add_meta_box(
        'service_details',
        'Λεπτομέρειες Υπηρεσίας',
        'kyriakis_service_details_callback',
        'services',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'kyriakis_add_service_meta_boxes');

function kyriakis_service_details_callback($post) {
    wp_nonce_field('kyriakis_service_details', 'kyriakis_service_details_nonce');
    
    $price = get_post_meta($post->ID, '_service_price', true);
    $duration = get_post_meta($post->ID, '_service_duration', true);
    $warranty = get_post_meta($post->ID, '_service_warranty', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="service_price">Τιμή</label></th>';
    echo '<td><input type="text" id="service_price" name="service_price" value="' . esc_attr($price) . '" /></td></tr>';
    echo '<tr><th><label for="service_duration">Διάρκεια</label></th>';
    echo '<td><input type="text" id="service_duration" name="service_duration" value="' . esc_attr($duration) . '" /></td></tr>';
    echo '<tr><th><label for="service_warranty">Εγγύηση</label></th>';
    echo '<td><input type="text" id="service_warranty" name="service_warranty" value="' . esc_attr($warranty) . '" /></td></tr>';
    echo '</table>';
}

function kyriakis_save_service_meta($post_id) {
    if (!isset($_POST['kyriakis_service_details_nonce']) || 
        !wp_verify_nonce($_POST['kyriakis_service_details_nonce'], 'kyriakis_service_details')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    if (isset($_POST['service_price'])) {
        update_post_meta($post_id, '_service_price', sanitize_text_field($_POST['service_price']));
    }
    
    if (isset($_POST['service_duration'])) {
        update_post_meta($post_id, '_service_duration', sanitize_text_field($_POST['service_duration']));
    }
    
    if (isset($_POST['service_warranty'])) {
        update_post_meta($post_id, '_service_warranty', sanitize_text_field($_POST['service_warranty']));
    }
}
add_action('save_post', 'kyriakis_save_service_meta');

/**
 * Contact Form Handler
 */
function kyriakis_handle_contact_form() {
    check_ajax_referer('kyriakis_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Send email
    $to = get_theme_mod('email_address', 'info@kyriakis-plumbing.gr');
    $subject = 'Νέο μήνυμα από την ιστοσελίδα';
    $body = "Όνομα: $name\nEmail: $email\nΤηλέφωνο: $phone\n\nΜήνυμα:\n$message";
    $headers = array('Content-Type: text/plain; charset=UTF-8');
    
    if (wp_mail($to, $subject, $body, $headers)) {
        wp_send_json_success('Το μήνυμα στάλθηκε επιτυχώς!');
    } else {
        wp_send_json_error('Σφάλμα κατά την αποστολή του μηνύματος.');
    }
}
add_action('wp_ajax_kyriakis_contact', 'kyriakis_handle_contact_form');
add_action('wp_ajax_nopriv_kyriakis_contact', 'kyriakis_handle_contact_form');

/**
 * Custom Excerpt Length
 */
function kyriakis_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'kyriakis_excerpt_length');

/**
 * Remove Admin Bar for Non-Admins
 */
function kyriakis_remove_admin_bar() {
    if (!current_user_can('administrator') && !is_admin()) {
        show_admin_bar(false);
    }
}
add_action('after_setup_theme', 'kyriakis_remove_admin_bar');

/**
 * Security Enhancements
 */
function kyriakis_security_headers() {
    if (!is_admin()) {
        header('X-Content-Type-Options: nosniff');
        header('X-Frame-Options: SAMEORIGIN');
        header('X-XSS-Protection: 1; mode=block');
    }
}
add_action('send_headers', 'kyriakis_security_headers');

// Remove WordPress version from head
remove_action('wp_head', 'wp_generator');

/**
 * Performance Optimizations
 */
function kyriakis_performance_optimizations() {
    // Remove unnecessary scripts and styles
    wp_dequeue_script('wp-embed');
    wp_deregister_script('wp-embed');
    
    // Remove emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
}
add_action('wp_enqueue_scripts', 'kyriakis_performance_optimizations');

/**
 * Widget Areas
 */
function kyriakis_widgets_init() {
    register_sidebar(array(
        'name' => 'Sidebar',
        'id' => 'sidebar-1',
        'description' => 'Κύρια πλαϊνή στήλη',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => 'Footer Widget Area',
        'id' => 'footer-widgets',
        'description' => 'Περιοχή widgets στο footer',
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="footer-widget-title">',
        'after_title' => '</h4>',
    ));
}
add_action('widgets_init', 'kyriakis_widgets_init');