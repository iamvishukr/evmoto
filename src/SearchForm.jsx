import React, { useState } from "react";
import { Bell, User, ChevronDown } from 'lucide-react';
import round from './assets/round.jpeg'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("scholarships");
  const [showLoanForm, setShowLoanForm] = useState(false);
  const [formData, setFormData] = useState({
    nationality: "",
    studyLevel: "",
    country: "",
    field: ""
  });

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
    // Implement your search logic here
  };

  const handleLoanRedirect = () => {
    setShowLoanForm(true);
    // In a real application, you would redirect to a new page or show a modal here
  };

  const dropdownOptions = {
    nationality: ["USA", "UK", "Canada", "Australia", "India"],
    studyLevel: ["Undergraduate", "Postgraduate", "Doctorate", "Post-Doctorate"],
    country: ["USA", "UK", "Canada", "Australia", "Germany", "France"],
    field: ["Computer Science", "Engineering", "Business", "Medicine", "Arts"]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* <header className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="WeMakeScholars Logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold">WeMakeScholars</span>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-600" />
            <User className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </header> */}

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-40 items-start md:items-center mb-8">
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex">
                <button 
                  className={`flex-1 py-4 px-6 font-semibold ${activeTab === "scholarships" ? "bg-teal-500 text-white" : "bg-white text-gray-600"}`}
                  onClick={() => setActiveTab("scholarships")}
                >
                  <span className="mr-2">🏆</span> Find Scholarships globally
                </button>
                <button 
                  className={`flex-1 py-4 px-6 font-semibold ${activeTab === "loan" ? "bg-teal-500 text-white" : "bg-white text-gray-600"}`}
                  onClick={() => setActiveTab("loan")}
                >
                  <span className="mr-2">💰</span> Get an Education loan
                </button>
              </div>

              {activeTab === "scholarships" && !showLoanForm && (
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

              {activeTab === "loan" && !showLoanForm && (
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Get personalized education loan options tailored to your needs.</p>
                  <button 
                    onClick={handleLoanRedirect}
                    className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition duration-300"
                  >
                    Apply for Education Loan
                  </button>
                </div>
              )}

              {showLoanForm && (
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Education Loan Application</h3>
                  <p className="text-gray-600 mb-4">Please fill out the form to apply for an education loan.</p>
                  {/* Add your loan application form fields here */}
                  <button 
                    onClick={() => setShowLoanForm(false)}
                    className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition duration-300 mt-4"
                  >
                    Back to Search
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-[600px] mt-8 md:mt-0">
            <img
              src={round}
              alt="Study Abroad Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 text-center">
          Why students can't stop talking about us!
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote: "They have simplified my process of procuring a loan",
              name: "Myavarapu Phanichandra",
              date: "1 Mar, 2022",
            },
            {
              quote: "This organisation makes this process seamless for FREE.",
              name: "Diana Elizabeth Roy",
              date: "05 Jul, 2021",
            },
            {
              quote: "Tried on my own and was fed up after multiple bank visits, WMS helped",
              name: "Vaishali Tiwari",
              date: "09 Nov, 2023",
            },
            {
              quote: "They gave me all the necessary detailed info regarding different banks",
              name: "Karthik Bhukya",
              date: "23 Aug, 2021",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center space-x-4">
                <img
                  src="/placeholder.svg?height=50&width=50"
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}