import { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Big2 from "./pages/Big2";
import VoiceStudy from "./pages/VoiceStudy";
import "./App.css";

const asset = (name) => `${process.env.PUBLIC_URL}/assets/${name}`;

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash)
      requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView(),
      );
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Header() {
  const { pathname } = useLocation();
  const home = pathname === "/";
  return (
    <header className="site-header">
      <div className="site-header__inner wrap">
        <Link className="wordmark" to="/" aria-label="Elif Önem, home">
          Elif Önem<span>.</span>
        </Link>
        <nav aria-label="Main navigation">
          {home ? <a href="#work">Work</a> : <Link to="/#work">Work</Link>}
          {home ? <a href="#about">About</a> : <Link to="/#about">About</Link>}
          <a href="mailto:elif_onem@msn.com">
            Email me <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

function ProjectLink({ to }) {
  return (
    <Link className="text-link" to={to}>
      Read the case study <span aria-hidden="true">↗</span>
    </Link>
  );
}

function Home() {
  return (
    <main>
      <section className="hero wrap" id="top">
        <div className="hero__main">
          <h1>
            I design the interface.
            <br />
            <em>Then I build it.</em>
          </h1>
          <p className="hero__intro">
            I’m Elif, a frontend developer working across UI design and React. I
            care about how a product works, how it feels, and what happens
            between the Figma file and the browser.
          </p>
          <div className="hero__actions">
            <a className="button button--dark" href="#work">
              See my work <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="mailto:elif_onem@msn.com">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero__aside" aria-label="Profile details">
          <span>Oakville, Ontario</span>
          <span>
            Frontend development
            <br />& interface design
          </span>
          <span>Vizisfer · Apr 2026–present</span>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="wrap">
          <div className="section-heading">
            <h2>Selected work</h2>
            <p>A mix of product interfaces, frontend work, and research.</p>
          </div>
          <article className="feature-project">
            <div className="feature-project__content">
              <p className="project-meta">
                Product interface · UI/UX + frontend
              </p>
              <h3>Possfer</h3>
              <p>
                Designing the foundations for a modular operations platform:
                navigation, setup, reusable UI patterns, and the everyday
                details that make complex tools easier to use.
              </p>
              <p className="project-note">
                Ongoing project · case study in progress
              </p>
            </div>
            <div className="possfer-mark" aria-hidden="true">
              <span>Possfer</span>
              <span className="possfer-mark__line"></span>
              <small>Modular tools for everyday operations.</small>
            </div>
          </article>

          <div className="project-grid">
            <article className="project-tile">
              <Link
                to="/projects/Big2"
                className="project-tile__image project-tile__image--big2"
                aria-label="Read the Big 2 case study"
              >
                <img
                  src={asset("InGame_Big2.jpg")}
                  alt="Big 2 game screen showing four players and their scores"
                  loading="lazy"
                />
              </Link>
              <div className="project-tile__body">
                <p className="project-meta">
                  Android app · design + development
                </p>
                <h3>Big 2 companion</h3>
                <p>
                  A scorekeeper and rule reference for the card game, tested
                  against a spreadsheet with eight players.
                </p>
                <ProjectLink to="/projects/Big2" />
              </div>
            </article>
            <article className="project-tile">
              <Link
                to="/projects/voice-study"
                className="project-tile__image project-tile__image--voice"
                aria-label="Read the voice interface study"
              >
                <img
                  src={asset("highFi_hci.png")}
                  alt="Grid interface used in the voice instruction study"
                  loading="lazy"
                />
              </Link>
              <div className="project-tile__body">
                <p className="project-meta">HCI research · team project</p>
                <h3>When machines train humans</h3>
                <p>
                  We built a controlled task interface to study whether
                  different voices change how people follow instructions.
                </p>
                <ProjectLink to="/projects/voice-study" />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="more-work wrap" aria-labelledby="more-work-title">
        <h2 id="more-work-title">Also in code</h2>
        <div className="more-work__item">
          <div>
            <h3>Expense tracker</h3>
            <p>
              A small full-stack project with React, Supabase authentication,
              and a Deno API for adding, editing, and reviewing expenses.
            </p>
          </div>
          <a
            className="text-link"
            href="https://github.com/elfnronm/expense_tracker"
            target="_blank"
            rel="noreferrer"
          >
            View the code <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <section className="about-section wrap" id="about">
        <h2>A little about me</h2>
        <div className="about-section__copy">
          <p>
            I’m a computer science graduate based in Oakville. At Vizisfer, I
            work across interface design and development. I like the part of a
            project where a rough flow becomes something people can actually
            use.
          </p>
          <p>
            My day-to-day tools include React, TypeScript, CSS, and Figma. I’m
            especially interested in design systems, accessible interactions,
            and the small implementation choices that give an interface its
            character.
          </p>
          <div className="about-section__links">
            <a
              className="text-link"
              href="https://github.com/elfnronm"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="mailto:elif_onem@msn.com">
              Email <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="wrap contact-section__inner">
          <h2>
            Have a role or project
            <br />
            in mind?
          </h2>
          <div>
            <p>
              I’m interested in frontend and design-focused development work.
              Tell me what you’re building.
            </p>
            <a className="button button--light" href="mailto:elif_onem@msn.com">
              Email Elif <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>Elif Önem</span>
        <span>Designed and built with care.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/Big2" element={<Big2 />} />
        <Route path="/projects/voice-study" element={<VoiceStudy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
