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

const languageKey = "portfolio-language";

const translations = {
  zh: {
    "Design system sections": "設計系統區段",
    "Design System Lab home": "Design System Lab 首頁",
    "Design System Lab": "設計系統實驗室",
    "Portfolio playground": "作品集展示場",
    "Primary": "主要導覽",
    "Tokens": "Tokens",
    "Components": "元件",
    "States": "狀態",
    "Notes": "筆記",
    "Static frontend / GitHub Pages ready": "靜態前端 / GitHub Pages Ready",
    "Component playground and token reference": "元件展示場與 token 參考",
    "Language": "語言",
    "Theme": "主題",
    "Light": "淺色",
    "Dark": "深色",
    "Contrast": "高對比",
    "Toggle compact density": "切換緊湊密度",
    "System overview": "系統總覽",
    "Foundation": "基礎",
    "27 tokens": "27 個 tokens",
    "Color, type, radius, shadow, and spacing values exposed as CSS custom properties.": "顏色、字體、圓角、陰影與間距以 CSS custom properties 呈現。",
    "Controls": "控制元件",
    "8 patterns": "8 種模式",
    "Buttons, fields, select menus, switches, tabs, modal, alerts, and state previews.": "按鈕、欄位、選單、開關、tabs、modal、alerts 與狀態預覽。",
    "Themes": "主題",
    "3 modes": "3 種模式",
    "Light, dark, and high-contrast palettes share the same semantic component API.": "淺色、深色與高對比色盤共用同一套語意化元件 API。",
    "01 / Foundations": "01 / 基礎",
    "CSS variables rendered from JS data": "由 JS 資料渲染 CSS variables",
    "Color token swatches": "顏色 token 色票",
    "Typography": "字體",
    "Spacing": "間距",
    "Token": "Token",
    "Value": "值",
    "Preview": "預覽",
    "02 / Playground": "02 / 展示場",
    "Component groups": "元件群組",
    "Feedback": "回饋",
    "Composition": "組合",
    "Buttons": "按鈕",
    "Intent, hierarchy, disabled": "意圖、層級、停用",
    "Create token": "建立 token",
    "Export JSON": "匯出 JSON",
    "Remove": "移除",
    "Saving": "儲存中",
    "Form controls": "表單控制",
    "Focus, help, validation": "Focus、說明、驗證",
    "Component name": "元件名稱",
    "Primary button": "主要按鈕",
    "Used in documentation headings.": "用於文件標題。",
    "Status": "狀態",
    "Ready for review": "可供審查",
    "Draft": "草稿",
    "Deprecated": "已棄用",
    "Token alias": "Token alias",
    "Alias already exists in this theme.": "此主題中已存在這個 alias。",
    "Show deprecated variants": "顯示已棄用 variants",
    "Alerts": "Alerts",
    "Semantic surface treatments": "語意化表面樣式",
    "Published": "已發布",
    "Theme tokens are synced across all previews.": "主題 tokens 已同步到所有預覽。",
    "Needs review": "需要審查",
    "One color pair is below the contrast target.": "有一組色彩低於對比目標。",
    "Blocked": "阻擋",
    "Modal copy is missing an accessible label.": "Modal 文案缺少無障礙標籤。",
    "Modal": "Modal",
    "Accessible dialog shell": "無障礙 dialog 外殼",
    "Open the dialog to inspect overlay, focus return, escape handling, and action hierarchy.": "開啟 dialog 檢查 overlay、focus return、escape 處理與操作層級。",
    "Open modal": "開啟 modal",
    "Toolbar composition": "Toolbar 組合",
    "Search, filters, actions": "搜尋、篩選、操作",
    "Search components": "搜尋元件",
    "Component category": "元件類別",
    "All categories": "所有分類",
    "Inputs": "輸入",
    "Navigation": "導覽",
    "Filter": "篩選",
    "New component": "新增元件",
    "Component inventory": "元件清單",
    "Name": "名稱",
    "Coverage": "覆蓋",
    "Button": "按鈕",
    "Stable": "穩定",
    "12 variants": "12 種 variants",
    "Select": "選單",
    "Review": "審查",
    "5 variants": "5 種 variants",
    "4 variants": "4 種 variants",
    "Component states": "元件狀態",
    "Semantic tokens power every component surface, so theme changes require variable overrides instead of component rewrites.": "語意化 tokens 驅動每個元件表面，因此主題變更只需要覆寫變數，不需要重寫元件。",
    "Close modal": "關閉 modal",
    "Cancel": "取消",
    "Publish update": "發布更新",
    "Canvas": "畫布",
    "Application background": "應用背景",
    "Surface": "表面",
    "Primary panels and controls": "主要面板與控制元件",
    "Text": "文字",
    "High emphasis content": "高強調內容",
    "Muted text": "弱化文字",
    "Secondary labels": "次要標籤",
    "Accent": "重點色",
    "Primary actions": "主要操作",
    "Coral": "珊瑚色",
    "Destructive and warm emphasis": "破壞性與暖色強調",
    "Amber": "琥珀色",
    "Warning states": "警告狀態",
    "Violet": "紫羅蘭",
    "Secondary data accent": "次要資料重點色",
    "Caption": "說明文字",
    "Label": "標籤",
    "Body": "內文",
    "Lead": "導語",
    "Section": "區段",
    "Display": "展示"
  },
  ja: {
    "Design system sections": "デザインシステムセクション",
    "Design System Lab home": "Design System Lab ホーム",
    "Design System Lab": "デザインシステムラボ",
    "Portfolio playground": "ポートフォリオプレイグラウンド",
    "Primary": "メイン",
    "Tokens": "トークン",
    "Components": "コンポーネント",
    "States": "状態",
    "Notes": "ノート",
    "Static frontend / GitHub Pages ready": "静的フロントエンド / GitHub Pages 対応",
    "Component playground and token reference": "コンポーネントプレイグラウンドとトークン参照",
    "Language": "言語",
    "Theme": "テーマ",
    "Light": "ライト",
    "Dark": "ダーク",
    "Contrast": "高コントラスト",
    "Toggle compact density": "コンパクト表示を切り替え",
    "System overview": "システム概要",
    "Foundation": "基盤",
    "27 tokens": "27 個のトークン",
    "Color, type, radius, shadow, and spacing values exposed as CSS custom properties.": "色、文字、角丸、影、余白を CSS カスタムプロパティとして公開。",
    "Controls": "コントロール",
    "8 patterns": "8 パターン",
    "Buttons, fields, select menus, switches, tabs, modal, alerts, and state previews.": "ボタン、フィールド、セレクト、スイッチ、タブ、モーダル、アラート、状態プレビュー。",
    "Themes": "テーマ",
    "3 modes": "3 モード",
    "Light, dark, and high-contrast palettes share the same semantic component API.": "ライト、ダーク、高コントラストのパレットが同じセマンティック API を共有します。",
    "01 / Foundations": "01 / 基盤",
    "CSS variables rendered from JS data": "JS データから CSS 変数をレンダリング",
    "Color token swatches": "カラートークンスウォッチ",
    "Typography": "タイポグラフィ",
    "Spacing": "スペーシング",
    "Token": "トークン",
    "Value": "値",
    "Preview": "プレビュー",
    "02 / Playground": "02 / プレイグラウンド",
    "Component groups": "コンポーネントグループ",
    "Feedback": "フィードバック",
    "Composition": "構成",
    "Buttons": "ボタン",
    "Intent, hierarchy, disabled": "意図、階層、無効状態",
    "Create token": "トークン作成",
    "Export JSON": "JSON 出力",
    "Remove": "削除",
    "Saving": "保存中",
    "Form controls": "フォームコントロール",
    "Focus, help, validation": "フォーカス、ヘルプ、バリデーション",
    "Component name": "コンポーネント名",
    "Primary button": "プライマリボタン",
    "Used in documentation headings.": "ドキュメント見出しで使用。",
    "Status": "ステータス",
    "Ready for review": "レビュー可能",
    "Draft": "下書き",
    "Deprecated": "非推奨",
    "Token alias": "トークンエイリアス",
    "Alias already exists in this theme.": "このテーマには同じエイリアスが存在します。",
    "Show deprecated variants": "非推奨バリアントを表示",
    "Alerts": "アラート",
    "Semantic surface treatments": "セマンティックなサーフェス表現",
    "Published": "公開済み",
    "Theme tokens are synced across all previews.": "テーマトークンはすべてのプレビューに同期済みです。",
    "Needs review": "レビュー必要",
    "One color pair is below the contrast target.": "1 つの配色がコントラスト目標を下回っています。",
    "Blocked": "ブロック",
    "Modal copy is missing an accessible label.": "モーダル文言にアクセシブルラベルがありません。",
    "Modal": "モーダル",
    "Accessible dialog shell": "アクセシブルなダイアログシェル",
    "Open the dialog to inspect overlay, focus return, escape handling, and action hierarchy.": "ダイアログを開いてオーバーレイ、フォーカス復帰、Escape 処理、操作階層を確認します。",
    "Open modal": "モーダルを開く",
    "Toolbar composition": "ツールバー構成",
    "Search, filters, actions": "検索、フィルター、アクション",
    "Search components": "コンポーネント検索",
    "Component category": "コンポーネントカテゴリ",
    "All categories": "すべてのカテゴリ",
    "Inputs": "入力",
    "Navigation": "ナビゲーション",
    "Filter": "フィルター",
    "New component": "新規コンポーネント",
    "Component inventory": "コンポーネント一覧",
    "Name": "名前",
    "Coverage": "カバレッジ",
    "Button": "ボタン",
    "Stable": "安定",
    "12 variants": "12 バリアント",
    "Select": "セレクト",
    "Review": "レビュー",
    "5 variants": "5 バリアント",
    "4 variants": "4 バリアント",
    "Component states": "コンポーネント状態",
    "Semantic tokens power every component surface, so theme changes require variable overrides instead of component rewrites.": "セマンティックトークンが各コンポーネント表面を支えるため、テーマ変更は変数上書きだけで済みます。",
    "Close modal": "モーダルを閉じる",
    "Cancel": "キャンセル",
    "Publish update": "更新を公開",
    "Canvas": "キャンバス",
    "Application background": "アプリ背景",
    "Surface": "サーフェス",
    "Primary panels and controls": "主要パネルとコントロール",
    "Text": "テキスト",
    "High emphasis content": "高強調コンテンツ",
    "Muted text": "控えめなテキスト",
    "Secondary labels": "補助ラベル",
    "Accent": "アクセント",
    "Primary actions": "主要アクション",
    "Coral": "コーラル",
    "Destructive and warm emphasis": "破壊的操作と暖色の強調",
    "Amber": "アンバー",
    "Warning states": "警告状態",
    "Violet": "バイオレット",
    "Secondary data accent": "補助データアクセント",
    "Caption": "キャプション",
    "Label": "ラベル",
    "Body": "本文",
    "Lead": "リード",
    "Section": "セクション",
    "Display": "ディスプレイ"
  }
};

