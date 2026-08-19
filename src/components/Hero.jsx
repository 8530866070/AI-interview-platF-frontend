function Hero() {
  return (
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
              Meet Coach.ai — your intelligent AI companion
              for coding, learning, interview preparation
              and career growth.
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

          {/* RIGHT */}
          <div className="col-lg-6">

            <div className="chat-preview">

              <div className="chat-window">

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

                <div className="preview-input">

                  <span>
                    Ask Coach anything...
                  </span>

                  <button>
                    <i className="bi bi-arrow-up"></i>
                  </button>

                </div>

              </div>

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
  );
}

export default Hero;