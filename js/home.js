document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("tile-grid");
  if (!grid) return;

  PROJECT_ORDER.forEach((slug, i) => {
    const p = PROJECTS[slug];
    const a = document.createElement("a");
    a.className = "tile reveal";
    a.href = `project-${slug}.html`;

    a.innerHTML = `
      <div class="tile-media"><img src="${p.cover}" alt="${p.name} cover" /></div>
      <div class="tile-info">
        <div>
          <span class="tile-num">${String(i + 1).padStart(2, "0")} / ${PROJECT_ORDER.length}</span>
          <h3>${p.name}</h3>
          <div class="tile-cat">${p.category.replace(/&amp;/g, "&")}</div>
          <div class="tile-tagline">${p.tagline}</div>
        </div>
        <span class="tile-arrow">&#8599;</span>
      </div>
    `;
    grid.appendChild(a);
  });

  // re-run reveal observer for newly added tiles
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  grid.querySelectorAll(".reveal").forEach((el) => io.observe(el));
});
