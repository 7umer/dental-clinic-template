function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-bg"></div>

      <div className="hero-content">

        <span className="eyebrow">Premium Dental Care</span>

        <h1>
          A brighter, healthier <span>smile</span> starts here
        </h1>

        <p>
          BrightCare Clinic pairs expert dentists with a calm, modern
          environment and gentle, precise treatment — so every visit feels
          effortless.
        </p>

        <div className="hero-buttons">
          <a href="#appointment">
            <button className="btn btn-lg">Book Appointment</button>
          </a>
          <a href="tel:+919876543210">
            <button className="btn btn-lg btn-ghost">Call the Clinic</button>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <strong>12+</strong>
            <span>Years of Care</span>
          </div>
          <div className="stat">
            <strong>1,000+</strong>
            <span>Happy Patients</span>
          </div>
          <div className="stat">
            <strong>4.9★</strong>
            <span>Average Rating</span>
          </div>
          <div className="stat">
            <strong>3</strong>
            <span>Expert Doctors</span>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Hero
