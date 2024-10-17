import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import round from "./assets/round.jpeg";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

export default function SearchForm() {
  const [activeTab, setActiveTab] = useState("scholarships");
  const [formData, setFormData] = useState({
    nationality: "",
    studyLevel: "",
    country: "",
    field: "",
  });

  const navigate = useNavigate();

  const handleLoanRedirect = () => navigate("/education-loan");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search with:", formData);
  };

  const dropdownOptions = {
    nationality: ["USA", "UK", "Canada", "Australia", "India"],
    studyLevel: [
      "Undergraduate",
      "Postgraduate",
      "Doctorate",
      "Post-Doctorate",
    ],
    country: ["USA", "UK", "Canada", "Australia", "Germany", "France"],
    field: ["Computer Science", "Engineering", "Business", "Medicine", "Arts"],
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-16 items-start md:items-center mb-8">
          <div className="form-wrapper">
            <div className="flex ">
              <button
                className={`flex-1  py-4 px-6 font-semibold ${
                  activeTab === "scholarships"
                    ? "bg-teal-500  text-white"
                    : "bg-white text-gray-600"
                }`}
                onClick={() => setActiveTab("scholarships")}
              >
                <span className="mr-2">🏆</span> Find Scholarships globally
              </button>
              <button
                onClick={handleLoanRedirect}
                className=" py-3 rounded-md hover:bg-teal-600 transition duration-300"
              >
                Apply for Education Loan
              </button>
            </div>

            {activeTab === "scholarships" && (
              <form onSubmit={handleSearch} className="form-container">
                {Object.entries(dropdownOptions).map(([key, options]) => (
                  <div key={key} className="select-field">
                    <select
                      name={key}
                      value={formData[key]}
                      onChange={handleInputChange}
                    >
                      <option value="">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </option>
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="chevron-icon">
                      <ChevronDown className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                ))}

                <button type="submit" className="search-button">
                  <Search className="h-5 w-5 text-white" />
                </button>
              </form>
            )}
          </div>

          <div className="md:w-[300px] mt-4 md:mt-0">
            <img
              src={round}
              alt="Study Abroad Illustration"
              className="w-full h-auto rotating-image"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
