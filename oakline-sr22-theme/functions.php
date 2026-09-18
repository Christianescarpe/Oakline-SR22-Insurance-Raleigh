<?php
/**
 * Oakline SR22 Insurance Raleigh Theme Functions
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

function oakline_theme_setup() {
    // Add default title tag support
    add_theme_support('title-tag');

    // Add post-thumbnail support
    add_theme_support('post-thumbnails');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Navigation', 'oakline-sr22'),
        'locations' => __('Locations Navigation', 'oakline-sr22'),
        'footer'  => __('Footer Navigation', 'oakline-sr22'),
    ));

    // Add HTML5 support
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'oakline_theme_setup');

function oakline_enqueue_scripts() {
    wp_enqueue_style('oakline-style', get_stylesheet_uri(), array(), '2.0.0');
}
add_action('wp_enqueue_scripts', 'oakline_enqueue_scripts');

// Custom excerpt length
function oakline_excerpt_length($length) {
    return 24;
}
add_filter('excerpt_length', 'oakline_excerpt_length');

// Custom meta tags fallback if SEO plugins are not active
function oakline_custom_seo_tags() {
    global $post;
    if (is_singular() && $post) {
        $meta_desc = get_post_meta($post->ID, '_yoast_wpseo_metadesc', true);
        if (!$meta_desc) {
            $meta_desc = get_post_meta($post->ID, 'rank_math_description', true);
        }
        if (!$meta_desc) {
            $meta_desc = get_post_meta($post->ID, '_oakline_meta_desc', true);
        }
        if ($meta_desc) {
            echo '<meta name="description" content="' . esc_attr($meta_desc) . '" />' . "\n";
        }
    }
}
add_action('wp_head', 'oakline_custom_seo_tags', 1);

/**
 * Parses content into intro (before first <h2>) and an array of individual <h2> sections
 */
function oakline_parse_h2_sections($content) {
    if (empty($content)) {
        return array('intro' => '', 'sections' => array());
    }

    $parts = preg_split('/(?=<h2>)/i', $content);
    if (empty($parts)) {
        return array('intro' => $content, 'sections' => array());
    }

    $intro = array_shift($parts);
    $sections = array();
    foreach ($parts as $part) {
        $part = trim($part);
        if (!empty($part)) {
            $sections[] = $part;
        }
    }
    return array('intro' => $intro, 'sections' => $sections);
}

/**
 * Splits HTML content into individual <section> elements for each <h2>
 */
function oakline_render_content_by_h2_sections($content) {
    $parsed = oakline_parse_h2_sections($content);
    $output = '';

    if (!empty($parsed['intro'])) {
        $output .= '<section class="content-h2-section section-bg-white">';
        $output .= '  <div class="container">';
        $output .= '    <div class="h2-section-inner">';
        $output .= '      <div class="h2-section-card">' . $parsed['intro'] . '</div>';
        $output .= '    </div>';
        $output .= '  </div>';
        $output .= '</section>' . "\n";
    }

    foreach ($parsed['sections'] as $i => $section) {
        $bg_class = ($i % 2 === 0) ? 'section-bg-light' : 'section-bg-white';
        $output .= '<section class="content-h2-section ' . esc_attr($bg_class) . '">';
        $output .= '  <div class="container">';
        $output .= '    <div class="h2-section-inner">';
        $output .= '      <div class="h2-section-card">' . $section . '</div>';
        $output .= '    </div>';
        $output .= '  </div>';
        $output .= '</section>' . "\n";
    }

    return $output;
}
