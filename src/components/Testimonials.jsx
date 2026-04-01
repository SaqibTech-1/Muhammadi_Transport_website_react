import './Testimonials.css'

const testimonials = [
  {
    quote: 'Alhamdulillah, our Umrah trip was made so much easier with Muhammadi Transport. The driver was always on time and very respectful. Highly recommend for families.',
    name: 'Ahmed Khan',
    location: 'Karachi, Pakistan',
    rating: 5,
  },
  {
    quote: 'We booked them for airport pickup, hotel transfer, and ziyarat. Everything was perfectly organized. The vehicle was clean and comfortable. Will use again inshaAllah.',
    name: 'Fatima Al-Rashid',
    location: 'London, UK',
    rating: 5,
  },
  {
    quote: 'Best transport service for Umrah. The driver knew all the routes and helped us save time. Very reasonable prices compared to others. JazakAllahu Khair!',
    name: 'Mohammed Ismail',
    location: 'Mumbai, India',
    rating: 5,
  },
]

function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Pilgrims Say</h2>
          <p className="section-subtitle">
            Thousands of satisfied pilgrims trust us with their sacred journeys.
            Here are just a few of their kind words.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#d4a847" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <blockquote className="testimonial-quote">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-name">{item.name}</div>
                  <div className="testimonial-location">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
