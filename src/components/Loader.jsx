import './Loader.css'

function Loader() {
  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-icon">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" stroke="#dc2626" strokeWidth="3" fill="none" strokeDasharray="150" className="loader-circle" />
            <path d="M20 40L30 18L40 40H20Z" fill="#dc2626" fillOpacity="0.9" />
            <circle cx="30" cy="24" r="3" fill="#d4a847" />
          </svg>
        </div>
        <h1 className="loader-title">Muhammadi Transport</h1>
        <p className="loader-subtitle">Umrah Travel Services</p>
        <div className="loader-bar">
          <div className="loader-bar-fill"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
