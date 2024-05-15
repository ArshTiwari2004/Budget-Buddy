import React from 'react';
import { Link } from 'react-router-dom';
import Aboutus from './Aboutus';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div className="bg-purple-400 h-screen relative">
      {/* Header Section */}
      <header className="bg-opacity-75 text-white py-4 px-6 flex items-center justify-between w-full absolute top-0">
        <div className="flex items-center justify-between w-full">
          <img src="/logo.jpeg" alt="TripPey Logo" className="h-12" />
          <nav>
            <ul className="flex space-x-10 font-bold">
              <li><Link to="/" className="nav-link text-white font-bold hover:text-red-500">Home</Link></li>
              <li><Link to="/services" className="nav-link text-white font-bold hover:text-red-500">Services</Link></li>
              <li><Link to="/about" className="nav-link text-white font-bold hover:text-red-500">About Us</Link></li>
              <li><Link to="/contact" className="nav-link text-white font-bold hover:text-red-500">Contact Us</Link></li>
              <li><Link to="/faq" className="nav-link text-white font-bold hover:text-red-500">FAQ</Link></li>
              <li><Link to="/reviews" className="nav-link text-white font-bold hover:text-red-500">Reviews</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start text-center lg:text-left text-white relative z-10">
        <div className="lg:w-2/3 px-8 lg:pl-24 py-24">
          <h1 className="text-9xl font-custom font-bold mb-4 ml-[-20px]">Budget Buddy</h1>
          <p className="text-lg font-bold font-custom1 text-4xl mb-8 ml-[-20px]">Empowering You to Master Your Money</p>
          <p className="max-w-3xl mx-auto mb-8 ml-[-20px] font-custom2">
            Our FinTech solution is designed for young adults (aged 18-25) who are financially savvy but seek guidance in managing their money effectively.
            Budget Buddy empowers users to master their finances by providing customizable templates to track spending across categories like travel, food, utilities, and more.
            Whether you're a student, day scholar, or young working adult, Budget Buddy ensures your finances are managed with ease.
          </p>
          <p className="mt-12 ml-[-20px]">
            <Link to="/signup" className="bg-purple-900 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Sign Up</Link>
          </p>
          <p className="mt-4 ml-[-20px]">
            Already a user? <Link to="/login" className="text-purple-900 hover:underline">Log In</Link>
          </p>
        </div>
        <div className="hidden lg:block lg:w-1/3 lg:pl-8">
          <img src="/vector2.png" alt="Vector Image" className="h-auto max-h-screen" />
        </div>
      </div>
      <Aboutus />
        <Footer />
    </div>
  );
};




export default Homepage;
