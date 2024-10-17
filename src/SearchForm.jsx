// SearchForm.jsx

import React, { useState } from "react";
import { Bell, User, ChevronDown } from 'lucide-react';
import round from './assets/round.jpeg';
import { useNavigate } from "react-router-dom";  // Ensure correct import

export default function SearchForm() {
  const [activeTab, setActiveTab] = useState("scholarships");
  const [formData, setFormData] = useState({
    nationality: "",
    studyLevel: "",
    country: "",
    field: ""
  });

  const navigate = useNavigate(); // React Router hook

  const handleLoanRedirect = () => {
    navigate('/education-loan'); // Redirect to Education Loan Page
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search with:", formData);
    // Implement search logic here
  };

  const dropdownOptions = {
    nationality: ["USA", "UK", "Canada", "Australia", "India"],
    studyLevel: ["Undergraduate", "Postgraduate", "Doctorate", "Post-Doctorate"],
    country: ["USA", "UK", "Canada", "Australia", "Germany", "France"],
    field: ["Computer Science", "Engineering", "Business", "Medicine", "Arts"]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-40 items-start md:items-center mb-8">
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex">
                <button 
                  className={`flex-1 py-4 px-6 font-semibold ${activeTab === "scholarships" ? "bg-teal-500 text-white" : "bg-white text-gray-600"}`}
                  onClick={() => setActiveTab("scholarships")}
                >
                  <span className="mr-16">🏆</span> Find Scholarships globally
                </button>
                <button
                  onClick={handleLoanRedirect}
                  className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition duration-300"
                >
                  Apply for Education Loan
                </button>
              </div>

              {activeTab === "scholarships" && (
                <form onSubmit={handleSearch} className="p-6 space-y-4">
                  {Object.entries(dropdownOptions).map(([key, options]) => (
                    <div key={key} className="relative">
                      <select
                        name={key}
                        value={formData[key]}
                        onChange={handleInputChange}
                        className="w-full appearance-none bg-white border rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-teal-500"
                      >
                        <option value="">{key.charAt(0).toUpperCase() + key.slice(1)}</option>
                        {options.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  ))}
                  <button type="submit" className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition duration-300">
                    Search
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="md:w-[400px] mt-8 md:mt-0">
            <img
              src={round}
              alt="Study Abroad Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
