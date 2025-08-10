<?php get_header(); ?>

<main id="main-content" class="search-page">
    <div class="container">
        <header class="search-header">
            <h1 class="search-title">
                <?php if (have_posts()) : ?>
                    Αποτελέσματα Αναζήτησης για: "<?php echo get_search_query(); ?>"
                <?php else : ?>
                    Δεν βρέθηκαν αποτελέσματα για: "<?php echo get_search_query(); ?>"
                <?php endif; ?>
            </h1>
            
            <div class="search-form-wrapper">
                <form role="search" method="get" class="search-form" action="<?php echo home_url('/'); ?>">
                    <input type="search" 
                           class="search-field" 
                           placeholder="Αναζήτηση..." 
                           value="<?php echo get_search_query(); ?>" 
                           name="s" />
                    <button type="submit" class="search-submit">🔍 Αναζήτηση</button>
                </form>
            </div>
        </header>

        <div class="search-content">
            <?php if (have_posts()) : ?>
                <div class="search-results">
                    <p class="results-count">
                        Βρέθηκαν <?php echo $wp_query->found_posts; ?> αποτελέσματα
                    </p>
                    
                    <div class="posts-grid">
                        <?php while (have_posts()) : the_post(); ?>
                            <article class="search-result-card">
                                <?php if (has_post_thumbnail()) : ?>
                                    <div class="result-thumbnail">
                                        <a href="<?php the_permalink(); ?>">
                                            <?php the_post_thumbnail('medium', array('class' => 'result-image')); ?>
                                        </a>
                                    </div>
                                <?php endif; ?>
                                
                                <div class="result-content">
                                    <h2 class="result-title">
                                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                    </h2>
                                    
                                    <div class="result-meta">
                                        <span class="result-type">
                                            <?php echo get_post_type() == 'post' ? '📝 Άρθρο' : '📄 Σελίδα'; ?>
                                        </span>
                                        <span class="result-date">📅 <?php echo get_the_date('j F Y'); ?></span>
                                    </div>
                                    
                                    <div class="result-excerpt">
                                        <?php 
                                        $excerpt = get_the_excerpt();
                                        $search_query = get_search_query();
                                        if ($search_query) {
                                            $excerpt = str_ireplace($search_query, '<mark>' . $search_query . '</mark>', $excerpt);
                                        }
                                        echo wp_trim_words($excerpt, 30);
                                        ?>
                                    </div>
                                    
                                    <a href="<?php the_permalink(); ?>" class="result-link">
                                        Διαβάστε Περισσότερα →
                                    </a>
                                </div>
                            </article>
                        <?php endwhile; ?>
                    </div>

                    <div class="pagination-wrapper">
                        <?php
                        the_posts_pagination(array(
                            'prev_text' => '← Προηγούμενα',
                            'next_text' => 'Επόμενα →',
                            'before_page_number' => '<span class="meta-nav screen-reader-text">Σελίδα </span>',
                        ));
                        ?>
                    </div>
                </div>

            <?php else : ?>
                <div class="no-results">
                    <div class="no-results-icon">🔍</div>
                    <h2>Δεν βρέθηκαν αποτελέσματα</h2>
                    <p>Δοκιμάστε να αναζητήσετε κάτι διαφορετικό ή χρησιμοποιήστε λιγότερες λέξεις.</p>
                    
                    <div class="search-suggestions">
                        <h3>Προτάσεις:</h3>
                        <ul>
                            <li>Ελέγξτε την ορθογραφία</li>
                            <li>Χρησιμοποιήστε πιο γενικές λέξεις</li>
                            <li>Δοκιμάστε διαφορετικούς όρους αναζήτησης</li>
                        </ul>
                    </div>
                    
                    <div class="popular-pages">
                        <h3>Δημοφιλείς Σελίδες:</h3>
                        <div class="popular-links">
                            <a href="<?php echo home_url('#services'); ?>" class="popular-link">Υπηρεσίες</a>
                            <a href="<?php echo home_url('#about'); ?>" class="popular-link">Σχετικά</a>
                            <a href="<?php echo home_url('#contact'); ?>" class="popular-link">Επικοινωνία</a>
                        </div>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </div>
