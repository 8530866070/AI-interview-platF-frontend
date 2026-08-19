const steps = [
  {
    number: "01",
    icon: "bi-chat-dots",
    title: "Tell Coach your goal",
    text: "Tell Coach what you want to learn or achieve.",
  },
  {
    number: "02",
    icon: "bi-stars",
    title: "Learn with AI",
    text: "Get personalized guidance and interactive explanations.",
  },
  {
    number: "03",
    icon: "bi-trophy",
    title: "Grow with confidence",
    text: "Practice, improve and track your progress.",
  },
];

function HowItWorks() {
  return (
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

          {steps.map((step, index) => (

            <div className="col-md-4" key={index}>

              <div className="step-card">

                <div className="step-number">
                  {step.number}
                </div>

                <div className="step-icon">
                  <i className={`bi ${step.icon}`}></i>
                </div>

                <h4>
                  {step.title}
                </h4>

                <p>
                  {step.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;