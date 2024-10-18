import { useState } from "react";
import { ChevronDown, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const ScholarMain = () => {
  const [eduLoansOpen, setEduLoansOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const filters = [
    {
      name: "Nationality",
      options: ["USA", "India", "UK", "Canada", "Australia"],
    },
    {
      name: "I'm looking for",
      options: ["Bachelors", "Masters", "PhD", "Diploma"],
    },
    {
      name: "Countries interested",
      options: ["USA", "UK", "Canada", "Germany", "Australia"],
    },
    {
      name: "Field of interest",
      options: ["Engineering", "Medicine", "Business", "Arts", "Science"],
    },
    {
      name: "Scholarship type",
      options: [
        "Full Funding",
        "Partial Funding",
        "Tuition Waiver",
        "Living Expenses",
      ],
    },
  ];

  const scholarships = [
    {
      featured: true,
      title: "Education Future International Scholarship - USA & Non-USA 2024",
      logo: "https://www.education-future.org/images/logo.png",
      eligibleDegrees: "Bachelors, Masters",
      fundingType: "Partial Funding",
      eligibleCourses: "All courses offered by the universities",
      eligibleNationalities: "Open to Indian nationals",
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
      eligibleNationalities: "Open to Indian nationals",
      scholarshipLocation: "All the major study abroad destinations",
      deadline: "ASAP",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}

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
                  <select className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3">
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
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                <select className="border border-gray-300 rounded-md shadow-sm py-2 px-3">
                  <option>Date posted</option>
                  <option>Relevance</option>
                  <option>Deadline</option>
                </select>
              </div>

              {scholarships.map((scholarship, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 mb-6"
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
                        ASAP
                      </div>
                      <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded">
                        View & Apply
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
};

export default ScholarMain;