</main>

<style>
.search-page {
    padding: 120px 0 80px;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.search-header {
    text-align: center;
    margin-bottom: 50px;
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.search-title {
    font-size: 2.2rem;
    font-weight: 800;
    color: #1a202c;
    margin-bottom: 30px;
    line-height: 1.3;
}

.search-form-wrapper {
    max-width: 500px;
    margin: 0 auto;
}

.search-form {
    display: flex;
    gap: 10px;
    background: #f8fafc;
    padding: 10px;
    border-radius: 15px;
    border: 2px solid #e2e8f0;
}

.search-field {
    flex: 1;
    padding: 15px 20px;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    background: white;
    outline: none;
}

.search-submit {
    padding: 15px 25px;
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

.results-count {
    text-align: center;
    color: #64748b;
    margin-bottom: 30px;
    font-size: 1.1rem;
}

.posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
}

.search-result-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.search-result-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.result-thumbnail {
    height: 200px;
    overflow: hidden;
}

.result-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.search-result-card:hover .result-image {
    transform: scale(1.05);
}

.result-content {
    padding: 25px;
}

.result-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 12px;
}

.result-title a {
    color: #1a202c;
    text-decoration: none;
    transition: color 0.3s ease;
}

.result-title a:hover {
    color: var(--primary);
}

.result-meta {
    display: flex;
    gap: 15px;
    font-size: 0.9rem;
    color: #64748b;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

.result-excerpt {
    color: #374151;
    line-height: 1.6;
    margin-bottom: 20px;
}

.result-excerpt mark {
    background: #fef3c7;
    padding: 2px 4px;
    border-radius: 4px;
    font-weight: 600;
}

.result-link {
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 5px;
}

.result-link:hover {
    color: var(--primary-dark);
    transform: translateX(5px);
}

.no-results {
    text-align: center;
    background: white;
    padding: 60px 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    max-width: 600px;
    margin: 0 auto;
}

.no-results-icon {
    font-size: 4rem;
    margin-bottom: 20px;
}

.no-results h2 {
    font-size: 2rem;
    color: #1a202c;
    margin-bottom: 20px;
}

.no-results p {
    color: #64748b;
    margin-bottom: 40px;
    font-size: 1.1rem;
}

.search-suggestions {
    text-align: left;
    margin-bottom: 40px;
}

.search-suggestions h3 {
    color: #1a202c;
    margin-bottom: 15px;
}

.search-suggestions ul {
    color: #64748b;
    padding-left: 20px;
}

.search-suggestions li {
    margin-bottom: 8px;
}

.popular-pages h3 {
    color: #1a202c;
    margin-bottom: 20px;
}

.popular-links {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
}

.popular-link {
    background: var(--primary);
    color: white;
    padding: 12px 20px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
}

.popular-link:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
}

.pagination-wrapper {
    text-align: center;
    margin-top: 40px;
}

.pagination-wrapper .nav-links {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
}

.pagination-wrapper a,
.pagination-wrapper .current {
    padding: 12px 20px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
}

.pagination-wrapper a {
    background: white;
    color: var(--primary);
    border: 2px solid var(--primary);
}

.pagination-wrapper a:hover {
    background: var(--primary);
    color: white;
}

.pagination-wrapper .current {
    background: var(--primary);
    color: white;
    border: 2px solid var(--primary);
}

@media (max-width: 768px) {
    .posts-grid {
        grid-template-columns: 1fr;
        gap: 20px;
        margin: 0 20px 40px;
    }
    
    .search-header {
        margin: 0 20px 40px;
        padding: 30px 20px;
    }
    
    .search-title {
        font-size: 1.8rem;
    }
    
    .search-form {
        flex-direction: column;
        gap: 15px;
    }
    
    .result-meta {
        flex-direction: column;
        gap: 8px;
    }
    
    .popular-links {
        flex-direction: column;
        align-items: center;
    }
}
</style>

<?php get_footer(); ?>