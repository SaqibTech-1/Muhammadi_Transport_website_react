import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#dc2626" />
                <path d="M10 24L16 8L22 24H10Z" fill="white" fillOpacity="0.9" />
                <circle cx="16" cy="14" r="2" fill="#d4a847" />
              </svg>
              <span>Muhammadi <span style={{ color: 'var(--red-600)' }}>Transport</span></span>
            </a>
            <p className="footer-tagline">
              Trusted Umrah transport services since 2010.
              Making your sacred journey comfortable and peaceful.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Airport Pickup</a></li>
              <li><a href="#services">Makkah to Madinah</a></li>
              <li><a href="#services">Hotel Transfers</a></li>
              <li><a href="#services">Ziyarat Tours</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#fleet">Our Fleet</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Contact</h4>
            <ul>
              <li><a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="tel:+923001234567">+92 300 1234567</a></li>
              <li><a href="mailto:info@muhammaditransport.com">Email Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Muhammadi Transport. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
