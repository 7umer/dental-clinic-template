function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <a href="#home" className="logo">
            <span className="logo-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C9 2 6.5 4 6 7c-.5 3 .5 5 1 8 .3 2 .8 5 2 5s1.5-3 1.5-5 .5-3 1.5-3 1.5 1 1.5 3 .3 5 1.5 5 1.7-3 2-5c.5-3 1.5-5 1-8-.5-3-3-5-6-5Z" />
              </svg>
            </span>
            BrightCare Clinic
          </a>
          <p>Modern, gentle dental care for the whole family — trusted by 1,000+ patients across Mumbai.</p>

          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
              </svg>
            </a>
            <a href="https://wa.me/919035477754" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#services">Root Canal Treatment</a></li>
            <li><a href="#services">Teeth Whitening</a></li>
            <li><a href="#services">Dental Implants</a></li>
            <li><a href="#appointment">Book Appointment</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              4th Floor, Sunrise Complex, Andheri West, Mumbai
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              +91 98765 43210
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Mon–Sat: 9 AM – 8 PM
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 BrightCare Clinic. All rights reserved.</span>
        <span>Designed with care in Mumbai</span>
      </div>

    </footer>
  )
}

export default Footer
