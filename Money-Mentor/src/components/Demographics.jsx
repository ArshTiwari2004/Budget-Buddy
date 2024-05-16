import React,{useState} from 'react'
import { database } from '../Config/FirebaseConfig.js'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore';

const Demographics = () => {
    const [gender, setGender] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [incomeRange, setIncomeRange] = useState('');
  const data = collection(database, "demographics-info");
    const history = useNavigate();
    const RegisterInfo = async () => {
        await addDoc(data, { Gender: gender, EducationLvl: educationLevel, Employement:employmentStatus,Income:incomeRange });
        history('/preferences')
    }
  return (
    <div className="bg-black text-white font-sans h-screen flex flex-col justify-center items-center">
      <div className="max-w-md w-full p-6 space-y-6">
        <div>
          <label htmlFor="gender" className="block mb-2 text-sm font-medium">
            Gender
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="bg-gray-700 text-white border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="educationLevel" className="block mb-2 text-sm font-medium">
            Education Level
          </label>
          <select
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
            className="bg-gray-700 text-white border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          >
            <option value="">Select Education Level</option>
            <option value="highSchool">High School</option>
            <option value="college">College</option>
            <option value="graduation">Graduation</option>
            <option value="postGraduation">Post-Graduation</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="employmentStatus" className="block mb-2 text-sm font-medium">
            Current Employment Status
          </label>
          <select
            value={employmentStatus}
            onChange={(e) => setEmploymentStatus(e.target.value)}
            className="bg-gray-700 text-white border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          >
            <option value="">Select Employment Status</option>
            <option value="student">Student</option>
            <option value="employed">Employed</option>
            <option value="unemployed">Unemployed</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="incomeRange" className="block mb-2 text-sm font-medium">
            Income Range
          </label>
          <input
            value={incomeRange}
            onChange={(e) => setIncomeRange(e.target.value)}
            placeholder="Enter your Income Range"
            className="bg-gray-700 text-white border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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

export default Demographics