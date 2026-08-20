import { useState } from "react";
import "./LandingPage.css";

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="coach-app">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar navbar-expand-lg coach-navbar fixed-top">
        <div className="container">

          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <div className="brand-icon">
              <i className="bi bi-stars"></i>
            </div>

            <span className="brand-text">
              Coach<span>.ai</span>
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="bi bi-list"></i>
          </button>

          <div
            className={`collapse navbar-collapse ${
              menuOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#how-it-works">
                  How it works
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

            </ul>

            <div className="d-flex gap-2">

              <button className="btn login-btn">
                Log in
              </button>

              <button className="btn btn-coach">
                Get Started
              </button>

            </div>
          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="hero-section">

        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>

        <div className="container position-relative">

          <div className="row align-items-center min-vh-100 pt-5">

            {/* LEFT */}
            <div className="col-lg-6">

              <div className="hero-badge">
                <span className="pulse-dot"></span>
                AI-powered personal coach
                <i className="bi bi-stars"></i>
              </div>

              <h1 className="hero-title">
                Learn faster.
                <br />
                <span>Build better.</span>
                <br />
                Grow smarter.
              </h1>

              <p className="hero-description">
                Meet Coach.ai — your intelligent AI companion for
                coding, learning, interview preparation and career
                growth.
              </p>

              <div className="hero-buttons">

                <button className="btn btn-coach btn-lg">
                  Start Learning
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>

                <button className="btn btn-demo btn-lg">
                  <i className="bi bi-play-circle me-2"></i>
                  See how it works
                </button>

              </div>

              <div className="hero-trust">

                <div className="avatars">
                  <span>RK</span>
                  <span>AK</span>
                  <span>SP</span>
                  <span>+</span>
                </div>

                <div>
                  <div className="stars">
                    ★★★★★
                  </div>

                  <small>
                    Built for ambitious learners
                  </small>
                </div>

              </div>

            </div>


            {/* RIGHT CHAT PREVIEW */}
            <div className="col-lg-6">

              <div className="chat-preview">

                <div className="chat-window">

                  {/* Chat header */}
                  <div className="chat-header">

                    <div className="d-flex align-items-center gap-2">

                      <div className="chat-avatar">
                        <i className="bi bi-stars"></i>
                      </div>

                      <div>
                        <strong>Coach</strong>
                        <small>
                          <span className="online-dot"></span>
                          Online
                        </small>
                      </div>

                    </div>

                    <i className="bi bi-three-dots"></i>

                  </div>


                  {/* Chat body */}
                  <div className="chat-body">

                    <div className="welcome-message">

                      <div className="mini-coach">
                        <i className="bi bi-stars"></i>
                      </div>

                      <h5>
                        Hi! I'm Coach 👋
                      </h5>

                      <p>
                        What would you like to learn today?
                      </p>

                    </div>


                    <div className="quick-pills">

                      <span>
                        <i className="bi bi-code-slash"></i>
                        Learn coding
                      </span>

                      <span>
                        <i className="bi bi-briefcase"></i>
                        Interview prep
                      </span>

                    </div>


                    <div className="preview-user-message">
                      How can I improve my Java skills?
                    </div>


                    <div className="preview-bot-message">

                      <div className="mini-avatar">
                        <i className="bi bi-stars"></i>
                      </div>

                      <div>
                        <p>
                          Great question! Let's create a
                          practical learning path for you.
                        </p>

                        <div className="typing-line">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>

                    </div>

                  </div>


                  {/* Input */}
                  <div className="preview-input">

                    <span>
                      Ask Coach anything...
                    </span>

                    <button>
                      <i className="bi bi-arrow-up"></i>
                    </button>

                  </div>

                </div>

                {/* Floating cards */}

                <div className="floating-card floating-card-one">
                  <div className="floating-icon purple">
                    <i className="bi bi-lightning-charge"></i>
                  </div>

                  <div>
                    <strong>Smart Learning</strong>
                    <small>Personalized for you</small>
                  </div>
                </div>


                <div className="floating-card floating-card-two">
                  <div className="floating-icon green">
                    <i className="bi bi-check-lg"></i>
                  </div>

                  <div>
                    <strong>Goal Progress</strong>
                    <small>82% completed</small>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TRUST BAR ================= */}
      <section className="trust-section">

        <div className="container">

          <p>
            YOUR PERSONAL AI COMPANION FOR
          </p>

          <div className="trust-items">

            <span>
              <i className="bi bi-code-square"></i>
              Coding
            </span>

            <span>
              <i className="bi bi-mortarboard"></i>
              Learning
            </span>

            <span>
              <i className="bi bi-person-workspace"></i>
              Interviews
            </span>

            <span>
              <i className="bi bi-rocket-takeoff"></i>
              Career
            </span>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section
        className="features-section"
        id="features"
      >

        <div className="container">

          <div className="section-heading">

            <div className="section-badge">
              WHY COACH
            </div>

            <h2>
              Everything you need to
              <span> level up.</span>
            </h2>

            <p>
              One intelligent assistant for your entire
              learning and career journey.
            </p>

          </div>


          <div className="row g-4">

            <FeatureCard
              icon="bi-stars"
              title="AI-Powered Guidance"
              text="Get personalized explanations, examples and guidance whenever you need it."
              color="purple"
            />

            <FeatureCard
              icon="bi-code-slash"
              title="Coding Assistant"
              text="Understand concepts, debug code and build real-world projects with confidence."
              color="blue"
            />

            <FeatureCard
              icon="bi-mic"
              title="Interview Practice"
              text="Practice technical and HR interviews with realistic AI-powered conversations."
              color="pink"
            />

            <FeatureCard
              icon="bi-graph-up-arrow"
              title="Track Your Growth"
              text="Monitor your learning progress and understand where you can improve."
              color="green"
            />

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section
        className="how-section"
        id="how-it-works"
      >

        <div className="container">

          <div className="section-heading">

            <div className="section-badge">
              HOW IT WORKS
            </div>

            <h2>
              Your journey starts
              <span> here.</span>
            </h2>

          </div>


          <div className="row g-4 mt-3">

            <Step
              number="01"
              icon="bi-chat-dots"
              title="Tell Coach your goal"
              text="Tell Coach what you want to learn or achieve."
            />

            <Step
              number="02"
              icon="bi-stars"
              title="Learn with AI"
              text="Get personalized guidance and interactive explanations."
            />

            <Step
              number="03"
              icon="bi-trophy"
              title="Grow with confidence"
              text="Practice, improve and track your progress."
            />

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="cta-section">

        <div className="container">

          <div className="cta-card">

            <div className="cta-glow"></div>

            <div className="position-relative">

              <div className="cta-icon">
                <i className="bi bi-stars"></i>
              </div>

              <h2>
                Ready to meet your
                <br />
                new AI coach?
              </h2>

              <p>
                Start learning, building and growing
                with Coach.ai today.
              </p>

              <button className="btn btn-light btn-lg cta-button">
                Start with Coach
                <i className="bi bi-arrow-right ms-2"></i>
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer id="about">

        <div className="container">

          <div className="footer-content">

            <div className="footer-brand">

              <div className="d-flex align-items-center gap-2">

                <div className="brand-icon small">
                  <i className="bi bi-stars"></i>
                </div>

                <strong>
                  Coach<span>.ai</span>
                </strong>

              </div>

              <p>
                Your AI companion for learning,
                coding and career growth.
              </p>

            </div>


            <div className="footer-links">

              <a href="#features">Features</a>
              <a href="#how-it-works">How it works</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>

            </div>

          </div>

          <div className="footer-bottom">
            © 2026 Coach.ai. Built to help you grow.
          </div>

        </div>

      </footer>

    </div>
  );
}


/* =========================
   FEATURE CARD
========================= */

function FeatureCard({
  icon,
  title,
  text,
  color,
}) {
  return (
    <div className="col-md-6 col-lg-3">

      <div className="feature-card">

        <div className={`feature-icon ${color}`}>
          <i className={`bi ${icon}`}></i>
        </div>

        <h4>{title}</h4>

        <p>{text}</p>

        <a href="#how-it-works">
          Learn more
          <i className="bi bi-arrow-right"></i>
        </a>

      </div>

    </div>
  );
}


/* =========================
   STEP
========================= */

function Step({
  number,
  icon,
  title,
  text,
}) {
  return (
    <div className="col-md-4">

      <div className="step-card">

        <div className="step-number">
          {number}
        </div>

        <div className="step-icon">
          <i className={`bi ${icon}`}></i>
        </div>

        <h4>{title}</h4>

        <p>{text}</p>

      </div>

    </div>
  );
}

export default LandingPage;