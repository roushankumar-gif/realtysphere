# RealtySphere

A simple static real estate blog: HTML, CSS and plain JavaScript. No database, no paid service, no build step.

## 1. Preview on your computer
Easiest: double-click `index.html`. Everything works that way.
Better (matches real hosting): open a terminal in this folder and run `python3 -m http.server 8000`, then visit http://localhost:8000

## 2. Put it on GitHub
1. Create a free account at github.com and click New repository (name it `realtysphere`).
2. Click "uploading an existing file", drag in everything from this folder (keep the `assets` folder), then Commit changes.

## 3. Publish free on Cloudflare Pages
1. Sign up at dash.cloudflare.com, open Workers & Pages, Create, Pages, Connect to Git.
2. Choose your repository. Framework preset: None. Build command: leave empty. Output directory: `/` (leave empty).
3. Click Save and Deploy. Cloudflare gives you an address like `yourname.pages.dev`.
4. Put that address in the SITE URL places listed under "Manual updates" below.
(Alternative: Pages also lets you drag-and-drop the folder with "Upload assets", no GitHub needed.)

## 4. Add a new blog (the reliable way)
1. Open `assets/js/blogs.js`. Copy one whole `{ ... }` article object, add a comma after the previous one, and paste.
2. Change every field: id (next number), title, slug (lowercase-with-hyphens, unique), excerpt, content (HTML with h2/h3/p/ul), category (must match a name in CATEGORIES), dates (YYYY-MM-DD), seoTitle, metaDescription.
3. Add the image as `assets/images/<slug>.jpg`.
4. Add the new address to `sitemap.xml` and an item to `feed.xml` (copy an existing one).
5. Upload the changed files. The article is at `article.html?slug=<slug>`.

Optional: `admin.html` is a local demo editor. It saves drafts in your browser only and exports JSON. It has no login, is NOT secure, and does NOT publish anything. Delete `admin.html` if you do not want it public.

## Manual updates
- Site URL: `SITE.url` in `assets/js/main.js`, canonical/og URLs in each HTML page, `robots.txt`, `sitemap.xml`, `feed.xml`. Currently `https://realtysphere.pages.dev` as a placeholder. Search and replace it across all files.
- Contact email: `YOUR-EMAIL@example.com` in `contact.html`.
- Sitemap, feed and images for each new article.
- Example articles are general education written for this template. Review and edit them before publishing.

## SEO notes and static-site limits
- Titles, descriptions and canonical tags on the main pages are in the HTML. For articles they are set by JavaScript from `blogs.js`. Google can usually read this, but many other crawlers and social previews (WhatsApp, Facebook) will only see the generic article.html tags.
- Article URLs use `?slug=` rather than clean paths like `/rera-basics/`. Clean URLs would need one HTML file per article.
- Sitemap and feed are not automatic. Update them by hand when you add articles.
- Nothing here guarantees ranking. Results depend on content quality, links and time.

## Static site vs WordPress
WordPress offers a login dashboard, instant publishing, comments, plugins and automatic sitemaps. A static site is free, very fast and has almost nothing to hack, but publishing means editing files and uploading, and there is no built-in comments, contact form or user accounts.
