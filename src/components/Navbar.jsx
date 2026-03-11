import "../App.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2>BrightCare Clinic</h2>
      
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#doctors">Doctors</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    
      <a href="#appointment">
        <button className="btn">Book Appointment</button>
      </a>

    </nav>
  )
}

export default Navbar