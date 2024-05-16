import React from 'react'
import { Link } from 'react-router-dom'

const Registermain = () => {
    return (
        <div className="bg-black text-white font-sans h-screen flex flex-col justify-center items-center">
            <div className="text-center mb-8">
                <h1 className="text-6xl font-bold">Register to Budget Buddy</h1>
            </div>
            <div className="text-center">
                <Link to='/basic-info'>
                    <button className="flex items-center justify-center gap-2 bg-transparent border border-white px-10 py-4 rounded-full text-lg hover:bg-white hover:text-black transition-colors">
                        <span>Next</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Registermain