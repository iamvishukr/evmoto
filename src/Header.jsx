import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4  shadow-md" style={{ height: '60px' }}>
      <div className="flex items-center">
      <img 
          src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" 
          alt="Logo" 
          className="h-10 w-10 mr-2" 
        />
        <span className="text-xl font-bold">WE MAKE SCHOLARS</span>
      </div>
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Login
        </button>
        <button className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
