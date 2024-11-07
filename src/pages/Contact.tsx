import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-gray-600">
            Have questions about our products? We're here to help.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Phone className="text-amber-900" size={24} />,
              title: "Phone",
              details: "+234 123 456 7890",
            },
            {
              icon: <Mail className="text-amber-900" size={24} />,
              title: "Email",
              details: "info@luxefurniture.ng",
            },
            {
              icon: <MapPin className="text-amber-900" size={24} />,
              title: "Address",
              details: "123 Victoria Island, Lagos",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.details}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-900 focus:border-amber-900"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-900 focus:border-amber-900"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-900 focus:border-amber-900"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-900 focus:border-amber-900"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-900 text-white py-3 px-6 rounded-md hover:bg-amber-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;