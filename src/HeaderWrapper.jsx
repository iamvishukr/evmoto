import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate, Navigate } from "react-router-dom";
import logo from './assets/logo.png'
import {
  ChevronDown,
  DollarSign,
  LogOut,
  Settings,
  Star,
  User,
  X,
} from "lucide-react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { app } from "./lib/firebase";
import photo from "./assets/medium.png";
const auth = getAuth(app);
const db = getFirestore(app);

const UpperHeader = ({ onLoginClick }) => {
  const location = useLocation();
  const hideButtons = location.pathname === "/signup";

  return (
    <header
      className="flex justify-between items-center p-4 bg-gray-800 shadow-lg shadow-gray-500 rounded-2xl"
      style={{ height: "80px" }}
    >
      <div className="flex items-center p-4">
        <img
          src={logo}
          alt="Logo"
          className="w-52 mr-2"
        />
      </div>
      <div className="flex items-center space-x-2">
        {!hideButtons && (
          <>
            <button
              onClick={onLoginClick}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                location.pathname === "/login"
                  ? "text-blue-600"
                  : "text-white hover:text-[#1FBBA6]"
              }`}
            >
              Login
            </button>
            <Link to="/signup">
              <button
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  location.pathname === "/signup"
                    ? "bg-blue-600 text-white"
                    : "bg-[#1FBBA6] text-white hover:bg-[#45867f]"
                }`}
              >
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

const LowerHeader = ({ user, handleLogout }) => {
  const location = useLocation();
  const [eduLoansOpen, setEduLoansOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-gray-800 shadow-lg shadow-gray-500 rounded-2xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img
          src={logo}
          alt="WE MAKE SCHOLARS"
          className="h-12"
        />
        <nav className="flex items-center space-x-6">
          <Link to="/scholar-main">
            <a
              className={`font-semibold ${
                location.pathname === "/scholarships"
                  ? "text-blue-600"
                  : "text-white hover:text-[#1FBBA6]"
              }`}
            >
              Scholarships
            </a>
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setEduLoansOpen(true)}
            onMouseLeave={() => setEduLoansOpen(false)}
          >
            <button className="flex items-center text-gray-200">
              Edu loans <ChevronDown className="ml-1 h-4" />
            </button>
            {eduLoansOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-48">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Education Loan
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Study Abroad Loan
                </a>
              </div>
            )}
          </div>
          <Link to="/services">
            <button
              className={`flex items-center ${
                location.pathname === "/services"
                  ? "text-blue-600"
                  : "text-gray-200 hover:text-[#1FBBA6]"
              }`}
            >
              More <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </Link>
          {user && (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 text-gray-200 hover:text-teal-600"
              >
                <img
                  src={photo}
                  alt="User avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span>{user.fullName || user.email}</span>
                <ChevronDown size={20} />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <User className="inline-block mr-2" size={16} />
                    Profile
                  </Link>
                  <Link
                    to="/loan"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <DollarSign className="inline-block mr-2" size={16} />
                    Loan
                  </Link>
                  <Link
                    to="/shortlisted"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Star className="inline-block mr-2" size={16} />
                    Shortlisted & Applied
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Settings className="inline-block mr-2" size={16} />
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut className="inline-block mr-2" size={16} />
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Fetch user data from Firestore by email
      const userDoc = await getDoc(doc(db, "users", email));

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const isAdmin = userData.isAdmin; // Access isAdmin field
      //  console.log(isAdmin);
        localStorage.setItem("isAdmin", isAdmin);
        localStorage.setItem("userEmail", email);
        toast.success("Login successful!");

        if (isAdmin) {
          onLogin(userData);
          onClose();
          navigate("/admin-dashboard");
        } else {
          onLogin(userData);
          onClose();
        }
      } else {
        toast.error("Please signup first !!");
      }
      // Store user data in localStorage
    } catch (error) {
      setError(error.message);
      console.error("Error during login:", error);
      toast.error(error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className="p-6">
          <div className="flex justify-center mb-4 bg-gray-500 rounded-2xl">
            <img
              src={logo}
              alt="WE MAKE SCHOLARS Logo"
              className="h-16 p-1"
            />
          </div>
          <h2 className="text-xl font-semibold text-center mb-4">
            The most trusted Education Finance Platform supported by the
            Government
          </h2>
          <form onSubmit={handleLogin}>
            <Input
              type="email"
              placeholder="Enter Email Address"
              className="w-full mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white"
            >
              Login
            </Button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default function HeaderWrapper() {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("userEmail"));
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("userData");
      localStorage.removeItem("userEmail");
      setUser(null);
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error);
      toast.error("Error logging out. Please try again.");
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
    navigate("/");
  };

  //const path = location.pathname;

  let HeaderComponent;
  if (user) {
    HeaderComponent = LowerHeader;
  } else {
    HeaderComponent = UpperHeader;
  }
  Navigate("/admin-dashboard");

 // console.log(user);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <HeaderComponent
        user={user}
        handleLogout={handleLogout}
        onLoginClick={() => setIsLoginModalOpen(true)}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
}
