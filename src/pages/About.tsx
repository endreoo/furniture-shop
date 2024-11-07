import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="relative h-[40vh] mb-16">
        <img
          src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80"
          alt="Our Workshop"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Story</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About LuxeFurniture</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2024, LuxeFurniture has become Nigeria's premier destination for high-quality, 
            handcrafted furniture. Our journey began with a simple vision: to bring exceptional craftsmanship 
            and contemporary design to Nigerian homes.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            We are committed to creating furniture that combines traditional craftsmanship with modern design, 
            ensuring each piece not only enhances your living space but also stands the test of time. Our 
            dedication to quality and attention to detail sets us apart in the industry.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Artisans</h2>
          <p className="text-gray-600 leading-relaxed">
            Behind every piece of furniture is a team of skilled Nigerian artisans who bring decades of 
            experience and passion to their craft. We take pride in supporting local craftsmanship and 
            maintaining the highest standards of quality in every piece we create.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {[
          { number: "1000+", label: "Happy Customers" },
          { number: "500+", label: "Furniture Pieces" },
          { number: "36", label: "States Covered" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-4xl font-bold text-amber-900">{stat.number}</p>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;