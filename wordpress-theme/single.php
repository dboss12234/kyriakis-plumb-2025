<?php get_header(); ?>

<main id="main-content" class="single-post">
    <div class="container">
        <?php while (have_posts()) : the_post(); ?>
            <article class="post-content">
                <header class="post-header">
                    <h1 class="post-title"><?php the_title(); ?></h1>
                    <div class="post-meta">
                        <span class="post-date">📅 <?php echo get_the_date('j F Y'); ?></span>
                        <span class="post-author">👤 <?php the_author(); ?></span>
                        <?php if (has_category()) : ?>
                            <span class="post-categories">🏷️ <?php the_category(', '); ?></span>
                        <?php endif; ?>
                    </div>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-featured-image">
                        <?php the_post_thumbnail('large', array('class' => 'featured-image')); ?>
                    </div>
                <?php endif; ?>

                <div class="post-content-text">
                    <?php the_content(); ?>
                </div>

                <?php if (has_tag()) : ?>
                    <div class="post-tags">
                        <h4>Ετικέτες:</h4>
                        <?php the_tags('<span class="tag">', '</span><span class="tag">', '</span>'); ?>
                    </div>
                <?php endif; ?>

                <div class="post-navigation">
                    <div class="nav-previous">
                        <?php previous_post_link('%link', '← %title'); ?>
                    </div>
                    <div class="nav-next">
                        <?php next_post_link('%link', '%title →'); ?>
                    </div>
                </div>
            </article>

            <?php if (comments_open() || get_comments_number()) : ?>
                <div class="comments-section">
                    <?php comments_template(); ?>
                </div>
            <?php endif; ?>

        <?php endwhile; ?>
    </div>
</main>

<style>
.single-post {
    padding: 120px 0 80px;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.post-content {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.post-header {
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid #e2e8f0;
}

.post-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1a202c;
    margin-bottom: 15px;
    line-height: 1.2;
}

.post-meta {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    font-size: 0.9rem;
    color: #64748b;
}

.post-featured-image {
    margin: 30px 0;
    text-align: center;
}

.featured-image {
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.post-content-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #374151;
    margin: 30px 0;
}

.post-content-text p {
    margin-bottom: 20px;
}

.post-content-text h2, .post-content-text h3 {
    margin: 30px 0 15px;
    color: #1a202c;
}

.post-tags {
    margin: 30px 0;
    padding: 20px;
    background: #f8fafc;
    border-radius: 10px;
}

.post-tags h4 {
    margin-bottom: 10px;
    color: #1a202c;
}

.tag {
    display: inline-block;
    background: var(--primary);
    color: white;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    margin: 2px;
    text-decoration: none;
}

.post-navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    padding-top: 30px;
    border-top: 2px solid #e2e8f0;
}

.post-navigation a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 10px;
    background: #f8fafc;
    transition: all 0.3s ease;
}

.post-navigation a:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
}

.comments-section {
    max-width: 800px;
    margin: 40px auto 0;
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
    .post-content {
        margin: 0 20px;
        padding: 30px 20px;
    }
    
    .post-title {
        font-size: 2rem;
    }
    
    .post-meta {
        flex-direction: column;
        gap: 10px;
    }
    
    .post-navigation {
        flex-direction: column;
        gap: 15px;
    }
}
</style>

<?php get_footer(); ?>