<?php get_header(); ?>

<!-- Hero Section -->
<section class="hero-section">
    <!-- Animated Background Elements -->
    <div class="hero-bg-elements">
        <div class="bg-circle bg-circle-1"></div>
        <div class="bg-circle bg-circle-2"></div>
    </div>
    
    <div class="container">
        <div class="hero-grid">
            <!-- Left Column - Content -->
            <div class="hero-content">
                <div class="hero-badge">
                    <span class="hero-badge-icon">⚡</span>
                    Επαγγελματικές Υπηρεσίες 24/7
                </div>
                
                <h1 class="hero-title">
                    <span class="text-accent">Κυριάκης</span><br>
                    <span class="text-white">Υδραυλικές</span><br>
                    <span class="text-subtitle">Υπηρεσίες</span>
                </h1>
                
                <div class="emergency-card">
                    <div class="emergency-icon">📞</div>
                    <div class="emergency-text">
                        <h2>Επείγουσες Κλήσεις</h2>
                        <p>Διαθέσιμοι 24/7 για έκτακτα περιστατικά</p>
                    </div>
                </div>
                
                <p class="hero-subtitle">
                    Πάνω από 10 χρόνια εμπειρίας στο χώρο των υδραυλικών. Εξειδικευμένοι στην εγκατάσταση, επισκευή και συντήρηση όλων των ειδών υδραυλικών συστημάτων.
                </p>

                <!-- Statistics -->
                <div class="hero-stats">
                    <div class="stat-item">
                        <div class="stat-number">500+</div>
                        <div class="stat-label">Ικανοποιημένοι Πελάτες</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">10+</div>
                        <div class="stat-label">Χρόνια Εμπειρίας</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">24/7</div>
                        <div class="stat-label">Διαθεσιμότητα</div>
                    </div>
                </div>

                <!-- CTA Buttons -->
                <div class="hero-buttons">
                    <a href="tel:+30 698 581 4213" class="btn-primary">📞 Κλήση Τώρα</a>
                    <a href="#contact" class="btn-secondary">Δωρεάν Προσφορά</a>
                </div>
            </div>

            <!-- Right Column - Logo -->
            <div class="hero-visual">
                <div class="logo-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/kyriakis-logo.png" alt="Kyriakis Plumber Professional Logo" class="hero-logo">
                    
                    <!-- Floating Badges -->
                    <div class="floating-badge badge-1">
                        <span class="badge-icon">✓</span>
                        <span class="badge-text">Πιστοποιημένος</span>
                    </div>
                    
                    <div class="floating-badge badge-2">
                        <span class="badge-icon">⭐</span>
                        <span class="badge-text">Υψηλή Ποιότητα</span>
                    </div>

                    <div class="floating-badge badge-3">
                        <span class="badge-icon">👥</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="services-section" id="services">
    <div class="services-background">
        <div class="bg-circle service-bg-1"></div>
        <div class="bg-circle service-bg-2"></div>
    </div>
    
    <div class="container">
        <div class="section-header">
            <div class="section-badge">
                <span class="badge-icon">🔧</span>
                Οι Υπηρεσίες Μας
            </div>
            
            <h2 class="section-title">
                <span class="gradient-text">Επαγγελματικές</span><br>
                <span class="text-dark">Υδραυλικές Υπηρεσίες</span>
            </h2>
            
            <p class="section-subtitle">
                Πάνω από 10 χρόνια εμπειρίας στο χώρο των υδραυλικών. Εξειδικευμένοι στην εγκατάσταση, επισκευή και συντήρηση όλων των ειδών υδραυλικών συστημάτων.
            </p>
        </div>

        <div class="services-grid">
            <div class="service-card">
                <div class="service-image-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/pipe-installation.jpg" alt="Pipe Installation" class="service-image">
                    <div class="service-overlay"></div>
                    <div class="service-icon">🔧</div>
                </div>
                <div class="service-content">
                    <h4 class="service-category">Pipe Installation</h4>
                    <h3 class="service-title">Εγκατάσταση Νέων Σωληνώσεων</h3>
                    <p class="service-description">Σύγχρονα συστήματα σωληνώσεων με premium υλικά και προηγμένες τεχνικές για μακροχρόνια αποτελέσματα.</p>
                    <ul class="service-features">
                        <li>Premium Υλικά</li>
                        <li>Σύγχρονες Τεχνικές</li>
                    </ul>
                    <a href="#contact" class="service-cta">Προσφορά</a>
                </div>
            </div>
            
            <div class="service-card">
                <div class="service-image-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/underfloor-heating.jpg" alt="Underfloor Heating" class="service-image">
                    <div class="service-overlay"></div>
                    <div class="service-icon">🌡️</div>
                </div>
                <div class="service-content">
                    <h4 class="service-category">Underfloor Heating</h4>
                    <h3 class="service-title">Ενδοδαπέδια Θέρμανση</h3>
                    <p class="service-description">Ενεργειακά αποδοτικά συστήματα θέρμανσης για άνετη και ομοιόμορφη κατανομή θερμοκρασίας.</p>
                    <ul class="service-features">
                        <li>Ενεργειακά Αποδοτικά</li>
                        <li>Ομοιόμορφη Θέρμανση</li>
                    </ul>
                    <a href="#contact" class="service-cta">Προσφορά</a>
                </div>
            </div>
            
            <div class="service-card emergency-service">
                <div class="service-image-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/emergency-repairs.jpg" alt="Emergency Repairs" class="service-image">
                    <div class="service-overlay"></div>
                    <div class="service-icon">⚠️</div>
                    <div class="urgent-badge">ΕΠΕΙΓΟΝ</div>
                </div>
                <div class="service-content">
                    <h4 class="service-category">Emergency Repairs</h4>
                    <h3 class="service-title">Επισκευές Έκτακτης Ανάγκης</h3>
                    <p class="service-description">24/7 υπηρεσίες έκτακτης ανάγκης με εγγυημένη ποιότητα και γρήγορους χρόνους ανταπόκρισης.</p>
                    <ul class="service-features">
                        <li>24/7 Διαθέσιμοι</li>
                        <li>Γρήγορη Ανταπόκριση</li>
                    </ul>
                    <a href="tel:+30 698 581 4213" class="service-cta emergency-cta">Κλήση Τώρα</a>
                </div>
            </div>
            
            <div class="service-card">
                <div class="service-image-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/solar-system.jpg" alt="Solar Systems" class="service-image">
                    <div class="service-overlay"></div>
                    <div class="service-icon">☀️</div>
                </div>
                <div class="service-content">
                    <h4 class="service-category">Solar Systems</h4>
                    <h3 class="service-title">Ηλιακά Συστήματα Νερού</h3>
                    <p class="service-description">Φιλικά προς το περιβάλλον ηλιακά συστήματα θέρμανσης νερού για βιώσιμο και οικονομικό ζεστό νερό.</p>
                    <ul class="service-features">
                        <li>Φιλικά προς το Περιβάλλον</li>
                        <li>Οικονομικά</li>
                    </ul>
                    <a href="#contact" class="service-cta">Προσφορά</a>
                </div>
            </div>
            
            <div class="service-card">
                <div class="service-image-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/water-heaters.jpg" alt="Water Heaters" class="service-image">
                    <div class="service-overlay"></div>
                    <div class="service-icon">💧</div>
                </div>
                <div class="service-content">
                    <h4 class="service-category">Water Heaters</h4>
                    <h3 class="service-title">Εγκατάσταση Θερμοσίφωνων</h3>
                    <p class="service-description">Επαγγελματική εγκατάσταση και συντήρηση ηλεκτρικών και αεριακών συστημάτων θέρμανσης νερού.</p>
                    <ul class="service-features">
                        <li>Ηλεκτρικοί & Αεριακοί</li>
                        <li>Πλήρης Συντήρηση</li>
                    </ul>
                    <a href="#contact" class="service-cta">Προσφορά</a>
                </div>
            </div>
            
            <div class="service-card">
                <div class="service-image-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/boiler-systems.jpg" alt="Boiler Systems" class="service-image">
                    <div class="service-overlay"></div>
                    <div class="service-icon">🔥</div>
                </div>
                <div class="service-content">
                    <h4 class="service-category">Boiler Systems</h4>
                    <h3 class="service-title">Εγκατάσταση Λεβήτων</h3>
                    <p class="service-description">Πλήρη εγκατάσταση λεβητοστασίου και συντήρηση για οικιακές και εμπορικές ιδιοκτησίες.</p>
                    <ul class="service-features">
                        <li>Οικιακά & Εμπορικά</li>
                        <li>Πλήρη Εγκατάσταση</li>
                    </ul>
                    <a href="#contact" class="service-cta">Προσφορά</a>
                </div>
            </div>
        </div>

        <!-- Bottom CTA Section -->
        <div class="services-cta">
            <div class="cta-card">
                <h3>
                    <span class="gradient-text">Χρειάζεστε Επαγγελματικές</span><br>
                    <span class="text-dark">Υδραυλικές Υπηρεσίες;</span>
                </h3>
                <p>Επικοινωνήστε μαζί μας σήμερα για δωρεάν συμβουλευτική και προσφορά</p>
                <div class="cta-buttons">
                    <a href="tel:+30 698 581 4213" class="btn-primary">📞 Κλήση Τώρα</a>
                    <a href="#contact" class="btn-secondary">📱 WhatsApp</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section class="about-section" id="about">
    <div class="container">
        <div class="about-grid">
            <!-- Left Column - Content -->
            <div class="about-content">
                <h2 class="about-title">Η Κυριάκης Υδραυλικές</h2>
                <h3 class="about-subtitle">Πάνω από 10 χρόνια εμπειρίας στον τομέα</h3>
                <p class="about-description">
                    Πάνω από 10 χρόνια εμπειρίας στο χώρο των υδραυλικών. Εξειδικευμένοι στην εγκατάσταση, επισκευή και συντήρηση όλων των ειδών υδραυλικών συστημάτων.
                </p>

                <div class="about-features">
                    <div class="about-feature">
                        <div class="feature-icon certified">🛡️</div>
                        <div class="feature-content">
                            <h4>Πιστοποιημένος Υδραυλικός</h4>
                            <p>Πλήρως αδειοδοτημένος και ασφαλισμένος για όλες τις υδραυλικές εργασίες</p>
                        </div>
                    </div>
                    
                    <div class="about-feature">
                        <div class="feature-icon emergency">🚨</div>
                        <div class="feature-content">
                            <h4>24/7 Υπηρεσίες Έκτακτης Ανάγκης</h4>
                            <p>Διαθέσιμοι οποιαδήποτε στιγμή για επείγουσες υδραυλικές επισκευές</p>
                        </div>
                    </div>
                    
                    <div class="about-feature">
                        <div class="feature-icon quality">🏆</div>
                        <div class="feature-content">
                            <h4>Εγγυημένη Ποιότητα</h4>
                            <p>Χρησιμοποιούμε μόνο υψηλής ποιότητας υλικά και παρέχουμε εγγύηση για όλες τις εργασίες</p>
                        </div>
                    </div>
                </div>

                <div class="about-cta">
                    <h4>Χρειάζεστε Υδραυλικό;</h4>
                    <p>Επικοινωνήστε μαζί μας για άμεση εξυπηρέτηση και δωρεάν προσφορά</p>
                </div>
            </div>

            <!-- Right Column - Stats & Partners -->
            <div class="about-sidebar">
                <!-- Statistics -->
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">500</div>
                        <div class="stat-label">Ικανοποιημένοι Πελάτες</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">10</div>
                        <div class="stat-label">Χρόνια Εμπειρίας</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">1000</div>
                        <div class="stat-label">Ολοκληρωμένα Projects</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">24</div>
                        <div class="stat-label">Ώρες Διαθεσιμότητα</div>
                    </div>
                </div>

                <!-- Partners -->
                <div class="partners-card">
                    <h4>Συνεργάτες Υλικών</h4>
                    <div class="partners-grid">
                        <div class="partner-item">Aquatherm</div>
                        <div class="partner-item">Valsir</div>
                        <div class="partner-item">Uponor</div>
                        <div class="partner-item">Rehau</div>
                    </div>
                </div>

                <!-- Quality badges -->
                <div class="quality-badges">
                    <div class="quality-badge certified">
                        <span class="badge-icon">✓</span>
                        <span class="badge-text">Πιστοποιημένος</span>
                    </div>
                    <div class="quality-badge premium">
                        <span class="badge-icon">⭐</span>
                        <span class="badge-text">Premium Ποιότητα</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section class="contact-section" id="contact">
    <div class="contact-background">
        <div class="bg-circle contact-bg-1"></div>
        <div class="bg-circle contact-bg-2"></div>
    </div>
    
    <div class="container">
        <div class="section-header">
            <div class="section-badge">
                <span class="badge-icon">⚡</span>
                Επικοινωνία
            </div>
            
            <h2 class="section-title">
                <span class="gradient-text">Επικοινωνήστε</span><br>
                <span class="text-white">Μαζί Μας</span>
            </h2>
            
            <p class="section-subtitle">
                Είμαστε εδώ για να απαντήσουμε σε όλες τις ερωτήσεις σας και να παρέχουμε τις καλύτερες υδραυλικές υπηρεσίες
            </p>
        </div>

        <div class="contact-grid">
            <!-- Contact Information -->
            <div class="contact-info">
                <h3>Στοιχεία Επικοινωνίας</h3>
                
                <div class="contact-item phone">
                    <div class="contact-icon">📞</div>
                    <div class="contact-details">
                        <h4>Τηλέφωνο</h4>
                        <p><a href="tel:+30 698 581 4213">+30 698 581 4213</a></p>
                        <span>Διαθέσιμοι 24/7 για έκτακτα περιστατικά</span>
                    </div>
                </div>

                <div class="contact-item email">
                    <div class="contact-icon">📧</div>
                    <div class="contact-details">
                        <h4>Email</h4>
                        <p><a href="mailto:kyriakisplumber@gmail.com">kyriakisplumber@gmail.com</a></p>
                        <span>Απαντάμε εντός 24 ωρών</span>
                    </div>
                </div>

                <div class="contact-item location">
                    <div class="contact-icon">📍</div>
                    <div class="contact-details">
                        <h4>Περιοχή Εξυπηρέτησης</h4>
                        <p>Αθήνα και Περιχώρα</p>
                        <span>Εξυπηρετούμε όλη την Αττική</span>
                    </div>
                </div>

                <div class="contact-item whatsapp">
                    <div class="contact-icon">💬</div>
                    <div class="contact-details">
                        <h4>WhatsApp</h4>
                        <p><a href="https://wa.me/30698581421">+30 698 581 4213</a></p>
                        <span>Γρήγορη επικοινωνία μέσω chat</span>
                    </div>
                </div>

                <div class="contact-buttons">
                    <a href="tel:+30 698 581 4213" class="btn-primary">📞 Κλήση Τώρα</a>
                    <a href="https://wa.me/30698581421" class="btn-secondary">💬 WhatsApp</a>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="contact-form-container">
                <div class="form-card">
                    <h3>Στείλτε μας Μήνυμα</h3>
                    <p>Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό</p>
                    
                    <form class="contact-form" action="#" method="POST">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Όνομα</label>
                                <input type="text" id="name" name="name" placeholder="Το όνομά σας" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="your@email.com" required>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone">Τηλέφωνο</label>
                                <input type="tel" id="phone" name="phone" placeholder="+30 xxx xxx xxxx">
                            </div>
                            <div class="form-group">
                                <label for="service">Υπηρεσία</label>
                                <select id="service" name="service">
                                    <option value="">Επιλέξτε υπηρεσία</option>
                                    <option value="emergency">Επείγουσα Επισκευή</option>
                                    <option value="installation">Εγκατάσταση</option>
                                    <option value="heating">Θέρμανση</option>
                                    <option value="solar">Ηλιακά Συστήματα</option>
                                    <option value="boiler">Λέβητες</option>
                                    <option value="other">Άλλο</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="message">Μήνυμα</label>
                            <textarea id="message" name="message" rows="6" placeholder="Περιγράψτε την ανάγκη σας εδώ..." required></textarea>
                        </div>

                        <button type="submit" class="form-submit">
                            <span class="submit-icon">📤</span>
                            Αποστολή Μηνύματος
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Emergency Section -->
        <div class="emergency-section">
            <div class="emergency-card">
                <div class="emergency-icon">⚠️</div>
                <h3>Επείγουσα Ανάγκη;</h3>
                <p>Για επείγουσες υδραυλικές βλάβες, καλέστε τώρα!</p>
                <a href="tel:+30 698 581 4213" class="emergency-button">📞 Κλήση Έκτακτης Ανάγκης</a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>