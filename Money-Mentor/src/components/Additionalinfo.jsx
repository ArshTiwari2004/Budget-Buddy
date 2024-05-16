import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore';

const AdditionalInfo = () => {
    const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const data = collection(database, "preference-info");
    const history = useNavigate();
    const RegisterAddlInfo = async () => {
        await addDoc(data, { PhoneNumber: mobileNumber, Location: location });
        history('/final')
    }
  return (
    <div className="bg-black text-white font-sans h-screen flex flex-col justify-center items-center">
    <div className="max-w-md w-full p-6 space-y-6">
      <div>
        <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium">
          Mobile Number
        </label>
        <input
          type="tel"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Enter your Mobile Number"
          className="bg-gray-700 text-white border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="location" className="block mb-2 text-sm font-medium">
          Location
        </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your Location (City/State)"
          className="bg-gray-700 text-white border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="profilePicture" className="block mb-2 text-sm font-medium">
          Profile Picture
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProfilePicture(e.target.files[0])}
          className="hidden"
          id="profilePicture"
        />
        <label htmlFor="profilePicture" className="flex items-center gap-2 bg-gray-700 text-white border border-gray-500 rounded-lg px-4 py-2.5 cursor-pointer hover:bg-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          <span>Upload Profile Picture</span>
        </label>
      </div>
      <div className="flex justify-center">
        <button onClick={RegisterAddlInfo} className="flex items-center justify-center gap-2 bg-transparent border border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black transition-colors">
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

export default AdditionalInfo 