/* LOCAL BLOG BLOCK MAKER. It only makes text for you to copy. It does NOT publish anything. */
(function () {
  const f = document.getElementById("f"), $ = n => f.elements[n], out = document.getElementById("out"), msg = document.getElementById("msg");
  CATEGORIES.forEach(c => $("category").insertAdjacentHTML("beforeend", "<option>" + esc(c) + "</option>"));
  const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  $("title").addEventListener("input", () => { if (!$("slug").dataset.edited) $("slug").value = slugify($("title").value); });
  $("slug").addEventListener("input", () => $("slug").dataset.edited = "1");

  /* Toolbar: wraps/prefixes the selected text */
  document.getElementById("tools").addEventListener("click", e => {
    const k = e.target.dataset.k; if (!k) return;
    const t = $("content"), s = t.selectionStart, en = t.selectionEnd, sel = t.value.slice(s, en) || "text";
    const ins = { h2: "\n\n## " + sel + "\n\n", h3: "\n\n### " + sel + "\n\n", li: "\n- " + sel, b: "**" + sel + "**" }[k];
    t.setRangeText(ins, s, en, "end"); t.focus();
  });

  /* Plain text -> HTML. Blank line = new paragraph, ## = H2, ### = H3, - = bullet, **bold**, [text](link) */
  function inline(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\[([^\]]+)\]\((https?:[^)\s]+|[a-z0-9\-./?=&#]+)\)/gi, '<a href="$2">$1</a>');
  }
  function toHtml(text) {
    const out = []; let para = [], list = [];
    const flush = () => {
      if (para.length) out.push("<p>" + inline(para.join(" ")) + "</p>"); para = [];
      if (list.length) out.push("<ul>" + list.map(x => "<li>" + inline(x) + "</li>").join("") + "</ul>"); list = [];
    };
    text.split(/\r?\n/).forEach(raw => {
      const l = raw.trim();
      if (!l) return flush();
      if (l.startsWith("### ")) { flush(); out.push("<h3>" + inline(l.slice(4)) + "</h3>"); }
      else if (l.startsWith("## ")) { flush(); out.push("<h2>" + inline(l.slice(3)) + "</h2>"); }
      else if (/^[-*] /.test(l)) { if (para.length) flush(); list.push(l.slice(2)); }
      else { if (list.length) flush(); para.push(l); }
    });
    flush(); return out.join("");
  }
  const x = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const indent = s => s.split("\n").map(l => "  " + l).join("\n");
  const today = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };

  function show(id, text) { document.getElementById(id).value = text; }
  document.getElementById("make").addEventListener("click", () => {
    const title = $("title").value.trim(), slug = slugify($("slug").value), content = $("content").value.trim(), excerpt = $("excerpt").value.trim();
    if (!title || !content || !excerpt) { msg.textContent = "Title, summary and content are required."; out.hidden = true; return; }
    if (!slug) { msg.textContent = "Slug is empty. Type a slug in English letters, like my-first-blog."; out.hidden = true; return; }
    const dup = BLOGS.some(b => b.slug === slug);
    const d = today(), img = $("image").value.trim().replace(/^\/+/, "");
    const a = { id: Math.max(0, ...BLOGS.map(b => b.id)) + 1, title, slug, excerpt, content: toHtml(content),
      featuredImage: "assets/images/" + (img || slug + ".jpg"), imageAlt: $("imageAlt").value.trim() || "Illustration for: " + title,
      category: $("category").value, author: "RealtySphere Editorial Team", publishedDate: d, updatedDate: d,
      seoTitle: $("seoTitle").value.trim() || title + " | RealtySphere", metaDescription: $("metaDescription").value.trim() || excerpt };
    const url = SITE.url + "/article.html?slug=" + encodeURIComponent(slug);
    show("o1", ",\n" + indent(JSON.stringify(a, null, 2)));
    show("o2", "  <url><loc>" + x(url) + "</loc><lastmod>" + d + "</lastmod></url>");
    show("o3", "<item><title>" + x(title) + "</title><link>" + x(url) + "</link><guid>" + x(url) + "</guid><pubDate>" +
      new Date(d + "T00:00:00Z").toUTCString().replace("GMT", "+0000") + "</pubDate><description>" + x(excerpt) + "</description></item>");
    out.hidden = false;
    msg.textContent = dup ? "Warning: a blog with this slug already exists. Change the slug before using these blocks." : "Done. Copy each box below into its file (steps shown under each box).";
    out.scrollIntoView({ behavior: "smooth" });
  });
  document.querySelectorAll("[data-copy]").forEach(b => b.addEventListener("click", () => {
    const el = document.getElementById(b.dataset.copy); el.select();
    (navigator.clipboard ? navigator.clipboard.writeText(el.value) : Promise.reject()).then(() => b.textContent = "Copied", () => { document.execCommand("copy"); b.textContent = "Copied"; });
    setTimeout(() => b.textContent = "Copy", 1800);
  }));
})();
