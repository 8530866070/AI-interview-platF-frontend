function Footer() {
  return (
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

            <a href="#features">
              Features
            </a>

            <a href="#how-it-works">
              How it works
            </a>

            <a href="#">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>

          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Coach.ai. Built to help you grow.
        </div>

      </div>

    </footer>
  );
}

export default Footer;