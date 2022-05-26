import React from 'react';
import { Link } from 'react-router-dom';
import courseBox from '../../db';

const Courses = () => {
  return (
    <>
      <section className="text-2xl  grid  md:grid-cols-2 lg:grid-cols-3  gap-7 p-4 ">
        {courseBox.map((item) => (
          <div key={item.id}>
            <Link to={`${item.name}/${item.id}`}>
              <div className="relative group">
                <div className="absolute -inset-0.5  bg-gradient-to-r from-blue-600 to-green-600 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 "></div>

                <div className="relative bg-black text-blue-600 rounded-lg border-2 w-full my-2 p-5 group-hover:text-green-600 transition duration-200">
                  {item.name}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default Courses;
