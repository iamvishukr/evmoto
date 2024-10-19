import React, { useState, useEffect } from "react";
import { ChevronDown, Search, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { db } from "./lib/firebase";
import { collection, addDoc } from "firebase/firestore/lite";

function ScholarMain() {
  const [eduLoansOpen, setEduLoansOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    nationality: "",
    studyLevel: [],
    country: [],
    field: [],
    scholarshipType: "",
  });

  const location = useLocation();

  const scholarships = [
    {
      featured: true,
      title: "Education Future International Scholarship - USA & Non-USA 2024",
      logo: "https://www.education-future.org/images/logo.png",
      eligibleDegrees: "Bachelors, Masters",
      fundingType: "Partial Funding",
      eligibleCourses: "All courses offered by the universities",
      eligibleNationalities: "UK",
      scholarshipLocation: "Universities in all the countries, except India",
      deadline: "ASAP",
    },
    {
      featured: true,
      title: "Higher Education Scholarship Test For Indian Students HEST 2024",
      logo: "https://i0.wp.com/www.scholarshipsinindia.com/wp-content/uploads/higher-education-scholarship-test-hest-offered-by-wemakescholars.jpg?w=200&ssl=1",
      eligibleDegrees: "Bachelors, Masters, Diploma, MBA",
      fundingType: "Partial Funding",
      eligibleCourses: "All courses except Medicine/ MBBS are eligible",
      eligibleNationalities: "USA",
      scholarshipLocation: "All the major study abroad destinations",
      deadline: "ASAP",
    },
    {
      featured: true,
      title: "Global Excellence Scholarship for International Students",
      logo: "https://www.ucd.ie/global/t4media/ucd-logo.svg",
      eligibleDegrees: "Masters, PhD",
      fundingType: "Full Funding",
      eligibleCourses: "STEM fields",
      eligibleNationalities: "India",
      scholarshipLocation: "USA, UK, Canada",
      deadline: "December 31, 2024",
    },
    {
      featured: false,
      title: "Arts and Humanities Research Grant",
      logo: "https://www.ukri.org/wp-content/uploads/2022/03/ukri-ahrc-square-logo.png",
      eligibleDegrees: "Masters, PhD",
      fundingType: "Partial Funding",
      eligibleCourses: "Arts, Humanities, Social Sciences",
      eligibleNationalities: "Australia",
      scholarshipLocation: "European Union countries",
      deadline: "March 15, 2025",
    },
    {
      featured: true,
      title: "Women in Technology Scholarship Program",
      logo: "https://images.credly.com/images/a36f33e6-caae-4412-91b6-7b798edf7f74/Cadence_Women_in_Tech_2019_600x600.png",
      eligibleDegrees: "Bachelors, Masters",
      fundingType: "Full Funding",
      eligibleCourses: "Computer Science, IT, Engineering",
      eligibleNationalities: "India",
      scholarshipLocation: "USA, Canada, UK, Australia",
      deadline: "October 1, 2024",
    },
    {
      featured: false,
      title: "Australian Government Research Training Program (RTP)",
      logo: "data:image/png;base64,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",
      eligibleDegrees: "PhD",
      fundingType: "Full Funding",
      eligibleCourses: "All research fields",
      eligibleNationalities: "Open to international students",
      scholarshipLocation: "Australia",
      deadline: "Varies by university",
    },
    {
      featured: true,
      title: "Fulbright Foreign Student Program",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUon4N6mIvqsgwrxFslj6ppfCbGJIZ0DXKWQ&s",
      eligibleDegrees: "Masters, PhD",
      fundingType: "Full Funding",
      eligibleCourses: "Various fields",
      eligibleNationalities: "Open to non-US citizens",
      scholarshipLocation: "USA",
      deadline: "Varies by country",
    },
    {
      featured: false,
      title: "DAAD Scholarships for Development-Related Postgraduate Courses",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Deutscher_Akademischer_Austauschdienst_logo.svg",
      eligibleDegrees: "Masters",
      fundingType: "Full Funding",
      eligibleCourses: "Development-related courses",
      eligibleNationalities: "Open to students from developing countries",
      scholarshipLocation: "Germany",
      deadline: "October 31, 2024",
    },
    {
      featured: true,
      title: "Chevening Scholarships",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVvbR69lVA8cZLha_XJ4OwT5vk6hEuWLFbsA&s",
      eligibleDegrees: "Masters",
      fundingType: "Full Funding",
      eligibleCourses: "Various fields",
      eligibleNationalities: "Open to international students",
      scholarshipLocation: "UK",
      deadline: "November 1, 2024",
    },
    {
      featured: false,
      title: "Gates Cambridge Scholarship",
      logo: "https://img.jagranjosh.com/images/2022/June/862022/citlogo.webp",
      eligibleDegrees: "Masters, PhD",
      fundingType: "Full Funding",
      eligibleCourses: "All courses offered by the University of Cambridge",
      eligibleNationalities: "Open to international students",
      scholarshipLocation: "UK",
      deadline: "December 5, 2024",
    },
  ];

  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const newFilters = {
      nationality: params.get("nationality") || "",
      studyLevel: params.getAll("studyLevel"),
      country: params.getAll("country"),
      field: params.getAll("field"),
      scholarshipType: "",
    };
    setSelectedFilters(newFilters);
    filterScholarships(newFilters);
  }, [location.search]);


  const filterScholarships = (filters = selectedFilters) => {
    const filtered = scholarships.filter((scholarship) => {
      const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholarship.eligibleCourses.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesNationality = !filters.nationality || 
        scholarship.eligibleNationalities.toLowerCase().includes(filters.nationality.toLowerCase());

      const matchesStudyLevel = filters.studyLevel.length === 0 || 
        filters.studyLevel.some(level => scholarship.eligibleDegrees.toLowerCase().includes(level.toLowerCase()));

      const matchesCountry = filters.country.length === 0 || 
        filters.country.some(country => scholarship.scholarshipLocation.toLowerCase().includes(country.toLowerCase()));

      const matchesField = filters.field.length === 0 || 
        filters.field.some(field => scholarship.eligibleCourses.toLowerCase().includes(field.toLowerCase()));

      const matchesScholarshipType = !filters.scholarshipType || 
        scholarship.fundingType === filters.scholarshipType;

      return matchesSearch && matchesNationality && matchesStudyLevel && matchesCountry && matchesField && matchesScholarshipType;
    });

    setFilteredScholarships(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterScholarships({ ...selectedFilters, searchTerm: e.target.value });
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...selectedFilters, [filterType]: value };
    setSelectedFilters(newFilters);
    filterScholarships(newFilters);
  };

  const handleApply = async (scholarship) => {
    try {
      const docRef = await addDoc(collection(db, "ScholarshipEnquiries"), {
        scholarshipTitle: scholarship.title,
        Email : localStorage.getItem('userEmail'),
        appliedAt: new Date(),
        status: "pending",
        // Add any other relevant fields
      });
      console.log("Application submitted with ID: ", docRef.id);
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application: ", error);
      alert("Error submitting application. Please try again.");
    }
  };
  const filters = [
    {
      name: "Nationality",
      type: "nationality",
      options: ["USA", "India", "UK", "Canada", "Australia", "EU", "Non-US", "Developing countries"],
    },
    {
      name: "I'm looking for",
      type: "studyLevel",
      options: ["Bachelors", "Masters", "PhD", "Diploma", "MBA"],
    },
    {
      name: "Countries interested",
      type: "country",
      options: ["USA", "UK", "Canada", "Germany", "Australia", "European Union"],
    },
    {
      name: "Field of interest",
      type: "field",
      options: ["Engineering", "Medicine", "Business", "Arts", "Science", "Computer Science", "IT", "Humanities", "Social Sciences", "STEM"],
    },
    {
      name: "Scholarship type",
      type: "scholarshipType",
      options: [
        "Full Funding",
        "Partial Funding",
        "Tuition Waiver",
        "Living Expenses",
      ],
    },
  ];

  

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">
            Study Abroad Scholarships For International Students
          </h1>

          <div className="flex space-x-8">
            {/* Left Sidebar - Filters */}
            <div className="w-1/4">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              {filters.map((filter, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {filter.name}
                  </label>
                  <select 
                    className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                    onChange={(e) => handleFilterChange(filter.type, e.target.value)}
                    value={selectedFilters[filter.type]}
                  >
                    <option value="">Select {filter.name}</option>
                    {filter.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {/* Middle Section - Scholarship Listings */}
            <div className="w-1/2">
              <div className="flex justify-between items-center mb-4">
                <div className="relative flex-grow mr-4">
                  <input
                    type="text"
                    placeholder="Search specific keywords only. Ex: Microbiology, Commonwealth..."
                    className="w-full border border-gray-300 rounded-md shadow-sm py-2 pl-10 pr-4"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                <select className="border border-gray-300 rounded-md shadow-sm py-2 px-3">
                  <option>Date posted</option>
                  <option>Relevance</option>
                  <option>Deadline</option>
                </select>
              </div>
              
              {filteredScholarships.map((scholarship, index) => (
                <div
                  key={index}
                  className="bg-white  rounded-lg shadow-md p-6 mb-6"
                >
                  {scholarship.featured && (
                    <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                      FEATURED
                    </span>
                  )}
                  <div className="flex items-start">
                    <img
                      src={scholarship.logo}
                      alt="Scholarship Logo"
                      className="w-16 h-16 mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-blue-600 mb-2">
                        {scholarship.title}
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">
                            Eligible Degrees:
                          </p>
                          <p className="text-sm">
                            {scholarship.eligibleDegrees}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Funding Type:</p>
                          <p className="text-sm">{scholarship.fundingType}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            Eligible Courses:
                          </p>
                          <p className="text-sm">
                            {scholarship.eligibleCourses}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            Eligible Nationalities:
                          </p>
                          <p className="text-sm">
                            {scholarship.eligibleNationalities}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            Scholarship can be taken at:
                          </p>
                          <p className="text-sm">
                            {scholarship.scholarshipLocation}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded mb-2">
                        Deadline
                        <br />
                        {scholarship.deadline}
                      </div>
                      <button 
                        className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded"
                        onClick={() => handleApply(scholarship)}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                  {index === 0 && (
                    <div className="mt-4 flex items-center justify-between bg-gray-100 p-4 rounded">
                      <p className="text-sm">
                        Our Scholarship team will help you with any questions
                      </p>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        Ask now
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Sidebar */}
            <div className="w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">
                  We will help you get Scholarships
                </h2>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                  Ask your questions
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">
                  Abroad Education loan
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxDUPSOY0c4zGBZlQ9bvJwfAGcphuXMDdwQ&s"
                      alt="SBI Logo"
                      className="w-8 h-8 mr-2"
                    />
                    <span>State Bank of India (SBI)</span>
                  </li>
                  <li className="flex items-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiTXuYaW2XuT-Qipb2cyZ3DlyE19bmyhSLBQ&s"
                      alt="BOB Logo"
                      className="w-8 h-8 mr-2"
                    />
                    <span>Bank of Baroda (BOB)</span>
                  </li>
                  <li className="flex items-center">
                    <img
                      src="https://i.pinimg.com/736x/e6/93/92/e693927f0626a7823e87edc86e785d16.jpg"
                      alt="PNB Logo"
                      className="w-8 h-8 mr-2"
                    />
                    <span>Punjab National Bank (PNB)</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm mt-4 inline-block"
                >
                  Apply for abroad education loan without collateral
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Degree Based Scholarships
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      High/Secondary School degree Scholarships
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Bachelors degree Scholarships
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Masters degree Scholarships
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      PhD degree Scholarships
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Post Doc degree Scholarships
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Diploma degree Scholarships
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ScholarMain;