<?php
/**
 * The template for displaying all pages
 * Selects layout based on page type:
 * - Location pages: Identical Insurx design as homepage (media_1789716352948.jpg)
 * - Services pages: Insurx modular matrix design (media_1789716352947.jpg)
 * - Standard pages: Clean Insurx content layout
 * All templates place every tagged H2 in its own distinct section!
 */

get_header();

$location_slugs = array(
    'cary-nc',
    'apex-nc',
    'wake-forest-nc',
    'garner-nc',
    'holly-springs-nc',
    'morrisville-nc',
    'clayton-nc',
    'fuquay-varina-nc',
    'knightdale-nc',
    'durham-nc',
);

$services_slugs = array(
    'what-is-sr22',
    'how-to-get-an-sr22-in-raleigh',
    'non-owners-sr22-insurance',
);

while (have_posts()) : the_post();
    if (is_page($location_slugs)) {
        get_template_part('template-parts/content', 'location');
    } elseif (is_page($services_slugs)) {
        get_template_part('template-parts/content', 'services');
    } else {
        get_template_part('template-parts/content', 'standard');
    }
endwhile;

get_footer();
