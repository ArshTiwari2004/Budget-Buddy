import React, { useState } from 'react';
 import Navbar from './Navbar';
import { FaMoneyBillWave, FaChartLine, FaReceipt, FaWallet } from 'react-icons/fa';

const Dashboard = () => {
  // Example state for budget details
  const [budgetDetails, setBudgetDetails] = useState({
    monthlyBudget: 1000,
    categories: [
      { name: 'Travel', budget: 300 },
      { name: 'Food', budget: 200 },
      { name: 'Utilities', budget: 150 },
      // Add more categories as needed
    ],
  });

  return (
    <div>
      <Navbar />
      <div className="bg-purple-300 container mx-auto py-8">
        <h1 className="text-5xl font-bold mb-6">Welcome to your Budget blueprint</h1>

        {/* Budget Overview Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4">Monthly Budget Overview</h2>
          <p className="text-gray-700 mb-2">Total Monthly Budget: ${budgetDetails.monthlyBudget}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {budgetDetails.categories.map((category, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p>Budget: ${category.budget}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Template 1: Travel Expenses */}
          <div className="bg-orange-200 p-6 rounded-lg shadow-md">
            <FaMoneyBillWave className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Travel Expenses</h3>
            <p>Track your travel expenses with our pre-built template.</p>
            {/* Link to customizable template */}
            <a href="/templates/travel" className="text-blue-500 mt-2 hover:underline">View Template</a>
          </div>

          {/* Template 2: Food Budgeting */}
          <div className="bg-yellow-200 p-6 rounded-lg shadow-md">
            <FaChartLine className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Food Budgeting</h3>
            <p>Manage your food budget effectively using our budgeting tool.</p>
            {/* Link to customizable template */}
            <a href="/templates/food" className="text-green-500 mt-2 hover:underline">View Template</a>
          </div>

          {/* Template 3: Expense Receipts */}
          <div className="bg-green-200 p-6 rounded-lg shadow-md">
            <FaReceipt className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Expense Receipts</h3>
            <p>Scan and save your expense receipts for easy tracking.</p>
            {/* Link to customizable template */}
            <a href="/templates/receipts" className="text-yellow-500 mt-2 hover:underline">View Template</a>
          </div>

          <div className="bg-amber-200 p-6 rounded-lg shadow-md">
            <FaWallet className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Entertainment and Lesiure Expense</h3>
            <p>Set and manage your monthly budget effortlessly.</p>
            <a href="/budget" className="text-purple-500 mt-2 hover:underline">Manage Budget</a>
          </div>




          {/* Budget Management */}
          <div className="bg-amber-200 p-6 rounded-lg shadow-md">
            <FaWallet className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">PG and Hostel Expenses</h3>
            <p>Set and manage your monthly budget effortlessly.</p>
            <a href="/budget" className="text-purple-500 mt-2 hover:underline">Manage Budget</a>


          </div>
          <div className="bg-amber-200 p-6 rounded-lg shadow-md">
            <FaWallet className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Days Scholar Template</h3>
            <p>Set and manage your monthly budget effortlessly.</p>
            <a href="/dayscholartemplate" className="text-purple-500 mt-2 hover:underline">Manage Budget</a>
          </div>

          <div className="bg-amber-200 p-6 rounded-lg shadow-md">
            <FaWallet className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Add your template</h3>
            <h2 className="fonr bold">+</h2>
            <a href="/budget" className="text-purple-500 mt-2 hover:underline">Create template</a>
          </div>




        </div>
      </div>
    </div>
      );
};

export default Dashboard;


