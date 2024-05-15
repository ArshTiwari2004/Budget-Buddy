import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <ul className="flex justify-between">
          <li><Link to="/" className="text-lg font-bold">Budget Buddy</Link></li>
          <li className="flex space-x-4">
            <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
            <Link to="/templates" className="hover:text-gray-300">Templates</Link>
            {/* Add more navigation links as needed */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
