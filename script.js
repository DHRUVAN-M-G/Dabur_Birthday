const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll(".book-card").forEach(async card => {
  const link = card.querySelector(".read-button");
  const file = card.dataset.file;
  try {
    const response = await fetch(file, { method: "HEAD" });
    if (response.ok) {
      link.href = file; link.target = "_blank"; link.rel = "noopener";
      link.textContent = "Read book ↗"; link.classList.remove("unavailable");
      link.removeAttribute("aria-disabled");
    }
  } catch (_) {}
});