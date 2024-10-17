import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center p-4 "
      style={{ height: "80px" }}
    >
      <div className="flex items-center p-4">
        <img
          src="https://www.wemakescholars.com/themes/wms/images/logo.webp"
          alt="Logo"
          className="h-[66px] w-24 mr-2"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Link to="/login">
          <button className="px-3 py-1 text-sm  text-black rounded hover:text-[#1FBBA6] transition-colors">
            Login
          </button>
        </Link>
        <button className="px-3 py-1 text-sm bg-[#1FBBA6] text-white hover:bg-[#45867f] transition-colors">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
