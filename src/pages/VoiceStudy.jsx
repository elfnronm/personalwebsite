import { Link } from "react-router-dom";

const asset = (name) => `${process.env.PUBLIC_URL}/assets/${name}`;

export default function VoiceStudy() {
  return (
    <main>
      <header className="case-hero wrap" id="top">
        <Link className="case-back" to="/#work">
          ← Back to work
        </Link>
        <h1>Voice instructions study</h1>
        <p className="case-hero__summary">
          A team HCI study of voice-guided tasks. We built a controlled
          interface to ask a practical question: does a more human-sounding
          voice actually help people follow instructions?
        </p>
        <dl className="case-facts">
          <div>
            <dt>Project</dt>
            <dd>Voice instruction study</dd>
          </div>
          <div>
            <dt>My role</dt>
            <dd>UX research, system design, study facilitation</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>
              Dustin Chan, Ian Galendez, Abhayjit Sodhi, Elif Önem, Ryan Luk
            </dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>Figma, Unity, MQTT</dd>
          </div>
        </dl>
      </header>
      <div className="case-body wrap">
        <section className="case-section">
          <h2>The question</h2>
          <div className="case-section__content">
            <p>
              Voice assistants often try to sound natural. We wanted to know
              whether that helps when the voice is giving step-by-step
              instructions, where clarity may matter more than personality.
            </p>
            <p>
              Our first idea used audio to guide origami folding. The task
              introduced too many variables, so the team switched to a simpler
              shape-placement task that made the voice easier to evaluate.
            </p>
            <div className="case-gallery case-gallery--two">
              <figure>
                <img
                  src={asset("origami_prototype.png")}
                  alt="Early origami task prototype"
                  loading="lazy"
                />
                <figcaption>First task idea: origami</figcaption>
              </figure>
              <figure>
                <img
                  src={asset("lowFi_hci.jpg")}
                  alt="Low-fidelity sketches for the revised task"
                  loading="lazy"
                />
                <figcaption>Revised task flow</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="case-section">
          <h2>The apparatus</h2>
          <div className="case-section__content">
            <p>
              The final Unity prototype paired a participant-facing grid with a
              separate control panel for the researcher. In a Wizard of Oz
              setup, the proctor triggered instructions while the participant
              moved shapes through the task.
            </p>
            <div className="case-gallery case-gallery--two">
              <figure>
                <img
                  src={asset("highFi_hci.png")}
                  alt="Participant grid with draggable shapes"
                  loading="lazy"
                />
                <figcaption>Participant interface</figcaption>
              </figure>
              <figure>
                <img
                  src={asset("proctorUi_hci.png")}
                  alt="Researcher control panel"
                  loading="lazy"
                />
                <figcaption>Researcher controls</figcaption>
              </figure>
            </div>
            <p>
              Separating those views gave the team control over instruction
              timing and kept the participant’s task simple.
            </p>
          </div>
        </section>
        <section className="case-section">
          <h2>What we learned</h2>
          <div className="case-section__content">
            <p>
              Fifteen students, ages 18–29, took part across human, robotic, and
              neutral synthetic voice conditions. The study did not find a
              statistically significant performance difference between voice
              types. In feedback, participants tended to value clear and
              consistent instructions.
            </p>
            <div className="case-callout">
              <strong>Clarity over character</strong>
              <span>
                Our takeaway for this task: pacing and understandability
                mattered more than making the voice sound human.
              </span>
            </div>
            <p>
              The sample and controlled task limit how far we can generalize. A
              next study would use more participants and a task closer to
              everyday use.
            </p>
          </div>
        </section>
      </div>
      <div className="case-next wrap">
        <p>Another project</p>
        <Link className="inline-link" to="/projects/Big2">
          Big 2 companion <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}
