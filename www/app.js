/* ===================== Ícones (SVG inline) ===================== */
const ICON = {
  logo: `<svg viewBox="0 0 36 36" fill="none">
    <defs><linearGradient id="ug" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2f50dd"/><stop offset="1" stop-color="#5f80ff"/></linearGradient></defs>
    <path d="M8 6 V17 a10 10 0 0 0 20 0 V6" stroke="url(#ug)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="24.5" y="2.5" width="9.5" height="9.5" rx="2.8" fill="#2f9bff"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="6 9 12 15 18 9"/></svg>`,
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
    <rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>`,
  // Tabs
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  video: `<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M4 6C3.45 6 3 6.45 3 7v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1.07c0-1.2 1.34-1.91 2.33-1.24L21 17.13V6.87l-3.67 2.44C16.34 9.98 15 9.27 15 8.07V7c0-.55-.45-1-1-1H4zM1 7c0-1.66 1.34-3 3-3h10c1.66 0 3 1.34 3 3v.13l2.89-1.93C21.22 4.32 23 5.27 23 6.87v10.26c0 1.6-1.78 2.55-3.11 1.67L17 16.87V17c0 1.66-1.34 3-3 3H4c-1.66 0-3-1.34-3-3V7z"/></svg>`,
  music: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.2.02 8.68 3.15c-.34.09-.59.4-.59.76V18.37c-.65-.4-1.46-.63-2.35-.63-2.15 0-3.91 1.4-3.91 3.13S3.58 24 5.74 24s3.91-1.4 3.91-3.13V9.22l10.96-2.74v7.2c-.66-.4-1.47-.63-2.35-.63-2.16 0-3.91 1.4-3.91 3.13s1.75 3.13 3.91 3.13 3.91-1.41 3.91-3.13V.78c0-.5-.48-.88-.97-.76z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
};

/* ===================== Dados ===================== */
const filters = {
  periodo: { label: "Período de visualizaç...", value: "Hoje", info: true,
    options: ["Hoje", "Ontem", "Últimos 7 dias", "Este mês", "Mês passado", "Personalizado"] },
  conta: { label: "Conta de anúncio", value: "Todas", options: ["Todas"] },
  plataformas: { label: "Plataformas", value: "Qualquer", options: ["Qualquer"] },
  produtos: { label: "Produtos", value: "Qualquer", options: ["Qualquer", "Todos"] },
  fonte: { label: "Fonte de tráfego", value: "Qualquer", full: true,
    options: ["Qualquer", "Meta", "Google", "Kwai"] },
};

// Ordem exata dos cards conforme as telas
const cards = [
  { type: "metric", label: "Faturamento Líquido", value: "R$ 0,00", info: true },
  { type: "metric", label: "Gastos com anúncios", value: "R$ 0,00" },
  { type: "metric", label: "ROAS", value: "N/A", info: true, danger: true },
  { type: "metric", label: "Lucro", value: "R$ 0,00", info: true },
  { type: "payment" },
  { type: "metric", label: "Vendas Pendentes", value: "R$ 0,00" },
  { type: "metric", label: "ROI", value: "N/A", info: true, danger: true },
  { type: "metric", label: "Custos de Produtos", value: "R$ 0,00", info: true },
  { type: "metric", label: "Vendas Reembolsadas", value: "R$ 0,00" },
  { type: "metric", label: "Margem de Lucro", value: "N/A", info: true },
  { type: "metric", label: "Despesas adicionais", value: "R$ 0,00" },
  { type: "metric", label: "Imposto", value: "R$ 0,00", info: true },
  { type: "metric", label: "Imposto Meta Ads", value: "R$ 0,00", info: true },
  { type: "metric", label: "Imposto Total", value: "R$ 0,00", info: true },
  { type: "metric", label: "Chargeback", value: "0.0%", info: true },
  { type: "metric", label: "Taxas", value: "R$ 0,00", info: true },
  { type: "metric", label: "CPA", value: "N/A", info: true },
  { type: "metric", label: "Custo por Conversa", value: "N/A", info: true },
  { type: "metric", label: "Conversas", value: "0", info: true },
  { type: "metric", label: "ARPU", value: "N/A", info: true },
  { type: "list", label: "Vendas por Produto" },
  { type: "list", label: "Vendas por Fonte" },
  { type: "approval" },
  { type: "metric", label: "Leads", value: "0", info: true },
  { type: "metric", label: "Custo por Lead", value: "N/A", info: true },
];

