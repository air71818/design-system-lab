const root = document.documentElement;
const body = document.body;

const storage = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      return;
    }
  }
};

const colorTokens = [
  ["--bg", "Canvas", "Application background"],
  ["--surface", "Surface", "Primary panels and controls"],
  ["--text", "Text", "High emphasis content"],
  ["--text-muted", "Muted text", "Secondary labels"],
  ["--accent", "Accent", "Primary actions"],
  ["--coral", "Coral", "Destructive and warm emphasis"],
  ["--amber", "Amber", "Warning states"],
  ["--violet", "Violet", "Secondary data accent"]
];

const typeTokens = [
  ["--font-12", "12px", "Caption"],
  ["--font-14", "14px", "Label"],
  ["--font-16", "16px", "Body"],
  ["--font-18", "18px", "Lead"],
  ["--font-24", "24px", "Section"],
  ["--font-32", "32px", "Display"]
];

const spaceTokens = [
  ["--space-1", "4px"],
  ["--space-2", "8px"],
  ["--space-3", "12px"],
  ["--space-4", "16px"],
  ["--space-5", "20px"],
  ["--space-6", "24px"],
  ["--space-8", "32px"],
  ["--space-10", "40px"]
];

function cssValue(token) {
  return getComputedStyle(root).getPropertyValue(token).trim();
}

function renderColorTokens() {
  const target = document.querySelector("#colorTokens");
  target.innerHTML = colorTokens
    .map(([token, label, description]) => {
      const value = cssValue(token);
      return `
        <article class="swatch" style="--swatch-color: ${value}">
          <span class="swatch-chip" aria-hidden="true"></span>
          <span class="swatch-copy">
            <strong>${label}</strong>
            <span>${token} / ${value}</span>
            <span>${description}</span>
          </span>
        </article>
      `;
    })
    .join("");
}

function renderTypeTokens() {
  const target = document.querySelector("#typeTokens");
  target.innerHTML = typeTokens
    .map(([token, value, sample]) => `
      <tr>
        <td>${token}</td>
        <td>${value}</td>
        <td><span class="type-preview" style="font-size: var(${token})">${sample}</span></td>
      </tr>
    `)
    .join("");
}

function renderSpaceTokens() {
  const target = document.querySelector("#spaceTokens");
  target.innerHTML = spaceTokens
    .map(([token, value]) => `
      <tr>
        <td>${token}</td>
        <td>${value}</td>
        <td><span class="space-preview" style="--space-size: var(${token})"></span></td>
      </tr>
    `)
    .join("");
}

function setTheme(theme) {
  root.dataset.theme = theme;
  storage.set("dsl-theme", theme);

  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    const active = button.dataset.themeChoice === theme;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderColorTokens();
}

function setTab(tabName) {
  document.querySelectorAll("[data-tab]").forEach((tab) => {
    const active = tab.dataset.tab === tabName;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  document.querySelectorAll("[data-panel]").forEach((panel) => {
    const active = panel.dataset.panel === tabName;
    panel.classList.toggle("active", active);
    panel.hidden = !active;
  });
}

function setupModal() {
  const backdrop = document.querySelector("#modalBackdrop");
  const openButton = document.querySelector("#openModal");
  const closeButton = document.querySelector("#closeModal");
  const cancelButton = document.querySelector("[data-modal-cancel]");
  const confirmButton = document.querySelector("[data-modal-confirm]");
  let previousFocus = null;

  const close = () => {
    backdrop.hidden = true;
    document.removeEventListener("keydown", onKeydown);
    previousFocus?.focus();
  };

  const open = () => {
    previousFocus = document.activeElement;
    backdrop.hidden = false;
    document.addEventListener("keydown", onKeydown);
    closeButton.focus();
  };

  function onKeydown(event) {
    if (event.key === "Escape") {
      close();
    }
  }

  openButton.addEventListener("click", open);
  closeButton.addEventListener("click", close);
  cancelButton.addEventListener("click", close);
  confirmButton.addEventListener("click", close);
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) {
      close();
    }
  });
}

function setupNavigationState() {
  const links = [...document.querySelectorAll(".nav-link")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-20% 0px -65% 0px", threshold: [0.2, 0.5, 0.8] }
  );

  sections.forEach((section) => observer.observe(section));
}

function initialize() {
  renderTypeTokens();
  renderSpaceTokens();
  setTheme(storage.get("dsl-theme") || "light");

  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    button.addEventListener("click", () => setTheme(button.dataset.themeChoice));
  });

  document.querySelectorAll("[data-tab]").forEach((tab) => {
    tab.addEventListener("click", () => setTab(tab.dataset.tab));
  });

  document.querySelector("#densityToggle").addEventListener("click", (event) => {
    const active = body.classList.toggle("compact");
    event.currentTarget.setAttribute("aria-pressed", String(active));
  });

  setupModal();
  setupNavigationState();
}

initialize();
