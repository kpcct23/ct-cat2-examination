
const QUESTION_BANK = {
  CLOUD: [
    { q: "What is the capital of India?", opts: ["New Delhi", "Mumbai", "Kolkata", "Chennai"], ans: 0 },
    { q: "The chemical symbol for water is:", opts: ["H2O", "O2", "CO2", "NaCl"], ans: 0 },
    { q: "How many continents are there?", opts: ["5", "6", "7", "8"], ans: 2 },
    { q: "Which planet is known as the Red Planet?", opts: ["Venus", "Mars", "Jupiter", "Mercury"], ans: 1 },
    { q: "The largest ocean on Earth:", opts: ["Atlantic", "Indian", "Arctic", "Pacific"], ans: 3 },
    { q: "Who wrote 'Romeo and Juliet'?", opts: ["Shakespeare", "Dickens", "Tolstoy", "Hemingway"], ans: 0 },
    { q: "Speed of light ≈", opts: ["3×10^8 m/s", "3×10^5 m/s", "3×10^6 m/s", "3×10^7 m/s"], ans: 0 },
    { q: "Which gas do plants absorb?", opts: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], ans: 2 },
    { q: "Taj Mahal is located in:", opts: ["Delhi", "Agra", "Jaipur", "Mumbai"], ans: 1 },
    { q: "CPU stands for:", opts: ["Central Process Unit", "Central Processing Unit", "Control Processing Unit", "Central Program Unit"], ans: 1 },
    { q: "Binary of decimal 2:", opts: ["10", "01", "11", "00"], ans: 0 },
    { q: "The smallest prime number:", opts: ["0", "1", "2", "3"], ans: 2 },
    { q: "HTML is used to:", opts: ["Style pages", "Structure web content", "Manage DB", "Compile code"], ans: 1 },
    { q: "Which is a programming language?", opts: ["HTTP", "CSS", "Python", "HTML"], ans: 2 },
    { q: "Photosynthesis occurs in:", opts: ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"], ans: 1 },
    { q: "Largest mammal:", opts: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], ans: 1 },
    { q: "5! (factorial) equals:", opts: ["60", "100", "120", "24"], ans: 2 },
    { q: "Which is NOT an OS?", opts: ["Windows", "Linux", "Oracle", "macOS"], ans: 2 },
    { q: "RAM is:", opts: ["Permanent", "Volatile", "Optical", "Magnetic"], ans: 1 },
    { q: "Which device displays output?", opts: ["Keyboard", "Scanner", "Monitor", "Microphone"], ans: 2 },
    { q: "Which is a web browser?", opts: ["Chrome", "Apache", "IIS", "Nginx"], ans: 0 },
    { q: "1 kilobyte equals:", opts: ["1000 bytes", "1024 bytes", "512 bytes", "2048 bytes"], ans: 1 },
    { q: "Which is a NoSQL DB?", opts: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"], ans: 2 },
    { q: "LAN stands for:", opts: ["Large Area Network", "Local Area Network", "Line Access Network", "Long Area Network"], ans: 1 },
    { q: "Which language runs in a browser?", opts: ["C", "Java", "Python", "JavaScript"], ans: 3 },
  ],
  AI: [
    { q: "HTML stands for:", opts: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyperlinks Text Making Language", "Home Tool Markup Language"], ans: 1 },
    { q: "Choose a correct HTML element for the largest heading:", opts: ["<heading>", "<h6>", "<head>", "<h1>"], ans: 3 },
    { q: "Line break tag is:", opts: ["<br>", "<lb>", "<break>", "</br>"], ans: 0 },
    { q: "Bold text tag:", opts: ["<b>", "<bold>", "<strongtext>", "<em>"], ans: 0 },
    { q: "Which tag for links?", opts: ["<link>", "<a>", "<href>", "<url>"], ans: 1 },
    { q: "Which attribute specifies a link destination?", opts: ["src", "href", "alt", "link"], ans: 1 },
    { q: "Which tag for unordered list?", opts: ["<ul>", "<ol>", "<li>", "<list>"], ans: 0 },
    { q: "Table row tag:", opts: ["<tr>", "<td>", "<th>", "<row>"], ans: 0 },
    { q: "Image tag attribute for file path:", opts: ["href", "link", "src", "file"], ans: 2 },
    { q: "Semantic tag:", opts: ["<div>", "<span>", "<section>", "<b>"], ans: 2 },
    { q: "Correct DOCTYPE for HTML5:", opts: ["<!DOCTYPE HTML5>", "<!DOCTYPE HTML>", "<!DOCTYPE>", "<DOCTYPE html>"], ans: 1 },
    { q: "Make text italic:", opts: ["<em>", "<i>", "both", "none"], ans: 2 },
    { q: "Form element:", opts: ["<form>", "<table>", "<footer>", "<section>"], ans: 0 },
    { q: "Input type for email:", opts: ["text", "mail", "email", "e-mail"], ans: 2 },
    { q: "Placeholder attribute does what?", opts: ["Validates input", "Shows hint text", "Sends data", "Styles input"], ans: 1 },
    { q: "Button to submit form:", opts: ["<button type='submit'>", "<button type='button'>", "<button type='send'>", "<button type='form'>"], ans: 0 },
    { q: "Block-level element:", opts: ["<span>", "<em>", "<div>", "<b>"], ans: 2 },
    { q: "Inline element:", opts: ["<p>", "<h1>", "<div>", "<span>"], ans: 3 },
    { q: "Correct comment syntax:", opts: ["/* comment */", "// comment", "<!-- comment -->", "<comment>"], ans: 2 },
    { q: "Audio tag is:", opts: ["<music>", "<audio>", "<sound>", "<mp3>"], ans: 1 },
    { q: "Video controls attribute:", opts: ["play", "show", "controls", "panel"], ans: 2 },
    { q: "To open link in new tab:", opts: ["target='_open'", "target='_blank'", "newtab", "tab='new'"], ans: 1 },
    { q: "Accessibility attribute for images:", opts: ["alt", "role", "aria", "title"], ans: 0 },
    { q: "Metadata goes inside:", opts: ["<footer>", "<header>", "<main>", "<head>"], ans: 3 },
    { q: "Which wraps the visible content?", opts: ["<main>", "<body>", "<section>", "<content>"], ans: 1 },
  ]
};

const SKEY = {
  STUDENT: "mcq_student",
  SUBJECT: "mcq_subject",
  START:   "mcq_start_time",
  ANSWERS: "mcq_answers",
  SCORE:   "mcq_score",
  TIMEUSED:"mcq_time_used",
};

function saveSession(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}
function getSession(key) {
  const v = sessionStorage.getItem(key);
  try { return v ? JSON.parse(v) : null; } catch { return null; }
}
function requireDataOrRedirect(keys, redirect = "index.html") {
  for (const k of keys) if (!getSession(k)) { window.location.href = redirect; return false; }
  return true;
}

function initStudentForm() {
  const form = document.getElementById("studentForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }
    const student = {
      name: document.getElementById("name").value.trim(),
      rollNo: document.getElementById("rollNo").value.trim(),
      department: document.getElementById("department").value.trim(),
      year: document.getElementById("year").value,
      semester: document.getElementById("semester").value,
    };
    const subject = document.getElementById("subject").value;

    saveSession(SKEY.STUDENT, student);
    saveSession(SKEY.SUBJECT, subject);
    saveSession(SKEY.START, Date.now());
    saveSession(SKEY.ANSWERS, Array(25).fill(null)); 

    window.location.href = "test.html";
  });
}


