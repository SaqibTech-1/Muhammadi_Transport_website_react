import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          <span className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#dc2626" />
              <path d="M10 24L16 8L22 24H10Z" fill="white" fillOpacity="0.9" />
              <circle cx="16" cy="14" r="2" fill="#d4a847" />
            </svg>
          </span>
          <span className="logo-text">Muhammadi <span className="logo-highlight">Transport</span></span>
        </a>

        <ul className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#fleet" onClick={closeMenu}>Our Fleet</a></li>
          <li><a href="#testimonials" onClick={closeMenu}>Reviews</a></li>
          <li className="navbar-links-mobile">
            <a href="#contact" className="btn btn-primary" onClick={closeMenu}>Book Now</a>
          </li>
        </ul>

        <div className="navbar-actions">
          <a href="#contact" className="btn btn-primary navbar-cta">Book Now</a>
          <button
            className={`hamburger ${menuOpen ? 'hamburger-active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {menuOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}
      </div>
    </nav>
  )
}

export default Navbar
