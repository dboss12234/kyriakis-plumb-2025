<?php get_header(); ?>

<!-- Hero Section - EXACT MATCH -->
<section id="home" class="hero-section relative min-h-screen bg-gradient-hero text-white overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 bg-gradient-overlay"></div>
    <div class="bg-circle bg-circle-1 absolute top-20 right-20 w-72 h-72 bg-primary-30 rounded-full opacity-20 blur-3xl animate-float"></div>
    <div class="bg-circle bg-circle-2 absolute bottom-32 left-16 w-96 h-96 bg-accent-30 rounded-full opacity-15 blur-3xl animate-float-delayed"></div>
    
    <div class="relative container mx-auto px-6 py-24">
        <div class="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <!-- Left Column - Content -->
            <div class="space-y-8 animate-fade-in">
                <div class="space-y-6">
                    <div class="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white-20 backdrop-blur-sm border border-white-30 rounded-full text-sm font-medium text-white">
                        <span class="w-4 h-4 text-accent">⚡</span>
                        Επαγγελματικές Υπηρεσίες 24/7
                    </div>
                    
                    <h1 class="hero-title text-5xl lg:text-7xl font-bold leading-tight">
                        <span class="text-accent">Κυριάκης</span><br>
                        <span class="text-white">Υδραυλικές</span><br>
                        <span class="text-white-80 text-3xl lg:text-4xl font-medium">Υπηρεσίες</span>
                    </h1>
                    
                    <div class="emergency-card flex items-center gap-3 p-4 bg-white-20 backdrop-blur-sm border border-white-30 rounded-2xl">
                        <div class="emergency-icon flex items-center justify-center w-12 h-12 bg-emergency-30 rounded-xl">
                            <span class="w-6 h-6 text-emergency animate-pulse">📞</span>
                        </div>
                        <div>
                            <h2 class="text-xl font-semibold text-white">Επείγουσες Κλήσεις</h2>
                            <p class="text-white-80">Διαθέσιμοι 24/7 για έκτακτα περιστατικά</p>
                        </div>
                    </div>
                    
                    <p class="hero-subtitle text-xl text-white-90 leading-relaxed max-w-2xl">
                        Πάνω από 10 χρόνια εμπειρίας στο χώρο των υδραυλικών. Εξειδικευμένοι στην εγκατάσταση, επισκευή και συντήρηση όλων των ειδών υδραυλικών συστημάτων.
                    </p>
                </div>

                <!-- Statistics -->
                <div class="hero-stats grid grid-cols-3 gap-6">
                    <div class="stat-item text-center p-4 bg-white-20 backdrop-blur-sm border border-white-30 rounded-2xl animate-scale-in">
                        <div class="stat-number text-2xl font-bold text-accent">500+</div>
                        <div class="stat-label text-sm text-white-80 font-medium">Ικανοποιημένοι Πελάτες</div>
                    </div>
                    <div class="stat-item text-center p-4 bg-white-20 backdrop-blur-sm border border-white-30 rounded-2xl animate-scale-in" style="animation-delay: 0.2s">
                        <div class="stat-number text-2xl font-bold text-accent">10+</div>
                        <div class="stat-label text-sm text-white-80 font-medium">Χρόνια Εμπειρίας</div>
                    </div>
                    <div class="stat-item text-center p-4 bg-white-20 backdrop-blur-sm border border-white-30 rounded-2xl animate-scale-in" style="animation-delay: 0.4s">
                        <div class="stat-number text-2xl font-bold text-accent">24/7</div>
                        <div class="stat-label text-sm text-white-80 font-medium">Διαθεσιμότητα</div>
                    </div>
                </div>

                <!-- CTA Buttons -->
                <div class="hero-buttons flex flex-col sm:flex-row gap-4 pt-4">
                    <a href="tel:+30698581421" class="btn-hero group bg-accent hover:bg-accent-90 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg">
                        <span class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300">📞</span>
                        Κλήση Τώρα
                    </a>
                    <a href="#contact" class="btn-outline bg-white-20 border-white-30 text-white hover:bg-white-30 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center transition-all duration-300">
                        Δωρεάν Προσφορά
                    </a>
                </div>
            </div>

            <!-- Right Column - Visual Element -->
            <div class="hero-visual relative animate-slide-up" style="animation-delay: 0.3s">
                <div class="logo-container relative">
                    <!-- Main Logo Card -->
                    <div class="relative p-8 bg-transparent rounded-3xl">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/kyriakis-logo.png" 
                            alt="Kyriakis Plumber Professional Logo"
                            class="hero-logo w-full h-auto max-w-xs lg:max-w-sm mx-auto object-contain aspect-square drop-shadow-2xl"
                            style="filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))"
                        />
                        
                        <!-- Floating Badges -->
                        <div class="floating-badge badge-1 absolute -top-4 -right-4 p-3 bg-white-20 backdrop-blur-sm border border-white-30 rounded-2xl animate-float">
                            <div class="flex items-center gap-2 text-success">
                                <span class="w-5 h-5">✓</span>
                                <span class="text-sm font-semibold">Πιστοποιημένος</span>
                            </div>
                        </div>
                        
                        <div class="floating-badge badge-2 absolute -bottom-4 -left-4 p-3 bg-white-20 backdrop-blur-sm border border-white-30 rounded-2xl animate-float" style="animation-delay: 1s">
                            <div class="flex items-center gap-2 text-accent">
                                <span class="w-5 h-5">⭐</span>
                                <span class="text-sm font-semibold">Υψηλή Ποιότητα</span>
                            </div>
                        </div>

                        <div class="floating-badge badge-3 absolute top-1/2 -right-6 p-2 bg-white-20 backdrop-blur-sm border border-white-30 rounded-xl animate-float" style="animation-delay: 2s">
                            <span class="w-6 h-6 text-primary">👥</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Bottom Gradient Fade -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