let state = {
  current: 0,
  timerId: null,
  totalSeconds: 1 * 60, 
  questions: [],
  answers: [],
  subject: "CLOUD"
};

function initTestPage() {
  if (!requireDataOrRedirect([SKEY.STUDENT, SKEY.SUBJECT, SKEY.START, SKEY.ANSWERS])) return;

  const student = getSession(SKEY.STUDENT);
  state.subject = getSession(SKEY.SUBJECT);
  state.questions = (QUESTION_BANK[state.subject] || []).slice(0, 25);
  state.answers = getSession(SKEY.ANSWERS) || Array(25).fill(null);

  
  document.getElementById("studentMini").textContent =
    `${student.name} • Roll: ${student.rollNo} • ${student.department} • Yr ${student.year} Sem ${student.semester}`;
  document.getElementById("subjectBadge").textContent =
    (state.subject === "AI" ? "ARTIFICIAL INTELLIGENCE" : "CLOUD COMPUTING");

  buildGridNav();
  renderQuestion();
  updateProgress();

  document.getElementById("prevBtn").onclick = prevQuestion;
  document.getElementById("nextBtn").onclick = nextQuestion;
  document.getElementById("skipBtn").onclick = () => { nextQuestion(true); };
  document.getElementById("submitBtn").onclick = submitTest;

 
  const startTime = getSession(SKEY.START);
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  state.totalSeconds = Math.max(0, (1 * 60) - elapsed);
  startTimer();

 
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "";
  });
}

