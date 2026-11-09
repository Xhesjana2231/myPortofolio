import {
  profile,
  principles,
  process,
  skills,
  aiFocus,
  experience,
  education,
  projects,
} from "./data.js"

const icons = {
  home: '<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/>',
  about: '<circle cx="12" cy="8" r="3"/><path d="M5 19c1.4-3 3.6-4.5 7-4.5S17.6 16 19 19"/>',
  experience: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  education: '<path d="m3 9 9-5 9 5-9 5-9-5z"/><path d="M7 11.5V16c1.6 1.4 3.4 2 5 2s3.4-.6 5-2v-4.5"/>',
  projects: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 6l-2 12"/>',
  skills: '<path d="M12 3l1.8 4.6L18.5 9l-4.7 1.4L12 15l-1.8-4.6L5.5 9l4.7-1.4z"/><path d="M18 14l.7 1.8L20.5 17l-1.8.6L18 19.5l-.7-1.9L15.5 17l1.8-.6z"/>',
  contact: '<path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/>',
  resume: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  sun: '<circle cx="12" cy="12" r="3.5"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M4.8 4.8l1.4 1.4M17.8 17.8l1.4 1.4M19.2 4.8l-1.4 1.4M6.2 17.8l-1.4 1.4"/>',
  moon: '<path d="M16 3.5A8 8 0 1 0 20.5 14 6.5 6.5 0 0 1 16 3.5z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  layout: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h16M9 9v11"/>',
  server: '<rect x="4" y="4" width="16" height="6" rx="1.5"/><rect x="4" y="14" width="16" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/>',
  phone: '<rect x="8" y="3" width="8" height="18" rx="2"/><path d="M11 18h2"/>',
  cloud: '<path d="M7 18h10a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.6 1.6A3.5 3.5 0 0 0 7 18z"/>',
  bot: '<rect x="6" y="8" width="12" height="10" rx="2"/><path d="M12 8V5M9 13h.01M15 13h.01M4 12v3M20 12v3"/>',
  cal: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/>',
  pin: '<path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z"/><circle cx="12" cy="11" r="1.6"/>',
  star: '<path d="m12 3 2.2 5.6L20 9.2l-4.2 3.6 1.3 5.7L12 15.8 6.9 18.5 8.2 12.8 4 9.2l5.8-.6z"/>',
}

