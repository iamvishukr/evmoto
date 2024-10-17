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
            <Route path="/" element={<SearchForm />} />
            <Route path="/education-loan" element={<EducationLoanPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Testimonials />
          <Partners />
        </main>
        <Footer />
      <Routes>
        
      </Routes>
      </div>
    </Router>
  );
};

export default App;
