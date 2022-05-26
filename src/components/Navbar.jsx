import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ admin }) => {
  return (
    <div className="flex flex-row justify-between px-4 py-1 items-center w-full bg-[#108FDC] relative">
      <div className="w-13">
        <Link to="/students_dashboard">
          <img
            src="https://yt3.ggpht.com/IYmxDZ8pJExBev1pgFI22XSPM_yoy6Ukw6t9p9TbOrflV3wJSj7yII9rnOZwAsN34xNNz0qr=s88-c-k-c0x00ffffff-no-rj"
            alt="kodecamp_logo"
          />
        </Link>
      </div>
      <div className="border-2  border-green-600 hover:from-green-600 hover:to-blue-600 hover:border-black rounded-3xl hover:text-black  bg-black text-[#8FCA4F]  px-4 py-1  bg-gradient-to-br from-blue-600 to-green-600  ">
        {admin ? (
          <Link to="logout">Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
