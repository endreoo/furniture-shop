import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80"
            alt="Modern living room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Elevate Your Living Space
            </h1>
            <p className="text-xl text-white mb-8">
              Discover our collection of handcrafted furniture that brings elegance to your home
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 bg-amber-900 text-white rounded-md hover:bg-amber-800 transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Living Room",
              image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&q=80",
            },
            {
              title: "Bedroom",
              image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80",
            },
            {
              title: "Dining",
              image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80",
            },
          ].map((category, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-40 transition-all rounded-lg"></div>
              </div>
              <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Craftsmanship",
                description: "Each piece is handcrafted by skilled artisans using premium materials",
              },
              {
                title: "Nationwide Delivery",
                description: "Fast and reliable delivery service across all states in Nigeria",
              },
              {
                title: "Customer Support",
                description: "Dedicated support team available 7 days a week",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;