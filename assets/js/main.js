/* RealtySphere main script. Runs on every page. Needs blogs.js loaded first. */
const SITE = {
  name: "RealtySphere",
  // CHANGE THIS to your real address once you publish (no trailing slash).
  url: "https://realtysphere.pages.dev",
  description: "An independent real estate blog on residential projects, locations, home buying, investment and RERA."
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const fmtDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-IN", {day:"numeric", month:"long", year:"numeric"});
const byNewest = (a, b) => b.publishedDate.localeCompare(a.publishedDate);
const articleUrl = a => "article.html?slug=" + encodeURIComponent(a.slug);
const catUrl = c => "blogs.html?category=" + encodeURIComponent(c);

/* Image with a drawn fallback, so a missing file never shows a broken icon */
function media(a) {
  return '<div class="media"><img src="' + esc(a.featuredImage) + '" alt="' + esc(a.imageAlt) +
    '" loading="lazy" onerror="this.parentNode.classList.add(\'ph\');this.remove()"></div>';
}
function card(a) {
  return '<article class="card"><a href="' + articleUrl(a) + '" tabindex="-1" aria-hidden="true">' + media(a) + '</a><div class="body">' +
    '<a class="tag" href="' + catUrl(a.category) + '">' + esc(a.category) + '</a>' +
    '<h3><a href="' + articleUrl(a) + '">' + esc(a.title) + '</a></h3><p>' + esc(a.excerpt) + '</p>' +
    '<p class="meta">' + fmtDate(a.publishedDate) + '</p></div></article>';
}
const inCats = (list, cats) => cats ? list.filter(a => cats.includes(a.category)) : list;

/* Mobile menu */
const btn = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
if (btn) btn.addEventListener("click", () => {
  const open = nav.classList.toggle("open"); btn.setAttribute("aria-expanded", open);
});

/* Homepage and category blocks: <div data-render="latest" data-cats="A,B" data-count="3"> */
document.querySelectorAll("[data-render]").forEach(el => {
  const kind = el.dataset.render, count = +el.dataset.count || 3;
  const cats = el.dataset.cats ? el.dataset.cats.split(",") : null;
  const list = inCats([...BLOGS].sort(byNewest), cats);
  if (kind === "featured" && list[0]) {
    const a = list[0];
    el.innerHTML = '<div class="feature"><a href="' + articleUrl(a) + '" tabindex="-1" aria-hidden="true">' + media(a) + '</a><div class="body">' +
      '<a class="tag" href="' + catUrl(a.category) + '">' + esc(a.category) + '</a><h3 style="font-size:1.8rem"><a href="' + articleUrl(a) +
      '" style="text-decoration:none">' + esc(a.title) + '</a></h3><p>' + esc(a.excerpt) + '</p><p class="meta">' + fmtDate(a.publishedDate) +
      '</p><a class="btn dark" href="' + articleUrl(a) + '">Read the article</a></div></div>';
  } else if (kind === "cards") {
    el.innerHTML = list.slice(0, count).map(card).join("") || '<p class="empty">No articles yet in this section.</p>';
  } else if (kind === "chips") {
    el.innerHTML = CATEGORIES.map(c => '<a class="chip" href="' + catUrl(c) + '">' + esc(c) + '</a>').join("");
  } else if (kind === "categories") {
    el.innerHTML = CATEGORIES.map(c => {
      const n = BLOGS.filter(a => a.category === c).length;
      return '<div class="card"><div class="body"><h3><a href="' + catUrl(c) + '">' + esc(c) + '</a></h3><p>' +
        n + (n === 1 ? " article" : " articles") + '</p></div></div>';
    }).join("");
  }
});

/* Listing pages: search + category filter + Load more */
const list = document.getElementById("list");
if (list) {
  const cats = list.dataset.cats ? list.dataset.cats.split(",") : null;
  const PAGE = 6; let shown = PAGE;
  const q = document.getElementById("q"), sel = document.getElementById("cat"), more = document.getElementById("more");
  const base = inCats([...BLOGS].sort(byNewest), cats);
  (cats || CATEGORIES).forEach(c => sel.insertAdjacentHTML("beforeend", '<option>' + esc(c) + '</option>'));
  const param = new URLSearchParams(location.search).get("category");
  if (param && [...sel.options].some(o => o.value === param)) sel.value = param;
  function draw() {
    const t = q.value.trim().toLowerCase();
    const res = base.filter(a => (!sel.value || a.category === sel.value) &&
      (!t || (a.title + " " + a.excerpt + " " + a.category).toLowerCase().includes(t)));
    list.innerHTML = res.slice(0, shown).map(card).join("") || '<p class="empty">No articles match. Try a different word or clear the category.</p>';
    more.hidden = res.length <= shown;
    document.getElementById("count").textContent = res.length + (res.length === 1 ? " article" : " articles");
  }
  q.addEventListener("input", () => { shown = PAGE; draw(); });
  sel.addEventListener("change", () => { shown = PAGE; draw(); });
  more.addEventListener("click", () => { shown += PAGE; draw(); });
  draw();
}
