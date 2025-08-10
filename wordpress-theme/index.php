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
                    <a href="#contact" class="btn-secondary">
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
    <section class="services-section">
        <div class="container">
            <h2 class="section-title"><?php echo get_theme_mod('services_title', 'Οι Υπηρεσίες Μας'); ?></h2>
            <p class="section-subtitle"><?php echo get_theme_mod('services_subtitle', 'Παρέχουμε ολοκληρωμένες λύσεις για όλες τις ανάγκες υδραυλικών'); ?></p>
            
            <div class="services-grid">
                <?php
                $services = array(
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
                
                foreach($services as $service): ?>
                <div class="service-card">
                    <img src="<?php echo $service['image']; ?>" alt="<?php echo $service['title']; ?>" class="service-image">
                    <div class="service-content">
                        <h3 class="service-title"><?php echo $service['title']; ?></h3>
                        <p class="service-description"><?php echo $service['description']; ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2><?php echo get_theme_mod('about_title', 'Σχετικά με Εμάς'); ?></h2>
                    <p><?php echo get_theme_mod('about_description', 'Η εταιρεία μας δραστηριοποιείται στον τομέα των υδραυλικών εργασιών εδώ και πάνω από 15 χρόνια. Διαθέτουμε εμπειρία και τεχνογνωσία για να παρέχουμε υψηλής ποιότητας υπηρεσίες.'); ?></p>
                    <p>Στόχος μας είναι να προσφέρουμε αξιόπιστες και οικονομικές λύσεις για όλες τις ανάγκες υδραυλικών, τόσο για ιδιώτες όσο και για επιχειρήσεις.</p>
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
            </div>
        </div>
    </section>

    <?php if (have_posts()) : ?>
        <section class="blog-section" style="padding: 80px 0; background: #f8fafc;">
            <div class="container">
                <h2 class="section-title">Τελευταία Νέα</h2>
                <div class="services-grid">
                    <?php while (have_posts()) : the_post(); ?>
                        <article class="service-card">
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="service-image">
                                    <?php the_post_thumbnail('medium', array('class' => 'service-image')); ?>
                                </div>
                            <?php endif; ?>
                            <div class="service-content">
                                <h3 class="service-title">
                                    <a href="<?php the_permalink(); ?>" style="text-decoration: none; color: inherit;">
                                        <?php the_title(); ?>
                                    </a>
                                </h3>
                                <p class="service-description"><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                                <a href="<?php the_permalink(); ?>" class="btn-primary" style="display: inline-block; margin-top: 1rem;">
                                    Διαβάστε Περισσότερα
                                </a>
                            </div>
                        </article>
                    <?php endwhile; ?>
                </div>
            </div>
        </section>
    <?php endif; ?>
</main>

<?php get_footer(); ?>