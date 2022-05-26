import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ state }) => {
  return (
    <div>
      <ul className="flex flex-row md:flex-col p-2 ">
        <li className="pl-1 md:pl-0 hover:text-green-500 bg-black m-4  md:m-2  py-1 rounded-full text-blue-600">
          <Link className="p-4" to={''}>
            User
          </Link>
        </li>
        <li className="pl-1 md:pl-0 hover:text-green-500 bg-black m-4 md:m-2  py-1 rounded-full text-blue-600">
          <Link className="p-4" to="/admin/courses">
            Courses
          </Link>
        </li>
        <li className="pl-1 md:pl-0 hover:text-green-500 bg-black m-4 md:m-2   py-1 rounded-full text-blue-600">
          <Link className="p-4" to="/admin/profile">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
