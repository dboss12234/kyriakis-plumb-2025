<?php get_header(); ?>

<main id="main-content" class="error-404-page">
    <div class="container">
        <div class="error-content">
            <div class="error-visual">
                <div class="error-number">404</div>
                <div class="error-icon">🔧</div>
            </div>
            
            <div class="error-text">
                <h1 class="error-title">Oops! Η σελίδα δεν βρέθηκε</h1>
                <p class="error-description">
                    Η σελίδα που ψάχνετε μπορεί να έχει μετακινηθεί, διαγραφεί ή δεν υπάρχει. 
                    Αλλά μην ανησυχείτε - οι υδραυλικοί μας είναι εδώ για να "επισκευάσουν" το πρόβλημα!
                </p>
                
                <div class="error-actions">
                    <a href="<?php echo home_url(); ?>" class="btn-primary">
                        🏠 Επιστροφή στην Αρχική
                    </a>
                    
                    <button onclick="history.back()" class="btn-secondary">
                        ← Προηγούμενη Σελίδα
                    </button>
                </div>
                
                <div class="search-section">
                    <h3>Αναζητήστε αυτό που χρειάζεστε:</h3>
                    <form role="search" method="get" class="error-search-form" action="<?php echo home_url('/'); ?>">
                        <input type="search" 
                               class="search-field" 
                               placeholder="π.χ. επισκευή σωληνώσεων..." 
                               name="s" />
                        <button type="submit" class="search-submit">🔍 Αναζήτηση</button>
                    </form>
                </div>
                
                <div class="quick-links">
                    <h3>Δημοφιλείς Σελίδες:</h3>
                    <div class="links-grid">
                        <a href="<?php echo home_url('#services'); ?>" class="quick-link">
                            <span class="link-icon">🛠️</span>
                            <span class="link-text">Υπηρεσίες</span>
                        </a>
                        <a href="<?php echo home_url('#about'); ?>" class="quick-link">
                            <span class="link-icon">ℹ️</span>
                            <span class="link-text">Σχετικά με Εμάς</span>
                        </a>
                        <a href="<?php echo home_url('#contact'); ?>" class="quick-link">
                            <span class="link-icon">📞</span>
                            <span class="link-text">Επικοινωνία</span>
                        </a>
                        <a href="tel:<?php echo get_theme_mod('phone_number', '+30 210 123 4567'); ?>" class="quick-link emergency">
                            <span class="link-icon">🚨</span>
                            <span class="link-text">Επείγον</span>
                        </a>
                    </div>
                </div>
                
                <div class="contact-emergency">
                    <div class="emergency-card">
                        <h4>Επείγουσα Ανάγκη;</h4>
                        <p>Καλέστε μας τώρα για άμεση εξυπηρέτηση!</p>
                        <a href="tel:<?php echo get_theme_mod('phone_number', '+30 210 123 4567'); ?>" class="emergency-btn">
                            📞 <?php echo get_theme_mod('phone_number', '+30 210 123 4567'); ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
.error-404-page {
    padding: 120px 0 80px;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
}

.error-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    background: white;
    padding: 60px 40px;
    border-radius: 25px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.1);
}

.error-visual {
    position: relative;
    margin-bottom: 40px;
}

.error-number {
    font-size: 8rem;
    font-weight: 900;
    color: var(--primary);
    line-height: 1;
    margin-bottom: 20px;
    text-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
}

.error-icon {
    font-size: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translate(-50%, -50%) translateY(0);
    }
    40% {
        transform: translate(-50%, -50%) translateY(-20px);
    }
    60% {
        transform: translate(-50%, -50%) translateY(-10px);
    }
}

.error-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1a202c;
    margin-bottom: 20px;
    line-height: 1.2;
}

.error-description {
    font-size: 1.2rem;
    color: #64748b;
    margin-bottom: 40px;
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.error-actions {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
    padding: 15px 30px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background: var(--primary);
    color: white;
}

.btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
}

.btn-secondary {
    background: #f8fafc;
    color: #64748b;
    border: 2px solid #e2e8f0;
}

.btn-secondary:hover {
    background: #e2e8f0;
    color: #374151;
    transform: translateY(-3px);
}

.search-section {
    margin-bottom: 50px;
    padding: 30px;
    background: #f8fafc;
    border-radius: 15px;
}

.search-section h3 {
    color: #1a202c;
    margin-bottom: 20px;
    font-size: 1.3rem;
}

.error-search-form {
    display: flex;
    gap: 10px;
    max-width: 400px;
    margin: 0 auto;
}

.search-field {
    flex: 1;
    padding: 15px 20px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;
}

.search-field:focus {
    border-color: var(--primary);
}

.search-submit {
    padding: 15px 20px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
}

.search-submit:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
}

.quick-links {
    margin-bottom: 40px;
}

.quick-links h3 {
    color: #1a202c;
    margin-bottom: 25px;
    font-size: 1.3rem;
}

.links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    max-width: 500px;
    margin: 0 auto;
}

.quick-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 15px;
    background: #f8fafc;
    border-radius: 12px;
    text-decoration: none;
    color: #374151;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.quick-link:hover {
    background: white;
    border-color: var(--primary);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.quick-link.emergency {
    background: #fef2f2;
    color: #dc2626;
}

.quick-link.emergency:hover {
    background: #fee2e2;
    border-color: #dc2626;
}

.link-icon {
    font-size: 1.5rem;
    margin-bottom: 8px;
}

.link-text {
    font-weight: 600;
    font-size: 0.9rem;
}

.contact-emergency {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    border-radius: 15px;
    padding: 30px;
    color: white;
    text-align: center;
}

.emergency-card h4 {
    font-size: 1.4rem;
    margin-bottom: 10px;
}

.emergency-card p {
    margin-bottom: 20px;
    opacity: 0.9;
}

.emergency-btn {
    display: inline-block;
    background: white;
    color: var(--primary);
    padding: 15px 25px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    transition: all 0.3s ease;
}

.emergency-btn:hover {
    background: #f8fafc;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255,255,255,0.3);
}

@media (max-width: 768px) {
    .error-content {
        margin: 0 20px;
        padding: 40px 25px;
    }
    
    .error-number {
        font-size: 6rem;
    }
    
    .error-title {
        font-size: 2rem;
    }
    
    .error-actions {
        flex-direction: column;
        align-items: center;
    }
    
    .error-search-form {
        flex-direction: column;
        gap: 15px;
    }
    
    .links-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .links-grid {
        grid-template-columns: 1fr;
    }
    
    .error-number {
        font-size: 4rem;
    }
    
    .error-title {
        font-size: 1.6rem;
    }
}
</style>

<?php get_footer(); ?>