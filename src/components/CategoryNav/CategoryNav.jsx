import "./CategoryNav.css";

function CategoryNav({ categories, activeCategory, onCategoryChange }) {
  return (
    <nav className="category-nav" aria-label="Furniture categories">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`category-button ${
            activeCategory === category ? "active" : ""
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}

export default CategoryNav;
