import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '.././firebase';
import image from '../imgs/online.svg';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        const user = JSON.parse(localStorage.getItem('user'));
        const altName = user.email.split('@');
        setMessage(
          `Welcome, ${
            user.name || altName[0]
          } you have been registered. Proceed to Sign in`
        );
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(error);
      });
  };
  const SignInWithGoogleFunc = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((res) => {
        const {
          displayName: name,
          email,
          photoURL: src,
          accessToken: token,
        } = res.user;
        const user = { name, email, src, token };
        localStorage.setItem('user', JSON.stringify(user));
        // console.log(res);
        navigate('/admin');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <>
      <section>
        <div className="flex flex-col items-center  lg:flex-row lg:justify-evenly py-10 px-5">
          <div className="text-center  md:w-[50%]">
            <h4 className="font-bold text-5xl ">Student Register</h4>
            <p className="text-2xl">make sure your account is secure</p>
            <img src={image} alt="online-class" className="mt-16" />
          </div>
          <div className=" md:w-[50%]  flex flex-col items-center rounded-lg mt-10 lg:mt-32 p-5 px-14">
            <Link to={'/students_dashboard'}>
              <div className="">
                <img
                  src="https://yt3.ggpht.com/IYmxDZ8pJExBev1pgFI22XSPM_yoy6Ukw6t9p9TbOrflV3wJSj7yII9rnOZwAsN34xNNz0qr=s88-c-k-c0x00ffffff-no-rj"
                  alt="kodecamp_logo"
                />
              </div>
            </Link>
            <div className=" mt-16 flex flex-col justify-center items-center">
              <div className="w-full text-center mb-4">
                <p className=" text-green-500 text-sm"> {message} </p>
              </div>

              <form
                className="flex justify-start items-start flex-col"
                onSubmit={(e) => handleSubmit(e)}>
                <div className="relative flex flex-col">
                  <input
                    className="peer border-b-4 p-3 placeholder-transparent border-black outline-none"
                    type="text"
                    value={name}
                    name={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-[#108FDC]  peer-placeholder-shown:text-base peer-placeholder-shown:text-[#8FCA4F] peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 transition-all peer-focus:-top-3.5 peer-focus:text-[#108FDC]">
                    Name
                  </label>
                </div>
                <div className="relative mt-5 flex flex-col">
                  <input
                    className="peer border-b-4 p-3 placeholder-transparent border-black outline-none"
                    type="email"
                    value={email}
                    name={email}
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-[#108FDC]  peer-placeholder-shown:text-base peer-placeholder-shown:text-[#8FCA4F] peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 transition-all peer-focus:-top-3.5 peer-focus:text-[#108FDC]">
                    Email address
                  </label>
                </div>
                <div className="relative mt-5 flex flex-col">
                  <input
                    className="peer border-b-4  p-3 placeholder-transparent  border-black outline-none"
                    type="password"
                    value={password}
                    name={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-[#108FDC]  peer-placeholder-shown:text-base peer-placeholder-shown:text-[#8FCA4F] peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 transition-all peer-focus:-top-3.5 peer-focus:text-[#108FDC]">
                    Password
                  </label>
                </div>
                <div className="flex flex-row">
                  <button
                    type="submit"
                    className="border-2 border-white bg-black text-white mt-2 py-1 px-2 hover:bg-[#8FCA4F]  w-full rounded-full">
                    Register
                  </button>
                  <button
                    onClick={(e) => SignInWithGoogleFunc(e)}
                    type="submit"
                    className="border-2 border-white bg-black text-white mt-2 py-1 hover:bg-red-800  px-2 w-full rounded-full">
                    Sign in with Google
                  </button>
                </div>
              </form>

              <p className=" text-red-600 text-sm"> {error} </p>
              <Link to="/login">
                <button
                  type="submit"
                  className="border-2 border-white bg-black text-white mt-2 py-2 px-6 rounded-full hover:bg-[#8FCA4F]">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
