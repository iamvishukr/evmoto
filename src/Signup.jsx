import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { z } from "zod";
import { toast } from "react-hot-toast";
import { app } from "./lib/firebase";

const db = getFirestore(app);

// Zod schema for form validation
const signupSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  nationality: z.string().min(1, "Please select a nationality"),
  isAdmin: z.boolean(),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
  
});

// Dropdown options
const dropdownOptions = {
  nationality: ["USA", "UK", "Canada", "Australia", "India"],
};

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Validate form data
      signupSchema.parse({ fullName, email, nationality, agreeTerms});

      // Save user data to Firestore
      await setDoc(doc(db, "users", email), {
        fullName,
        email,
        nationality,
        isAdmin: false,
        createdAt: new Date(),
      });

      // Store email in local storage for login
      localStorage.setItem("userEmail", email);

      toast.success("Signup successful! You can now log in.");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0].message);
      } else {
        setError(`Error during signup: ${error.message}`);
        console.error("Error during signup:", error);
      }
      toast.error(error instanceof Error ? error.message : "An unknown error occurred");
    }
  };

  return (
    <div className="flex font-sans">
      <div className="flex-1 p-8 bg-white">
        <h1 className="text-4xl font-bold mb-4">
          3 Million+ signed up to fund their dream education
        </h1>
        <p className="mb-6 text-gray-600">
          Funded & Supported by the IT Ministry, Govt. of India
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block mb-1 text-sm font-medium">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="nationality" className="block mb-1 text-sm font-medium">
              Select your Nationality *
            </label>
            <select
              id="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">-- Select Nationality --</option>
              {dropdownOptions.nationality.map((nation) => (
                <option key={nation} value={nation}>
                  {nation}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              required
              className="mr-2"
            />
            <label htmlFor="agreeTerms" className="text-sm">
              I agree to the{" "}
              <a href="#" className="text-teal-600 hover:underline">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-teal-600 hover:underline">
                Privacy policy
              </a>
            </label>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            ✓ Sign Up
          </button>
        </form>
        <Link to="/login">
          <p className="mt-4 text-end text-sm">Already a user?</p>
        </Link>
      </div>
      <div className="flex-1 p-8 bg-yellow-300 text-gray-800">
        <h2 className="text-2xl font-bold mb-2">
          5,500+ Scholarships won globally
        </h2>
        <p className="mb-6">
          Get access to 50,000+ International Scholarships worth over $1 Billion
        </p>
        <h2 className="text-2xl font-bold mb-2">
          25000+ Education loans sanctioned worth over $2 Billion
        </h2>
        <p className="mb-6">
          Secure the best education loan from the top 15+ public/ private lenders
        </p>
        <h2 className="text-2xl font-bold mb-2">
          Unlock the world of education funding
        </h2>
        <p className="mb-6">
          Explore interesting articles and videos on funding your dream education
        </p>
        <h2 className="text-2xl font-bold mb-2">The most trusted platform</h2>
        <p>As the initiative is supported by the Government</p>
      </div>
    </div>
  );
}