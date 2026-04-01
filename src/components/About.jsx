import './About.css'

const features = [
  'Clean, air-conditioned vehicles',
  'Experienced and courteous drivers',
  'Affordable fixed rates, no hidden fees',
  'Real-time WhatsApp support',
  'Child seats available on request',
  'Multilingual drivers (Urdu, Arabic, English)',
]

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-content">
            <span className="section-label">About Us</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Serving Pilgrims with<br />
              <span style={{ color: 'var(--red-600)' }}>Honor and Respect</span>
            </h2>
            <p className="about-text">
              Muhammadi Transport has been serving Umrah pilgrims for over 14 years.
              We understand that this is not just a trip &mdash; it is a sacred journey
              of a lifetime. Our mission is to make every ride comfortable, safe,
              and worry-free so you can focus entirely on your ibadah.
            </p>
            <p className="about-text">
              With a fleet of well-maintained vehicles and a team of experienced
              drivers who know the holy cities inside out, we have earned the
              trust of thousands of pilgrims from around the world.
            </p>
            <ul className="about-features">
              {features.map((feature, index) => (
                <li key={index} className="about-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red-600)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="about-visual">
            <div className="about-image-card">
              <div className="about-image-placeholder">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--red-300)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span>Holy Kaaba</span>
                <span className="about-image-sub">Makkah Al-Mukarramah</span>
              </div>
            </div>
            <div className="about-card-float">
              <div className="about-card-float-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--red-600)" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="about-card-float-title">Call / WhatsApp</div>
                <div className="about-card-float-value">+92 329-9296212</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
