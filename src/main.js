import {
  BookOpen, Brain, Check, CheckCircle2, ChevronLeft, ChevronRight,
  CircleHelp, Clock3, Flame, Gauge, GraduationCap, House, Layers3,
  ListChecks, Menu, RotateCcw, Search, Sparkles, Target, Trophy, X
} from "lucide";
import { chapters as economicsChapters, questions as economicsQuestions, totalQuestions as economicsTotal } from "./data.js";
import { sapChapters, sapQuestions, sapTotalQuestions } from "./sap-data.js";
import "./styles.css";

const icons = {
  BookOpen, Brain, Check, CheckCircle2, ChevronLeft, ChevronRight,
  CircleHelp, Clock3, Flame, Gauge, GraduationCap, House, Layers3,
  ListChecks, Menu, RotateCcw, Search, Sparkles, Target, Trophy, X
};

const legacySaved = JSON.parse(localStorage.getItem("bee1050-progress") || "{}");
const saved = JSON.parse(localStorage.getItem("study-hub-progress") || "{}");
const subjectCatalog = {
  economics: {
    id: "economics", mark: "B", code: "BEE1050", name: "Kinh tế học",
    eyebrow: "LỘ TRÌNH ÔN TẬP BEE1050", title: "Học đúng trọng tâm.", subtitle: "Vào phòng thi tự tin.",
    description: "Đề cương kinh tế học từ nền tảng vi mô đến chính sách vĩ mô.",
    chapters: economicsChapters, questions: economicsQuestions, total: economicsTotal, accent: "#d95f3b"
  },
  sap: {
    id: "sap", mark: "S", code: "SAP S/4HANA", name: "Global Bike",
    eyebrow: "GLOBAL BIKE CASE STUDIES", title: "Hiểu trọn quy trình.", subtitle: "Thao tác SAP chính xác.",
    description: "Bốn case study tích hợp FI-AR, FI-AP, SD và MM trên SAP Fiori.",
    chapters: sapChapters, questions: sapQuestions, total: sapTotalQuestions, accent: "#2d6da3"
  }
};
const progress = saved.progress || {
  economics: { checked: legacySaved.checked || [], history: legacySaved.history || [] },
  sap: { checked: [], history: [] }
};
let activeSubject = subjectCatalog[saved.subject || "economics"];
let chapters = activeSubject.chapters;
let questions = activeSubject.questions;
let totalQuestions = activeSubject.total;
const state = {
  view: "home",
  subject: activeSubject.id,
  chapter: null,
  quiz: [],
  cursor: 0,
  answers: {},
  checked: progress[activeSubject.id]?.checked || [],
  history: progress[activeSubject.id]?.history || [],
  query: ""
};

const app = document.querySelector("#app");
const icon = (name, size = 18) => {
  const renderNode = ([tag, attributes, children], root = false) => {
    const finalAttributes = root
      ? { ...attributes, width: size, height: size, "stroke-width": 2 }
      : attributes;
    const attrs = Object.entries(finalAttributes)
      .map(([key, value]) => `${key}="${String(value)}"`)
      .join(" ");
    return `<${tag} ${attrs}>${(children || []).map((child) => renderNode(child)).join("")}</${tag}>`;
  };
  return renderNode(icons[name], true);
};
const letters = ["A", "B", "C", "D"];

function save() {
  progress[state.subject] = { checked: state.checked, history: state.history.slice(-30) };
  localStorage.setItem("study-hub-progress", JSON.stringify({ subject: state.subject, progress }));
}

function switchSubject(subjectId) {
  save();
  activeSubject = subjectCatalog[subjectId];
  chapters = activeSubject.chapters;
  questions = activeSubject.questions;
  totalQuestions = activeSubject.total;
  state.subject = subjectId;
  state.checked = progress[subjectId]?.checked || [];
  state.history = progress[subjectId]?.history || [];
  state.chapter = null;
  state.quiz = [];
  state.answers = {};
  state.query = "";
  state.view = "home";
  save();
  render();
}

