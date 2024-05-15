import React from 'react';

const DayScholarTemplate = () => {
  // Randomly generated essential expenses for a day scholar
  const essentialExpenses = [
    { id: 1, name: 'Transportation', cost: 1200, dateTime: '2024-05-15T10:30:00' },
    { id: 2, name: 'Food (Lunch)', cost: 3000, dateTime: '2024-05-15T12:45:00' },
    { id: 3, name: 'Books and Stationery', cost: 1500, dateTime: '2024-05-15T15:20:00' },
    { id: 4, name: 'Snacks', cost: 500, dateTime: '2024-05-15T17:00:00' },
    { id: 5, name: 'Transportation', cost: 1200, dateTime: '2024-05-16T10:45:00' },
    { id: 6, name: 'Food (Lunch)', cost: 3000, dateTime: '2024-05-16T12:30:00' },
    { id: 7, name: 'Books and Stationery', cost: 1500, dateTime: '2024-05-16T14:50:00' },
    { id: 8, name: 'Snacks', cost: 500, dateTime: '2024-05-16T16:30:00' },
    // Add more random expenses with dates and times
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Day Scholar Essentials</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Expense Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cost (INR)
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date Time
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {essentialExpenses.map((expense) => (
            <tr key={expense.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{expense.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">₹{expense.cost}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{new Date(expense.dateTime).toLocaleString()}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DayScholarTemplate;
