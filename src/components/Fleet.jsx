import './Fleet.css'

const vehicles = [
  {
    name: 'Toyota Previa',
    capacity: '4-6 Passengers',
    features: ['AC', 'Leather Seats', 'Spacious Luggage'],
    ideal: 'Families & Small Groups',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="6" width="22" height="10" rx="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <line x1="5" y1="6" x2="7" y2="2" />
        <line x1="19" y1="6" x2="17" y2="2" />
      </svg>
    ),
  },
  {
    name: 'Hyundai H1',
    capacity: '7-8 Passengers',
    features: ['AC', 'Reclining Seats', 'USB Charging'],
    ideal: 'Medium Groups',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="5" width="22" height="11" rx="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <line x1="4" y1="5" x2="6" y2="1" />
        <line x1="20" y1="5" x2="18" y2="1" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    name: 'Toyota Coaster',
    capacity: '15-22 Passengers',
    features: ['AC', 'Large Luggage', 'Comfortable Seating'],
    ideal: 'Large Groups & Jamaat',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="4" width="22" height="12" rx="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="12" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <line x1="3" y1="4" x2="5" y2="1" />
        <line x1="21" y1="4" x2="19" y2="1" />
        <line x1="1" y1="9" x2="23" y2="9" />
      </svg>
    ),
  },
  {
    name: 'Luxury GMC',
    capacity: '5-7 Passengers',
    features: ['Premium AC', 'VIP Interior', 'WiFi Available'],
    ideal: 'VIP & Executive Travel',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="5" width="22" height="11" rx="3" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <line x1="4" y1="5" x2="6" y2="1" />
        <line x1="20" y1="5" x2="18" y2="1" />
        <path d="M1 11h22" />
        <circle cx="12" cy="8" r="1" fill="currentColor" />
      </svg>
    ),
  },
]

function Fleet() {
  return (
    <section className="fleet section" id="fleet">
      <div className="container">
        <div className="fleet-header">
          <span className="section-label">Our Fleet</span>
          <h2 className="section-title">Vehicles for Every Need</h2>
          <p className="section-subtitle">
            From solo travelers to large groups, our fleet of well-maintained
            vehicles ensures a comfortable ride for everyone.
          </p>
        </div>
        <div className="fleet-grid">
          {vehicles.map((vehicle, index) => (
            <div className="fleet-card" key={index}>
              <div className="fleet-card-icon">{vehicle.icon}</div>
              <h3 className="fleet-card-name">{vehicle.name}</h3>
              <div className="fleet-card-capacity">{vehicle.capacity}</div>
              <div className="fleet-card-features">
                {vehicle.features.map((feature, i) => (
                  <span key={i} className="fleet-feature-tag">{feature}</span>
                ))}
              </div>
              <div className="fleet-card-ideal">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                {vehicle.ideal}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Fleet
