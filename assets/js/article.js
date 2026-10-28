/* Renders one article from blogs.js. URL format: article.html?slug=your-slug */
(function () {
  const slug = new URLSearchParams(location.search).get("slug");
  const a = BLOGS.find(x => x.slug === slug);
  const root = document.getElementById("article");
  if (!a) {
    document.title = "Article not found | " + SITE.name;
    root.innerHTML = '<div class="art"><h1>Article not found</h1><p>We could not find that article. <a href="blogs.html">Browse all articles</a>.</p></div>';
    return;
  }
  const pageUrl = SITE.url + "/article.html?slug=" + encodeURIComponent(a.slug);
  const abs = p => /^https?:/.test(p) ? p : SITE.url + "/" + p;

  /* SEO tags are set by JavaScript (see README: static-site limits) */
  document.title = a.seoTitle;
  const setMeta = (sel, attr, key, val) => {
    let m = document.head.querySelector(sel);
    if (!m) { m = document.createElement("meta"); m.setAttribute(attr, key); document.head.appendChild(m); }
    m.setAttribute("content", val);
  };
  setMeta('meta[name="description"]', "name", "description", a.metaDescription);
  setMeta('meta[property="og:title"]', "property", "og:title", a.seoTitle);
  setMeta('meta[property="og:description"]', "property", "og:description", a.metaDescription);
  setMeta('meta[property="og:type"]', "property", "og:type", "article");
  setMeta('meta[property="og:url"]', "property", "og:url", pageUrl);
  setMeta('meta[property="og:image"]', "property", "og:image", abs(a.featuredImage));
  let can = document.querySelector('link[rel="canonical"]');
  if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
  can.href = pageUrl;

  const ld = document.createElement("script"); ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting",headline:a.title,description:a.metaDescription,
    image:abs(a.featuredImage),datePublished:a.publishedDate,dateModified:a.updatedDate,mainEntityOfPage:pageUrl,
    author:{"@type":"Organization",name:a.author},publisher:{"@type":"Organization",name:SITE.name,url:SITE.url}});
  document.head.appendChild(ld);

  const related = BLOGS.filter(x => x.id !== a.id).sort((x, y) =>
    (y.category === a.category) - (x.category === a.category) || byNewest(x, y)).slice(0, 3);
  const enc = encodeURIComponent;
  root.innerHTML =
    '<div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a> / <a href="blogs.html">Articles</a> / <a href="' +
      catUrl(a.category) + '">' + esc(a.category) + '</a> / <span aria-current="page">' + esc(a.title) + '</span></nav></div>' +
    '<div class="art"><header class="art-head"><a class="tag" href="' + catUrl(a.category) + '">' + esc(a.category) + '</a><h1>' + esc(a.title) + '</h1>' +
    '<p class="lede">' + esc(a.excerpt) + '</p><p class="meta">By ' + esc(a.author) + '. Published ' + fmtDate(a.publishedDate) +
    '. Updated ' + fmtDate(a.updatedDate) + '.</p></header>' + media(a) + '<div id="toc" class="toc" hidden></div>' +
    '<div class="prose" id="body">' + a.content + '</div>' +
    '<div class="share"><span>Share:</span><a href="https://wa.me/?text=' + enc(a.title + " " + pageUrl) + '" target="_blank" rel="noopener">WhatsApp</a>' +
    '<a href="https://www.linkedin.com/sharing/share-offsite/?url=' + enc(pageUrl) + '" target="_blank" rel="noopener">LinkedIn</a>' +
    '<a href="https://twitter.com/intent/tweet?url=' + enc(pageUrl) + '&text=' + enc(a.title) + '" target="_blank" rel="noopener">X</a>' +
    '<button type="button" id="copy">Copy link</button></div>' +
    '<p class="note">RealtySphere publishes general information for research. It is not legal, financial or investment advice. Verify project details on the official RERA portal.</p>' +
    '<p>More in <a href="' + catUrl(a.category) + '">' + esc(a.category) + '</a> or <a href="categories.html">all categories</a>.</p></div>' +
    '<section class="block alt"><div class="wrap"><h2>Related articles</h2><div class="grid">' + related.map(card).join("") + '</div></div></section>';

  /* Table of contents from the H2/H3 headings in the article body */
  const hs = document.querySelectorAll("#body h2, #body h3");
  if (hs.length) {
    let html = "<strong>In this article</strong><ol>";
    hs.forEach((h, i) => { h.id = "s" + (i + 1); html += '<li class="' + (h.tagName === "H3" ? "sub" : "") + '"><a href="#s' + (i + 1) + '">' + esc(h.textContent) + "</a></li>"; });
    const t = document.getElementById("toc"); t.innerHTML = html + "</ol>"; t.hidden = false;
  }
  document.getElementById("copy").addEventListener("click", e => {
    (navigator.clipboard ? navigator.clipboard.writeText(pageUrl) : Promise.reject()).then(() => e.target.textContent = "Link copied", () => e.target.textContent = "Copy failed");
  });
})();
