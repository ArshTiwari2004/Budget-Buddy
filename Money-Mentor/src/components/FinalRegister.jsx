import React,{useState} from 'react'
import { authentication,database } from '../Config/FirebaseConfig.js'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";

const FinalRegister = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailNotification, setEmailNotification] = useState(false);
  const [smsNotification, setSmsNotification] = useState(false);
  const [appNotification, setAppNotification] = useState(false);
  const [termsAgreement, setTermsAgreement] = useState(false);
  const [privacyAgreement, setPrivacyAgreement] = useState(false);
    const history = useNavigate();
    const CreateUser = async () => {
        createUserWithEmailAndPassword(authentication, email, password)
            .then((data) => {
                console.log(data);
                history('/')
            }).catch((err) => {
                alert(err.code)
            })
    }

  return (
    <div className="bg-black text-white font-sans h-screen flex flex-col justify-center items-center">
      <div className="max-w-md w-full p-6 space-y-6">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email Address"
            className="bg-gray-700 text-white border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            className="bg-gray-700 text-white border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Notification Preferences</label>
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={emailNotification}
              onChange={() => setEmailNotification(!emailNotification)}
              id="emailNotification"
              className="h-3 w-3 appearance-none border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <label htmlFor="emailNotification">Email</label>
            <input
              type="checkbox"
              checked={smsNotification}
              onChange={() => setSmsNotification(!smsNotification)}
              id="smsNotification"
              className=" h-3 w-3 appearance-none border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <label htmlFor="smsNotification">SMS</label>
            <input
              type="checkbox"
              checked={appNotification}
              onChange={() => setAppNotification(!appNotification)}
              id="appNotification"
              className="h-3 w-3 appearance-none border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <label htmlFor="appNotification">App Notifications</label>
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            checked={termsAgreement}
            onChange={() => setTermsAgreement(!termsAgreement)}
            id="termsAgreement"
            className="h-3 w-3 mr-2 appearance-none border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
          <label htmlFor="termsAgreement" className="text-sm font-medium">I agree to the Terms of Service</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={privacyAgreement}
            onChange={() => setPrivacyAgreement(!privacyAgreement)}
            id="privacyAgreement"
            className="h-3 w-3 mr-2 appearance-none border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
          <label htmlFor="privacyAgreement" className="text-sm font-medium">I agree to the Privacy Policy</label>
        </div>
        <div className="flex justify-center">
          <button onClick={CreateUser} className="flex items-center justify-center gap-2 bg-transparent border border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black transition-colors">
            <span>Done</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FinalRegister