function svg(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`
}

const nav = [
  ["home", "Home", "index.html", "home"],
  ["about", "About", "about.html", "about"],
  ["experience", "Experience", "experience.html", "experience"],
  ["education", "Education", "education.html", "education"],
  ["projects", "Projects", "projects.html", "projects"],
  ["skills", "Skills", "skills.html", "skills"],
  ["contact", "Contact", "contact.html", "contact"],
]

function roleClass(role) {
  const value = role.toLowerCase()
  if (value.includes("lead") || value.includes("full stack") || value.includes("design")) return "violet"
  if (value.includes("backend") || value.includes("automation")) return "cyan"
  return ""
}

function projectLink(slug) {
  return `project.html?slug=${slug}`
}

function laptop(title, kicker = "Case study", image = "") {
  const screen = image
    ? `<img class="shot" src="${image}" alt="" loading="lazy" />`
    : `<div class="poster"><small>${kicker}</small><strong>${title}</strong></div>`
  return `<div class="laptop" aria-hidden="true"><div class="screen">${screen}</div><div class="base"></div></div>`
}

function tiles(items) {
  return items
    .map((project, index) => {
      const kind = index % 3
      const frame =
        kind === 0
          ? `<div class="frame warm">${laptop(project.name, undefined, project.image)}</div>`
          : kind === 1 && project.image
            ? `<div class="frame violet">${laptop(project.name, undefined, project.image)}</div>`
          : kind === 1
            ? `<div class="frame violet"><div class="mark">${svg("star")}<b>${project.name.split(" ")[0]}</b></div></div>`
            : `<div class="frame metal">${laptop(project.name, project.duration, project.image)}</div>`
      return `<a class="tile${kind === 2 ? " tile-wide" : ""}" href="${projectLink(project.slug)}">${frame}<span class="cap">${project.name}</span></a>`
    })
    .join("")
}

function jobCard(job) {
  return `<article class="job">
    <div class="job-top">
      <div class="job-id">
        <span class="ico">${svg("experience")}</span>
        <div>
          <h2>${job.role}</h2>
          <div class="where"><b>${job.company}</b> · ${job.place}</div>
        </div>
      </div>
      <div class="meta">
        <span class="pill">${job.type}</span>
        <span class="pill">${svg("cal")}${job.dates}</span>
      </div>
    </div>
    <p>${job.summary}</p>
    ${job.tags ? `<div class="chips">${job.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>` : ""}
  </article>`
}

function skillGrid(groups = skills) {
  return `<div class="skill-grid">${groups
    .map(
      (group) => `<article class="skill-card">
        <h2><span class="ico">${svg(group.icon)}</span>${group.title}</h2>
        <ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>`
    )
    .join("")}</div>`
}

function projectCard(project) {
  return `<a class="project-card" href="${projectLink(project.slug)}">
    <h2>${project.name}</h2>
    <div class="time">${project.duration}</div>
    <p>${project.summary}</p>
    <div class="roles">${project.roles.map((role) => `<span class="role ${roleClass(role)}">${role}</span>`).join("")}</div>
  </a>`
}

function pageIntro(title, text) {
  return `<header class="page-intro"><h1>${title}</h1><p>${text}</p></header>`
}

function shell(page, main) {
  const links = nav
    .map(
      ([id, label, href, icon]) =>
        `<a class="${page === id ? "active" : ""}" href="${href}">${svg(icon)}<span>${label}</span></a>`
    )
    .join("")

  return `<a class="skip" href="#main">Skip to content</a>
  <header class="nav">
    <a class="brand" href="index.html">
      <span class="avatar">${profile.initials}<i></i></span>
      <span class="brand-copy"><strong>${profile.name}</strong><span>${profile.role}</span></span>
    </a>
    <nav class="nav-links" aria-label="Primary">${links}</nav>
    <div class="nav-actions">
      <button class="icon-btn menu-btn" type="button" aria-expanded="false" aria-label="Open menu">${svg("menu")}</button>
      <a class="resume-btn" href="resume.html">${svg("resume")}<span>Resume</span></a>
    </div>
  </header>
  <main id="main">${main}</main>
  <footer class="wrap footer">
    <div>${profile.name} · ${profile.role}</div>
    <div><a href="projects.html">Projects</a> · <a href="contact.html">Contact</a> · <a href="resume.html">Resume</a></div>
  </footer>`
}

function homePage() {
  const featured = [projects[2], projects[1], projects[0]]
  return `<section class="wrap hero">
      <div>
        <h1>${profile.headline}</h1>
        <p class="lede">${profile.lede}</p>
        <div class="principles">
          ${principles
            .map(
              (item) => `<article><div class="n">${item.n}</div><div><h2>${item.title}</h2><p>${item.text}</p></div></article>`
            )
            .join("")}
        </div>
      </div>
      <div class="sculpture" aria-hidden="true"><span></span><span></span><span></span></div>
    </section>
    <section class="wrap section">
      <div class="process-head">
        <h2>AI Engineering, Built Into the Work</h2>
        <p>AI is part of how I design, write, and ship software. I use it to move faster, catch problems earlier, and add smarter features to the products I build.</p>
      </div>
      <div style="margin-top:28px">${skillGrid(aiFocus)}</div>
    </section>
    <section class="wrap section">
      <div class="process-head">
        <h2>A Simple Process. Reliable Results.</h2>
        <p>I follow a steady workflow that keeps a project organized, visible, and aimed at the outcome we agreed on.</p>
      </div>
      <div class="process">
        ${process
          .map(
            (step) => `<article class="step"><div class="box">${step.n} ${step.title}</div><p>${step.text}</p></article>`
          )
          .join("")}
      </div>
    </section>
    <section class="wrap section" style="padding-top: 10px">
      <div class="work-head">
        <h2>The Work Behind Every Great Experience</h2>
        <p>Interfaces, systems, and the quiet pieces that make a product feel finished. A few of the builds are below. The rest live on the projects page.</p>
      </div>
      <div class="work-grid">${tiles(featured)}</div>
    </section>`
}

function aboutPage() {
  return `<section class="wrap about-grid">
    <div class="prose">
      <p class="n" style="color:var(--faint);letter-spacing:.14em;text-transform:uppercase;font-size:12px">About</p>
      <h1>${profile.name}</h1>
      ${profile.about.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <p><a class="btn" href="contact.html">Start a project</a></p>
    </div>
    <div class="sculpture" aria-hidden="true"><span></span><span></span><span></span></div>
  </section>
  <section class="wrap section">
    <div class="principles">
      ${principles
        .map(
          (item) => `<article><div class="n">${item.n}</div><div><h2>${item.title}</h2><p>${item.text}</p></div></article>`
        )
        .join("")}
    </div>
  </section>
  <section class="wrap section">
    <div class="process-head">
      <h2>How I Work With AI</h2>
      <p>From prompt design to production features, these are the areas where AI shapes my day-to-day engineering.</p>
    </div>
    <div style="margin-top:28px">${skillGrid(aiFocus)}</div>
  </section>`
}

function experiencePage() {
  return `${pageIntro(
    "Professional Experience",
    "A showcase of my professional journey and the skills I've developed along the way."
  )}
  <div class="kicker-row"><span class="kicker">${svg("experience")} Work History</span></div>
  <section class="wrap jobs">${experience.map(jobCard).join("")}</section>`
}

function educationPage() {
  return `${pageIntro("Education", "What I study, and how that study shows up in the work.")}
  <section class="wrap jobs">${education
    .map((item) =>
      jobCard({
        role: item.program,
        company: item.school,
        place: item.place,
        type: "Study",
        dates: item.dates,
        summary: item.summary,
      })
    )
    .join("")}</section>`
}

function skillsPage() {
  return `${pageIntro(
    "Skills & Expertise",
    "Technologies and tools I use to build scalable backend systems and automation workflows."
  )}
  <section class="wrap">${skillGrid()}</section>
  <div class="kicker-row" style="margin-top:54px"><a class="kicker" href="experience.html">${svg("experience")} Work History</a></div>
  ${pageIntro("Professional Experience", "A showcase of my professional journey and the skills I've developed along the way.")}
  <section class="wrap jobs">${experience.map(jobCard).join("")}</section>`
}

function projectsPage() {
  return `${pageIntro("Projects", "What I have been working on")}
  <section class="wrap-l project-grid">
    ${projects.map(projectCard).join("")}
    <a class="project-card cta-card" href="contact.html">
      <h2>Want to work together?</h2>
      <div class="time">Now</div>
      <p>Tell me what you are building. I read every note.</p>
    </a>
  </section>`
}

function projectPage() {
  const slug = new URLSearchParams(location.search).get("slug")
  const project = projects.find((item) => item.slug === slug)
  if (!project) {
    return `<section class="wrap empty"><h1>That project is not on this site.</h1><p><a href="projects.html">Back to projects</a></p></section>`
  }
  document.title = `${project.name} — ${profile.name}`
  const more = projects.filter((item) => item.slug !== project.slug).slice(0, 2)
  return `<section class="wrap">
    <div class="study-top">
      <div>
        <a class="back" href="projects.html">← Projects</a>
        <h1 style="margin:8px 0 0;font-size:clamp(36px,5vw,56px);letter-spacing:-.045em">${project.name}</h1>
        <p class="lede" style="margin-bottom:0">${project.summary}</p>
      </div>
      <div class="roles">${project.roles.map((role) => `<span class="role ${roleClass(role)}">${role}</span>`).join("")}</div>
    </div>
    ${project.image ? `<figure class="study-shot"><img src="${project.image}" alt="Screenshot of ${project.name}" /></figure>` : ""}
    <div class="study-layout">
      <div>
        <h2 style="font-size:15px;letter-spacing:.14em;text-transform:uppercase;color:var(--faint);font-weight:650">Project Overview</h2>
        <dl>
          <div class="fact"><dt>Client</dt><dd>${project.client}</dd></div>
          ${project.timeline ? `<div class="fact"><dt>Timeline</dt><dd>${project.timeline}</dd></div>` : ""}
          <div class="fact"><dt>Tech Stack</dt><dd>${project.stack.join(" · ")}</dd></div>
        </dl>
        <div class="block">
          <h2>Project Detail</h2>
          <p>${project.overview}</p>
          <p>${project.detail}</p>
        </div>
        <div class="block">
          <h2>Development Process</h2>
          <div class="steps">
            ${project.steps
              .map(
                ([title, text], index) =>
                  `<div><strong>0${index + 1}</strong><div><strong>${title}</strong><p>${text}</p></div></div>`
              )
              .join("")}
          </div>
        </div>
      </div>
      <aside class="side">
        <h2>Final Reflection</h2>
        <p class="lede">${project.reflection}</p>
        <h2 style="margin-top:28px;font-size:15px;letter-spacing:.14em;text-transform:uppercase;color:var(--faint)">Suggested Work</h2>
        <div class="suggest">
          ${more
            .map(
              (item, index) => `<a href="${projectLink(item.slug)}">
                <div class="mini frame ${index === 0 ? "warm" : "violet"}">${index === 0 || item.image ? laptop(item.name, undefined, item.image) : `<div class="mark">${svg("star")}<b>${item.name.split(" ")[0]}</b></div>`}</div>
                <span>${item.name}</span>
              </a>`
            )
            .join("")}
        </div>
      </aside>
    </div>
  </section>`
}

function contactPage() {
  return `${pageIntro("Contact", "Tell me what you are building. A few sentences are enough to start.")}
  <section class="wrap contact-grid">
    <div class="prose">
      <p>I take on product work across the stack: interfaces, APIs, and the automations around them.</p>
      <p class="lede">Location · ${profile.location}<br/>Availability · Open for selected projects</p>
      ${profile.email ? `<p><a class="btn" href="mailto:${profile.email}">${profile.email}</a></p>` : `<p class="form-note">Add your email in src/data.js and this page will send through it.</p>`}
    </div>
    <form class="form-card" id="contact-form">
      <label>Name<input name="name" required autocomplete="name" /></label>
      <label>Email<input name="email" type="email" required autocomplete="email" /></label>
      <label>Project<textarea name="message" required placeholder="What are you making, and when do you need it?"></textarea></label>
      <button class="btn" type="submit">Send note</button>
      <p class="form-note" id="form-note" role="status"></p>
    </form>
  </section>`
}

function resumePage() {
  return `<section class="wrap" style="padding-top:36px">
    <div class="no-print" style="display:flex;justify-content:flex-end;margin-bottom:12px">
      <button class="btn" type="button" id="print">Print or save PDF</button>
    </div>
    <article class="resume">
      <header>
        <h1>${profile.name}</h1>
        <p>${profile.role} · ${profile.location}</p>
      </header>
      <p>${profile.lede}</p>
      <h2>Experience</h2>
      ${experience
        .map(
          (job) => `<div class="row"><strong>${job.role}</strong><span>${job.dates}</span></div>
            <div class="where">${job.company} · ${job.place} · ${job.type}</div>
            <p>${job.summary}</p>`
        )
        .join("")}
      <h2>Selected work</h2>
      <ul>${projects
        .slice(0, 6)
        .map((project) => `<li><strong style="color:var(--text)">${project.name}.</strong> ${project.summary}</li>`)
        .join("")}</ul>
      <h2>Skills</h2>
      <ul>${skills.map((group) => `<li><strong style="color:var(--text)">${group.title}.</strong> ${group.items.join("; ")}</li>`).join("")}</ul>
      <h2>Education</h2>
      ${education
        .map(
          (item) => `<div class="row"><strong>${item.program}</strong><span>${item.dates}</span></div><p>${item.summary}</p>`
        )
        .join("")}
    </article>
  </section>`
}

const pages = {
  home: homePage,
  about: aboutPage,
  experience: experiencePage,
  education: educationPage,
  skills: skillsPage,
  projects: projectsPage,
  project: projectPage,
  contact: contactPage,
  resume: resumePage,
}

const titles = {
  home: `${profile.name} — ${profile.role}`,
  about: `About — ${profile.name}`,
  experience: `Experience — ${profile.name}`,
  education: `Education — ${profile.name}`,
  skills: `Skills — ${profile.name}`,
  projects: `Projects — ${profile.name}`,
  project: `Project — ${profile.name}`,
  contact: `Contact — ${profile.name}`,
  resume: `Resume — ${profile.name}`,
}

function bind() {
  const menu = document.querySelector(".menu-btn")
  menu?.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open")
    menu.setAttribute("aria-expanded", String(open))
    menu.setAttribute("aria-label", open ? "Close menu" : "Open menu")
    menu.innerHTML = svg(open ? "close" : "menu")
  })

  document.getElementById("print")?.addEventListener("click", () => window.print())

  document.getElementById("contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const note = document.getElementById("form-note")
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const message = String(data.get("message") || "").trim()
    if (profile.email) {
      const subject = encodeURIComponent(`Project note from ${name}`)
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`)
      location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      note.textContent = "Opening your email app."
      return
    }
    note.textContent = `Thanks, ${name}. Your note is ready. Add an email in src/data.js when you want this form to deliver it.`
    event.currentTarget.reset()
  })
}

const page = document.body.dataset.page || "home"
document.title = titles[page] || document.title
document.getElementById("root").innerHTML = shell(page === "project" ? "projects" : page, (pages[page] || homePage)())
bind()
