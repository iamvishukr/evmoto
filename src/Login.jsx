import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { app } from "./lib/firebase";

const db = getFirestore(app);

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Fetch user data from Firestore by email
      const userDoc = await getDoc(doc(db, "users", email));
      if (!userDoc.exists()) {
        throw new Error("User not found. Please sign up first.");
      }

      // Store user data in localStorage
      localStorage.setItem("userData", JSON.stringify(userDoc.data()));
      localStorage.setItem("userEmail", email);

      toast.success("Login successful!");
      navigate("/dashboard"); // Redirect to dashboard or home page
    } catch (error) {
      setError(error.message);
      console.error("Error during login:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="z-50 inset-0 fixed bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <img
              src="https://www.wemakescholars.com/themes/wms/images/logo.webp"
              alt="WE MAKE SCHOLARS Logo"
              className="h-16 p-1"
            />
          </div>
          <h2 className="text-xl font-semibold text-center mb-4">
            The most trusted Education Finance Platform supported by the Government
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
            <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
              Login
            </Button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
}