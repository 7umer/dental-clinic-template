function Doctors() {

  const doctors = [
    {
      name: "Dr. Rahul Sharma",
      role: "Chief Dental Surgeon",
      exp: "BDS, MD · 10+ Years Experience",
      tags: ["Root Canal", "Implants"],
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=600&auto=format&fit=crop&crop=faces&q=80",
    },
    {
      name: "Dr. Ananya Iyer",
      role: "Cosmetic Dentist",
      exp: "BDS, MDS · 8+ Years Experience",
      tags: ["Whitening", "Veneers"],
      photo: "https://images.unsplash.com/photo-1741707039536-113e200f9e0d?w=500&h=600&auto=format&fit=crop&crop=faces&q=80",
    },
    {
      name: "Dr. Karan Mehta",
      role: "Orthodontist",
      exp: "BDS, MOrth · 9+ Years Experience",
      tags: ["Braces", "Aligners"],
      photo: "https://images.unsplash.com/photo-1642975967602-653d378f3b5b?w=500&h=600&auto=format&fit=crop&crop=faces&q=80",
    },
  ]

  return (
    <section id="doctors" className="section fade-up">
      <div className="container">

        <div className="section-head">
          <span className="eyebrow">Our Team</span>
          <h2>Meet Our Doctors</h2>
          <p>Experienced specialists dedicated to careful, patient-first dentistry.</p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doc, index) => (
            <div className="doctor-card" key={index}>

              <div className="doctor-photo">
                <img src={doc.photo} alt={`Portrait of ${doc.name}`} />
              </div>

              <div className="doctor-info">
                <h3>{doc.name}</h3>
                <p className="doctor-role">{doc.role}</p>
                <p>{doc.exp}</p>

                <div className="doctor-tags">
                  {doc.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Doctors
