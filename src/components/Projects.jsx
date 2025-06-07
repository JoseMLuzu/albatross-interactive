import "../styles/components/Projects.css";
import unitedStateImage from "../../public/images/logo_game.png";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <div className="project-image-container">
          <img
            src={unitedStateImage}
            alt="United State"
            className="project-image"
          />
        </div>

        <div className="project-text-content">
          <p className="project-description">
            United State is a brutal, team-based third-person shooter set in a
            shattered America during the late 1990s. Engage in intense, grounded
            combat across war-torn cities, forgotten towns, and contested
            territory — where every bullet, every strike, and every decision
            counts.
          </p>

          <p className="project-url">
            <a
              href="https://www.unitedstategame.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.unitedstategame.com
            </a>
          </p>

          <h3 className="approach-title">APPROACH</h3>

          <div className="approach-content">
            <p className="approach-text">
              United State is built around deliberate decision-making, tight
              combat, and situational mastery. Our vision begins with a focused
              core experience: small-team skirmishes where players win through
              strategy, communication, and skill — not loadout gimmicks or
              reflex alone.
            </p>

            <p className="approach-text">
              We reject rigid weapon metas. Instead, we believe in situational
              metas — where success comes from choosing the right tools for the
              job and adapting to the moment. Every gun, gadget, and resource
              has a role — and the best players are the ones who use them with
              intent
            </p>

            <p className="approach-text">
              As our world and systems take shape, we aim to expand into new
              modes, deeper customization, and narrative forms that evolve how
              players engage with the conflict — while staying true to the
              gritty, player-driven combat at the heart of United State.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
