import { useState } from "react"

function Appointment() {

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="appointment" className="section fade-up">
      <div className="container">
        <div className="appointment-inner">

          <div className="appointment-side">
            <span className="eyebrow">Get Started</span>
            <h2>Book your visit today</h2>
            <p>
              Tell us a little about what you need and our front desk will
              confirm your slot within one business day.
            </p>

            <div className="appointment-info">
              <div className="info-row">
                <span className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <div>
                  <strong>+91 98765 43210</strong>
                  <span>Mon–Sat, 9 AM – 8 PM</span>
                </div>
              </div>

              <div className="info-row">
                <span className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </span>
                <div>
                  <strong>Same-week slots</strong>
                  <span>Most requests confirmed in 24 hours</span>
                </div>
              </div>

              <div className="info-row">
                <span className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <strong>Andheri West, Mumbai</strong>
                  <span>Free parking on premises</span>
                </div>
              </div>
            </div>
          </div>

          <div className="appointment-form-wrap">

            {submitted ? (
              <div className="form-success">
                <span className="success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <h3>Request received, {form.name.split(" ")[0] || "there"}!</h3>
                <p>Our team will call you at {form.phone} shortly to confirm your appointment time.</p>
                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                  Book another slot
                </button>
              </div>
            ) : (
              <>
                <h3>Request an appointment</h3>
                <p>Fill in your details and we'll reach out to confirm.</p>

                <form onSubmit={handleSubmit}>

                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="name">Your Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Jane Doe"
                        required
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="service">Service</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select a service</option>
                      <option>Dental Checkup</option>
                      <option>Teeth Cleaning & Scaling</option>
                      <option>Tooth Filling</option>
                      <option>Root Canal Treatment</option>
                      <option>Teeth Whitening</option>
                      <option>Dental Implants</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="message">Message (optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your concern or preferred time"
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-lg btn-block">Request Appointment</button>
                  <p className="form-note">We'll never share your information with third parties.</p>

                </form>
              </>
            )}

          </div>

        </div>
      </div>
    </section>
  )
}

export default Appointment
