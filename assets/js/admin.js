/* LOCAL DEMO editor. Drafts live only in THIS browser's LocalStorage. Nothing is published. */
(function () {
  const KEY = "realtysphere_drafts", f = document.getElementById("f");
  const get = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } };
  const put = d => { try { localStorage.setItem(KEY, JSON.stringify(d)); return true; } catch (e) { return false; } };
  const $ = n => f.elements[n], msg = document.getElementById("msg");
  CATEGORIES.forEach(c => $("category").insertAdjacentHTML("beforeend", "<option>" + esc(c) + "</option>"));
  const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  $("title").addEventListener("input", () => { if (!$("slug").dataset.edited) $("slug").value = slugify($("title").value); });
  $("slug").addEventListener("input", () => $("slug").dataset.edited = "1");
  function read() {
    const today = new Date().toISOString().slice(0, 10), slug = slugify($("slug").value);
    return { id: BLOGS.length + 1, title: $("title").value.trim(), slug, excerpt: $("excerpt").value.trim(), content: $("content").value.trim(),
      featuredImage: $("featuredImage").value.trim() || "assets/images/" + slug + ".jpg", imageAlt: $("imageAlt").value.trim(),
      category: $("category").value, author: "RealtySphere Editorial Team", publishedDate: today, updatedDate: today,
      seoTitle: $("seoTitle").value.trim() || $("title").value.trim() + " | RealtySphere", metaDescription: $("metaDescription").value.trim() || $("excerpt").value.trim() };
  }
  function valid(a) { return a.title && a.slug && a.content ? true : (msg.textContent = "Title, slug and content are required.", false); }
  function drawList() {
    const d = get(), ul = document.getElementById("drafts");
    ul.innerHTML = d.length ? d.map((x, i) => '<li><span>' + esc(x.title) + '</span><span><button type="button" data-load="' + i + '" class="chip">Edit</button> <button type="button" data-del="' + i + '" class="chip">Delete</button></span></li>').join("") : "<li>No drafts saved in this browser yet.</li>";
  }
  document.getElementById("save").addEventListener("click", () => {
    const a = read(); if (!valid(a)) return;
    const d = get().filter(x => x.slug !== a.slug); d.push(a);
    msg.textContent = put(d) ? "Draft saved in this browser only. It is not published." : "Could not save. LocalStorage may be disabled; use Export instead.";
    drawList();
  });
  document.getElementById("export").addEventListener("click", () => {
    const a = read(); if (!valid(a)) return;
    const url = URL.createObjectURL(new Blob([JSON.stringify(a, null, 2)], { type: "application/json" }));
    const l = document.createElement("a"); l.href = url; l.download = a.slug + ".json"; l.click(); URL.revokeObjectURL(url);
    msg.textContent = "Exported. To publish, paste this object into blogs.js (see README) and upload your files.";
  });
  document.getElementById("drafts").addEventListener("click", e => {
    const d = get();
    if (e.target.dataset.del) { d.splice(+e.target.dataset.del, 1); put(d); drawList(); }
    if (e.target.dataset.load) { const a = d[+e.target.dataset.load]; Object.keys(a).forEach(k => { if ($(k)) $(k).value = a[k]; }); $("slug").dataset.edited = "1"; }
  });
  drawList();
})();
