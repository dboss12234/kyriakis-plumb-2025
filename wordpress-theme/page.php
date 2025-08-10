<?php get_header(); ?>

<main id="main-content" class="single-page">
    <div class="container">
        <?php while (have_posts()) : the_post(); ?>
            <article class="page-content">
                <header class="page-header">
                    <h1 class="page-title"><?php the_title(); ?></h1>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="page-featured-image">
                        <?php the_post_thumbnail('large', array('class' => 'featured-image')); ?>
                    </div>
                <?php endif; ?>

                <div class="page-content-text">
                    <?php the_content(); ?>
                </div>

                <?php if (comments_open() || get_comments_number()) : ?>
                    <div class="comments-section">
                        <?php comments_template(); ?>
                    </div>
                <?php endif; ?>
            </article>
        <?php endwhile; ?>
    </div>
</main>

<style>
.single-page {
    padding: 120px 0 80px;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.page-content {
    max-width: 1000px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    padding: 50px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.page-header {
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 30px;
    border-bottom: 3px solid var(--primary);
}

.page-title {
    font-size: 3rem;
    font-weight: 800;
    color: #1a202c;
    margin-bottom: 20px;
    line-height: 1.2;
}

.page-featured-image {
    margin: 40px 0;
    text-align: center;
}

.featured-image {
    width: 100%;
    max-width: 800px;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.page-content-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #374151;
    margin: 40px 0;
}

.page-content-text p {
    margin-bottom: 20px;
}

.page-content-text h2, .page-content-text h3 {
    margin: 40px 0 20px;
    color: #1a202c;
    font-weight: 700;
}

.page-content-text h2 {
    font-size: 2rem;
    border-bottom: 2px solid var(--primary);
    padding-bottom: 10px;
}

.page-content-text h3 {
    font-size: 1.5rem;
}

.page-content-text ul, .page-content-text ol {
    margin: 20px 0;
    padding-left: 30px;
}

.page-content-text li {
    margin-bottom: 10px;
}

.comments-section {
    margin-top: 50px;
    padding-top: 40px;
    border-top: 2px solid #e2e8f0;
}

@media (max-width: 768px) {
    .page-content {
        margin: 0 20px;
        padding: 30px 20px;
    }
    
    .page-title {
        font-size: 2.2rem;
    }
    
    .page-content-text h2 {
        font-size: 1.6rem;
    }
}
</style>

<?php get_footer(); ?>