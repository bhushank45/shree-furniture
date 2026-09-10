import modernSofa from "../assets/images/modern-sofa.png";
import diningTable from "../assets/images/dining-table.png";
import kingBed from "../assets/images/king-bed.png";
import coffeeTable from "../assets/images/coffee-table.png";
import officeChair from "../assets/images/office-chair.png";
import recliner from "../assets/images/recliner.png";
import tvUnit from "../assets/images/tv-unit.png";
import wardrobe from "../assets/images/wardrobe.png";
import lShapeSofa from "../assets/images/l-shape-sofa.png";
import luxurySofa from "../assets/images/luxury-sofa.png";
import queenBed from "../assets/images/queen-bed.png";
import platformBed from "../assets/images/platform-bed.png";
import sixSeaterDining from "../assets/images/six-seater-dining.png";
import fourSeaterDining from "../assets/images/four-seater-dining.png";
import executiveChair from "../assets/images/executive-chair.png";
import studyChair from "../assets/images/study-chair.png";
import slidingWardrobe from "../assets/images/sliding-wardrobe.png";
import threeDoorWardrobe from "../assets/images/three-door-wardrobe.png";

import roundCoffeeTable from "../assets/images/round-coffee-table.png";
import premiumRecliner from "../assets/images/premium-recliner.png";
import compactTvUnit from "../assets/images/compact-tv-unit.png";
import wallMountedTvUnit from "../assets/images/wall-mounted-tv-unit.png";
import accentLoungeChair from "../assets/images/accent-lounge-chair.png";

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
  {
    id: 9,
    name: "Contemporary L-Shaped Sofa",
    category: "Sofa",
    room: "Living Room",
    price: 34999,
    originalPrice: 41999,
    rating: 4.6,
    material: "Fabric",
    color: "Light Grey",
    image: lShapeSofa,
    description:
      "A spacious L-shaped sofa designed to provide comfortable seating with a modern look for contemporary living rooms.",
  },

  {
    id: 10,
    name: "Luxury Three Seater Sofa",
    category: "Sofa",
    room: "Living Room",
    price: 28999,
    originalPrice: 34999,
    rating: 4.7,
    material: "Velvet",
    color: "Navy Blue",
    image: luxurySofa,
    description:
      "A luxurious three seater sofa featuring soft upholstery and an elegant design for comfortable everyday seating.",
  },

  {
    id: 11,
    name: "Classic Queen Size Bed",
    category: "Bed",
    room: "Bedroom",
    price: 26999,
    originalPrice: 31999,
    rating: 4.6,
    material: "Engineered Wood",
    color: "Walnut",
    image: queenBed,
    description:
      "A classic queen size bed with a sturdy frame and warm wooden finish designed for a comfortable bedroom.",
  },

  {
    id: 12,
    name: "Modern Platform Bed",
    category: "Bed",
    room: "Bedroom",
    price: 29999,
    originalPrice: 35999,
    rating: 4.7,
    material: "Solid Wood",
    color: "Natural Oak",
    image: platformBed,
    description:
      "A modern platform bed with clean lines and a natural finish that brings a simple and elegant feel to the bedroom.",
  },

  {
    id: 13,
    name: "Six Seater Dining Table",
    category: "Dining Table",
    room: "Dining",
    price: 23999,
    originalPrice: 28999,
    rating: 4.5,
    material: "Solid Wood",
    color: "Dark Walnut",
    image: sixSeaterDining,
    description:
      "A spacious six seater dining table designed for comfortable family meals and gatherings.",
  },

  {
    id: 14,
    name: "Modern Four Seater Dining Set",
    category: "Dining Table",
    room: "Dining",
    price: 19999,
    originalPrice: 24999,
    rating: 4.6,
    material: "Engineered Wood",
    color: "Oak",
    image: fourSeaterDining,
    description:
      "A modern four seater dining set with a practical design that fits beautifully into compact dining spaces.",
  },

  {
    id: 15,
    name: "Executive Office Chair",
    category: "Office Chair",
    room: "Office",
    price: 10999,
    originalPrice: 13999,
    rating: 4.7,
    material: "Leather",
    color: "Black",
    image: executiveChair,
    description:
      "A comfortable executive office chair with supportive cushioning and a premium finish for long working hours.",
  },

  {
    id: 16,
    name: "Adjustable Study Chair",
    category: "Office Chair",
    room: "Office",
    price: 6499,
    originalPrice: 7999,
    rating: 4.4,
    material: "Mesh",
    color: "Grey",
    image: studyChair,
    description:
      "An adjustable study chair designed to provide comfortable seating and proper support for study and work.",
  },

  {
    id: 17,
    name: "Sliding Door Wardrobe",
    category: "Wardrobe",
    room: "Bedroom",
    price: 25999,
    originalPrice: 31999,
    rating: 4.6,
    material: "Engineered Wood",
    color: "Dark Brown",
    image: slidingWardrobe,
    description:
      "A spacious sliding door wardrobe that combines practical storage with a clean modern bedroom design.",
  },

  {
    id: 18,
    name: "Three Door Storage Wardrobe",
    category: "Wardrobe",
    room: "Bedroom",
    price: 23999,
    originalPrice: 28999,
    rating: 4.5,
    material: "Engineered Wood",
    color: "White",
    image: threeDoorWardrobe,
    description:
      "A spacious three door wardrobe offering organized storage with a simple and elegant finish.",
  },

  {
    id: 19,
    name: "Round Wooden Coffee Table",
    category: "Coffee Table",
    room: "Living Room",
    price: 7499,
    originalPrice: 8999,
    rating: 4.4,
    material: "Solid Wood",
    color: "Walnut",
    image: roundCoffeeTable,
    description:
      "A stylish round coffee table with a warm wooden finish that adds character to modern living rooms.",
  },

  {
    id: 20,
    name: "Premium Leather Recliner",
    category: "Recliner",
    room: "Living Room",
    price: 19999,
    originalPrice: 23999,
    rating: 4.8,
    material: "Leather",
    color: "Dark Brown",
    image: premiumRecliner,
    description:
      "A premium leather recliner designed for relaxing in comfort with a sophisticated look.",
  },

  {
    id: 21,
    name: "Compact TV Entertainment Unit",
    category: "TV Unit",
    room: "Living Room",
    price: 14999,
    originalPrice: 17999,
    rating: 4.5,
    material: "Engineered Wood",
    color: "Natural Wood",
    image: compactTvUnit,
    description:
      "A compact entertainment unit with practical storage designed to keep your living room organized and stylish.",
  },

  {
    id: 22,
    name: "Modern Wall Mounted TV Unit",
    category: "TV Unit",
    room: "Living Room",
    price: 16999,
    originalPrice: 20999,
    rating: 4.6,
    material: "Engineered Wood",
    color: "White and Brown",
    image: wallMountedTvUnit,
    description:
      "A modern wall mounted TV unit with clean lines and functional storage for contemporary living spaces.",
  },

  {
    id: 23,
    name: "Elegant Accent Lounge Chair",
    category: "Sofa",
    room: "Living Room",
    price: 12999,
    originalPrice: 15999,
    rating: 4.5,
    material: "Fabric",
    color: "Beige",
    image: accentLoungeChair,
    description:
      "An elegant accent lounge chair designed to add comfortable seating and a stylish touch to your living room.",
  },
];

export default furniture;
