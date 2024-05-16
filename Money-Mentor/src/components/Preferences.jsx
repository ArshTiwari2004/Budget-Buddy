import React,{useState} from 'react'
import { database } from '../Config/FirebaseConfig.js'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore';

const Preferencess = () => {
  const [livingSituation, setLivingSituation] = useState('');
  const [transportation, setTransportation] = useState('');
  const [financialGoals, setFinancialGoals] = useState('');
  const data = collection(database, "preference-info");
    const history = useNavigate();
    const RegisterInfo = async () => {
        await addDoc(data, { Living: livingSituation, Transportfacility: transportation, Goals:financialGoals });
        history('/additional-info')
    }
  return (
    <div className="bg-black text-white font-sans h-screen flex flex-col justify-center items-center">
      <div className="max-w-md w-full p-6 space-y-6">
        <div>
          <label htmlFor="livingSituation" className="block mb-2 text-sm font-medium">
            Living Situation
          </label>
          <select
            value={livingSituation}
            onChange={(e) => setLivingSituation(e.target.value)}
            className="bg-gray-700 text-white border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          >
            <option value="">Select Living Situation</option>
            <option value="hostel">Hostel</option>
            <option value="pg">PG/Shared Accommodation</option>
            <option value="family">Family Home</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="transportation" className="block mb-2 text-sm font-medium">
            Transportation
          </label>
          <select
            value={transportation}
            onChange={(e) => setTransportation(e.target.value)}
            className="bg-gray-700 text-white border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          >
            <option value="">Select Transportation</option>
            <option value="ownVehicle">Own Vehicle</option>
            <option value="publicTransport">Public Transport</option>
            <option value="none">None</option>
          </select>
        </div>
        <div>
          <label htmlFor="financialGoals" className="block mb-2 text-sm font-medium">
            Financial Goals
          </label>
          <textarea
            value={financialGoals}
            onChange={(e) => setFinancialGoals(e.target.value)}
            placeholder="What are Your Financial Goals..? Help us to know you better"
            rows="4"
            className="bg-gray-700 text-white border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          ></textarea>
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

export default Preferencess