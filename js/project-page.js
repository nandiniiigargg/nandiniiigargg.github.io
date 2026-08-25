document.addEventListener("DOMContentLoaded", async () => {
  const slug = document.body.getAttribute("data-project");
  const project = PROJECTS[slug];
  if (!project) return;

  document.title = project.name + ": Nandini Garg";

  document.getElementById("p-eyebrow").textContent = project.category.replace(/&amp;/g, "&");
  document.getElementById("p-heading").textContent = project.name;
  document.getElementById("p-tagline").textContent = project.tagline;
  document.getElementById("p-description").innerHTML = project.description;
  document.getElementById("p-role").innerHTML = "<strong>Role</strong>" + project.role;

  const tagsEl = document.getElementById("p-tags");
  project.tags.forEach((t) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = t;
    tagsEl.appendChild(span);
  });

  if (project.video) {
    const videoWrap = document.getElementById("p-video");
    videoWrap.innerHTML = `<video src="${project.video}" controls playsinline preload="metadata"></video>`;
    videoWrap.style.display = "block";
  } else if (project.driveVideo) {
    const videoWrap = document.getElementById("p-video");
    videoWrap.innerHTML = `<div class="drive-video-frame"><iframe src="${project.driveVideo}" allow="autoplay" allowfullscreen></iframe></div>`;
    videoWrap.style.display = "block";
  }

  const linksEl = document.getElementById("p-links");
  if (project.links && project.links.length) {
    project.links.forEach((l) => {
      const a = document.createElement("a");
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.className = "btn btn-outline";
      a.innerHTML = `${l.label} <span>&#8599;</span>`;
      linksEl.appendChild(a);
    });
  }

  // prev/next
  const idx = PROJECT_ORDER.indexOf(slug);
  const nextSlug = PROJECT_ORDER[(idx + 1) % PROJECT_ORDER.length];
  const nextProject = PROJECTS[nextSlug];
  const nextLink = document.getElementById("p-next");
  nextLink.href = `project-${nextSlug}.html`;
  nextLink.querySelector(".next-name").textContent = nextProject.name;

  // gallery
  try {
    const res = await fetch("images/manifest.json");
    const manifest = await res.json();
    const files = manifest[slug] || [];
    const gallery = document.getElementById("p-gallery");
    files.forEach((fname) => {
      const img = document.createElement("img");
      img.src = `images/${slug}/${fname}`;
      img.alt = `${project.name} project file`;
      img.loading = "lazy";
      img.setAttribute("data-lightbox", "");
      gallery.appendChild(img);
    });
    document.getElementById("p-count").textContent = files.length;

    // re-init lightbox for dynamically added images
    if (window.initLightbox) window.initLightbox();
  } catch (e) {
    console.error("Failed to load gallery", e);
  }
});