function startTimer() {
  const timerEl = document.getElementById("timer");
  const tick = () => {
    const m = Math.floor(state.totalSeconds / 60);
    const s = (state.totalSeconds % 60).toString().padStart(2, "0");
    timerEl.textContent = `${m}:${s}`;
    if (state.totalSeconds <= 0) {
      clearInterval(state.timerId);
      autoSubmit();
    }
    state.totalSeconds--;
  };
  tick();
  state.timerId = setInterval(tick, 1000);
}

function buildGridNav() {
  const grid = document.getElementById("gridNav");
  grid.innerHTML = "";
  for (let i = 0; i < 25; i++) {
    const b = document.createElement("button");
    b.className = "btn btn-outline-secondary";
    b.textContent = (i + 1);
    b.onclick = () => { goToQuestion(i); };
    grid.appendChild(b);
  }
  refreshGridNav();
}

function refreshGridNav() {
  const grid = document.getElementById("gridNav");
  [...grid.children].forEach((btn, i) => {
    btn.classList.toggle("answered", state.answers[i] !== null);
    btn.classList.toggle("active-question", i === state.current);
  });
}

function renderQuestion() {
  const holder = document.getElementById("questionCard");
  const q = state.questions[state.current];
  holder.innerHTML = `
    <div class="d-flex justify-content-between mb-2">
      <div class="badge bg-secondary">Question ${state.current + 1} of 25</div>
    </div>
    <h2 class="h5">${escapeHTML(q.q)}</h2>
    <div class="mt-3">
      ${q.opts.map((opt, idx) => `
        <div class="option-row" data-idx="${idx}">
          <div class="form-check m-0">
            <input class="form-check-input" type="radio" name="opt" id="opt${idx}" value="${idx}">
            <label class="form-check-label" for="opt${idx}">${escapeHTML(opt)}</label>
          </div>
        </div>
      `).join("")}
    </div>
  `;

 
  const saved = state.answers[state.current];
  if (saved !== null) {
    const input = holder.querySelector(`#opt${saved}`);
    if (input) input.checked = true;
  }

  
  holder.querySelectorAll(".option-row").forEach(row => {
    row.addEventListener("click", () => {
      const idx = Number(row.getAttribute("data-idx"));
      const input = holder.querySelector(`#opt${idx}`);
      input.checked = true;
      saveCurrentAnswer(idx);
    });
  });

  refreshGridNav();
}

function saveCurrentAnswer(idx) {
  state.answers[state.current] = idx;
  saveSession(SKEY.ANSWERS, state.answers);
  updateProgress();
  refreshGridNav();
}

