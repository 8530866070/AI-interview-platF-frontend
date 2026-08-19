const features = [
  {
    icon: "bi-stars",
    title: "AI-Powered Guidance",
    text: "Get personalized explanations, examples and guidance whenever you need it.",
    color: "purple",
  },
  {
    icon: "bi-code-slash",
    title: "Coding Assistant",
    text: "Understand concepts, debug code and build real-world projects with confidence.",
    color: "blue",
  },
  {
    icon: "bi-mic",
    title: "Interview Practice",
    text: "Practice technical and HR interviews with realistic AI-powered conversations.",
    color: "pink",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Track Your Growth",
    text: "Monitor your learning progress and understand where you can improve.",
    color: "green",
  },
];

function Features() {
  return (
    <section className="features-section" id="features">

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

          {features.map((feature, index) => (

            <div className="col-md-6 col-lg-3" key={index}>

              <div className="feature-card">

                <div className={`feature-icon ${feature.color}`}>
                  <i className={`bi ${feature.icon}`}></i>
                </div>

                <h4>{feature.title}</h4>

                <p>{feature.text}</p>

                <a href="#how-it-works">
                  Learn more
                  <i className="bi bi-arrow-right"></i>
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;