import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Summer Collection 2024",
      subtitle: "Discover the latest trends",
      description: "Up to 50% off on selected items",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
    },
    {
      title: "Premium Electronics",
      subtitle: "Tech that inspires",
      description: "Free shipping on orders over $100",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
    },
    {
      title: "Fashion Forward",
      subtitle: "Style meets comfort",
      description: "New arrivals every week",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hero" id="home">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ background: slide.gradient }}
          >
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <p className="hero-description">{slide.description}</p>
                <div className="hero-buttons">
                  <button className="btn btn-primary">Shop Now</button>
                  <button className="btn btn-secondary">Learn More</button>
                </div>
              </div>
              <div className="hero-image">
                <div className="image-wrapper">
                  <img src={slide.image} alt={slide.title} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <div className="hero-features">
        <div className="feature">
          <div className="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="feature-text">
            <h3>Free Shipping</h3>
            <p>On orders over $100</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="feature-text">
            <h3>24/7 Support</h3>
            <p>Always here to help</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="feature-text">
            <h3>Secure Payment</h3>
            <p>100% protected</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="feature-text">
            <h3>Easy Returns</h3>
            <p>30-day guarantee</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

