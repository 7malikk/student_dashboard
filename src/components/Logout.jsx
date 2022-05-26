import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    navigate('/students_dashboard');
  };

  const handleCancel = () => {
    navigate('/admin');
  };

  return (
    <div className=" w-[80vw] mx-auto text-center  text-2xl text-white p-4">
      <p>Are you sure you want to Logout?</p>

      <div className=" flex flex-row justify-center space-x-5 text-black pt-2">
        <button
          type="submit"
          onClick={(e) => handleLogout(e)}
          className="bg-red-500 text-2xl rounded-full font-bold p-2">
          {' '}
          Yes
        </button>

        <button
          type="submit"
          onClick={(e) => handleCancel(e)}
          className="bg-green-500 text-2xl  rounded-full  font-bold p-2">
          {' '}
          No
        </button>
      </div>
    </div>
  );
};

export default Logout;
