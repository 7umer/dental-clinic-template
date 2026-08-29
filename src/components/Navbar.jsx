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

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }

  }, [])

  return (

    <nav className="navbar" ref={navRef}>

      <a href="#home" className="logo" onClick={closeMenu}>
        <span className="logo-mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C9 2 6.5 4 6 7c-.5 3 .5 5 1 8 .3 2 .8 5 2 5s1.5-3 1.5-5 .5-3 1.5-3 1.5 1 1.5 3 .3 5 1.5 5 1.7-3 2-5c.5-3 1.5-5 1-8-.5-3-3-5-6-5Z" />
          </svg>
        </span>
        BrightCare Clinic
      </a>

      <div
        className={menuOpen ? "menu-toggle open" : "menu-toggle"}
        onClick={(e) => {
          e.stopPropagation()
          setMenuOpen(prev => !prev)
        }}
        role="button"
        aria-label="Toggle navigation menu"
      >
        <span className="bars">
          <span></span>
          <span></span>
          <span></span>
        </span>
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
            <button className="btn btn-block">Book Appointment</button>
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
