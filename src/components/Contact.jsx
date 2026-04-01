import './Contact.css'

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-info">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Book Your Ride<br />
              <span style={{ color: 'var(--red-600)' }}>Today</span>
            </h2>
            <p className="contact-text">
              Ready to book your Umrah transport? Contact us on WhatsApp
              for instant confirmation. We respond within minutes, inshaAllah.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-label">Phone / WhatsApp</div>
                  <div className="contact-detail-value">+92 329-9296212</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-label">Office Location</div>
                  <div className="contact-detail-value">Near Masjid al-Haram, Makkah</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="contact-detail-label">Available</div>
                  <div className="contact-detail-value">24 Hours, 7 Days a Week</div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/923299296212"
              className="btn btn-primary contact-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          <div className="contact-form-card">
            <h3 className="contact-form-title">Quick Inquiry</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+92 300 0000000" />
              </div>
              <div className="form-group">
                <label>Travel Date</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Number of Passengers</label>
                <select defaultValue="">
                  <option value="" disabled>Select passengers</option>
                  <option>1-3</option>
                  <option>4-6</option>
                  <option>7-10</option>
                  <option>10+</option>
                </select>
              </div>
              <div className="form-group">
                <label>Service Needed</label>
                <select defaultValue="">
                  <option value="" disabled>Select service</option>
                  <option>Airport Pickup</option>
                  <option>Makkah to Madinah</option>
                  <option>Hotel Transfer</option>
                  <option>Ziyarat Tour</option>
                  <option>Full Umrah Package</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary contact-form-btn">
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