const paymentLegend = [
  { label: "Pix", color: "var(--pix)" },
  { label: "Cartão", color: "var(--cartao)" },
  { label: "Boleto", color: "var(--boleto)" },
  { label: "Outros", color: "var(--outros)" },
];
const approvalRows = ["Cartão", "Pix", "Boleto"];
const tabs = ["dashboard", "facebook", "video", "music", "youtube", "menu"];

/* ===================== Helpers de render ===================== */
const infoIcon = () => `<span class="info">${ICON.info}</span>`;

function metricCard(c) {
  return `<div class="card metric ${c.danger ? "danger" : ""}">
    <div class="metric-head">
      <div class="label">${c.label}</div>
      ${c.info ? infoIcon() : ""}
    </div>
    <div class="value">${c.value}</div>
  </div>`;
}

function paymentCard() {
  const r = 66, c = 2 * Math.PI * r;
  return `<div class="card">
    <div class="chart-title">Vendas por Pagamento</div>
    <div class="donut-wrap">
      <div class="donut">
        <svg viewBox="0 0 150 150">
          <circle cx="75" cy="75" r="${r}" fill="none" stroke="var(--divider)" stroke-width="18"
            stroke-dasharray="${c}" stroke-dashoffset="0"/>
        </svg>
        <div class="donut-center">
          <div class="dc-label">Total</div>
          <div class="dc-value">0</div>
        </div>
      </div>
    </div>
    <div class="legend">
      ${paymentLegend.map(l => `<div class="leg">
        <span class="dot" style="background:${l.color}"></span>
        <span class="leg-label">${l.label}</span></div>`).join("")}
    </div>
  </div>`;
}

function listCard(c) {
  return `<div class="card list-card">
    <div class="head"><div class="chart-title">${c.label}</div>${infoIcon()}</div>
    <div class="empty-text">Nenhuma venda por aqui</div>
  </div>`;
}

function approvalCard() {
  return `<div class="card approval">
    <div class="head"><div class="chart-title">Taxa de Aprovacao</div>${infoIcon()}</div>
    ${approvalRows.map(l => `<div class="approval-row">
      <div class="ar-label">${l}</div>
      <div class="ar-right"><div class="ring"></div><div class="ar-value">N/A</div></div>
    </div>`).join("")}
  </div>`;
}

function fieldHtml(key, f) {
  return `<div class="field ${f.full ? "full" : ""}">
    <div class="field-label">${f.label}${f.info ? infoIcon() : ""}</div>
    <div class="select" data-key="${key}">
      <span class="sel-value">${f.value}</span>
      <span class="chev">${ICON.chevron}</span>
    </div>
  </div>`;
}

function summaryCard() {
  return `<div class="card summary">
    <div class="summary-title">Resumo</div>
    <div class="refresh-row">
      <span class="updated">Atualizado agora mesmo</span>
      <button class="btn-refresh" id="btnRefresh">Atualizar</button>
    </div>
    <div class="summary-divider"></div>
    <div class="filters-grid">
      ${fieldHtml("periodo", filters.periodo)}
      ${fieldHtml("conta", filters.conta)}
      ${fieldHtml("plataformas", filters.plataformas)}
      ${fieldHtml("produtos", filters.produtos)}
      ${fieldHtml("fonte", filters.fonte)}
    </div>
  </div>`;
}

function renderCards() {
  return cards.map(c => {
    if (c.type === "metric") return metricCard(c);
    if (c.type === "payment") return paymentCard();
    if (c.type === "list") return listCard(c);
    if (c.type === "approval") return approvalCard();
    return "";
  }).join("");
}

