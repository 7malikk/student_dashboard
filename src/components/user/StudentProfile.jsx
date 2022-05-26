import React from 'react';
import { useState, useEffect } from 'react';

const StudentProfile = () => {
  const profile =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';
  const [displayName, setDisplayName] = useState('User');
  const [email, setEmail] = useState('email');
  const [src, setSrc] = useState(profile);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const altName = user.email.split('@');
    setDisplayName(user.name || altName[0]);
    setEmail(user.email);
    user.src ? setSrc(user.src) : setSrc(profile);
    console.log(user.src);
  }, [profile]);

  return (
    <div className="flex h-1/2  ">
      <div className="flex flex-col ml-20% w-[90%]  mx-auto">
        <div className=" w-full h-[90vh] p-5 border-2 border-white bg-black text-white rounded-lg mt-10">
          <div className=" grid grid-cols-2 gap-5 mt-10">
            <div className=" space-y-5">
              <h1 className=" text-3xl">Profile Settings</h1>
              <p>Name</p>
              <p>{displayName}</p>
            </div>
            <div className=" space-y-5">
              <img src={src} alt="" />
              <p>Email</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
