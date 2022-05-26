import React, { useEffect, useState } from 'react';

const User = () => {
  const [displayName, setDisplayName] = useState('User');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const altName = user.email.split('@');
    setDisplayName(user.name || altName[0]);
  }, []);
  return (
    <section className=" mx-auto w-[90%]">
      <div className="bg-black border-2 border-white h-52 w-5/6 rounded-lg overflow-hidden px-11 mt-8 mx-auto">
        <div className="flex flex-col items-start py-12 flex-1">
          <div className="text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-green-600 text-2xl font-semibold">
            Welcome,
          </div>
          <div className="text-transparent bg-gradient-to-r bg-clip-text from-green-600 to-blue-600 text-4xl font-bold ">
            {' '}
            {displayName}
          </div>
          <div className="text-green-600">Start your Learning with us</div>
        </div>
      </div>
    </section>
  );
};

export default User;
