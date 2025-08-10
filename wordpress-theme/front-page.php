<?php get_header(); ?>

<main id="main-content">
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="hero-content">
                <h1><?php echo get_theme_mod('hero_title', 'Επαγγελματικές Υπηρεσίες Υδραυλικών'); ?></h1>
                <p class="subtitle"><?php echo get_theme_mod('hero_subtitle', 'Αξιόπιστες λύσεις υδραυλικών για το σπίτι και την επιχείρησή σας'); ?></p>
                <div class="hero-buttons">
                    <a href="tel:<?php echo get_theme_mod('phone_number', '+30 210 123 4567'); ?>" class="btn-primary">
                        📞 Κλήση Τώρα
                    </a>
                    <a href="javascript:void(0)" onclick="openContactModal()" class="btn-secondary">
                        📋 Δωρεάν Εκτίμηση
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
        <div class="container">
            <h2 class="section-title"><?php echo get_theme_mod('features_title', 'Γιατί να Μας Επιλέξετε'); ?></h2>
            <p class="section-subtitle"><?php echo get_theme_mod('features_subtitle', 'Προσφέρουμε επαγγελματικές υπηρεσίες υδραυλικών με εμπειρία και αξιοπιστία'); ?></p>
            
            <div class="features-grid">
                <?php
                $features = get_theme_mod('features_list', array(
                    array(
                        'icon' => '⚡',
                        'title' => 'Άμεση Εξυπηρέτηση',
                        'description' => 'Διαθέσιμοι 24/7 για επείγουσες επισκευές και βλάβες υδραυλικών'
                    ),
                    array(
                        'icon' => '🛠️',
                        'title' => 'Επαγγελματική Εμπειρία',
                        'description' => 'Πάνω από 15 χρόνια εμπειρίας στον τομέα των υδραυλικών'
                    ),
                    array(
                        'icon' => '✅',
                        'title' => 'Εγγυημένη Ποιότητα',
                        'description' => 'Χρησιμοποιούμε μόνο υψηλής ποιότητας υλικά και εξοπλισμό'
                    ),
                    array(
                        'icon' => '💰',
                        'title' => 'Ανταγωνιστικές Τιμές',
                        'description' => 'Διαφανείς τιμές χωρίς κρυφά κόστη'
                    )
                ));
                
                // If no custom features are set, use default array above
                if (empty($features) || !is_array($features)) {
                    $features = array(
                        array(
                            'icon' => '⚡',
                            'title' => 'Άμεση Εξυπηρέτηση',
                            'description' => 'Διαθέσιμοι 24/7 για επείγουσες επισκευές και βλάβες υδραυλικών'
                        ),
                        array(
                            'icon' => '🛠️',
                            'title' => 'Επαγγελματική Εμπειρία',
                            'description' => 'Πάνω από 15 χρόνια εμπειρίας στον τομέα των υδραυλικών'
                        ),
                        array(
                            'icon' => '✅',
                            'title' => 'Εγγυημένη Ποιότητα',
                            'description' => 'Χρησιμοποιούμε μόνο υψηλής ποιότητας υλικά και εξοπλισμό'
                        ),
                        array(
                            'icon' => '💰',
                            'title' => 'Ανταγωνιστικές Τιμές',
                            'description' => 'Διαφανείς τιμές χωρίς κρυφά κόστη'
                        )
                    );
                }
                
                foreach($features as $feature): ?>
                <div class="feature-card">
                    <div class="feature-icon"><?php echo $feature['icon']; ?></div>
                    <h3><?php echo $feature['title']; ?></h3>
                    <p><?php echo $feature['description']; ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services-section" id="services">
        <div class="container">
            <h2 class="section-title"><?php echo get_theme_mod('services_title', 'Οι Υπηρεσίες Μας'); ?></h2>
            <p class="section-subtitle"><?php echo get_theme_mod('services_subtitle', 'Παρέχουμε ολοκληρωμένες λύσεις για όλες τις ανάγκες υδραυλικών'); ?></p>
            
            <div class="services-grid">
                <?php
                // Query custom services post type
                $services_query = new WP_Query(array(
                    'post_type' => 'services',
                    'posts_per_page' => 6,
                    'post_status' => 'publish'
                ));
                
                if ($services_query->have_posts()) :
                    while ($services_query->have_posts()) : $services_query->the_post();
                        $price = get_post_meta(get_the_ID(), '_service_price', true);
                        $duration = get_post_meta(get_the_ID(), '_service_duration', true);
                        $warranty = get_post_meta(get_the_ID(), '_service_warranty', true);
                ?>
                <div class="service-card">
                    <?php if (has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail('medium', array('class' => 'service-image')); ?>
                    <?php endif; ?>
                    <div class="service-content">
                        <h3 class="service-title"><?php the_title(); ?></h3>
                        <p class="service-description"><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                        
                        <?php if ($price || $duration || $warranty) : ?>
                        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                            <?php if ($price) : ?>
                                <div style="margin-bottom: 0.5rem;"><strong>Τιμή:</strong> <?php echo $price; ?></div>
                            <?php endif; ?>
                            <?php if ($duration) : ?>
                                <div style="margin-bottom: 0.5rem;"><strong>Διάρκεια:</strong> <?php echo $duration; ?></div>
                            <?php endif; ?>
                            <?php if ($warranty) : ?>
                                <div><strong>Εγγύηση:</strong> <?php echo $warranty; ?></div>
                            <?php endif; ?>
                        </div>
                        <?php endif; ?>
                        
                        <a href="<?php the_permalink(); ?>" style="display: inline-block; margin-top: 1rem; color: #3b82f6; text-decoration: none; font-weight: 600;">
                            Μάθετε Περισσότερα →
                        </a>
                    </div>
                </div>
                <?php 
                    endwhile;
                    wp_reset_postdata();
                else :
                    // Fallback services if no custom services exist
                    $default_services = array(
                        array(
                            'title' => 'Επισκευή Σωληνώσεων',
                            'description' => 'Επισκευή και αντικατάσταση σωληνώσεων νερού και αποχέτευσης',
                            'image' => get_template_directory_uri() . '/assets/pipe-installation.jpg'
                        ),
                        array(
                            'title' => 'Θερμοσίφωνες',
                            'description' => 'Εγκατάσταση, συντήρηση και επισκευή θερμοσιφώνων',
                            'image' => get_template_directory_uri() . '/assets/water-heaters.jpg'
                        ),
                        array(
                            'title' => 'Ενδοδαπέδια Θέρμανση',
                            'description' => 'Εγκατάσταση συστημάτων ενδοδαπέδιας θέρμανσης',
                            'image' => get_template_directory_uri() . '/assets/underfloor-heating.jpg'
                        ),
                        array(
                            'title' => 'Επείγουσες Επισκευές',
                            'description' => 'Υπηρεσίες έκτακτης ανάγκης 24/7 για επείγουσες βλάβες',
                            'image' => get_template_directory_uri() . '/assets/emergency-repairs.jpg'
                        ),
                        array(
                            'title' => 'Ηλιακά Συστήματα',
                            'description' => 'Εγκατάσταση και συντήρηση ηλιακών συστημάτων',
                            'image' => get_template_directory_uri() . '/assets/solar-system.jpg'
                        ),
                        array(
                            'title' => 'Συστήματα Θέρμανσης',
                            'description' => 'Εγκατάσταση και συντήρηση λεβήτων και καυστήρων',
                            'image' => get_template_directory_uri() . '/assets/boiler-systems.jpg'
                        )
                    );
                    
                    foreach($default_services as $service): ?>
                    <div class="service-card">
                        <img src="<?php echo $service['image']; ?>" alt="<?php echo $service['title']; ?>" class="service-image">
                        <div class="service-content">
                            <h3 class="service-title"><?php echo $service['title']; ?></h3>
                            <p class="service-description"><?php echo $service['description']; ?></p>
                        </div>
                    </div>
                    <?php endforeach;
                endif; ?>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about-section" id="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2><?php echo get_theme_mod('about_title', 'Σχετικά με Εμάς'); ?></h2>
                    <p><?php echo get_theme_mod('about_description', 'Η εταιρεία μας δραστηριοποιείται στον τομέα των υδραυλικών εργασιών εδώ και πάνω από 15 χρόνια. Διαθέτουμε εμπειρία και τεχνογνωσία για να παρέχουμε υψηλής ποιότητας υπηρεσίες.'); ?></p>
                    <p>Στόχος μας είναι να προσφέρουμε αξιόπιστες και οικονομικές λύσεις για όλες τις ανάγκες υδραυλικών, τόσο για ιδιώτες όσο και για επιχειρήσεις.</p>
                    
                    <!-- Testimonials -->
                    <?php
                    $testimonials = new WP_Query(array(
                        'post_type' => 'testimonials',
                        'posts_per_page' => 3,
                        'post_status' => 'publish'
                    ));
                    
                    if ($testimonials->have_posts()) : ?>
                    <div style="margin-top: 2rem;">
                        <h3>Τι λένε οι πελάτες μας:</h3>
                        <?php while ($testimonials->have_posts()) : $testimonials->the_post(); ?>
                        <blockquote style="border-left: 4px solid #3b82f6; padding-left: 1rem; margin: 1rem 0; font-style: italic;">
                            <p>"<?php echo get_the_content(); ?>"</p>
                            <cite style="font-weight: 600; color: #3b82f6;">- <?php the_title(); ?></cite>
                        </blockquote>
                        <?php endwhile; wp_reset_postdata(); ?>
                    </div>
                    <?php endif; ?>
                </div>
                <div class="about-image">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/hero-plumber.jpg" alt="Επαγγελματίας υδραυλικός">
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" id="contact">
        <div class="container">
            <div class="contact-content">
                <h2><?php echo get_theme_mod('contact_title', 'Επικοινωνήστε Μαζί Μας'); ?></h2>
                <p><?php echo get_theme_mod('contact_subtitle', 'Είμαστε εδώ για να σας βοηθήσουμε με όλες τις ανάγκες υδραυλικών'); ?></p>
                
                <div class="contact-info">
                    <div class="contact-item">
                        <span>📞</span>
                        <a href="tel:<?php echo get_theme_mod('phone_number', '+30 210 123 4567'); ?>" style="color: white; text-decoration: none;">
                            <?php echo get_theme_mod('phone_number', '+30 210 123 4567'); ?>
                        </a>
                    </div>
                    <div class="contact-item">
                        <span>📧</span>
                        <a href="mailto:<?php echo get_theme_mod('email_address', 'info@kyriakis-plumbing.gr'); ?>" style="color: white; text-decoration: none;">
                            <?php echo get_theme_mod('email_address', 'info@kyriakis-plumbing.gr'); ?>
                        </a>
                    </div>
                    <div class="contact-item">
                        <span>📍</span>
                        <span><?php echo get_theme_mod('business_address', 'Αθήνα, Ελλάδα'); ?></span>
                    </div>
                </div>
                
                <div style="margin-top: 2rem;">
                    <a href="javascript:void(0)" onclick="openContactModal()" class="btn-primary">
                        Στείλτε μας Μήνυμα
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>