import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-amber-900">LuxeFurniture</h1>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-900 px-3 py-2">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-amber-900 px-3 py-2">Shop</Link>
            <Link to="/about" className="text-gray-700 hover:text-amber-900 px-3 py-2">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-amber-900 px-3 py-2">Contact</Link>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-amber-900">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-amber-900">
              <User size={20} />
            </button>
            <button className="text-gray-700 hover:text-amber-900 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-amber-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-amber-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block px-3 py-2 text-gray-700 hover:text-amber-900"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-amber-900"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-amber-900"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;