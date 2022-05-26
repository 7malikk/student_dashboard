import React, { useState } from 'react';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import image from '../imgs/online.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const {
          displayName: name,
          email,
          photoURL: src,
          accessToken: token,
        } = res.user;
        const user = { name, email, src, token };
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/admin');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
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
        // console.log(error);

        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <section>
      <div className="flex flex-col items-center  lg:flex-row lg:justify-evenly py-10 px-5">
        <div className="text-center  md:w-[50%]">
          <h4 className="font-bold text-5xl ">Student Login</h4>
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
            <form
              className="flex justify-start items-start flex-col"
              onSubmit={(e) => handleSubmit(e)}>
              <div className="relative flex flex-col">
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

              <div className="flex flex-row justify-start ">
                <button
                  type="submit"
                  className="border-2 border-white bg-black text-white mt-2 py-1 px-2 hover:bg-[#8FCA4F]   w-full rounded-full">
                  Sign In
                </button>
                <button
                  onClick={(e) => SignInWithGoogleFunc(e)}
                  type="submit"
                  className="border-2 border-white bg-black text-white mt-2 py-1  hover:bg-red-800 px-2 w-full rounded-full">
                  Sign in with Google
                </button>
              </div>
            </form>

            <Link to="/signup">
              <button
                type="submit"
                className="border-2 border-white bg-black text-white mt-2 py-2 px-6 hover:bg-[#8FCA4F]  rounded-full">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
