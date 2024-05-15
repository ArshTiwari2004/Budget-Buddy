import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1: Pre-built Spending Templates */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/vector1.jpg" alt="Spending Templates" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Pre-built Spending Templates</div>
            <p className="text-gray-700 text-base">
              Easily record and categorize your spendings using our pre-built templates for travel, food, utilities, and more.
            </p>
          </div>
        </div>

        {/* Card 2: Monthly Budget Management */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/vector3.jpg" alt="Budget Management" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Monthly Budget Management</div>
            <p className="text-gray-700 text-base">
              Define your monthly budget and allocate funds to different categories to stay on track with your spending goals.
            </p>
          </div>
        </div>

        {/* Card 3: Automatic Transaction Tracking */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/vector4.jpg" alt="Transaction Tracking" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Automatic Transaction Tracking</div>
            <p className="text-gray-700 text-base">
              Seamlessly track online transactions, while easily manually adding offline payments to your budget.
            </p>
          </div>
        </div>

        {/* Card 4: Machine Learning Insights */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/vector5.png" alt="Machine Learning Insights" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Machine Learning Insights</div>
            <p className="text-gray-700 text-base">
              Leverage machine learning algorithms to identify spending patterns and receive personalized money-saving recommendations.
            </p>
          </div>
        </div>

        {/* Card 5: Bill Scanning with AI */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/vector6.png" alt="Bill Scanning with AI" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Bill Scanning with AI</div>
            <p className="text-gray-700 text-base">
              Use AI technology to scan and automatically populate payment entries from offline transactions into your budget template.
            </p>
          </div>
        </div>

        {/* Card 6: Premium Features Subscription */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/vector7.png" alt="Premium Features Subscription" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Premium Features Subscription</div>
            <p className="text-gray-700 text-base">
              Unlock advanced features like deep learning bill scanning and personalized financial insights with a subscription.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