const baseTextNodes = new WeakMap();
const translatableAttributes = ["aria-label", "title", "placeholder"];

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function getStoredLanguage() {
  return storage.get(languageKey) || "en";
}

function setStoredLanguage(language) {
  storage.set(languageKey, language);
}

function translateValue(value, language = getStoredLanguage()) {
  const key = normalizeText(value);
  if (!key || language === "en") return key;
  return translations[language]?.[key] || key;
}

function translatePage(language = getStoredLanguage()) {
  document.documentElement.lang = language === "zh" ? "zh-Hant" : language;
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parent = node.parentElement;
    if (!parent || parent.closest(".language-switcher") || ["SCRIPT", "STYLE"].includes(parent.tagName)) continue;
    const base = baseTextNodes.get(node) || normalizeText(node.nodeValue);
    if (!base) continue;
    baseTextNodes.set(node, base);
    node.nodeValue = translateValue(base, language);
  }

  document.querySelectorAll("*").forEach((element) => {
    translatableAttributes.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const baseAttribute = `data-base-${attribute}`;
      const base = element.getAttribute(baseAttribute) || element.getAttribute(attribute);
      element.setAttribute(baseAttribute, base);
      element.setAttribute(attribute, translateValue(base, language));
    });
  });
}

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
            <strong>${translateValue(label)}</strong>
            <span>${token} / ${value}</span>
            <span>${translateValue(description)}</span>
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
        <td><span class="type-preview" style="font-size: var(${token})">${translateValue(sample)}</span></td>
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
  translatePage();

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      setStoredLanguage(button.dataset.lang);
      renderTypeTokens();
      renderSpaceTokens();
      renderColorTokens();
      translatePage(button.dataset.lang);
    });
  });

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
