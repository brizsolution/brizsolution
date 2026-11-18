const navButton = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
navButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navButton.setAttribute("aria-expanded", String(isOpen));
  navButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  navButton.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
