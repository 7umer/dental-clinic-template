function Testimonials() {

  const reviews = [
    {
      text: "Very professional doctors and friendly staff. I finally don't dread dentist visits.",
      name: "Priya Nair",
      meta: "Root Canal Patient",
    },
    {
      text: "Clinic is spotless and the treatment was excellent — explained every step before doing it.",
      name: "Arjun Verma",
      meta: "Teeth Whitening",
    },
    {
      text: "Booked same week for an implant consult. Genuinely the calmest dental experience I've had.",
      name: "Sana Khan",
      meta: "Dental Implants",
    },
  ]

  return (
    <section className="section testimonials fade-up">
      <div className="container">

        <div className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2>Patient Reviews</h2>
          <p>What our patients say after their visit.</p>
        </div>

        <div className="testimonial-grid">
          {reviews.map((r, i) => (
            <div className="review" key={i}>
              <div className="stars">★★★★★</div>
              <p>&ldquo;{r.text}&rdquo;</p>
              <div className="review-author">
                <span className="review-avatar">{r.name.charAt(0)}</span>
                <div>
                  <h4>{r.name}</h4>
                  <span>{r.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