</section>

<!-- Services Section - EXACT MATCH -->
<section id="services" class="services-section py-32 relative">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-gradient-surface"></div>
    <div class="bg-circle service-bg-1 absolute top-20 left-20 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl"></div>
    <div class="bg-circle service-bg-2 absolute bottom-20 right-20 w-80 h-80 bg-gradient-accent rounded-full opacity-10 blur-3xl"></div>
    
    <div class="relative container mx-auto px-6">
        <div class="section-header text-center mb-20 animate-fade-in">
            <div class="section-badge inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
                <span class="w-4 h-4">🔧</span>
                Οι Υπηρεσίες Μας
            </div>
            
            <h2 class="section-title text-5xl lg:text-6xl font-bold mb-6">
                <span class="gradient-text">Επαγγελματικές</span><br>
                <span class="text-foreground">Υδραυλικές Υπηρεσίες</span>
            </h2>
            
            <p class="section-subtitle text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Πάνω από 10 χρόνια εμπειρίας στο χώρο των υδραυλικών. Εξειδικευμένοι στην εγκατάσταση, επισκευή και συντήρηση όλων των ειδών υδραυλικών συστημάτων.
            </p>
        </div>

        <div class="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <!-- Service 1: Pipe Installation -->
            <div class="service-card group modern-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 animate-scale-in">
                <div class="service-image-container relative h-64 overflow-hidden">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/pipe-installation.jpg" 
                        alt="Pipe Installation"
                        class="service-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div class="service-overlay absolute inset-0 bg-gradient-to-t from-black-50 via-transparent to-transparent"></div>
                    
                    <!-- Floating Icon -->
                    <div class="service-icon absolute top-6 left-6">
                        <div class="glass p-4 rounded-2xl">
                            <span class="w-8 h-8 text-primary">🔧</span>
                        </div>
                    </div>
                </div>
                
                <div class="service-content p-8 space-y-6">
                    <div class="space-y-2">
                        <h4 class="service-category text-sm text-primary font-medium uppercase tracking-wider">Pipe Installation</h4>
                        <h3 class="service-title text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                            Εγκατάσταση Νέων Σωληνώσεων
                        </h3>
                    </div>
                    
                    <p class="service-description text-muted-foreground leading-relaxed">Σύγχρονα συστήματα σωληνώσεων με premium υλικά και προηγμένες τεχνικές για μακροχρόνια αποτελέσματα.</p>
                    
                    <div class="service-features space-y-3">
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 bg-gradient-primary rounded-full"></div>
                            <span class="text-sm text-muted-foreground font-medium">Premium Υλικά</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 bg-gradient-primary rounded-full"></div>
                            <span class="text-sm text-muted-foreground font-medium">Σύγχρονες Τεχνικές</span>
                        </div>
                    </div>
                    
                    <a href="#contact" class="service-cta w-full group bg-muted hover:bg-primary hover:text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300">
                        Προσφορά
                    </a>
                </div>
            </div>

            <!-- Service 2: Underfloor Heating -->
            <div class="service-card group modern-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 animate-scale-in" style="animation-delay: 0.1s">
                <div class="service-image-container relative h-64 overflow-hidden">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/underfloor-heating.jpg" 
                        alt="Underfloor Heating"
                        class="service-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div class="service-overlay absolute inset-0 bg-gradient-to-t from-black-50 via-transparent to-transparent"></div>
                    
                    <div class="service-icon absolute top-6 left-6">
                        <div class="glass p-4 rounded-2xl">
                            <span class="w-8 h-8 text-accent">🌡️</span>
                        </div>
                    </div>
                </div>
                
                <div class="service-content p-8 space-y-6">
                    <div class="space-y-2">
                        <h4 class="service-category text-sm text-primary font-medium uppercase tracking-wider">Underfloor Heating</h4>
                        <h3 class="service-title text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                            Ενδοδαπέδια Θέρμανση
                        </h3>
                    </div>
                    
                    <p class="service-description text-muted-foreground leading-relaxed">Ενεργειακά αποδοτικά συστήματα θέρμανσης για άνετη και ομοιόμορφη κατανομή θερμοκρασίας.</p>
                    
                    <div class="service-features space-y-3">
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 bg-gradient-primary rounded-full"></div>
                            <span class="text-sm text-muted-foreground font-medium">Ενεργειακά Αποδοτικά</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 bg-gradient-primary rounded-full"></div>
                            <span class="text-sm text-muted-foreground font-medium">Ομοιόμορφη Θέρμανση</span>
                        </div>
                    </div>
                    
                    <a href="#contact" class="service-cta w-full group bg-muted hover:bg-primary hover:text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300">
                        Προσφορά
                    </a>
                </div>
            </div>

            <!-- Service 3: Emergency Repairs -->
            <div class="service-card emergency-service group modern-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 animate-scale-in" style="animation-delay: 0.2s">
                <div class="service-image-container relative h-64 overflow-hidden">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/emergency-repairs.jpg" 
                        alt="Emergency Repairs"
                        class="service-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div class="service-overlay absolute inset-0 bg-gradient-to-t from-black-50 via-transparent to-transparent"></div>
                    
                    <div class="service-icon absolute top-6 left-6">
                        <div class="glass p-4 rounded-2xl">
                            <span class="w-8 h-8 text-emergency">⚠️</span>
                        </div>
                    </div>

                    <!-- Urgent Badge -->
                    <div class="urgent-badge absolute top-6 right-6">
                        <div class="bg-emergency-90 backdrop-blur-sm rounded-xl px-3 py-1 animate-pulse-glow">
                            <span class="text-sm font-bold text-white">ΕΠΕΙΓΟΝ</span>
                        </div>
                    </div>
                </div>
                
                <div class="service-content p-8 space-y-6">
                    <div class="space-y-2">
                        <h4 class="service-category text-sm text-primary font-medium uppercase tracking-wider">Emergency Repairs</h4>
                        <h3 class="service-title text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                            Επισκευές Έκτακτης Ανάγκης
                        </h3>
                    </div>
                    
                    <p class="service-description text-muted-foreground leading-relaxed">24/7 υπηρεσίες έκτακτης ανάγκης με εγγυημένη ποιότητα και γρήγορους χρόνους ανταπόκρισης.</p>
                    
                    <div class="service-features space-y-3">
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 bg-gradient-primary rounded-full"></div>
                            <span class="text-sm text-muted-foreground font-medium">24/7 Διαθέσιμοι</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 bg-gradient-primary rounded-full"></div>
                            <span class="text-sm text-muted-foreground font-medium">Γρήγορη Ανταπόκριση</span>
                        </div>
                    </div>
                    
                    <a href="tel:+30698581421" class="service-cta emergency-cta w-full group bg-emergency hover:bg-emergency-dark text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300 flex items-center justify-center gap-2">
                        Κλήση Τώρα
                        <span class="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300">📞</span>
                    </a>
                </div>
            </div>

            <!-- Service 4: Solar Systems -->
            <div class="service-card group modern-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 animate-scale-in" style="animation-delay: 0.3s">
                <div class="service-image-container relative h-64 overflow-hidden">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/solar-system.jpg" 
                        alt="Solar Systems"
                        class="service-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div class="service-overlay absolute inset-0 bg-gradient-to-t from-black-50 via-transparent to-transparent"></div>
                    
                    <div class="service-icon absolute top-6 left-6">
                        <div class="glass p-4 rounded-2xl">
                            <span class="w-8 h-8 text-accent">☀️</span>
                        </div>
                    </div>
                </div>
                
                <div class="service-content p-8 space-y-6">
                    <div class="space-y-2">
                        <h4 class="service-category text-sm text-primary font-medium uppercase tracking-wider">Solar Systems</h4>
                        <h3 class="service-title text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                            Ηλιακά Συστήματα Νερού
                        </h3>
                    </div>
                    
                    <p class="service-description text-muted-foreground leading-relaxed">Φιλικά προς το περιβάλλον ηλιακά συστήματα θέρμανσης νερού για βιώσιμο και οικονομικό ζεστό νερό.</p>
                    
                    <div class="service-features space-y-3">
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 bg-gradient-primary rounded-full"></div>
                            <span class="text-sm text-muted-foreground font-medium">Φιλικά προς το Περιβάλλον</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 bg-gradient-primary rounded-full"></div>
                            <span class="text-sm text-muted-foreground font-medium">Οικονομικά</span>
                        </div>
                    </div>
                    
                    <a href="#contact" class="service-cta w-full group bg-muted hover:bg-primary hover:text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300">
                        Προσφορά
                    </a>
                </div>
            </div>

            <!-- Service 5: Water Heaters -->
            <div class="service-card group modern-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 animate-scale-in" style="animation-delay: 0.4s">
                <div class="service-image-container relative h-64 overflow-hidden">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/water-heaters.jpg" 
                        alt="Water Heaters"
                        class="service-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div class="service-overlay absolute inset-0 bg-gradient-to-t from-black-50 via-transparent to-transparent"></div>
                    
                    <div class="service-icon absolute top-6 left-6">
                        <div class="glass p-4 rounded-2xl">
                            <span class="w-8 h-8 text-primary">💧</span>
                        </div>
                    </div>
                </div>
                
                <div class="service-content p-8 space-y-6">
                    <div class="space-y-2">
                        <h4 class="service-category text-sm text-primary font-medium uppercase tracking-wider">Water Heaters</h4>
                        <h3 class="service-title text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                            Εγκατάσταση Θερμοσίφωνων
                        </h3>
                    </div>
                    
                    <p class="service-description text-muted-foreground leading-relaxed">Επαγγελματική εγκατάσταση και συντήρηση ηλεκτρικών και αεριακών συστημάτων θέρμανσης νερού.</p>
                    
                    <div class="service-features space-y-3">
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 bg-gradient-primary rounded-full"></div>
                            <span class="text-sm text-muted-foreground font-medium">Ηλεκτρικοί & Αεριακοί</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 bg-gradient-primary rounded-full"></div>
                            <span class="text-sm text-muted-foreground font-medium">Πλήρης Συντήρηση</span>
                        </div>
                    </div>
                    
                    <a href="#contact" class="service-cta w-full group bg-muted hover:bg-primary hover:text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300">
                        Προσφορά
                    </a>
                </div>
            </div>

            <!-- Service 6: Boiler Systems -->
            <div class="service-card group modern-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 animate-scale-in" style="animation-delay: 0.5s">
                <div class="service-image-container relative h-64 overflow-hidden">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/boiler-systems.jpg" 
                        alt="Boiler Systems"
                        class="service-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div class="service-overlay absolute inset-0 bg-gradient-to-t from-black-50 via-transparent to-transparent"></div>
                    
                    <div class="service-icon absolute top-6 left-6">
                        <div class="glass p-4 rounded-2xl">
                            <span class="w-8 h-8 text-primary">🔥</span>
                        </div>
                    </div>
                </div>
                
                <div class="service-content p-8 space-y-6">
                    <div class="space-y-2">
                        <h4 class="service-category text-sm text-primary font-medium uppercase tracking-wider">Boiler Systems</h4>
                        <h3 class="service-title text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                            Εγκατάσταση Λεβήτων
                        </h3>
                    </div>
                    
                    <p class="service-description text-muted-foreground leading-relaxed">Πλήρη εγκατάσταση λεβητοστασίου και συντήρηση για οικιακές και εμπορικές ιδιοκτησίες.</p>
                    
                    <div class="service-features space-y-3">
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 bg-gradient-primary rounded-full"></div>
                            <span class="text-sm text-muted-foreground font-medium">Οικιακά & Εμπορικά</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 bg-gradient-primary rounded-full"></div>
                            <span class="text-sm text-muted-foreground font-medium">Πλήρη Εγκατάσταση</span>
                        </div>
                    </div>
                    
                    <a href="#contact" class="service-cta w-full group bg-muted hover:bg-primary hover:text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300">
                        Προσφορά
                    </a>
                </div>
            </div>
        </div>

        <!-- Bottom CTA Section -->
        <div class="services-cta text-center animate-slide-up">
            <div class="cta-card relative p-12 modern-card rounded-3xl shadow-glow max-w-4xl mx-auto">
                <div class="absolute inset-0 bg-gradient-hero rounded-3xl opacity-5"></div>
                
                <div class="relative space-y-8">
                    <div class="space-y-4">
                        <h3 class="text-3xl lg:text-4xl font-bold">
                            <span class="gradient-text">Χρειάζεστε Επαγγελματικές</span><br>
                            <span class="text-foreground">Υδραυλικές Υπηρεσίες;</span>
                        </h3>
                        
                        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Επικοινωνήστε μαζί μας σήμερα για δωρεάν συμβουλευτική και προσφορά
                        </p>
                    </div>
                    
                    <div class="cta-buttons flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="tel:+30698581421" class="btn-hero group bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg">
                            <span class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300">📞</span>
                            Κλήση Τώρα
                        </a>
                        <a href="https://wa.me/30698581421" class="btn-outline bg-background-50 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300">
                            <span class="w-5 h-5">📱</span>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About Section - EXACT MATCH -->
