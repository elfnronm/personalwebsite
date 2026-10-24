import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  MemoryRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Big2 from "./pages/Big2";
import VoiceStudy from "./pages/VoiceStudy";
import ClickSpark from "./components/reactbits/ClickSpark";
import "./App.css";

const asset = (name) => process.env.PUBLIC_URL + "/assets/" + name;

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView(),
      );
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Header() {
  const home = useLocation().pathname === "/";

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link className="wordmark" to="/" aria-label="Elif Önem, home">
          Elif Önem
        </Link>
        <nav aria-label="Main navigation">
          {home ? <a href="#work">Work</a> : <Link to="/#work">Work</Link>}
          {home ? <a href="#about">About</a> : <Link to="/#about">About</Link>}
          <a href="mailto:elif_onem@msn.com">Email</a>
        </nav>
      </div>
    </header>
  );
}

function ProjectHeading({ number, label, title, children }) {
  return (
    <div className="project-copy">
      <p className="project-kicker">
        <span>{number}</span> {label}
      </p>
      <h3>{title}</h3>
      <p className="project-description">{children}</p>
    </div>
  );
}

function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const showProject = (category) =>
    activeFilter === "all" || activeFilter === category;

  return (
    <main id="top">
      <section className="hero wrap" aria-labelledby="intro-title">
        <div className="hero__copy">
          <p className="eyebrow">Frontend Developer & UI/UX Designer</p>
          <h1 id="intro-title">
            Hi, I’m Elif.
            <br />
            I design screens and write the frontend code behind them.
          </h1>
          <p className="hero__summary">
            I’m based in Oakville, Ontario. At Vizisfer, I design and build
            Possfer’s admin interfaces with React, Next.js, and TypeScript.
          </p>
          <a className="inline-link" href="#work">
            See selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero__art">
          <ClickSpark>
            <button className="hero__art-button" type="button" aria-label="Make the meadow sparkle">
              <img src={asset("elif-meadow.svg")} alt="" />
              <span className="hero__art-hint" aria-hidden="true">tap the meadow ✳</span>
            </button>
          </ClickSpark>
        </div>
        <aside className="hero__aside" aria-label="Current role">
          <span className="aside-rule" aria-hidden="true" />
          <p className="aside-label">Right now</p>
          <p>
            Frontend Developer & UI/UX Designer
            <br />
            Vizisfer
          </p>
          <p className="aside-detail">Oakville · Apr 2026–present</p>
        </aside>
      </section>

      <section className="work-section wrap" id="work" aria-labelledby="work-title">
        <div className="section-intro">
          <p className="eyebrow">Selected work / 2026 and earlier</p>
          <h2 id="work-title">Selected work</h2>
          <p>
            Product interfaces, deployed code, and earlier experiments. Pick a
            trail to explore.
          </p>
        </div>

        <div className="project-filters" role="group" aria-label="Filter projects">
          {[
            ["all", "Everything"],
            ["product", "Product work"],
            ["build", "Code projects"],
            ["explore", "Earlier work"],
          ].map(([value, label]) => (
            <button
              className="filter-button"
              type="button"
              key={value}
              aria-pressed={activeFilter === value}
              onClick={() => setActiveFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          {activeFilter === "all"
            ? "Showing all five projects"
            : `Showing ${activeFilter} projects`}
        </p>

        <article className="project project--possfer" hidden={!showProject("product")}>
          <div className="project__text">
            <ProjectHeading
              number="01"
              label="Vizisfer · frontend & UI/UX"
              title="Possfer"
            >
              I design and build responsive product interfaces for Possfer,
              taking ideas from interaction design into frontend code.
            </ProjectHeading>
            <dl className="project-details">
              <div>
                <dt>Frontend</dt>
                <dd>Next.js, React, TypeScript, reusable components</dd>
              </div>
              <div>
                <dt>Quality</dt>
                <dd>Keyboard and focus behavior, states, component tests</dd>
              </div>
            </dl>
          </div>
        </article>

        <article className="project project--expense" hidden={!showProject("build")}>
          <div className="project__text">
            <ProjectHeading
              number="02"
              label="Deployed full-stack project · 2026"
              title="Expense Tracker"
            >
              A React and TypeScript app for recording and reviewing expenses.
              I built the Deno REST API, added client and server validation,
              and deployed the frontend and API separately.
            </ProjectHeading>
            <p className="project-evidence">
              Supabase Auth and backend JWT checks protect each account; the
              PostgreSQL data model keeps users’ records separate.
            </p>
            <a
              className="inline-link"
              href="https://github.com/elfnronm/expense_tracker"
              target="_blank"
              rel="noreferrer"
            >
              View the code <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure className="project__visual project-board project-board--expense">
            <div className="project-board__topline"><span>Architecture sketch</span><span>02 / 05</span></div>
            <div className="expense-art" role="img" aria-label="Illustration of an expense record moving from the React interface through a Deno API to private Supabase storage">
              <div className="expense-art__receipt">
                <span className="expense-art__icon" aria-hidden="true">↗</span>
                <span className="expense-art__label">EXPENSE / 001</span>
                <strong>From entry<br />to review.</strong>
                <span className="expense-art__line expense-art__line--wide" />
                <span className="expense-art__line" />
                <span className="expense-art__line expense-art__line--short" />
                <span className="expense-art__receipt-footer">one account · its own records</span>
              </div>
              <div className="expense-art__flow" aria-hidden="true">
                <span>React + TS <b>→</b></span>
                <span>Deno API <b>→</b></span>
                <span>Supabase</span>
              </div>
            </div>
            <figcaption>How the deployed app separates interface, API, and data</figcaption>
          </figure>
        </article>

        <article className="project project--rag" hidden={!showProject("build")}>
          <div className="project__text">
            <ProjectHeading
              number="03"
              label="Automation project · 2026"
              title="RAG document pipeline"
            >
              An n8n workflow that takes PDF, Excel, CSV, and DOCX files from
              Google Drive, splits their text, generates embeddings, and sends
              them to Supabase vector storage.
            </ProjectHeading>
            <p className="project-footnote">
              Built with n8n, OpenAI embeddings, and Supabase Vector DB.
            </p>
          </div>
          <figure className="project__visual project-board project-board--rag">
            <div className="project-board__topline"><span>Workflow sketch</span><span>03 / 05</span></div>
            <div className="rag-art" role="img" aria-label="Google Drive documents flow through n8n text splitting and OpenAI embeddings into Supabase vector storage">
              <div className="rag-art__files" aria-hidden="true">
                <span>PDF</span><span>CSV</span><span>DOCX</span>
              </div>
              <span className="rag-art__arrow" aria-hidden="true">→</span>
              <div className="rag-art__node" aria-hidden="true"><small>PROCESS</small><strong>n8n</strong><span>split + embed</span></div>
              <span className="rag-art__arrow" aria-hidden="true">→</span>
              <div className="rag-art__vectors" aria-hidden="true"><span /><span /><span /><span /><span /><span /><strong>vector DB</strong></div>
            </div>
            <figcaption>Document ingestion, illustrated from source to vector store</figcaption>
          </figure>
        </article>

        <article className="project project--big2" hidden={!showProject("explore")}>
          <div className="project__text">
            <ProjectHeading
              number="04"
              label="Independent project · Android"
              title="Big 2 scorekeeper"
            >
              I built a card-game companion to handle scoring, rules, and game
              history so players could spend less time in a spreadsheet.
            </ProjectHeading>
            <p className="project-evidence">
              In a small comparison with eight players, six preferred the app to
              spreadsheet scoring.
            </p>
            <Link className="inline-link" to="/projects/Big2">
              Read the project <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <figure className="project__visual project-board project-board--big2">
            <div className="project-board__topline"><span>Android app</span><span>04 / 05</span></div>
            <div className="phone-pair">
              <div className="phone-pair__phone phone-pair__phone--back"><img src={asset("Main_Big2.jpg")} alt="Big 2 app home screen with play game and rules actions" loading="lazy" /></div>
              <div className="phone-pair__phone phone-pair__phone--front"><img src={asset("InGame_Big2.jpg")} alt="Big 2 app showing four players and round scores" loading="lazy" /></div>
            </div>
            <figcaption>Home screen and live scorekeeping</figcaption>
          </figure>
        </article>

        <article className="project project--voice" hidden={!showProject("explore")}>
          <div className="project__text">
            <ProjectHeading
              number="05"
              label="Team project · HCI research"
              title="Voice instructions study"
            >
              Our team built a shape-placement task to test how different voice
              styles affected instructions. We changed the original task after
              finding it introduced too many variables.
            </ProjectHeading>
            <p className="project-evidence">
              The study found no statistically significant performance
              difference between voice types. Participants valued clear,
              consistent instructions.
            </p>
            <Link className="inline-link" to="/projects/voice-study">
              Read the study <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <figure className="project__visual project-board project-board--voice">
            <div className="project-board__topline"><span>Research process</span><span>05 / 05</span></div>
            <div className="voice-pair">
              <div><span className="voice-pair__label">01 / prototype</span><img src={asset("midFi_hci.png")} alt="Mid-fidelity shape-placement prototype with a five by five grid" loading="lazy" /></div>
              <div><span className="voice-pair__label">02 / study UI</span><img src={asset("highFi_hci.png")} alt="Final shape-placement grid used in the voice instruction study" loading="lazy" /></div>
            </div>
            <figcaption>From prototype to participant interface</figcaption>
          </figure>
        </article>

      </section>

      <section className="experience-section wrap" id="experience" aria-labelledby="experience-title">
        <div className="section-intro section-intro--experience">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-title">Where I’ve worked</h2>
          <p>Open a role to see the work behind the title.</p>
        </div>
        <details className="experience-item" open>
          <summary>
            <span className="experience-item__company">Vizisfer <span className="experience-item__place">/ Oakville, ON</span></span>
            <span>Frontend Developer & UI/UX Designer</span>
            <span>Apr 2026–present</span>
            <span className="experience-item__icon" aria-hidden="true">+</span>
          </summary>
          <div className="experience-item__content">
            <p>Working on the Possfer platform.</p>
            <ul>
              <li>Built responsive Next.js, React, and TypeScript admin interfaces for catalog and payment workflows, with reusable components and English/Turkish content.</li>
              <li>Added keyboard and focus behavior, loading and error states, and component tests.</li>
              <li>Translated requirements into role-aware onboarding, team access, and module discovery flows.</li>
            </ul>
          </div>
        </details>
        <details className="experience-item">
          <summary>
            <span className="experience-item__company">Vosyn <span className="experience-item__place">/ Etobicoke, ON</span></span>
            <span>UI/UX Design Team Lead Intern</span>
            <span>Jul 2025–May 2026</span>
            <span className="experience-item__icon" aria-hidden="true">+</span>
          </summary>
          <div className="experience-item__content">
            <p>NovaForge / AI Venture Lab.</p>
            <ul>
              <li>Led a multidisciplinary UI/UX team and turned stakeholder feedback into prioritized work and weekly updates.</li>
              <li>Improved WordPress layouts and navigation using user feedback; maintained content across Office146 and NovaForge.</li>
            </ul>
          </div>
        </details>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="wrap about-section__inner">
          <div>
            <p className="eyebrow">About</p>
            <h2 id="about-title">How I work</h2>
          </div>
          <div className="about-section__body">
            <p>
              I studied computer science and now work across UI design and
              frontend development. I use Figma to work through flows and React,
              TypeScript, and CSS to build them in the browser.
            </p>
            <p>
              I pay attention to what happens between the main screens: an
              incomplete setup, a confusing next step, an empty state, or an
              action someone needs to complete with a keyboard.
            </p>
            <div className="ai-workflow" aria-labelledby="ai-workflow-title">
              <p className="ai-workflow__label">Working with AI tools</p>
              <h3 id="ai-workflow-title">I give the tools context. I own the result.</h3>
              <p>
                I use Codex and Claude Code to explore approaches,
                break down implementation work, and review code. On Possfer,
                that means starting with the user role, screen states, and
                product requirements before asking for a solution.
              </p>
              <ol className="ai-workflow__steps">
                <li><strong>Frame</strong><span>Define the flow, constraints, and what done means.</span></li>
                <li><strong>Build</strong><span>Compare options and inspect every proposed change.</span></li>
                <li><strong>Check</strong><span>Test the interface, keyboard path, and edge states.</span></li>
              </ol>
              <div className="ai-workflow__project">
                <div className="ai-workflow__project-heading">
                  <strong>Hermes / company second brain</strong>
                </div>
                <p>
                  I prepared company-specific agent workflows, daily scheduled
                  jobs, AGENTS.md and SOUL.md instructions, and bot profiles. I
                  also connected a voice agent.
                </p>
              </div>
            </div>
            <div className="about-facts">
              <div>
                <strong>Toolkit</strong>
                <span>React · Next.js · TypeScript · Tailwind CSS · Figma · Vitest · React Testing Library · Supabase</span>
              </div>
              <div>
                <strong>AI tools</strong>
                <span>Codex · Claude Code · Hermes</span>
              </div>
              <div>
                <strong>Education</strong>
                <span>BA, Computer Science · York University · 2026</span>
              </div>
            </div>
            <div className="about-section__links">
              <a
                className="inline-link"
                href="https://www.linkedin.com/in/elif-onem/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                className="inline-link"
                href="https://github.com/elfnronm"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a className="inline-link" href="mailto:elif_onem@msn.com">
                Email me <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <span>Elif Önem · Oakville, Ontario</span>
        <a href="mailto:elif_onem@msn.com">elif_onem@msn.com</a>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  const isOfflinePreview = window.location.protocol === "file:";
  const Router = isOfflinePreview ? MemoryRouter : BrowserRouter;

  return (
    <Router basename={isOfflinePreview ? undefined : process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/Big2" element={<Big2 />} />
        <Route path="/projects/voice-study" element={<VoiceStudy />} />
      </Routes>
      <Footer />
    </Router>
  );
}
