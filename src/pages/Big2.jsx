import { Link } from "react-router-dom";

const asset = (name) => `${process.env.PUBLIC_URL}/assets/${name}`;

export default function Big2() {
  return (
    <main>
      <header className="case-hero wrap" id="top">
        <Link className="case-back" to="/#work">
          ← Back to work
        </Link>
        <h1>A better way to keep score at Big 2 night.</h1>
        <p className="case-hero__summary">
          A mobile companion for a social card game, built around the tasks that
          interrupt play: keeping score, checking rules, and picking up where a
          game left off.
        </p>
        <dl className="case-facts">
          <div>
            <dt>Project</dt>
            <dd>Big 2 mobile companion</dd>
          </div>
          <div>
            <dt>My role</dt>
            <dd>Design and Android development</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>Java, Android, Room, Figma</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>4 weeks</dd>
          </div>
        </dl>
      </header>
      <div className="case-body wrap">
        <section className="case-section">
          <h2>The problem</h2>
          <div className="case-section__content">
            <p>
              Big 2 is best when everyone can focus on the game. Paper or
              spreadsheet scoring makes someone stop to do the math, and rule
              questions break the pace. I wanted the companion to handle that
              bookkeeping without taking over the table.
            </p>
            <p>
              The core flow became deliberately short: start a game, choose the
              players, record a round, and see the updated score. Rules and game
              history remain nearby when needed.
            </p>
          </div>
        </section>
        <section className="case-section">
          <h2>From flow to screen</h2>
          <div className="case-section__content">
            <p>
              I started with low-fidelity screens to work out the order of
              actions before refining the visual design. The final Android app
              uses Room to keep scores and game history locally.
            </p>
            <div className="case-gallery">
              <figure>
                <img
                  src={asset("Lowfi1.png")}
                  alt="Early Big 2 home-screen wireframe"
                  loading="lazy"
                />
                <figcaption>Early flow</figcaption>
              </figure>
              <figure>
                <img
                  src={asset("SelectGame_Big2.jpg")}
                  alt="Big 2 player selection screen"
                  loading="lazy"
                />
                <figcaption>Choosing a game</figcaption>
              </figure>
              <figure>
                <img
                  src={asset("Score_Big2.jpg")}
                  alt="Big 2 score screen"
                  loading="lazy"
                />
                <figcaption>Keeping score</figcaption>
              </figure>
            </div>
            <p>
              The visual style borrows from the cards themselves. The useful
              work is in the controls: a clear next action, readable scores, and
              feedback about whose turn it is.
            </p>
          </div>
        </section>
        <section className="case-section">
          <h2>What testing showed</h2>
          <div className="case-section__content">
            <p>
              Eight participants compared the app with spreadsheet scoring. Six
              preferred the app. The small sample does not establish a general
              result, but it was useful feedback about the flow and the amount
              of work the interface removed from play.
            </p>
            <div className="case-callout">
              <strong>6 of 8</strong>
              <span>
                participants preferred using the app in the project’s
                comparison.
              </span>
            </div>
            <p>
              If I continued this project, I would test it during a longer real
              game. That would reveal whether score entry stays quick when the
              table is busy, not just during isolated tasks.
            </p>
          </div>
        </section>
      </div>
      <div className="case-next wrap">
        <p>Another project</p>
        <Link className="text-link" to="/projects/voice-study">
          Voice interface research <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}
