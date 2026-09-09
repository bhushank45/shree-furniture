import modernSofa from "../assets/images/modern-sofa.png";
import diningTable from "../assets/images/dining-table.png";
import kingBed from "../assets/images/king-bed.png";
import coffeeTable from "../assets/images/coffee-table.png";
import officeChair from "../assets/images/office-chair.png";
import recliner from "../assets/images/recliner.png";
import tvUnit from "../assets/images/tv-unit.png";
import wardrobe from "../assets/images/wardrobe.png";

const furniture = [
  {
    id: 1,
    name: "Modern Comfort Sofa",
    category: "Sofa",
    room: "Living Room",
    price: 24999,
    originalPrice: 29999,
    rating: 4.5,
    material: "Fabric",
    color: "Beige",
    image: modernSofa,
    description:
      "A comfortable modern sofa designed to bring elegance and comfort to your living room.",
  },

  {
    id: 2,
    name: "Classic Wooden Dining Table",
    category: "Dining Table",
    room: "Dining",
    price: 18999,
    originalPrice: 22999,
    rating: 4.6,
    material: "Solid Wood",
    color: "Walnut",
    image: diningTable,
    description:
      "A beautifully crafted wooden dining table perfect for family meals and gatherings.",
  },

  {
    id: 3,
    name: "Royal King Size Bed",
    category: "Bed",
    room: "Bedroom",
    price: 32999,
    originalPrice: 39999,
    rating: 4.8,
    material: "Engineered Wood",
    color: "Dark Brown",
    image: kingBed,
    description:
      "A spacious king size bed featuring a premium finish and sturdy construction.",
  },

  {
    id: 4,
    name: "Ergonomic Office Chair",
    category: "Office Chair",
    room: "Office",
    price: 7999,
    originalPrice: 9999,
    rating: 4.4,
    material: "Mesh",
    color: "Black",
    image: officeChair,
    description:
      "An ergonomic office chair designed to provide excellent support and comfort.",
  },

  {
    id: 5,
    name: "Premium Wooden Wardrobe",
    category: "Wardrobe",
    room: "Bedroom",
    price: 21999,
    originalPrice: 26999,
    rating: 4.7,
    material: "Engineered Wood",
    color: "Natural Wood",
    image: wardrobe,
    description:
      "A spacious wardrobe with a modern design and plenty of storage space.",
  },

  {
    id: 6,
    name: "Minimalist Coffee Table",
    category: "Coffee Table",
    room: "Living Room",
    price: 6999,
    originalPrice: 8499,
    rating: 4.3,
    material: "Wood",
    color: "Oak",
    image: coffeeTable,
    description:
      "A minimalist coffee table that adds a stylish touch to your living room.",
  },

  {
    id: 7,
    name: "Luxury Recliner Chair",
    category: "Recliner",
    room: "Living Room",
    price: 15999,
    originalPrice: 18999,
    rating: 4.7,
    material: "Leather",
    color: "Brown",
    image: recliner,
    description: "A luxurious recliner designed for relaxing after a long day.",
  },

  {
    id: 8,
    name: "Modern TV Unit",
    category: "TV Unit",
    room: "Living Room",
    price: 12999,
    originalPrice: 15999,
    rating: 4.5,
    material: "Engineered Wood",
    color: "White",
    image: tvUnit,
    description:
      "A stylish TV unit with practical storage for a clean and organized living room.",
  },
];

export default furniture;
