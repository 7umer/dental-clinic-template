function About() {

  const features = [
    "Painless, precision-guided treatment",
    "Sterile, hospital-grade equipment",
    "Transparent pricing, no surprises",
    "Same-week appointments available",
  ]

  return (
    <section id="about" className="section fade-up">
      <div className="container about-inner">

        <div className="about-media">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80"
            alt="BrightCare Clinic treatment room with modern dental equipment"
          />

          <div className="about-badge">
            <span className="badge-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <div>
              <strong>12+ Years</strong>
              <span>Trusted local care</span>
            </div>
          </div>
        </div>

        <div className="about-text">

          <span className="eyebrow">About Us</span>
          <h2>Care that feels personal, precision that feels professional</h2>

          <p>
            BrightCare Clinic was built around a simple idea: dental visits
            should be calm, not clinical-feeling. Our doctors combine modern
            diagnostic technology with an unhurried, patient-first approach.
          </p>

          <p>
            From routine checkups to advanced restorative work, every
            treatment plan is tailored to you — explained clearly, delivered
            gently, and backed by a team that genuinely enjoys the work.
          </p>

          <ul className="about-features">
            {features.map((f, i) => (
              <li key={i}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          <div className="about-stats">
            <div className="stat">
              <strong>1,000+</strong>
              <span>Patients Treated</span>
            </div>
            <div className="stat">
              <strong>98%</strong>
              <span>Satisfaction Rate</span>
            </div>
            <div className="stat">
              <strong>3</strong>
              <span>Specialist Doctors</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About