function updateProgress() {
  const answered = state.answers.filter(a => a !== null).length;
  const pct = Math.round((answered / 25) * 100);
  const bar = document.getElementById("progressBar");
  bar.style.width = `${pct}%`;
  bar.textContent = `${answered} / 25`;
}

function nextQuestion(skip = false) {
 
  if (!skip) {
    const sel = document.querySelector('input[name="opt"]:checked');
    if (sel) saveCurrentAnswer(Number(sel.value));
  }
  if (state.current < 24) {
    state.current++;
    renderQuestion();
  }
}

function prevQuestion() {
  const sel = document.querySelector('input[name="opt"]:checked');
  if (sel) saveCurrentAnswer(Number(sel.value));
  if (state.current > 0) {
    state.current--;
    renderQuestion();
  }
}

function goToQuestion(i) {
  const sel = document.querySelector('input[name="opt"]:checked');
  if (sel) saveCurrentAnswer(Number(sel.value));
  state.current = i;
  renderQuestion();
}

function autoSubmit() {
  
  finalizeScore(true);
}

function submitTest() {
  if (!confirm("Are you sure you want to submit the test?")) return;
  finalizeScore(false);
}

function finalizeScore(auto = false) {
 
  const sel = document.querySelector('input[name="opt"]:checked');
  if (sel) saveCurrentAnswer(Number(sel.value));

  clearInterval(state.timerId);

  let score = 0;
  for (let i = 0; i < 25; i++) {
    if (state.answers[i] === state.questions[i].ans) score++;
  }
  const timeUsed = (1 * 60) - state.totalSeconds - 1; // seconds used
  saveSession(SKEY.SCORE, score);
  saveSession(SKEY.TIMEUSED, timeUsed);

  window.onbeforeunload = null;
  window.location.href = "result.html";
}

function escapeHTML(s) {
  return s.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}


function initResultPage() {
  if (!requireDataOrRedirect([SKEY.STUDENT, SKEY.SUBJECT, SKEY.SCORE, SKEY.TIMEUSED])) return;

  const student = getSession(SKEY.STUDENT);
  const subject = getSession(SKEY.SUBJECT);
  const score = getSession(SKEY.SCORE);
  const timeUsed = getSession(SKEY.TIMEUSED);
  const answers = getSession(SKEY.ANSWERS) || [];
  const questions = (QUESTION_BANK[subject] || []).slice(0, 25);

  
  document.getElementById("studentInfo").textContent =
    `${student.name} (Roll ${student.rollNo}) • ${student.department} • Yr ${student.year} Sem ${student.semester} • Subject: ${subject === "html" ? "HTML Basics" : "General Knowledge"}`;

  document.getElementById("scoreText").textContent = `Score: ${score} / 25`;

  const mm = Math.floor(timeUsed / 60);
  const ss = String(timeUsed % 60).padStart(2, "0");
  document.getElementById("timeUsed").textContent = `Time used: ${mm}:${ss}`;

  
  const review = document.getElementById("reviewBlock");
  review.innerHTML = questions.map((q, i) => {
    const chosen = answers[i];
    const correct = q.ans;
    const ok = chosen === correct;
    return `
      <div class="border rounded p-3 mb-2 ${ok ? 'border-success' : 'border-danger'}">
        <div class="mb-2"><strong>Q${i+1}.</strong> ${escapeHTML(q.q)}</div>
        <div class="small mb-1">Your answer: ${chosen === null ? '<em>Not answered</em>' : escapeHTML(q.opts[chosen])}</div>
        <div class="small">Correct answer: <strong>${escapeHTML(q.opts[correct])}</strong></div>
      </div>
    `;
  }).join("");

  const toggle = document.getElementById("reviewToggle");
  toggle.addEventListener("click", () => review.classList.toggle("d-none"));

  window.addEventListener("beforeunload", () => {

  });
}