/* ===================== Montagem ===================== */
function logoSrc() {
  return currentTheme() === "dark" ? "img/logo-white.png" : "img/logo-dark.png";
}
function buildLogo() {
  document.getElementById("logo").innerHTML =
    `<img class="logo-img" src="${logoSrc()}" alt="utmify"/>`;
}

function buildHeaderIcons() {
  document.getElementById("btnEdit").innerHTML = ICON.edit;
  updateThemeIcon();
}

function buildTabs() {
  const bar = document.getElementById("tabbar");
  bar.innerHTML = tabs.map((t, i) =>
    `<button class="tab ${i === 0 ? "active" : ""}" data-tab="${t}">${ICON[t]}</button>`).join("");
}

function buildScroll() {
  document.getElementById("scroll").innerHTML = summaryCard() + renderCards();
  bindRefresh();
  bindSelects();
}

function buildFab() {
  document.getElementById("fab").innerHTML = ICON.clipboard;
}

/* ===================== Tema ===================== */
function currentTheme() { return document.documentElement.getAttribute("data-theme"); }
function updateThemeIcon() {
  // Mostra o ícone do tema oposto (igual ao app: lua no escuro, sol no claro)
  document.getElementById("btnTheme").innerHTML = currentTheme() === "dark" ? ICON.moon : ICON.sun;
  const li = document.querySelector(".logo-img");
  if (li) li.src = logoSrc();
  document.querySelector('meta[name="theme-color"]')
    .setAttribute("content", currentTheme() === "dark" ? "#1c1c1e" : "#ffffff");
}
function toggleTheme() {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
  updateThemeIcon();
}

/* ===================== Interações ===================== */
function bindRefresh() {
  const btn = document.getElementById("btnRefresh");
  btn.addEventListener("click", () => {
    if (btn.classList.contains("loading")) return;
    btn.classList.add("loading");
    btn.innerHTML = `<span class="spinner"></span>`;
    setTimeout(() => { btn.classList.remove("loading"); btn.textContent = "Atualizar"; }, 1100);
  });
}

let openDropdown = null;
function closeDropdown() {
  if (openDropdown) { openDropdown.remove(); openDropdown = null; }
}
function bindSelects() {
  document.querySelectorAll(".select").forEach(sel => {
    sel.addEventListener("click", (e) => {
      e.stopPropagation();
      const key = sel.dataset.key;
      const wasOpen = openDropdown && openDropdown.dataset.key === key;
      closeDropdown();
      if (wasOpen) return;

      const f = filters[key];
      const dd = document.createElement("div");
      dd.className = "dropdown";
      dd.dataset.key = key;
      dd.innerHTML = f.options.map(o =>
        `<div class="opt ${o === f.value ? "active" : ""}" data-val="${o}">${o}</div>`).join("");
      sel.appendChild(dd);

      // Posiciona o dropdown logo abaixo do campo
      dd.style.top = (sel.offsetHeight + 6) + "px";
      dd.style.left = "0";
      dd.style.right = "0";
      openDropdown = dd;

      dd.querySelectorAll(".opt").forEach(opt => {
        opt.addEventListener("click", (ev) => {
          ev.stopPropagation();
          f.value = opt.dataset.val;
          sel.querySelector(".sel-value").textContent = f.value;
          closeDropdown();
        });
      });
    });
  });
  document.addEventListener("click", closeDropdown);
  document.getElementById("scroll").addEventListener("scroll", closeDropdown);
}

function bindTabs() {
  document.getElementById("tabbar").addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    document.querySelectorAll(".tabbar .tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
}

/* ===================== Init ===================== */
function init() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
  } catch (e) {}

  buildLogo();
  buildHeaderIcons();
  buildTabs();
  buildScroll();
  buildFab();
  bindTabs();

  document.getElementById("btnTheme").addEventListener("click", toggleTheme);
}

document.addEventListener("DOMContentLoaded", init);
