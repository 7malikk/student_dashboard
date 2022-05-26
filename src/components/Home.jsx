import React from 'react';
import Navbar from './Navbar';
import image from '../imgs/road_to_knowledege.svg';

const home = () => {
  return (
    <>
      <div className="bg-gray-50 h-screen overflow-x-hidden  ">
        <Navbar />
        <div className="flex flex-row">
          <div className="flex items-center justify-center align-middle ">
            <div className="relative w-full ">
              <div className="mt-96 absolute top-0 -left-4 w-64 h-72 bg-[#8FCA4F] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="mt-96 absolute top-0 -right-4 w-64 h-72 bg-[#108FDC] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="mt-20  absolute top-0 -right-4 w-64 h-72 bg-[#8FCA4F] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="mt-96 absolute top-0 -bottom-8 left-96 w-64 h-72 bg-[#108FDC] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="mt-20 absolute top-0 right-96  w-64 h-72 bg-[#8FCA4F]  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="mt-20 absolute top-0 -left-4 w-64 h-72 bg-[#108FDC] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="flex flex-col md:flex-row-reverse justify-center items-center  pt-32 md:mt-24 w-full">
                <div className="mb-2 p-2 md:w-[50%] ">
                  <img src={image} alt="road-to-knowledge" />
                </div>
                <h4 className="text-5xl md:text-6xl md:text-left text-center md:w-[50%] md:p-9 font-bold font-serif">
                  Learn on your class schedule
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
