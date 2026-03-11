function Appointment() {
  return (
    <section id="appointment" className="appointment fade-up">

      <h2>Book Appointment</h2>

      <form>

        <input type="text" placeholder="Your Name" />

        <input type="tel" placeholder="Phone Number" />

        <select>
          <option>Select Service</option>
          <option>Consultation</option>
          <option>Health Checkup</option>
        </select>

        <textarea placeholder="Message"></textarea>

        <button className="btn">Submit</button>

      </form>

    </section>
  )
}

export default Appointment