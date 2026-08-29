function Map() {
  return (

    <section className="map">
      <div className="map-shell">

        <iframe
          title="BrightCare Clinic location"
          src="https://maps.google.com/maps?q=Andheri%20West%2C%20Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>

        <div className="map-card">
          <h4>Visit BrightCare Clinic</h4>
          <p>4th Floor, Sunrise Complex</p>
          <p>Andheri West, Mumbai, India</p>
          <p>Mon–Sat: 9 AM – 8 PM</p>
        </div>

      </div>
    </section>

  )
}

export default Map
