function Services() {

  const services = [
    {
      title: "Dental Checkup",
      desc: "Comprehensive exams and digital diagnostics to catch issues early.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C9 2 6.5 4 6 7c-.5 3 .5 5 1 8 .3 2 .8 5 2 5s1.5-3 1.5-5 .5-3 1.5-3 1.5 1 1.5 3 .3 5 1.5 5 1.7-3 2-5c.5-3 1.5-5 1-8-.5-3-3-5-6-5Z" />
        </svg>
      ),
    },
    {
      title: "Teeth Cleaning & Scaling",
      desc: "Gentle deep-cleaning that removes plaque and restores brightness.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 12 2 2 4-4" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
    {
      title: "Tooth Filling",
      desc: "Tooth-coloured, durable fillings placed with a precise, gentle touch.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Root Canal Treatment",
      desc: "Pain-free, single-visit root canal therapy with modern anaesthesia.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21c-4-4-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-3 8-7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      ),
    },
    {
      title: "Teeth Whitening",
      desc: "Safe, clinic-grade whitening for a noticeably brighter smile.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v3M18.4 5.6l-2.1 2.1M21 12h-3M18.4 18.4l-2.1-2.1M12 18v3M5.6 18.4l2.1-2.1M3 12h3M5.6 5.6l2.1 2.1" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      ),
    },
    {
      title: "Dental Implants",
      desc: "Long-lasting implant solutions engineered to look and feel natural.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v6M9 5h6M12 8v9M9 21l1.5-4h3L15 21" />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="section section-alt fade-up">
      <div className="container">

        <div className="section-head">
          <span className="eyebrow">What We Offer</span>
          <h2>Our Dental Services</h2>
          <p>Modern equipment, painless technique, and a treatment plan built around you.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
