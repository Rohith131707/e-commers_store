import './ProductGrid.css'

const ProductGrid = ({
  products,
  loading,
  onAddToCart,
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange
}) => {
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg key={i} className="star filled" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        )
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg key={i} className="star half" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="currentColor"/>
                <stop offset="50%" stopColor="#e0e0e0"/>
              </linearGradient>
            </defs>
            <path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        )
      } else {
        stars.push(
          <svg key={i} className="star empty" width="16" height="16" viewBox="0 0 24 24" fill="#e0e0e0">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        )
      }
    }
    return stars
  }

  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Discover our handpicked collection</p>
        </div>

        <div className="filters">
          <div className="filter-group">
            <label className="filter-label">Category</label>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => onCategoryChange(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">
              Price Range: <span className="price-value">${priceRange}</span>
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange}
              onChange={(e) => onPriceChange(Number(e.target.value))}
              className="price-slider"
            />
          </div>
        </div>

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading amazing products...</p>
          </div>
        ) : (
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.title} className="product-image" />
                  <div className="product-overlay">
                    <button className="quick-view-btn">Quick View</button>
                  </div>
                  <span className="product-badge">New</span>
                </div>
                
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-category">{product.category}</p>
                  
                  <div className="product-rating">
                    <div className="stars">
                      {renderStars(product.rating?.rate || 4)}
                    </div>
                    <span className="rating-count">({product.rating?.count || 0})</span>
                  </div>
                  
                  <div className="product-footer">
                    <div className="product-price">
                      <span className="current-price">${product.price.toFixed(2)}</span>
                      <span className="original-price">${(product.price * 1.3).toFixed(2)}</span>
                    </div>
                    
                    <button
                      className="add-to-cart-btn"
                      onClick={() => onAddToCart(product)}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 2L7 6M17 2l2 4M3 6h18M5 6l2 14h10l2-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && products.length === 0 && (
          <div className="no-products">
            <p>No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductGrid

