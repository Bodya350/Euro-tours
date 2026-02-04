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

// =========================
// Language switch (UA / EN)
// =========================
(function () {
  const dict = {
    uk: {
      meta_title: "Екскурсії Європою",
      nav_about: "Про нас",
      nav_tours: "Екскурсії",
      nav_contacts: "Контакти",
      cta_leave_request: "Залишити заявку",
      burger_label: "Відкрити меню",

      hero_kicker: "Авторські екскурсії містами Європи",
      hero_text: "Невеликі групи, локальні місця та маршрути без кліше. Підберемо екскурсію під ваші інтереси.",
      hero_btn_choose: "Обрати екскурсію",

      about_label: "про нас",
      about_title: "Екскурсії, які запам’ятовуються",
      about_motivation: "Ми показуємо міста “живими”: вулички, легенди, гастро-точки й атмосферні краєвиди.",
      about_slogan: "Обирайте тему: історія, архітектура, гастрономія, прогулянки на заході сонця. Індивідуально або міні-група.",

      tours_subtitle: "Оберіть місто — ми підберемо маршрут і час",
      tours_title: "Популярні екскурсії та ціни",
      tours_btn_pick: "Підібрати екскурсію",

      tour_ams: "Амстердам: канали та старе місто <span>від 35€</span>",
      tour_paris: "Париж: Монмартр і дворики <span>від 75€</span>",
      tour_prague: "Прага: легенди та панорами <span>від 60€</span>",
      tour_rome: "Рим: античність і приховані місця <span>від 55€</span>",

      tour_bcn: "Барселона: Гауді + гастро <span>від 60€</span>",
      tour_vienna: "Відень: палаци та кава <span>від 40€</span>",
      tour_bruges: "Брюгге: середньовічний маршрут <span>від 35€</span>",
      tour_berlin: "Берлін: історія ХХ століття <span>від 45€</span>",

      tour_swiss: "Швейцарія: гори та озера <span>від 90€</span>",
      tour_lux: "Люксембург: палаци та кава <span>від 50€</span>",
      tour_bxl: "Брюссель: середньовічний маршрут <span>від 35€</span>",
      tour_cologne: "Кельн: історія ХХ століття <span>від 45€</span>",

      stat_countries: "країн",
      stat_tours: "екскурсій",
      stat_routes: "маршрутів",
      stat_guests: "гостей",

      quality_label: "якість і комфорт",
      why_title: "Чому обирають нас?",
      why_text: "У нас продумані маршрути, невеликі групи та підтримка — ви просто обираєте місто й дату.",
      why_btn_write: "Написати нам",

      gallery_title: "Маршрути, які хочеться фотографувати",

      form_title: "Заявка на екскурсію",
      ph_name: "ім’я*",
      ph_phone: "телефон*",
      ph_msg: "місто / дата / побажання",
      form_send: "Надіслати",

      contacts_title: "Контакти",
      social_label: "соцмережі",

      top_label: "Вгору"
    },

    en: {
      meta_title: "Tours in Europe",
      nav_about: "About",
      nav_tours: "Tours",
      nav_contacts: "Contacts",
      cta_leave_request: "Request a tour",
      burger_label: "Open menu",

      hero_kicker: "Private guided tours across Europe",
      hero_text: "Small groups, local spots, and routes without clichés. We’ll match a tour to your interests.",
      hero_btn_choose: "Choose a tour",

      about_label: "about",
      about_title: "Tours you’ll remember",
      about_motivation: "We show cities “alive”: cozy streets, legends, food spots, and atmospheric views.",
      about_slogan: "Choose a theme: history, architecture, gastronomy, sunset walks. Private or small group.",

      tours_subtitle: "Pick a city — we’ll suggest the best route and time",
      tours_title: "Popular tours & prices",
      tours_btn_pick: "Find the right tour",

      tour_ams: "Amsterdam: canals & old town <span>from €35</span>",
      tour_paris: "Paris: Montmartre & hidden courtyards <span>from €75</span>",
      tour_prague: "Prague: legends & panoramas <span>from €60</span>",
      tour_rome: "Rome: antiquity & hidden places <span>from €55</span>",

      tour_bcn: "Barcelona: Gaudí + food <span>from €60</span>",
      tour_vienna: "Vienna: palaces & coffee <span>from €40</span>",
      tour_bruges: "Bruges: medieval route <span>from €35</span>",
      tour_berlin: "Berlin: 20th century history <span>from €45</span>",

      tour_swiss: "Switzerland: mountains & lakes <span>from €90</span>",
      tour_lux: "Luxembourg: palaces & coffee <span>from €50</span>",
      tour_bxl: "Brussels: medieval route <span>from €35</span>",
      tour_cologne: "Cologne: 20th century history <span>from €45</span>",

      stat_countries: "countries",
      stat_tours: "tours",
      stat_routes: "routes",
      stat_guests: "guests",

      quality_label: "quality & comfort",
      why_title: "Why choose us?",
      why_text: "Thoughtful routes, small groups, and support — you just pick a city and date.",
      why_btn_write: "Message us",

      gallery_title: "Routes you’ll want to photograph",

      form_title: "Tour request",
      ph_name: "name*",
      ph_phone: "phone*",
      ph_msg: "city / date / notes",
      form_send: "Send",

      contacts_title: "Contacts",
      social_label: "social",

      top_label: "Top"
    }
  };

  const STORAGE_KEY = "site_lang";

  function normalizeLang(lang) {
    if (!lang) return "uk";
    const l = String(lang).toLowerCase();
    if (l.startsWith("en")) return "en";
    if (l.startsWith("uk") || l.startsWith("ua")) return "uk";
    return "uk";
  }

  function setPressedButtons(activeLang) {
    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      const isActive = btn.dataset.lang === activeLang;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      btn.classList.toggle("is-active", isActive);
    });
  }

  function applyLang(lang) {
    const pack = dict[lang] || dict.uk;

    // html lang
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "uk");

    // title
    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) titleEl.textContent = pack.meta_title;
    else document.title = pack.meta_title;

    // text/HTML nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key || pack[key] == null) return;

      // для рядків з <span>... (ціни) — використовуємо innerHTML
      if (String(pack[key]).includes("<")) el.innerHTML = pack[key];
      else el.textContent = pack[key];
    });

    // placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key || pack[key] == null) return;
      el.setAttribute("placeholder", pack[key]);
    });

    // aria-label
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (!key || pack[key] == null) return;
      el.setAttribute("aria-label", pack[key]);
    });

    localStorage.setItem(STORAGE_KEY, lang);
    setPressedButtons(lang);
  }

  function initLang() {
    const saved = localStorage.getItem(STORAGE_KEY);

    // Якщо хочеш авто-вибір за мовою браузера — залиш це:
    const browserLang = navigator.language || navigator.userLanguage;

    const initial = normalizeLang(saved || browserLang || "uk");
    applyLang(initial);

    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = normalizeLang(btn.dataset.lang);
        applyLang(lang);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initLang);
})();

