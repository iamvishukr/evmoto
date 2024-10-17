// App.jsx
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import Header from "./Header";
import SearchForm from "./SearchForm";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import EducationLoanPage from "./EducationLoanPage"; // Import the new component
import Footer from "./Footer";
import Signup from "./Signup"; // Import the Signup component
import Login from "./Login"; // Import the Login component
import { firebaseConfig } from "./lib/firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) => {
      console.error("Error signing in: ", error);
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header user={user} signIn={signIn} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex flex-col md:flex-row items-center justify-between mt-10">
                  <div className="mb-8 md:mb-0">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                      Best way to fund your Study Abroad
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Discover and apply to thousands of international
                      scholarships <br />and get the best education loan matching your
                      profile
                    </p>
                    <SearchForm />
                  </div>
                </div>
              }
            />
            <Route path="/education-loan" element={<EducationLoanPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Testimonials />
          <Partners />
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
