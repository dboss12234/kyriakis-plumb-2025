<?php get_header(); ?>

<main id="main-content" class="archive-page">
    <div class="container">
        <header class="archive-header">
            <h1 class="archive-title">
                <?php
                if (is_category()) {
                    echo 'Κατηγορία: ' . single_cat_title('', false);
                } elseif (is_tag()) {
                    echo 'Ετικέτα: ' . single_tag_title('', false);
                } elseif (is_author()) {
                    echo 'Συγγραφέας: ' . get_the_author();
                } elseif (is_date()) {
                    echo 'Αρχείο: ' . get_the_date('F Y');
                } else {
                    echo 'Αρχείο Άρθρων';
                }
                ?>
            </h1>
            <?php if (term_description()) : ?>
                <div class="archive-description">
                    <?php echo term_description(); ?>
                </div>
            <?php endif; ?>
        </header>

        <div class="archive-content">
            <?php if (have_posts()) : ?>
                <div class="posts-grid">
                    <?php while (have_posts()) : the_post(); ?>
                        <article class="post-card">
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="post-thumbnail">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php the_post_thumbnail('medium', array('class' => 'post-image')); ?>
                                    </a>
                                </div>
                            <?php endif; ?>
                            
                            <div class="post-card-content">
                                <h2 class="post-card-title">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h2>
                                
                                <div class="post-card-meta">
                                    <span class="post-date">📅 <?php echo get_the_date('j F Y'); ?></span>
                                    <span class="post-author">👤 <?php the_author(); ?></span>
                                </div>
                                
                                <div class="post-card-excerpt">
                                    <?php echo wp_trim_words(get_the_excerpt(), 25); ?>
                                </div>
                                
                                <a href="<?php the_permalink(); ?>" class="read-more-btn">
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

            <?php else : ?>
                <div class="no-posts">
                    <h2>Δεν βρέθηκαν άρθρα</h2>
                    <p>Δυστυχώς δεν υπάρχουν άρθρα σε αυτή την κατηγορία.</p>
                    <a href="<?php echo home_url(); ?>" class="btn-primary">Επιστροφή στην Αρχική</a>
                </div>
            <?php endif; ?>
        </div>
    </div>
</main>

<style>
.archive-page {
    padding: 120px 0 80px;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.archive-header {
    text-align: center;
    margin-bottom: 60px;
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.archive-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1a202c;
    margin-bottom: 20px;
}

.archive-description {
    font-size: 1.1rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
}

.posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
}

.post-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.post-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.post-thumbnail {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.post-card:hover .post-image {
    transform: scale(1.1);
}

.post-card-content {
    padding: 30px;
}

.post-card-title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 15px;
}

.post-card-title a {
    color: #1a202c;
    text-decoration: none;
    transition: color 0.3s ease;
}

.post-card-title a:hover {
    color: var(--primary);
}

.post-card-meta {
    display: flex;
    gap: 15px;
    font-size: 0.9rem;
    color: #64748b;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

.post-card-excerpt {
    color: #374151;
    line-height: 1.6;
    margin-bottom: 20px;
}

.read-more-btn {
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 5px;
}

.read-more-btn:hover {
    color: var(--primary-dark);
    transform: translateX(5px);
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

.no-posts {
    text-align: center;
    background: white;
    padding: 60px 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.no-posts h2 {
    font-size: 2rem;
    color: #1a202c;
    margin-bottom: 20px;
}

.no-posts p {
    color: #64748b;
    margin-bottom: 30px;
    font-size: 1.1rem;
}

.btn-primary {
    display: inline-block;
    background: var(--primary);
    color: white;
    padding: 15px 30px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .posts-grid {
        grid-template-columns: 1fr;
        gap: 20px;
        margin: 0 20px 40px;
    }
    
    .archive-header {
        margin: 0 20px 40px;
        padding: 30px 20px;
    }
    
    .archive-title {
        font-size: 2rem;
    }
    
    .post-card-meta {
        flex-direction: column;
        gap: 8px;
    }
}
</style>

<?php get_footer(); ?>