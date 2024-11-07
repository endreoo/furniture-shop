import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Modern Leather Sofa",
    price: 450000,
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80",
    category: "Living Room"
  },
  {
    id: 2,
    name: "Elegant Dining Table",
    price: 280000,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80",
    category: "Dining"
  },
  {
    id: 3,
    name: "King Size Bed Frame",
    price: 320000,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80",
    category: "Bedroom"
  },
  {
    id: 4,
    name: "Accent Chair",
    price: 150000,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80",
    category: "Living Room"
  },
  {
    id: 5,
    name: "Coffee Table",
    price: 95000,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80",
    category: "Living Room"
  },
  {
    id: 6,
    name: "Wardrobe Cabinet",
    price: 280000,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80",
    category: "Bedroom"
  },
];

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Collection</h1>
        <p className="text-gray-600">Discover our handpicked selection of premium furniture</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        {["All", "Living Room", "Bedroom", "Dining"].map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full border border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-square mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <ShoppingCart className="text-amber-900" size={20} />
              </button>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-gray-600">₦{product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;