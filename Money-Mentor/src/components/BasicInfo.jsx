import React, { useState } from 'react'
import { database } from '../Config/FirebaseConfig.js'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore';

const Basicinfo = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const data = collection(database, "basic-info");
    const history = useNavigate();
    const RegisterInfo = async () => {
        await addDoc(data, { FirstName: firstName, LastName: lastName, Date_of_Birth:dob });
        history('/demographics')
    }
  return (
    <div className="bg-black text-white font-sans h-screen flex flex-col justify-center items-center">
      <div className="max-w-md w-full p-6 space-y-6">
        <div>
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium">
            First Name
          </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your First Name"
            className="bg-gray-700 text-white border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium">
            Last Name
          </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your Last Name"
            className="bg-gray-700 text-white border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth" className="block mb-2 text-sm font-medium">
            Date of Birth
          </label>
          <input
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            className="bg-gray-700 text-white border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="flex justify-center"> 
          <button onClick={RegisterInfo} className="flex items-center justify-center gap-2 bg-transparent border border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black transition-colors">
            <span>Next</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Basicinfo