function navItem(view, label, iconName) {
  return `<button class="nav-item ${state.view === view ? "active" : ""}" data-view="${view}">
    ${icon(iconName)}<span>${label}</span>
  </button>`;
}

function shell(content) {
  const done = new Set(state.history.flatMap((x) => x.ids || [])).size;
  app.innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark" style="background:${activeSubject.accent}">${activeSubject.mark}</div>
          <div><b>${activeSubject.code}</b><small>${activeSubject.name}</small></div>
        </div>
        <nav>
          ${navItem("subjects", "Đổi môn học", "GraduationCap")}
          ${navItem("home", "Tổng quan", "House")}
          ${navItem("chapters", "Ôn theo chương", "BookOpen")}
          ${navItem("practice", "Luyện trắc nghiệm", "Brain")}
          ${navItem("formulas", "Sổ tay nhanh", "Layers3")}
          ${navItem("checklist", "Checklist", "ListChecks")}
        </nav>
        <div class="sidebar-progress">
          <div class="progress-ring" style="--p:${Math.min(done, totalQuestions)}">
            <span>${done}</span>
          </div>
          <div><b>Đã gặp ${done}/${totalQuestions} câu</b><small>Tiến độ được lưu tự động</small></div>
        </div>
      </aside>
      <main>
        <header class="topbar">
          <button class="mobile-menu" aria-label="Mở menu">${icon("Menu")}</button>
          <div class="search-box">${icon("Search")}<input aria-label="Tìm nội dung" placeholder="Tìm chương, khái niệm..." value="${state.query}"></div>
          <button class="course-pill subject-button" data-view="subjects">${icon("GraduationCap")} ${activeSubject.code} · Đổi môn</button>
        </header>
        <div class="page">${content}</div>
      </main>
    </div>`;
  bindGlobal();
}

function bindGlobal() {
  document.querySelectorAll("[data-view]").forEach((el) => el.onclick = () => {
    state.view = el.dataset.view;
    state.chapter = null;
    render();
  });
  const search = document.querySelector(".search-box input");
  if (search) search.oninput = (e) => {
    state.query = e.target.value;
    if (state.view !== "chapters") state.view = "chapters";
    render();
    requestAnimationFrame(() => document.querySelector(".search-box input")?.focus());
  };
  document.querySelector(".mobile-menu")?.addEventListener("click", () =>
    document.querySelector(".sidebar").classList.toggle("open")
  );
}

function renderSubjects() {
  shell(`
    <div class="page-title subject-title"><div><span>TRUNG TÂM ÔN TẬP</span><h1>Chọn môn học</h1><p>Mỗi môn có ngân hàng câu hỏi, sổ tay và tiến độ hoàn toàn riêng biệt.</p></div></div>
    <div class="subject-grid">
      ${Object.values(subjectCatalog).map((subject) => {
        const subjectProgress = progress[subject.id] || { history: [] };
        const latest = subjectProgress.history.at(-1);
        return `<article class="subject-card ${state.subject === subject.id ? "selected" : ""}" style="--accent:${subject.accent}" data-subject="${subject.id}">
          <div class="subject-card-head"><span>${subject.mark}</span><i>${state.subject === subject.id ? "ĐANG HỌC" : `${subject.chapters.length} PHẦN`}</i></div>
          <small>${subject.code}</small><h2>${subject.name}</h2><p>${subject.description}</p>
          <div class="subject-metrics"><div><b>${subject.total}</b><span>Câu hỏi</span></div><div><b>${subject.chapters.length}</b><span>${subject.id === "sap" ? "Module" : "Chương"}</span></div><div><b>${latest ? latest.score + "%" : "—"}</b><span>Gần nhất</span></div></div>
          <button class="btn ${state.subject === subject.id ? "dark" : "primary"}">${state.subject === subject.id ? "Tiếp tục học" : "Vào môn học"} ${icon("ChevronRight")}</button>
        </article>`;
      }).join("")}
    </div>
  `);
  document.querySelectorAll("[data-subject]").forEach((card) => card.onclick = () => switchSubject(card.dataset.subject));
}

function renderHome() {
  const attempts = state.history.length;
  const avg = attempts ? Math.round(state.history.reduce((s, x) => s + x.score, 0) / attempts) : 0;
  const recent = state.history.at(-1);
  shell(`
    <section class="hero">
      <div class="eyebrow">${icon("Sparkles", 16)} ${activeSubject.eyebrow}</div>
      <h1>${activeSubject.title}<br><em>${activeSubject.subtitle}</em></h1>
      <p>${activeSubject.description} Toàn bộ ${chapters.length} ${state.subject === "sap" ? "module" : "chương"} đã được chuyển thành thẻ kiến thức và ${totalQuestions} câu hỏi có giải thích.</p>
      <div class="hero-actions">
        <button class="btn primary" data-start="exam">${icon("Brain")} Làm đề 20 câu</button>
        <button class="btn secondary" data-view="chapters">${icon("BookOpen")} Ôn theo chương</button>
      </div>
      ${state.subject === "sap"
        ? `<div class="orbit one">FI</div><div class="orbit two">SD</div><div class="orbit three">MM</div>`
        : `<div class="orbit one">Eᵈ</div><div class="orbit two">GDP</div><div class="orbit three">IS–LM</div>`}
    </section>
    <section class="stats-grid">
      <article><span class="stat-icon coral">${icon("Target")}</span><div><small>Ngân hàng câu hỏi</small><b>${totalQuestions}</b></div><i>câu</i></article>
      <article><span class="stat-icon teal">${icon("BookOpen")}</span><div><small>Phạm vi tài liệu</small><b>${chapters.length}</b></div><i>${state.subject === "sap" ? "module" : "chương"}</i></article>
      <article><span class="stat-icon gold">${icon("Gauge")}</span><div><small>Điểm trung bình</small><b>${avg}%</b></div><i>${attempts} lượt</i></article>
      <article><span class="stat-icon purple">${icon("Trophy")}</span><div><small>Lần gần nhất</small><b>${recent ? recent.score + "%" : "—"}</b></div><i>${recent ? recent.count + " câu" : "chưa thi"}</i></article>
    </section>
    <section class="section-head"><div><span>HỌC TỪNG PHẦN</span><h2>${chapters.length} ${state.subject === "sap" ? "module quy trình" : "chương trọng tâm"}</h2></div><button data-view="chapters">Xem tất cả ${icon("ChevronRight")}</button></section>
    <div class="chapter-strip">
      ${chapters.slice(0, 4).map(chapterCard).join("")}
    </div>
    <section class="quick-panel">
      <div><span class="quick-icon">${icon("Flame", 24)}</span><div><small>GỢI Ý HÔM NAY</small><h3>Thử thách 10 câu hỗn hợp</h3><p>Khoảng 8 phút · phản hồi ngay sau mỗi câu</p></div></div>
      <button class="btn dark" data-start="quick">Bắt đầu ${icon("ChevronRight")}</button>
    </section>
  `);
  bindCardsAndStart();
}

function chapterCard(ch) {
  const count = questions.filter((q) => q.chapter === ch.id).length;
  return `<article class="chapter-card" data-chapter="${ch.id}" style="--accent:${ch.color}">
    <div class="chapter-num">0${ch.id}</div>
    <span class="chapter-tag">${ch.short}</span>
    <h3>${ch.title}</h3>
    <p>${ch.intro}</p>
    <div class="card-foot"><span>${count} câu hỏi</span><button aria-label="Mở chương">${icon("ChevronRight")}</button></div>
  </article>`;
}

function renderChapters() {
  if (state.chapter) return renderChapter();
  const query = state.query.trim().toLowerCase();
  const filtered = chapters.filter((ch) =>
    `${ch.title} ${ch.short} ${ch.keywords.join(" ")}`.toLowerCase().includes(query)
  );
  shell(`
    <div class="page-title"><div><span>${state.subject === "sap" ? "GLOBAL BIKE CASE STUDIES" : "ĐỀ CƯƠNG ÔN TẬP"}</span><h1>Chọn ${state.subject === "sap" ? "module" : "chương"} để bắt đầu</h1><p>Mỗi phần gồm tóm tắt nhanh, từ khóa, bẫy trắc nghiệm và bài luyện riêng.</p></div>
      <div class="title-count"><b>${filtered.length}</b><small>phần phù hợp</small></div>
    </div>
    <div class="chapter-grid">${filtered.map(chapterCard).join("") || `<div class="empty">Không tìm thấy nội dung phù hợp với “${state.query}”.</div>`}</div>
  `);
  bindCardsAndStart();
}

function renderChapter() {
  const ch = chapters.find((x) => x.id === state.chapter);
  shell(`
    <button class="back" data-back>${icon("ChevronLeft")} Tất cả chương</button>
    <section class="chapter-hero" style="--accent:${ch.color}">
      <div><span>CHƯƠNG ${ch.id} · ${ch.short.toUpperCase()}</span><h1>${ch.title}</h1><p>${ch.intro}</p></div>
      <button class="btn light" data-start-chapter="${ch.id}">${icon("Brain")} Luyện chương này</button>
    </section>
    <div class="study-layout">
      <section class="study-main">
        <div class="content-card"><h2>${icon("BookOpen")} Nội dung cần nhớ</h2>
          ${ch.facts.map((f, i) => `<details ${i < 3 ? "open" : ""}><summary><span>${String(i + 1).padStart(2, "0")}</span>${f.label}${icon("ChevronRight")}</summary><div><b>${f.answer}</b><p>${f.note}</p></div></details>`).join("")}
        </div>
      </section>
      <aside class="study-side">
        <div class="note-card formula"><h3>Công thức / quan hệ</h3>${ch.formulas.map((x) => `<code>${x}</code>`).join("")}</div>
        <div class="note-card"><h3>Từ khóa trong đáp án</h3><div class="tags">${ch.keywords.map((x) => `<span>${x}</span>`).join("")}</div></div>
        <div class="note-card trap"><h3>${icon("CircleHelp")} Bẫy thường gặp</h3><ul>${ch.traps.map((x) => `<li>${x}</li>`).join("")}</ul></div>
      </aside>
    </div>
  `);
  document.querySelector("[data-back]").onclick = () => { state.chapter = null; render(); };
  document.querySelector("[data-start-chapter]").onclick = (e) => startQuiz(questions.filter((q) => q.chapter === +e.currentTarget.dataset.startChapter));
}

function renderPractice() {
  shell(`
    <div class="page-title"><div><span>LUYỆN TRẮC NGHIỆM</span><h1>Chọn một chế độ luyện</h1><p>Đáp án và giải thích từng lựa chọn xuất hiện ngay sau khi trả lời.</p></div></div>
    <div class="mode-grid">
      <article class="mode-card featured"><span>${icon("Trophy", 26)}</span><small>ĐỀ MÔ PHỎNG</small><h2>20 câu hỗn hợp</h2><p>Đủ ${chapters.length} ${state.subject === "sap" ? "module" : "chương"}, mức độ từ nhận biết đến vận dụng.</p><button class="btn primary" data-start="exam">Bắt đầu làm đề</button></article>
      <article class="mode-card"><span>${icon("Clock3", 26)}</span><small>LUYỆN NHANH</small><h2>10 câu · 8 phút</h2><p>Một phiên ngắn để duy trì nhịp ôn mỗi ngày.</p><button class="btn secondary" data-start="quick">Luyện ngay</button></article>
      <article class="mode-card"><span>${icon("RotateCcw", 26)}</span><small>CÂU ĐÃ GẶP</small><h2>Ôn lại thông minh</h2><p>Làm một bộ câu ngẫu nhiên từ toàn ngân hàng.</p><button class="btn secondary" data-start="review">Ôn lại 15 câu</button></article>
    </div>
    <div class="chapter-practice">
      <div class="section-head"><div><span>CHỌN PHẠM VI</span><h2>Luyện theo chương</h2></div></div>
      ${chapters.map((ch) => `<button data-start-chapter="${ch.id}"><i style="background:${ch.color}">0${ch.id}</i><span><b>${ch.title}</b><small>${questions.filter(q => q.chapter === ch.id).length} câu</small></span>${icon("ChevronRight")}</button>`).join("")}
    </div>
  `);
  bindCardsAndStart();
}

function shuffle(input) {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startQuiz(pool, amount) {
  const source = pool || questions;
  state.quiz = shuffle(source).slice(0, amount || source.length);
  state.cursor = 0;
  state.answers = {};
  state.view = "quiz";
  renderQuiz();
}

function renderQuiz() {
  const q = state.quiz[state.cursor];
  if (!q) return renderResult();
  const ch = chapters[q.chapter - 1];
  const chosen = state.answers[q.id];
  const answered = chosen !== undefined;
  shell(`
    <div class="quiz-top">
      <button class="back" data-quit>${icon("X")} Thoát</button>
      <div class="quiz-progress"><div><span style="width:${((state.cursor + 1) / state.quiz.length) * 100}%"></span></div><small>Câu ${state.cursor + 1} / ${state.quiz.length}</small></div>
      <span class="level">Mức ${q.level}</span>
    </div>
    <section class="quiz-card" style="--accent:${ch.color}">
      <div class="quiz-meta"><span>CHƯƠNG ${q.chapter}</span><i>${ch.short}</i></div>
      <h1>${q.prompt}</h1>
      <div class="options">
        ${q.options.map((opt, i) => {
          let cls = "";
          if (answered && i === q.correct) cls = "correct";
          else if (answered && i === chosen) cls = "wrong";
          return `<button class="${cls}" data-answer="${i}" ${answered ? "disabled" : ""}><span>${letters[i]}</span><b>${opt}</b>${answered && i === q.correct ? icon("Check") : answered && i === chosen ? icon("X") : ""}</button>`;
        }).join("")}
      </div>
      ${answered ? `<div class="explanation ${chosen === q.correct ? "good" : "bad"}">
        <div class="explain-title">${chosen === q.correct ? icon("CheckCircle2") + "<b>Chính xác!</b>" : icon("CircleHelp") + `<b>Chưa đúng — đáp án là ${letters[q.correct]}</b>`}</div>
        <p>${q.explanation}</p>
        <details><summary>Xem giải thích từng lựa chọn</summary>${q.optionNotes.map((note, i) => `<div><strong>${letters[i]}.</strong> ${note}</div>`).join("")}</details>
      </div>` : ""}
      <div class="quiz-actions">
        <span>${answered ? "Đã ghi nhận câu trả lời" : "Chọn một đáp án để tiếp tục"}</span>
        ${answered ? `<button class="btn dark" data-next>${state.cursor === state.quiz.length - 1 ? "Xem kết quả" : "Câu tiếp theo"} ${icon("ChevronRight")}</button>` : ""}
      </div>
    </section>
  `);
  document.querySelector("[data-quit]").onclick = () => { state.view = "practice"; render(); };
  document.querySelectorAll("[data-answer]").forEach((button) => button.onclick = () => {
    state.answers[q.id] = +button.dataset.answer;
    renderQuiz();
  });
  document.querySelector("[data-next]")?.addEventListener("click", () => {
    state.cursor += 1;
    renderQuiz();
  });
}

function renderResult() {
  const correct = state.quiz.filter((q) => state.answers[q.id] === q.correct).length;
  const score = Math.round(correct / state.quiz.length * 100);
  const record = { date: Date.now(), score, count: state.quiz.length, ids: state.quiz.map((q) => q.id) };
  state.history.push(record);
  save();
  const byChapter = chapters.map((ch) => {
    const qs = state.quiz.filter((q) => q.chapter === ch.id);
    const ok = qs.filter((q) => state.answers[q.id] === q.correct).length;
    return { ch, total: qs.length, ok };
  }).filter((x) => x.total);
  shell(`
    <section class="result-head">
      <span class="result-medal">${score >= 80 ? icon("Trophy", 42) : icon("Target", 42)}</span>
      <small>HOÀN THÀNH BÀI LUYỆN</small>
      <h1>${score >= 80 ? "Làm rất tốt!" : score >= 60 ? "Đang đi đúng hướng!" : "Cần ôn thêm một chút"}</h1>
      <p>Bạn trả lời đúng <b>${correct}/${state.quiz.length}</b> câu.</p>
      <div class="score">${score}<span>%</span></div>
    </section>
    <div class="result-card"><h2>Kết quả theo chương</h2>
      ${byChapter.map(({ ch, total, ok }) => `<div class="result-row"><span>0${ch.id}</span><b>${ch.short}</b><div><i style="width:${ok / total * 100}%;background:${ch.color}"></i></div><strong>${ok}/${total}</strong></div>`).join("")}
    </div>
    <div class="result-actions"><button class="btn secondary" data-view="chapters">${icon("BookOpen")} Ôn lại kiến thức</button><button class="btn primary" data-retry>${icon("RotateCcw")} Làm đề mới</button></div>
  `);
  document.querySelector("[data-retry]").onclick = () => startQuiz(questions, state.quiz.length);
}

function renderFormulas() {
  shell(`
    <div class="page-title"><div><span>SỔ TAY NHANH</span><h1>Công thức & khái niệm</h1><p>Các quan hệ trọng tâm được gom lại để rà soát trước giờ thi.</p></div></div>
    <div class="formula-grid">${chapters.map((ch) => `<article style="--accent:${ch.color}"><div><span>0${ch.id}</span><h2>${ch.short}</h2></div>${ch.formulas.map((x) => `<code>${x}</code>`).join("")}<div class="tags">${ch.keywords.map((x) => `<span>${x}</span>`).join("")}</div></article>`).join("")}</div>
  `);
}

function renderChecklist() {
  const allFacts = chapters.flatMap((ch) => ch.facts.map((f, i) => ({ ...f, id: `${ch.id}-${i}`, chapter: ch })));
  shell(`
    <div class="page-title"><div><span>CHECKLIST TRƯỚC KHI THI</span><h1>${state.checked.length}/${allFacts.length} mục đã vững</h1><p>Đánh dấu khi bạn có thể tự giải thích khái niệm mà không nhìn tài liệu.</p></div></div>
    <div class="check-progress"><span style="width:${state.checked.length / allFacts.length * 100}%"></span></div>
    <div class="checklist">${chapters.map((ch) => `<section><h2><i style="background:${ch.color}">0${ch.id}</i>${ch.title}</h2>${allFacts.filter(x => x.chapter.id === ch.id).map((f) => `<label class="${state.checked.includes(f.id) ? "done" : ""}"><input type="checkbox" data-check="${f.id}" ${state.checked.includes(f.id) ? "checked" : ""}><span>${icon("Check")}</span><b>${f.label}</b><small>${f.answer}</small></label>`).join("")}</section>`).join("")}</div>
  `);
  document.querySelectorAll("[data-check]").forEach((box) => box.onchange = () => {
    state.checked = box.checked ? [...state.checked, box.dataset.check] : state.checked.filter((x) => x !== box.dataset.check);
    save();
    renderChecklist();
  });
}

function bindCardsAndStart() {
  document.querySelectorAll("[data-chapter]").forEach((el) => el.onclick = () => {
    state.view = "chapters"; state.chapter = +el.dataset.chapter; render();
  });
  document.querySelectorAll("[data-start]").forEach((el) => el.onclick = () => {
    const amounts = { exam: 20, quick: 10, review: 15 };
    startQuiz(questions, amounts[el.dataset.start]);
  });
  document.querySelectorAll("[data-start-chapter]").forEach((el) => el.onclick = () =>
    startQuiz(questions.filter((q) => q.chapter === +el.dataset.startChapter))
  );
}

function render() {
  if (state.view === "subjects") renderSubjects();
  else if (state.view === "home") renderHome();
  else if (state.view === "chapters") renderChapters();
  else if (state.view === "practice") renderPractice();
  else if (state.view === "formulas") renderFormulas();
  else if (state.view === "checklist") renderChecklist();
  else if (state.view === "quiz") renderQuiz();
}

render();
