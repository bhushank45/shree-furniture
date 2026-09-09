import { useState } from "react";
import "./Collections.css";

import CategoryNav from "../../components/CategoryNav/CategoryNav";
import ProductSection from "../../components/ProductSection/ProductSection";

import furniture from "../../Data/furniture";

function Collections() {
  const [activeCategory, setActiveCategory] = useState("All Furniture");

  const categories = [
    "All Furniture",
    "Living Room",
    "Bedroom",
    "Dining",
    "Office",
  ];

  const filteredFurniture =
    activeCategory === "All Furniture"
      ? furniture
      : furniture.filter((product) => product.room === activeCategory);

  return (
    <main className="collections-page">
      <section className="collections-header">
        <h1>Our Collections</h1>

        <p>Explore furniture designed for every room of your home.</p>
      </section>

      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {activeCategory === "All Furniture" ? (
        <>
          <h1 style={{textAlign:"center", marginTop:20}}>All Furnitures</h1>
          <ProductSection
            title="Living Room"
            products={furniture.filter(
              (product) => product.room === "Living Room",
            )}
          />

          <ProductSection
            title="Bedroom"
            products={furniture.filter((product) => product.room === "Bedroom")}
          />

          <ProductSection
            title="Dining"
            products={furniture.filter((product) => product.room === "Dining")}
          />

          <ProductSection
            title="Office"
            products={furniture.filter((product) => product.room === "Office")}
          />
        </>
      ) : (
        <ProductSection title={activeCategory} products={filteredFurniture} />
      )}
    </main>
  );
}

export default Collections;
