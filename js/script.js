(() => {
  const body = document.body;
  const burger = document.querySelector(".burger");
  const drawer = document.querySelector(".drawer");
  const drawerLinks = document.querySelectorAll(".drawer__link, .drawer__cta");
  const topBtn = document.querySelector(".scroll_top");

  function openMenu() {
    drawer.classList.add("open");
    burger.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    body.classList.add("lock");
  }

  function closeMenu() {
    drawer.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    body.classList.remove("lock");
  }

  // burger toggle
  burger.addEventListener("click", () => {
    drawer.classList.contains("open") ? closeMenu() : openMenu();
  });

  // click outside closes
  drawer.addEventListener("click", (e) => {
    if (e.target === drawer) closeMenu();
  });

  // any link closes
  drawerLinks.forEach((a) => a.addEventListener("click", () => closeMenu()));

  // ESC closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) closeMenu();
  });

  // Scroll to top button
  function updateTopBtn() {
    if (window.scrollY > 400) topBtn.classList.add("show");
    else topBtn.classList.remove("show");
  }
  updateTopBtn();
  window.addEventListener("scroll", updateTopBtn, { passive: true });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
