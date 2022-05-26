import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import courseBox from '../../db';
import { FaArrowLeft } from 'react-icons/fa';

const SingleCourse = () => {
  const [course, setCourse] = useState('');

  const { id } = useParams();
  useEffect(() => {
    const courses = courseBox.find(
      (course) => Number(course.id) === Number(+id)
    );
    setCourse(courses);
  }, [id]);
  return (
    <>
      {course && (
        <div className="w-full">
          <div className="block p-6 md:w-[70%] lg:w-1/2 shadow-2xl text-2xl m-4 mt-[15%] md:mt-[2%]  md:ml-[15%] rounded-lg bg-gradient-to-r from-blue-600 to-green-600 ">
            <h4 className="pb-2">
              <span className="font-bold "> Course name:</span> {course.name}
            </h4>
            <div>
              <h4 className="py-2">
                <span className="font-bold "> Course branches: </span>
                {course.details.branches.map((e) => (
                  <p> {e}</p>
                ))}
              </h4>
              <h4 className="py-2">
                <span className="font-bold ">Course details: </span>
                {course.details.intro}
              </h4>
            </div>
            <Link to={'/admin/courses'}>
              <button type="button">
                <FaArrowLeft />
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCourse;
