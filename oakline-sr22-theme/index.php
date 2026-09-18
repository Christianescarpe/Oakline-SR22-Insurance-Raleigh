<?php
/**
 * Main index template
 */
get_header(); ?>

<section class="section-main-content">
  <div class="container">
    <div class="content-sidebar-layout">
      <main class="article-content">
        <?php
        if (have_posts()) :
          while (have_posts()) : the_post();
            the_title('<h1>', '</h1>');
            the_content();
          endwhile;
        endif;
        ?>
      </main>

      <aside class="page-sidebar">
        <div class="sidebar-contact-box">
          <h4>Oakline Raleigh Office</h4>
          <p>Assisting drivers with fast, affordable high-risk auto insurance and DMV certificate filings.</p>
          <a href="tel:+19842051805" class="btn-call">(984) 205-1805</a>
        </div>
      </aside>
    </div>
  </div>
</section>

<?php get_footer(); ?>
