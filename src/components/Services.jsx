function Services() {

  const services = [
    "Dental Checkup",
    "Teeth Cleaning & Scaling",
    "Tooth Filling",
    "Root Canal Treatment",
    "Teeth Whitening",
    "Dental Implants"
  ]

  return (
    <section id="services" className="services fade-up">
      
        <h2>Our Dental Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service}</h3>
              <p>Advanced dental care using modern equipment and painless treatment.</p>
            </div>
          ))}
        </div>
      
    </section>
  )
}

export default Services