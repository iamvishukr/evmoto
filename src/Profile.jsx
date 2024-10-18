import { DollarSign, Star, Settings, LogOut } from "lucide-react";
import medium from "./assets/medium.png";
import { FaMedal } from "react-icons/fa";
import { GiCreditsCurrency } from "react-icons/gi";
const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex space-x-8">
          {/* Left Sidebar */}
          <div className="w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <img src={medium} alt="Profile" className=" h-44 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-center mb-4">
                Alok Kumar
              </h2>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Invite friends
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <ul>
                <li className="border-b">
                  <a
                    href="#"
                    className="block px-4 py-2 text-orange-500 font-medium"
                  >
                    Profile
                  </a>
                </li>
                <li className="border-b">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    <DollarSign className="inline-block mr-2 h-4 w-4" />
                    Loan
                  </a>
                </li>
                <li className="border-b">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    <Star className="inline-block mr-2 h-4 w-4" />
                    Shortlisted & Applied
                  </a>
                </li>
                <li className="border-b">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    <Settings className="inline-block mr-2 h-4 w-4" />
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    <LogOut className="inline-block mr-2 h-4 w-4" />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Section */}
          <div className="w-1/2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-blue-600">
                  Basic Information
                </h3>
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-1 px-3 rounded text-sm">
                  Edit Profile
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Gender</p>
                  <p className="font-medium">Not-Set</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">DOB</p>
                  <p className="font-medium">Not-Set</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Nationality</p>
                  <p className="font-medium">Not-set</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Current location</p>
                  <p className="font-medium">
                    Bangalore Rural, Karnataka, India
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Contact number</p>
                  <p className="font-medium">+91 7991133447</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">alok112500@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center justify-between mb-2">
                <FaMedal color="orange" size={30} />
                <span className="text-4xl font-bold">0</span>
              </div>
              <p className="text-center text-gray-600 mb-2">Novice</p>
              <p className="text-center text-sm text-blue-600">
                150 points to level up & become knowledgeable
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <GiCreditsCurrency color="green" size={30} />
              <p className="text-sm text-gray-600 mb-2">Credits earned</p>
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded text-sm">
                Earn more credits
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <p>Connect with us</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded">
                <span className="sr-only">Facebook</span>f
              </a>
              <a href="#" className="bg-red-600 p-2 rounded">
                <span className="sr-only">YouTube</span>▶
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded">
                <span className="sr-only">Twitter</span>t
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded">
                <span className="sr-only">Instagram</span>📷
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded">
                <span className="sr-only">LinkedIn</span>in
              </a>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">By subject</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Arts Scholarships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Architecture Scholarships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sports Scholarships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Engineering Scholarships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Law Scholarships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    MBA scholarships
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">By nationality</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    International Scholarships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Scholarships for India
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Scholarships for Pakistani
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Scholarships for China
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Scholarships for UK
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Scholarships for Malaysia
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">By country of interest</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    US Scholarships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    UK Scholarships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Canada Scholarships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    India Scholarships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    China Scholarships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Germany Scholarships
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Education Loans</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Education Loan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    SBI Education Loan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Bank of Baroda Education Loan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Avanse Education Loan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Canara Education Loan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Incred Education Loan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