<section id="about" class="about-section py-20 bg-secondary-30">
    <div class="container mx-auto px-4">
        <div class="about-grid grid lg:grid-cols-2 gap-16 items-center">
            <div class="about-content space-y-8">
                <div class="space-y-4">
                    <h2 class="about-title text-4xl font-bold text-foreground">
                        Η Κυριάκης Υδραυλικές
                    </h2>
                    <h3 class="about-subtitle text-2xl text-primary">
                        Πάνω από 10 χρόνια εμπειρίας στον τομέα
                    </h3>
                    <p class="about-description text-lg text-muted-foreground leading-relaxed">
                        Πάνω από 10 χρόνια εμπειρίας στο χώρο των υδραυλικών. Εξειδικευμένοι στην εγκατάσταση, επισκευή και συντήρηση όλων των ειδών υδραυλικών συστημάτων.
                    </p>
                </div>

                <div class="about-features space-y-6">
                    <div class="about-feature flex space-x-4">
                        <div class="feature-icon bg-white rounded-full p-3 shadow-lg shrink-0">
                            <span class="w-6 h-6 text-success">🛡️</span>
                        </div>
                        <div class="feature-content">
                            <h4 class="font-semibold text-foreground mb-2">Πιστοποιημένος Υδραυλικός</h4>
                            <p class="text-muted-foreground">Πλήρως αδειοδοτημένος και ασφαλισμένος για όλες τις υδραυλικές εργασίες</p>
                        </div>
                    </div>
                    
                    <div class="about-feature flex space-x-4">
                        <div class="feature-icon bg-white rounded-full p-3 shadow-lg shrink-0">
                            <span class="w-6 h-6 text-emergency">🚨</span>
                        </div>
                        <div class="feature-content">
                            <h4 class="font-semibold text-foreground mb-2">24/7 Υπηρεσίες Έκτακτης Ανάγκης</h4>
                            <p class="text-muted-foreground">Διαθέσιμοι οποιαδήποτε στιγμή για επείγουσες υδραυλικές επισκευές</p>
                        </div>
                    </div>
                    
                    <div class="about-feature flex space-x-4">
                        <div class="feature-icon bg-white rounded-full p-3 shadow-lg shrink-0">
                            <span class="w-6 h-6 text-accent">🏆</span>
                        </div>
                        <div class="feature-content">
                            <h4 class="font-semibold text-foreground mb-2">Εγγυημένη Ποιότητα</h4>
                            <p class="text-muted-foreground">Χρησιμοποιούμε μόνο υψηλής ποιότητας υλικά και παρέχουμε εγγύηση για όλες τις εργασίες</p>
                        </div>
                    </div>
                </div>

                <div class="about-cta bg-gradient-to-r from-primary to-primary-90 text-primary-foreground rounded-xl p-6">
                    <h4 class="font-semibold mb-2">Χρειάζεστε Υδραυλικό;</h4>
                    <p class="text-primary-foreground-90">
                        Επικοινωνήστε μαζί μας για άμεση εξυπηρέτηση και δωρεάν προσφορά
                    </p>
                </div>
            </div>

            <div class="about-sidebar space-y-8">
                <!-- Statistics -->
                <div class="stats-grid grid grid-cols-2 gap-6">
                    <div class="stat-card bg-white rounded-xl p-6 text-center shadow-lg">
                        <div class="stat-number text-3xl font-bold text-primary mb-2">500</div>
                        <div class="stat-label text-sm text-muted-foreground">Ικανοποιημένοι Πελάτες</div>
                    </div>
                    <div class="stat-card bg-white rounded-xl p-6 text-center shadow-lg">
                        <div class="stat-number text-3xl font-bold text-primary mb-2">10</div>
                        <div class="stat-label text-sm text-muted-foreground">Χρόνια Εμπειρίας</div>
                    </div>
                    <div class="stat-card bg-white rounded-xl p-6 text-center shadow-lg">
                        <div class="stat-number text-3xl font-bold text-primary mb-2">1000</div>
                        <div class="stat-label text-sm text-muted-foreground">Ολοκληρωμένα Projects</div>
                    </div>
                    <div class="stat-card bg-white rounded-xl p-6 text-center shadow-lg">
                        <div class="stat-number text-3xl font-bold text-primary mb-2">24</div>
                        <div class="stat-label text-sm text-muted-foreground">Ώρες Διαθεσιμότητα</div>
                    </div>
                </div>

                <!-- Partners -->
                <div class="partners-card bg-white rounded-xl p-6 shadow-lg">
                    <h4 class="font-semibold text-foreground mb-4 text-center">
                        Συνεργάτες Υλικών
                    </h4>
                    <div class="partners-grid grid grid-cols-2 gap-4">
                        <div class="partner-item bg-secondary-30 rounded-lg p-4 text-center">
                            <span class="font-medium text-foreground">Aquatherm</span>
                        </div>
                        <div class="partner-item bg-secondary-30 rounded-lg p-4 text-center">
                            <span class="font-medium text-foreground">Valsir</span>
                        </div>
                        <div class="partner-item bg-secondary-30 rounded-lg p-4 text-center">
                            <span class="font-medium text-foreground">Uponor</span>
                        </div>
                        <div class="partner-item bg-secondary-30 rounded-lg p-4 text-center">
                            <span class="font-medium text-foreground">Rehau</span>
                        </div>
                    </div>
                </div>

                <!-- Quality badges -->
                <div class="quality-badges flex justify-center space-x-4">
                    <div class="quality-badge bg-success text-success-foreground rounded-full px-4 py-2 flex items-center space-x-2">
                        <span class="w-5 h-5">✓</span>
                        <span class="font-medium">Πιστοποιημένος</span>
                    </div>
                    <div class="quality-badge bg-accent text-accent-foreground rounded-full px-4 py-2 flex items-center space-x-2">
                        <span class="w-5 h-5">⭐</span>
                        <span class="font-medium">Premium Ποιότητα</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section - EXACT MATCH -->
