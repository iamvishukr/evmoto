import React from 'react';
import { Bell, GraduationCap, User as UserIcon } from 'lucide-react';

const Header = ({ user, signIn }) => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <GraduationCap className="h-8 w-8 text-teal-500" />
          <h1 className="text-2xl font-bold text-gray-800">WeMakeScholars</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="h-6 w-6 text-gray-600" />
          {user ? (
            <img src={user.photoURL || ''} alt="User" className="h-8 w-8 rounded-full" />
          ) : (
            <button onClick={signIn} className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-md">
              <UserIcon className="h-5 w-5" />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;