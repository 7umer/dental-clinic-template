import { useState, useEffect, useRef } from "react"
import "../App.css"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef()

  const closeMenu = () => {
    setMenuOpen(false)
  }

  // Close menu when clicking outside
  useEffect(() => {

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }

  }, [])

  return (

    <nav className="navbar" ref={navRef}>

      <h2 className="logo">BrightCare Clinic</h2>

      <div
        className="menu-toggle"
        onClick={() => {
          setMenuOpen(prev => !prev)
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#doctors" onClick={closeMenu}>Doctors</a></li>
        <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
        <li><a href="#footer" onClick={closeMenu}>Contact</a></li>

        <li className="mobile-btn">
          <a href="#appointment" onClick={closeMenu}>
            <button className="btn">Book Appointment</button>
          </a>
        </li>

      </ul>

      <a href="#appointment" className="desktop-btn">
        <button className="btn">Book Appointment</button>
      </a>

    </nav>
  )
}

export default Navbar