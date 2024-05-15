import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div>
            <h2 className="text-xl font-bold mb-4">Budget Buddy</h2>
            <p className="text-sm">Empowering young adults to master their finances.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:text-blue-400">Home</a></li>
              <li><a href="/about-us" className="text-sm hover:text-blue-400">About Us</a></li>
              <li><a href="/services" className="text-sm hover:text-blue-400">Services</a></li>
              <li><a href="/contact" className="text-sm hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm">Email: contact@budgetbuddy.com</p>
            <p className="text-sm">Phone: +8888899999</p>
            <p className="text-sm">Location: Delhi</p>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:text-blue-400">Facebook<i className="fab fa-facebook"></i></a>
              <a href="#" className="text-sm hover:text-blue-400">Twitter<i className="fab fa-twitter"></i></a>
              <a href="#" className="text-sm hover:text-blue-400">Instagram<i className="fab fa-instagram"></i></a>
              <a href="#" className="text-sm hover:text-blue-400">Linkedin<i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
