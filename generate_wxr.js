const fs = require('fs');

const data = JSON.parse(fs.readFileSync('all_sheets_data.json', 'utf8'));

let postId = 100;

function cleanSlug(url, isPost) {
  if (url === '/' || url === '') return 'home';
  let s = url.replace(/^\//, '').replace(/\/$/, '');
  if (isPost && s.startsWith('blog/')) {
    s = s.replace(/^blog\//, '');
  }
  return s;
}

function escapeXml(str) {
  if (!str) return '';
  return str.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

let xml = `<?xml version="1.0" encoding="UTF-8" ?>
<!-- generator="WordPress/6.5.0" created="2026-09-18 10:00" -->
<rss version="2.0"
  xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:wfw="http://wellformedweb.org/CommentAPI/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:wp="http://wordpress.org/export/1.2/"
>
<channel>
  <title>Oakline SR22 Insurance Raleigh</title>
  <link>https://oaklinesr22raleigh.com</link>
  <description>SR-22 Insurance Raleigh NC | Fast, Cheap SR-22 Filings</description>
  <pubDate>Fri, 18 Sep 2026 10:00:00 +0000</pubDate>
  <language>en-US</language>
  <wp:wxr_version>1.2</wp:wxr_version>
  <wp:base_site_url>https://oaklinesr22raleigh.com</wp:base_site_url>
  <wp:base_blog_url>https://oaklinesr22raleigh.com</wp:base_blog_url>

  <wp:author>
    <wp:author_id>1</wp:author_id>
    <wp:author_login><![CDATA[admin]]></wp:author_login>
    <wp:author_email><![CDATA[contact@oaklinesr22raleigh.com]]></wp:author_email>
    <wp:author_display_name><![CDATA[Oakline Raleigh]]></wp:author_display_name>
    <wp:author_first_name><![CDATA[Oakline]]></wp:author_first_name>
    <wp:author_last_name><![CDATA[Raleigh]]></wp:author_last_name>
  </wp:author>

  <wp:category>
    <wp:term_id>1</wp:term_id>
    <wp:category_nicename><![CDATA[sr22-guides]]></wp:category_nicename>
    <wp:category_parent><![CDATA[]]></wp:category_parent>
    <wp:cat_name><![CDATA[SR22 Guides]]></wp:cat_name>
  </wp:category>
`;

// 1. Pages from SEO Content
data['SEO Content'].forEach((row, idx) => {
  postId++;
  const url = row['Page URL'];
  const isHome = url === '/';
  const slug = cleanSlug(url, false);
  const title = row.Page.replace(' (Location Page)', '');
  const content = row['Page Content (HTML)'] || '';
  const seoTitle = row['SEO Title'] || '';
  const metaDesc = row['Meta Description'] || '';

  xml += `
  <item>
    <title><![CDATA[${title}]]></title>
    <link>https://oaklinesr22raleigh.com${url}</link>
    <pubDate>Fri, 18 Sep 2026 10:00:00 +0000</pubDate>
    <dc:creator><![CDATA[admin]]></dc:creator>
    <guid isPermaLink="false">https://oaklinesr22raleigh.com/?page_id=${postId}</guid>
    <description></description>
    <content:encoded><![CDATA[${content}]]></content:encoded>
    <excerpt:encoded><![CDATA[${metaDesc}]]></excerpt:encoded>
    <wp:post_id>${postId}</wp:post_id>
    <wp:post_date><![CDATA[2026-09-18 10:00:00]]></wp:post_date>
    <wp:post_date_gmt><![CDATA[2026-09-18 10:00:00]]></wp:post_date_gmt>
    <wp:post_modified><![CDATA[2026-09-18 10:00:00]]></wp:post_modified>
    <wp:post_modified_gmt><![CDATA[2026-09-18 10:00:00]]></wp:post_modified_gmt>
    <wp:comment_status><![CDATA[closed]]></wp:comment_status>
    <wp:ping_status><![CDATA[closed]]></wp:ping_status>
    <wp:post_name><![CDATA[${slug}]]></wp:post_name>
    <wp:status><![CDATA[publish]]></wp:status>
    <wp:post_parent>0</wp:post_parent>
    <wp:menu_order>${idx + 1}</wp:menu_order>
    <wp:post_type><![CDATA[page]]></wp:post_type>
    <wp:post_password><![CDATA[]]></wp:post_password>
    <wp:is_sticky>0</wp:is_sticky>
    <wp:postmeta>
      <wp:meta_key><![CDATA[_yoast_wpseo_title]]></wp:meta_key>
      <wp:meta_value><![CDATA[${seoTitle}]]></wp:meta_value>
    </wp:postmeta>
    <wp:postmeta>
      <wp:meta_key><![CDATA[_yoast_wpseo_metadesc]]></wp:meta_key>
      <wp:meta_value><![CDATA[${metaDesc}]]></wp:meta_value>
    </wp:postmeta>
    <wp:postmeta>
      <wp:meta_key><![CDATA[rank_math_title]]></wp:meta_key>
      <wp:meta_value><![CDATA[${seoTitle}]]></wp:meta_value>
    </wp:postmeta>
    <wp:postmeta>
      <wp:meta_key><![CDATA[rank_math_description]]></wp:meta_key>
      <wp:meta_value><![CDATA[${metaDesc}]]></wp:meta_value>
    </wp:postmeta>
    <wp:postmeta>
      <wp:meta_key><![CDATA[_oakline_internal_1]]></wp:meta_key>
      <wp:meta_value><![CDATA[${row['Internal Link 1'] || ''}]]></wp:meta_value>
    </wp:postmeta>
    <wp:postmeta>
      <wp:meta_key><![CDATA[_oakline_internal_2]]></wp:meta_key>
      <wp:meta_value><![CDATA[${row['Internal Link 2'] || ''}]]></wp:meta_value>
    </wp:postmeta>
    <wp:postmeta>
      <wp:meta_key><![CDATA[_oakline_internal_3]]></wp:meta_key>
      <wp:meta_value><![CDATA[${row['Internal Link 3'] || ''}]]></wp:meta_value>
    </wp:postmeta>
    <wp:postmeta>
      <wp:meta_key><![CDATA[_oakline_external]]></wp:meta_key>
      <wp:meta_value><![CDATA[${row['External Link'] || ''}]]></wp:meta_value>
    </wp:postmeta>
  </item>
`;
});

// Also add a blog page placeholder for WordPress static front page settings
postId++;
xml += `
  <item>
    <title><![CDATA[Blog]]></title>
    <link>https://oaklinesr22raleigh.com/blog/</link>
    <pubDate>Fri, 18 Sep 2026 10:00:00 +0000</pubDate>
    <dc:creator><![CDATA[admin]]></dc:creator>
    <guid isPermaLink="false">https://oaklinesr22raleigh.com/?page_id=${postId}</guid>
    <description></description>
    <content:encoded><![CDATA[]]></content:encoded>
    <excerpt:encoded><![CDATA[Oakline SR22 Insurance Raleigh Blog and Reinstatement Guides.]]></excerpt:encoded>
    <wp:post_id>${postId}</wp:post_id>
    <wp:post_date><![CDATA[2026-09-18 10:00:00]]></wp:post_date>
    <wp:post_date_gmt><![CDATA[2026-09-18 10:00:00]]></wp:post_date_gmt>
    <wp:comment_status><![CDATA[closed]]></wp:comment_status>
    <wp:ping_status><![CDATA[closed]]></wp:ping_status>
    <wp:post_name><![CDATA[blog]]></wp:post_name>
    <wp:status><![CDATA[publish]]></wp:status>
    <wp:post_parent>0</wp:post_parent>
    <wp:post_type><![CDATA[page]]></wp:post_type>
  </item>
`;

// 2. Posts from Blog Content
data['Blog Content'].forEach((row, idx) => {
  postId++;
  const url = row['Page URL'];
  const slug = cleanSlug(url, true);
  const title = row.Page;
  const content = row['Page Content (HTML)'] || '';
  const seoTitle = row['SEO Title'] || '';
  const metaDesc = row['Meta Description'] || '';
  const targetKw = row['Target Keyword'] || '';

  xml += `
  <item>
    <title><![CDATA[${title}]]></title>
    <link>https://oaklinesr22raleigh.com${url}</link>
    <pubDate>Fri, 18 Sep 2026 10:00:00 +0000</pubDate>
    <dc:creator><![CDATA[admin]]></dc:creator>
    <guid isPermaLink="false">https://oaklinesr22raleigh.com/?p=${postId}</guid>
    <description></description>
    <content:encoded><![CDATA[${content}]]></content:encoded>
    <excerpt:encoded><![CDATA[${metaDesc}]]></excerpt:encoded>
    <wp:post_id>${postId}</wp:post_id>
    <wp:post_date><![CDATA[2026-09-18 10:00:00]]></wp:post_date>
    <wp:post_date_gmt><![CDATA[2026-09-18 10:00:00]]></wp:post_date_gmt>
    <wp:post_modified><![CDATA[2026-09-18 10:00:00]]></wp:post_modified>
    <wp:post_modified_gmt><![CDATA[2026-09-18 10:00:00]]></wp:post_modified_gmt>
    <wp:comment_status><![CDATA[open]]></wp:comment_status>
    <wp:ping_status><![CDATA[open]]></wp:ping_status>
    <wp:post_name><![CDATA[${slug}]]></wp:post_name>
    <wp:status><![CDATA[publish]]></wp:status>
    <wp:post_parent>0</wp:post_parent>
    <wp:menu_order>${idx + 1}</wp:menu_order>
    <wp:post_type><![CDATA[post]]></wp:post_type>
    <wp:post_password><![CDATA[]]></wp:post_password>
    <wp:is_sticky>0</wp:is_sticky>
    <category domain="category" nicename="sr22-guides"><![CDATA[SR22 Guides]]></category>
    <wp:postmeta>
      <wp:meta_key><![CDATA[_yoast_wpseo_title]]></wp:meta_key>
      <wp:meta_value><![CDATA[${seoTitle}]]></wp:meta_value>
    </wp:postmeta>
    <wp:postmeta>
      <wp:meta_key><![CDATA[_yoast_wpseo_metadesc]]></wp:meta_key>
      <wp:meta_value><![CDATA[${metaDesc}]]></wp:meta_value>
    </wp:postmeta>
    <wp:postmeta>
      <wp:meta_key><![CDATA[rank_math_title]]></wp:meta_key>
      <wp:meta_value><![CDATA[${seoTitle}]]></wp:meta_value>
    </wp:postmeta>
    <wp:postmeta>
      <wp:meta_key><![CDATA[rank_math_description]]></wp:meta_key>
      <wp:meta_value><![CDATA[${metaDesc}]]></wp:meta_value>
    </wp:postmeta>
    <wp:postmeta>
      <wp:meta_key><![CDATA[_oakline_target_keyword]]></wp:meta_key>
      <wp:meta_value><![CDATA[${targetKw}]]></wp:meta_value>
    </wp:postmeta>
    <wp:postmeta>
      <wp:meta_key><![CDATA[_oakline_internal_1]]></wp:meta_key>
      <wp:meta_value><![CDATA[${row['Internal Link 1'] || ''}]]></wp:meta_value>
    </wp:postmeta>
    <wp:postmeta>
      <wp:meta_key><![CDATA[_oakline_internal_2]]></wp:meta_key>
      <wp:meta_value><![CDATA[${row['Internal Link 2'] || ''}]]></wp:meta_value>
    </wp:postmeta>
    <wp:postmeta>
      <wp:meta_key><![CDATA[_oakline_internal_3]]></wp:meta_key>
      <wp:meta_value><![CDATA[${row['Internal Link 3'] || ''}]]></wp:meta_value>
    </wp:postmeta>
    <wp:postmeta>
      <wp:meta_key><![CDATA[_oakline_external]]></wp:meta_key>
      <wp:meta_value><![CDATA[${row['External Link'] || ''}]]></wp:meta_value>
    </wp:postmeta>
  </item>
`;
});

xml += `
</channel>
</rss>
`;

fs.writeFileSync('oakline-sr22-content-export.xml', xml, 'utf8');
console.log('Successfully generated oakline-sr22-content-export.xml, size:', xml.length);
