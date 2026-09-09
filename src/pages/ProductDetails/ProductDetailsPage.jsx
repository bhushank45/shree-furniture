import { Link, useParams } from "react-router-dom";
import furniture from "../../Data/furniture";
import "./ProductDetailsPage.css";

function ProductDetailsPage() {
  const { id } = useParams();

  const product = furniture.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="product-details-page">
        <div className="product-not-found">
          <h1>Product Not Found</h1>

          <p>
            Sorry, we couldn't find the furniture you're looking for.
          </p>

          <Link to="/collections">
            Back to Collections
          </Link>
        </div>
      </main>
    );
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) /
      product.originalPrice) *
      100
  );

  return (
    <main className="product-details-page">
      <div className="product-details-container">

        {/* Back to Collections */}
        <Link
          to="/collections"
          className="back-to-collections"
        >
          ← Back to Collections
        </Link>

        {/* Product Details */}
        <section className="product-details">

          {/* Product Image */}
          <div className="product-details-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          {/* Product Information */}
          <div className="product-details-content">

            <p className="product-details-category">
              {product.category}
            </p>

            <h1>{product.name}</h1>

            {/* Rating */}
            <div className="product-rating">
              <span className="rating-star">★</span>

              <span className="rating-value">
                {product.rating}
              </span>

              <span className="rating-text">
                Rated by our customers
              </span>
            </div>

            {/* Price */}
            <div className="product-price">

              <strong>
                ₹{product.price.toLocaleString("en-IN")}
              </strong>

              <span className="original-price">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>

              <span className="discount">
                {discount}% OFF
              </span>

            </div>

            {/* Description */}
            <div className="product-description">
              <h2>About This Product</h2>

              <p>
                {product.description}
              </p>
            </div>

            {/* Product Information */}
            <div className="product-info">

              <div className="product-info-item">
                <span>Material</span>
                <strong>{product.material}</strong>
              </div>

              <div className="product-info-item">
                <span>Color</span>
                <strong>{product.color}</strong>
              </div>

              <div className="product-info-item">
                <span>Room</span>
                <strong>{product.room}</strong>
              </div>

            </div>

            {/* Store Message */}
            <div className="store-message">

              <h2>Interested in this furniture?</h2>

              <p>
                Visit our showroom to see this product in person
                and learn more about availability and options.
              </p>

            </div>

            {/* Store Button */}
            <div className="product-actions">

              <Link
                to="/ourshowroom"
                className="visit-store-btn"
              >
                Visit Our Showroom
              </Link>

            </div>

          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductDetailsPage;