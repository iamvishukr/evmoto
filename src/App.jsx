// App.jsx
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Header from './Header';
import SearchForm from './SearchForm';
import Testimonials from './Testimonials';
import EducationLoanPage from './EducationLoanPage'; // Import the new component

const firebaseConfig = {
  apiKey: "AIzaSyDXtJQWID5snsexZS55w9uFp0xidecz08A",
  authDomain: "evmoto-8d67a.firebaseapp.com",
  projectId: "evmoto-8d67a",
  storageBucket: "evmoto-8d67a.appspot.com",
  messagingSenderId: "708171830876",
  appId: "1:708171830876:web:93caafa8cbe6ed83b53899",
  measurementId: "G-84N56V351W"
};

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
    signInWithPopup(auth, provider);
  };

  return (
    <Router> {/* Wrap your app with Router */}
      <div className="min-h-screen bg-gray-100">
        <Header user={user} signIn={signIn} />
        <main className="container mx-auto px-4 py-8">
          <Routes> {/* Define routes here */}
            <Route
              path="/"
              element={
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-8 md:mb-0">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                      Best way to fund your Study Abroad
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Discover and apply to thousands of international scholarships and get the best education loan matching your profile
                    </p>
                    <SearchForm /> {/* SearchForm is displayed on the home page */}
                  </div>
                </div>
              }
            />
            <Route path="/education-loan" element={<EducationLoanPage />} /> {/* Add new route */}
          </Routes>
          <Testimonials />
        </main>
      </div>
    </Router>
  );
};

export default App;
