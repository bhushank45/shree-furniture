import ProductCard from "../ProductCard/ProductCard";
import "./ProductSection.css";

function ProductSection({ title, products }) {
  return (
    <section className="product-section">
      <div className="product-section-header">
        <h2>{title}</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
