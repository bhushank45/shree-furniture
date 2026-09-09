import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />


      </div>

      <div className="product-card-content">
        <p className="product-card-category">{product.category}</p>

        <h3 className="product-card-name">{product.name}</h3>

        <div className="product-card-footer">
          <strong className="product-card-price">
            ₹{product.price.toLocaleString("en-IN")}
          </strong>

          <Link to={`/collections/${product.id}`} className="product-card-link">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
