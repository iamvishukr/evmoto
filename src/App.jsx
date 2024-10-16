import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Header from './Header';


import SearchForm from './SearchForm';
import Testimonials from './Testimonials';

// Initialize Firebase (replace with your config)
// const firebaseConfig = {
//   apiKey: 
//   authDomain: 
//   projectId: 
//   storageBucket: 
//   messagingSenderId: 
//   appId: 
//   measurementId: 
// };

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
    <div className="min-h-screen bg-gray-100">
      <Header user={user} signIn={signIn} />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Best way to fund your Study Abroad</h2>
            <p className="text-gray-600 mb-6">
              Discover and apply to thousands of international scholarships and get the best education loan matching your profile
            </p>
            <SearchForm />
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg?height=400&width=400" alt="Study Abroad Illustration" className="w-full h-auto" />
          </div>
        </div>
        <Testimonials />
      </main>
    </div>
  );
};

export default App;