function Gallery() {

  const images = [
    {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&auto=format&fit=crop&q=80",
      label: "Treatment Room",
    },
    {
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&auto=format&fit=crop&q=80",
      label: "Consultation",
    },
    {
      src: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?w=700&auto=format&fit=crop&q=80",
      label: "Reception",
    },
    {
      src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=700&auto=format&fit=crop&q=80",
      label: "Modern Equipment",
    },
  ]

  return (
    <section id="gallery" className="section section-alt fade-up">
      <div className="container">

        <div className="section-head">
          <span className="eyebrow">Take a Look</span>
          <h2>Clinic Gallery</h2>
          <p>A glimpse inside the space where your care happens.</p>
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <a className="gallery-item" key={i} href="#gallery">
              <img src={img.src} alt={img.label} />
              <span>{img.label}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Gallery