<section id="contact" class="contact-section py-32 relative">
    <div class="absolute inset-0 bg-gradient-surface"></div>
    <div class="bg-circle contact-bg-1 absolute top-20 left-20 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl"></div>
    <div class="bg-circle contact-bg-2 absolute bottom-20 right-20 w-80 h-80 bg-gradient-accent rounded-full opacity-10 blur-3xl"></div>
    
    <div class="relative container mx-auto px-6">
        <div class="section-header text-center mb-20 animate-fade-in">
            <div class="section-badge inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-medium text-primary mb-8">
                <span class="w-5 h-5">⚡</span>
                Επικοινωνία
            </div>
            
            <h2 class="section-title text-5xl lg:text-6xl font-bold mb-6">
                <span class="gradient-text">Επικοινωνήστε</span><br>
                <span class="text-foreground">Μαζί Μας</span>
            </h2>
            
            <p class="section-subtitle text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Είμαστε εδώ για να απαντήσουμε σε όλες τις ερωτήσεις σας και να παρέχουμε τις καλύτερες υδραυλικές υπηρεσίες
            </p>
        </div>

        <div class="contact-grid grid lg:grid-cols-3 gap-12 mb-20">
            <!-- Contact Information -->
            <div class="contact-info space-y-8 animate-slide-up">
                <h3 class="text-2xl font-bold text-foreground mb-8">Στοιχεία Επικοινωνίας</h3>
                
                <div class="contact-item modern-card p-6 rounded-3xl hover:shadow-lg transition-all duration-300 animate-scale-in">
                    <div class="flex items-start gap-4">
                        <div class="contact-icon p-4 bg-primary-10 rounded-2xl">
                            <span class="w-8 h-8 text-primary">📞</span>
                        </div>
                        <div class="contact-details flex-1 space-y-1">
                            <h4 class="font-bold text-lg text-foreground">Τηλέφωνο</h4>
                            <p class="text-primary font-semibold text-lg">+30 698 581 4213</p>
                            <p class="text-sm text-muted-foreground">Διαθέσιμοι 24/7 για έκτακτα περιστατικά</p>
                        </div>
                    </div>
                </div>

                <div class="contact-item modern-card p-6 rounded-3xl hover:shadow-lg transition-all duration-300 animate-scale-in" style="animation-delay: 0.1s">
                    <div class="flex items-start gap-4">
                        <div class="contact-icon p-4 bg-accent-10 rounded-2xl">
                            <span class="w-8 h-8 text-accent">📧</span>
                        </div>
                        <div class="contact-details flex-1 space-y-1">
                            <h4 class="font-bold text-lg text-foreground">Email</h4>
                            <p class="text-accent font-semibold text-lg">kyriakisplumber@gmail.com</p>
                            <p class="text-sm text-muted-foreground">Απαντάμε εντός 24 ωρών</p>
                        </div>
                    </div>
                </div>

                <div class="contact-item modern-card p-6 rounded-3xl hover:shadow-lg transition-all duration-300 animate-scale-in" style="animation-delay: 0.2s">
                    <div class="flex items-start gap-4">
                        <div class="contact-icon p-4 bg-success-10 rounded-2xl">
                            <span class="w-8 h-8 text-success">📍</span>
                        </div>
                        <div class="contact-details flex-1 space-y-1">
                            <h4 class="font-bold text-lg text-foreground">Περιοχή Εξυπηρέτησης</h4>
                            <p class="text-success font-semibold text-lg">Αθήνα και Περιχώρα</p>
                            <p class="text-sm text-muted-foreground">Εξυπηρετούμε όλη την Αττική</p>
                        </div>
                    </div>
                </div>

                <div class="contact-item modern-card p-6 rounded-3xl hover:shadow-lg transition-all duration-300 animate-scale-in" style="animation-delay: 0.3s">
                    <div class="flex items-start gap-4">
                        <div class="contact-icon p-4 bg-warning-10 rounded-2xl">
                            <span class="w-8 h-8 text-warning">💬</span>
                        </div>
                        <div class="contact-details flex-1 space-y-1">
                            <h4 class="font-bold text-lg text-foreground">WhatsApp</h4>
                            <p class="text-warning font-semibold text-lg">+30 698 581 4213</p>
                            <p class="text-sm text-muted-foreground">Γρήγορη επικοινωνία μέσω chat</p>
                        </div>
                    </div>
                </div>

                <div class="contact-buttons flex gap-4 pt-4">
                    <a href="tel:+30698581421" class="btn-hero flex-1 group bg-accent hover:bg-accent-dark text-white py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2">
                        <span class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300">📞</span>
                        Κλήση
                    </a>
                    <a href="https://wa.me/30698581421" class="btn-outline flex-1 bg-background-50 border-2 border-success text-success hover:bg-success hover:text-white py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2">
                        <span class="w-5 h-5">💬</span>
                        WhatsApp
                    </a>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="contact-form-container lg:col-span-2 animate-slide-up" style="animation-delay: 0.2s">
                <div class="form-card modern-card p-10 rounded-3xl">
                    <div class="space-y-6 mb-8">
                        <h3 class="text-3xl font-bold gradient-text">Στείλτε μας Μήνυμα</h3>
                        <p class="text-muted-foreground text-lg">
                            Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό
                        </p>
                    </div>

                    <form class="contact-form space-y-6" method="POST" action="">
                        <div class="form-row grid md:grid-cols-2 gap-6">
                            <div class="form-group space-y-3">
                                <label for="name" class="text-base font-semibold">Όνομα</label>
                                <input 
                                    id="name" 
                                    name="name"
                                    placeholder="Το όνομά σας"
                                    required
                                    class="h-12 w-full rounded-xl border-2 border-border focus:border-primary bg-background px-4 py-3 text-foreground transition-colors duration-300"
                                />
                            </div>
                            <div class="form-group space-y-3">
                                <label for="email" class="text-base font-semibold">Email</label>
                                <input 
                                    id="email" 
                                    name="email"
                                    type="email" 
                                    placeholder="your@email.com" 
                                    required
                                    class="h-12 w-full rounded-xl border-2 border-border focus:border-primary bg-background px-4 py-3 text-foreground transition-colors duration-300"
                                />
                            </div>
                        </div>

                        <div class="form-row grid md:grid-cols-2 gap-6">
                            <div class="form-group space-y-3">
                                <label for="phone" class="text-base font-semibold">Τηλέφωνο</label>
                                <input 
                                    id="phone" 
                                    name="phone"
                                    placeholder="+30 xxx xxx xxxx" 
                                    class="h-12 w-full rounded-xl border-2 border-border focus:border-primary bg-background px-4 py-3 text-foreground transition-colors duration-300"
                                />
                            </div>
                            <div class="form-group space-y-3">
                                <label for="service" class="text-base font-semibold">Υπηρεσία</label>
                                <select id="service" name="service" class="h-12 w-full rounded-xl border-2 border-border focus:border-primary bg-background px-4 py-3 text-foreground transition-colors duration-300">
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

                        <div class="form-group space-y-3">
                            <label for="message" class="text-base font-semibold">Μήνυμα</label>
                            <textarea 
                                id="message" 
                                name="message"
                                rows="6"
                                placeholder="Περιγράψτε την ανάγκη σας εδώ..."
                                required
                                class="w-full rounded-xl border-2 border-border focus:border-primary bg-background px-4 py-3 text-foreground transition-colors duration-300 resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            class="form-submit w-full group bg-accent hover:bg-accent-dark text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                        >
                            <span class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">📤</span>
                            Αποστολή Μηνύματος
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Emergency Section -->
        <div class="emergency-section relative p-12 modern-card rounded-3xl text-center animate-fade-in border-2 border-emergency-20 bg-gradient-to-br from-emergency-5 to-emergency-10">
            <div class="absolute inset-0 bg-emergency-5 rounded-3xl"></div>
            
            <div class="relative space-y-6">
                <div class="flex justify-center">
                    <div class="emergency-icon p-6 bg-emergency-20 rounded-3xl animate-pulse-glow">
                        <span class="w-12 h-12 text-emergency">⚠️</span>
                    </div>
                </div>
                
                <h3 class="text-3xl lg:text-4xl font-bold text-foreground">
                    Επείγουσα Ανάγκη;
                </h3>
                
                <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Για επείγουσες υδραυλικές βλάβες, καλέστε τώρα!
                </p>
                
                <a href="tel:+30698581421" class="btn-emergency group bg-emergency hover:bg-emergency-dark text-white py-4 px-8 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2 animate-pulse-glow">
                    <span class="w-6 h-6 group-hover:rotate-12 transition-transform duration-300">📞</span>
                    Κλήση Έκτακτης Ανάγκης
                </a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>