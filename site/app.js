/* Legal Templates India — browser form. Everything runs locally; answers are kept in localStorage. */
(() => {
  "use strict";

  const REPO_URL = "https://github.com/dharmabot-ai/legal-templates-india";
  const NOTICE = "AI-assisted draft from the open-source legal-templates-india library (CC0). Not legal advice: " +
    "have an advocate qualified in India review it, and stamp it under the applicable State Stamp Act, before signing. " +
    "Delete this notice before use.";
  const NOTE_RE = /^> \*\*Drafting note:\*\*.*$\n?/gm;
  const PLACEHOLDER_RE = /\{\{\s*([a-z][a-z0-9_]*)\s*\}\}/g;
  // Private-use markers wrap blanks and filled values so the preview and Word export can style them.
  const BLANK_START = "", BLANK_END = "", FILLED_START = "", FILLED_END = "";
  const BLANK_RE = new RegExp(`${BLANK_START}([^${BLANK_END}]*)${BLANK_END}`, "g");
  const FILLED_RE = new RegExp(`${FILLED_START}([^${FILLED_END}]*)${FILLED_END}`, "g");
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"];

  const state = { catalog: null, meta: null, body: "", values: {}, showNotes: false, cache: {} };
  const $ = (sel, root = document) => root.querySelector(sel);
  const view = $("#view");

  /* ---------- storage (per-viewer convenience only) ---------- */
  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
    },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ } },
    remove(key) { try { localStorage.removeItem(key); } catch { /* storage unavailable */ } },
  };
  const answersKey = (id) => `lti:answers:${id}`;

  /* ---------- helpers ---------- */
  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const decodeEntities = (s) => String(s).replace(/&(amp|lt|gt|quot|#39);/g, (_, e) =>
    ({ amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'" }[e]));
  // Escape Markdown syntax in user input so it is inserted literally.
  const escapeMd = (s) => s.replace(/([\\`*_[\]<>|#~])/g, "\\$1");

  function indianGrouping(digits) {
    const [whole, frac] = digits.split(".");
    const last3 = whole.slice(-3);
    const rest = whole.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    return (rest ? `${rest},${last3}` : last3) + (frac ? `.${frac}` : "");
  }

  function formatValue(field, raw) {
    const value = raw.trim().replace(/\s*\n+\s*/g, ", ");
    if (field && field.type === "date" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      const [y, m, d] = value.split("-").map(Number);
      return `${d} ${MONTHS[m - 1]} ${y}`;
    }
    if (field && field.type === "money" && /^\d+(\.\d+)?$/.test(value.replace(/,/g, ""))) {
      return `₹ ${indianGrouping(value.replace(/,/g, ""))}`;
    }
    return value;
  }

  function fieldsByKey() {
    return Object.fromEntries((state.meta?.fields || []).map((f) => [f.key, f]));
  }

  /* ---------- markdown assembly ---------- */
  function buildMarkdown({ forPreview }) {
    const fields = fieldsByKey();
    let text = state.body;
    if (!(forPreview && state.showNotes)) text = text.replace(NOTE_RE, "");
    text = text.replace(PLACEHOLDER_RE, (_, key) => {
      const field = fields[key];
      const raw = state.values[key] || "";
      if (raw.trim()) {
        const value = escapeMd(formatValue(field, raw));
        return forPreview ? FILLED_START + value + FILLED_END : value;
      }
      return BLANK_START + escapeMd(field ? field.label : key) + BLANK_END;
    });
    return text.replace(/^\s+/, "");
  }

  /* ---------- navigation ---------- */
  function renderSidebar(filter = "") {
    const q = filter.trim().toLowerCase();
    const list = $("#template-list");
    const currentId = state.meta?.id;
    let html = "";
    for (const [cat, label] of Object.entries(state.catalog.categories)) {
      const items = state.catalog.templates
        .filter((t) => t.category === cat && matches(t, q))
        .sort((a, b) => a.title.localeCompare(b.title));
      if (!items.length) continue;
      html += `<h2>${escapeHtml(label)}</h2>` + items.map((t) =>
        `<a href="#/${t.id}"${t.id === currentId ? ' aria-current="page"' : ""}>${escapeHtml(t.title)}</a>`).join("");
    }
    list.innerHTML = html || '<p class="empty">No templates match.</p>';
  }

  function matches(t, q) {
    if (!q) return true;
    return [t.title, t.summary, t.document_type, ...(t.governing_laws || [])].join(" ").toLowerCase().includes(q);
  }

  function renderHome() {
    state.meta = null;
    document.body.classList.remove("has-doc");
    document.title = "Legal Templates India";
    const q = $("#search").value.trim().toLowerCase();
    let cards = "";
    for (const [cat, label] of Object.entries(state.catalog.categories)) {
      const items = state.catalog.templates.filter((t) => t.category === cat && matches(t, q));
      if (!items.length) continue;
      cards += `<h2>${escapeHtml(label)}</h2><div class="card-grid">` + items.map((t) =>
        `<a class="card" href="#/${t.id}"><strong>${escapeHtml(t.title)}</strong><span>${escapeHtml(t.summary)}</span></a>`
      ).join("") + "</div>";
    }
    view.innerHTML = `
      <div class="home">
        <h1>Draft Indian legal documents in your browser</h1>
        <p class="lede">${state.catalog.count} free templates drafted to Indian law — contracts, policies and corporate
        documents for startups and enterprises. Pick one, answer the questions, and download a Word file.</p>
        <div class="steps">
          <div class="step"><b>1. Pick a template</b><p>Check “When to use it” on GitHub if you are unsure.</p></div>
          <div class="step"><b>2. Answer the questions</b><p>The preview fills in as you type. Blanks stay highlighted.</p></div>
          <div class="step"><b>3. Download and review</b><p>Get a .docx, have an advocate review it, then stamp and sign.</p></div>
        </div>
        <div class="cards">${cards || '<p class="empty">No templates match your search.</p>'}</div>
      </div>`;
    renderSidebar($("#search").value);
  }

  async function openTemplate(id) {
    const meta = state.catalog.templates.find((t) => t.id === id);
    if (!meta) { renderHome(); return; }
    view.innerHTML = '<div class="loading">Loading template…</div>';
    try {
      if (!state.cache[id]) {
        const res = await fetch(`templates/${id}/template.md`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        const end = text.indexOf("\n---\n", 4);
        state.cache[id] = end === -1 ? text : text.slice(end + 5);
      }
    } catch (err) {
      view.innerHTML = `<p class="error">Could not load this template (${escapeHtml(err.message)}).</p>`;
      return;
    }
    state.meta = meta;
    state.body = state.cache[id];
    state.values = store.get(answersKey(id), {});
    document.body.classList.add("has-doc");
    document.title = `${meta.title} · Legal Templates India`;
    renderTemplate();
    renderSidebar($("#search").value);
    window.scrollTo(0, 0);
  }

  /* ---------- template view ---------- */
  function badge(text, warn) { return `<span class="badge${warn ? " warn" : ""}">${escapeHtml(text)}</span>`; }

  function renderTemplate() {
    const m = state.meta;
    const stamp = { required: "Stamp duty payable", "not-applicable": "No stamp duty", check: "Check stamp duty" }[m.stamp_duty];
    const esign = { permitted: "E-signature OK", "not-permitted": "Wet-ink signature needed", check: "Check e-signature rules" }[m.e_signature];
    const status = { draft: "Draft · not advocate-reviewed", "community-reviewed": "Community reviewed", "advocate-reviewed": "Advocate reviewed" }[m.review_status];
    view.innerHTML = `
      <div class="doc-head">
        <a class="back" href="#/">← All templates</a>
        <h1>${escapeHtml(m.title)}</h1>
        <p>${escapeHtml(m.summary)}</p>
        <div class="badges">
          ${badge(status, m.review_status === "draft")}${badge(stamp, m.stamp_duty !== "not-applicable")}${badge(esign)}
          ${badge(`${m.word_count.toLocaleString("en-IN")} words`)}
        </div>
      </div>
      <div class="toolbar">
        <button class="btn primary" id="dl-docx" type="button">Download Word (.docx)</button>
        <button class="btn" id="dl-md" type="button">Download Markdown</button>
        <button class="btn" id="clear" type="button">Clear answers</button>
        <a class="btn" href="${REPO_URL}/tree/main/templates/${m.id}" target="_blank" rel="noopener">Guide &amp; key provisions</a>
        <label class="toggle"><input type="checkbox" id="notes"${state.showNotes ? " checked" : ""}> Show drafting notes</label>
      </div>
      <div class="workspace">
        <form class="form" id="form" autocomplete="off">
          <h2>Your details</h2>
          <p class="hint"><span id="progress" class="progress"></span> Leave a blank empty to fill it in later; it stays highlighted.</p>
          ${m.fields.map(renderField).join("")}
        </form>
        <article class="preview" id="preview" aria-label="Document preview"></article>
      </div>`;

    $("#form").addEventListener("input", onInput);
    $("#form").addEventListener("submit", (e) => e.preventDefault());
    $("#notes").addEventListener("change", (e) => { state.showNotes = e.target.checked; renderPreview(); });
    $("#clear").addEventListener("click", () => {
      if (!confirm("Clear all answers for this template?")) return;
      state.values = {};
      store.remove(answersKey(m.id));
      renderTemplate();
    });
    $("#dl-md").addEventListener("click", downloadMarkdown);
    $("#dl-docx").addEventListener("click", downloadDocx);
    renderPreview();
  }

  function renderField(f) {
    const id = `f-${f.key}`;
    const value = state.values[f.key] || "";
    const required = f.required !== false;
    const example = f.example !== undefined && f.example !== null ? String(f.example) : "";
    const ph = example ? ` placeholder="e.g. ${escapeHtml(example)}"` : "";
    const common = `id="${id}" name="${f.key}"`;
    let input;
    switch (f.type) {
      case "textarea":
        input = `<textarea ${common} rows="3"${ph}>${escapeHtml(value)}</textarea>`;
        break;
      case "date":
        input = `<input ${common} type="date" value="${escapeHtml(value)}">`;
        break;
      case "number":
        input = `<input ${common} type="number" inputmode="decimal" value="${escapeHtml(value)}"${ph}>`;
        break;
      case "email":
      case "url":
        input = `<input ${common} type="${f.type}" value="${escapeHtml(value)}"${ph}>`;
        break;
      case "select":
        input = `<select ${common}><option value="">Choose…</option>${(f.options || []).map((o) =>
          `<option${o === value ? " selected" : ""}>${escapeHtml(o)}</option>`).join("")}</select>`;
        break;
      default:
        input = `<input ${common} type="text" inputmode="${f.type === "money" ? "decimal" : "text"}" value="${escapeHtml(value)}"${ph}>`;
    }
    const help = f.help ? `<div class="help">${escapeHtml(f.help)}</div>`
      : f.type === "date" && example ? `<div class="help">Appears as e.g. “${escapeHtml(example)}”.</div>` : "";
    return `<div class="field"><label for="${id}">${escapeHtml(f.label)}${required ? "" : ' <span class="opt">(optional)</span>'}</label>${input}${help}</div>`;
  }

  let frame = 0;
  function onInput(e) {
    const el = e.target;
    if (!el.name) return;
    if (el.value) state.values[el.name] = el.value; else delete state.values[el.name];
    store.set(answersKey(state.meta.id), state.values);
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(renderPreview);
  }

  function renderPreview() {
    const total = state.meta.fields.length;
    const filled = state.meta.fields.filter((f) => (state.values[f.key] || "").trim()).length;
    $("#progress").textContent = `${filled} of ${total} filled.`;
    let html = marked.parse(buildMarkdown({ forPreview: true }), { gfm: true });
    html = html
      .replace(BLANK_RE, (_, label) => `<mark>[${label}]</mark>`)
      .replace(FILLED_RE, (_, value) => `<mark class="filled">${value}</mark>`)
      .replace(/\[OPTION ([A-Z])/g, '<span class="option">[OPTION $1</span>');
    $("#preview").innerHTML = html;
  }

  /* ---------- downloads ---------- */
  function exportMarkdown() {
    return `> ${NOTICE}\n\n` + buildMarkdown({ forPreview: false })
      .replace(BLANK_RE, (_, label) => `[${label}]`);
  }

  function save(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement("a"), { href: url, download: filename });
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function downloadMarkdown() {
    save(new Blob([exportMarkdown()], { type: "text/markdown;charset=utf-8" }), `${state.meta.id}.md`);
  }

  async function downloadDocx() {
    const button = $("#dl-docx");
    button.disabled = true;
    button.textContent = "Preparing…";
    try {
      const blob = await docx.Packer.toBlob(markdownToDocx(buildMarkdown({ forPreview: false }), state.meta.title));
      save(blob, `${state.meta.id}.docx`);
    } catch (err) {
      alert(`Could not create the Word file: ${err.message}`);
    } finally {
      button.disabled = false;
      button.textContent = "Download Word (.docx)";
    }
  }

  /* ---------- Markdown → Word ---------- */
  const FONT = "Times New Roman";

  function runs(text, fmt) {
    const out = [];
    const decoded = decodeEntities(text).replace(/[]/g, "");
    let last = 0;
    for (const m of decoded.matchAll(BLANK_RE)) {
      if (m.index > last) out.push(new docx.TextRun({ text: decoded.slice(last, m.index), ...fmt }));
      out.push(new docx.TextRun({ text: `[${m[1]}]`, highlight: "yellow", ...fmt }));
      last = m.index + m[0].length;
    }
    if (last < decoded.length) out.push(new docx.TextRun({ text: decoded.slice(last), ...fmt }));
    return out;
  }

  function inline(tokens, fmt = {}) {
    const out = [];
    // marked splits escaped characters into separate tokens; join plain text back together so
    // a blank's start and end markers are always matched within one string.
    let buffer = "";
    const flush = () => { if (buffer) out.push(...runs(buffer, fmt)); buffer = ""; };
    for (const t of tokens || []) {
      if (t.type === "escape" || (t.type === "text" && !t.tokens)) { buffer += t.text; continue; }
      flush();
      switch (t.type) {
        case "strong": out.push(...inline(t.tokens, { ...fmt, bold: true })); break;
        case "em": out.push(...inline(t.tokens, { ...fmt, italics: true })); break;
        case "del": out.push(...inline(t.tokens, { ...fmt, strike: true })); break;
        case "codespan": out.push(...runs(t.text, { ...fmt, font: "Courier New" })); break;
        case "br": out.push(new docx.TextRun({ break: 1 })); break;
        case "link": out.push(...inline(t.tokens, fmt)); break;
        case "html": break;
        case "text":
          out.push(...(t.tokens ? inline(t.tokens, fmt) : runs(t.text, fmt)));
          break;
        default: out.push(...runs(t.text || t.raw || "", fmt));
      }
    }
    flush();
    return out;
  }

  function cell(tokens, bold) {
    return new docx.TableCell({
      children: [new docx.Paragraph({ children: inline(tokens, bold ? { bold: true } : {}) })],
      margins: { top: 60, bottom: 60, left: 100, right: 100 },
    });
  }

  function blocks(tokens) {
    const out = [];
    const { Paragraph, HeadingLevel, AlignmentType } = docx;
    for (const t of tokens) {
      switch (t.type) {
        case "heading": {
          const level = [HeadingLevel.HEADING_1, HeadingLevel.HEADING_2, HeadingLevel.HEADING_3][Math.min(t.depth, 3) - 1];
          out.push(new Paragraph({ heading: level, children: inline(t.tokens), keepNext: true }));
          break;
        }
        case "paragraph":
          out.push(new Paragraph({ children: inline(t.tokens), alignment: AlignmentType.JUSTIFIED }));
          break;
        case "blockquote":
          for (const inner of t.tokens.filter((x) => x.type === "paragraph")) {
            out.push(new Paragraph({
              children: inline(inner.tokens, { italics: true, size: 20, color: "374151" }),
              shading: { type: docx.ShadingType.CLEAR, color: "auto", fill: "EDEFF2" },
            }));
          }
          break;
        case "list":
          t.items.forEach((item, i) => {
            const content = item.tokens.flatMap((x) => (x.type === "text" || x.type === "paragraph") ? inline(x.tokens || [x]) : []);
            out.push(t.ordered
              ? new Paragraph({ children: [new docx.TextRun(`${(t.start || 1) + i}. `), ...content], indent: { left: 360 } })
              : new Paragraph({ children: content, bullet: { level: 0 } }));
          });
          break;
        case "table":
          out.push(new docx.Table({
            width: { size: 100, type: docx.WidthType.PERCENTAGE },
            rows: [
              new docx.TableRow({ tableHeader: true, children: t.header.map((h) => cell(h.tokens, true)) }),
              ...t.rows.map((r) => new docx.TableRow({ children: r.map((c) => cell(c.tokens, false)) })),
            ],
          }));
          out.push(new Paragraph({ children: [] }));
          break;
        case "hr":
          out.push(new Paragraph({
            children: [],
            border: { bottom: { style: docx.BorderStyle.SINGLE, size: 6, color: "999999", space: 1 } },
          }));
          break;
        case "code":
          out.push(new Paragraph({ children: runs(t.text, { font: "Courier New", size: 20 }) }));
          break;
        default:
          break;
      }
    }
    return out;
  }

  function markdownToDocx(md, title) {
    const heading = (size, center) => ({
      run: { font: FONT, size, bold: true, color: "000000" },
      paragraph: { spacing: { before: 240, after: 120 }, alignment: center ? docx.AlignmentType.CENTER : undefined },
    });
    const notice = new docx.Paragraph({
      children: [new docx.TextRun({ text: NOTICE, italics: true, size: 19, color: "444444" })],
      shading: { type: docx.ShadingType.CLEAR, color: "auto", fill: "EDEFF2" },
      spacing: { after: 240 },
    });
    return new docx.Document({
      creator: "legal-templates-india",
      title,
      description: "AI-assisted draft from the open-source legal-templates-india library (CC0). Not legal advice.",
      styles: {
        default: {
          document: { run: { font: FONT, size: 23 }, paragraph: { spacing: { after: 120, line: 276 } } },
          heading1: heading(28, true),
          heading2: heading(24),
          heading3: heading(23),
        },
      },
      sections: [{
        properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
        children: [notice, ...blocks(marked.lexer(md, { gfm: true }))],
      }],
    });
  }

  /* ---------- boot ---------- */
  function route() {
    const id = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    if (id) openTemplate(id); else renderHome();
  }

  async function init() {
    try {
      const res = await fetch("catalog.json");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      state.catalog = await res.json();
    } catch (err) {
      view.innerHTML = `<p class="error">Could not load the template catalogue (${escapeHtml(err.message)}).</p>`;
      return;
    }
    $("#search").addEventListener("input", (e) => {
      renderSidebar(e.target.value);
      if (!state.meta) renderHome();
    });
    window.addEventListener("hashchange", route);
    route();
  }

  init();
})();
