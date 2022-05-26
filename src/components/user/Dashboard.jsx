import React from 'react';
import Sidebar from './SideBar';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const Dashboard = () => {
  const [admin, setAdmin] = React.useState(true);

  return (
    <>
      <Navbar admin={admin} />
      <section className=" flex flex-col  md:flex-row w-full h-screen bg-black overflow-auto">
        <div className="bg-[#108FDC] border-t-2 border-black w-[15%] hidden md:block">
          <Sidebar />
        </div>
        <div className="bg-[#108FDC] border-t-2 border-black md:hidden flex flex-row">
          <Sidebar />
        </div>

        <div>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
