import React, { useState } from 'react';
import { motion } from 'framer-motion';

// SVG Google Icon
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = () => {
    alert('Google Login button clicked!');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Login attempt for ${email}`);
  };

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-[#f7f8fa] font-[Poppins]">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
        className="bg-white p-12 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] w-full max-w-xl mx-4"
      >

        {/* Logo */}
        <div className="text-center text-4xl font-semibold text-[#cccccc] select-none mb-10 tracking-widest animate-pulse">
          YOUR LOGO
        </div>



        <h2 className="text-center mb-4 font-semibold text-3xl text-[#222]">Sign in to your account</h2>


        {/* {Google Sign in Button} */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition duration-300 mt-4"
        >
          <GoogleIcon />
          Sign in with Google
        </button>

        <div className="flex items-center text-center text-gray-400 my-8">
          <span className="flex-1 border-b border-gray-300"></span>
          <span className="px-2">OR</span>
          <span className="flex-1 border-b border-gray-300"></span>
        </div>
        {/* Google Sign in Button End */}



        {/* Form Started  */}
        <form onSubmit={handleFormSubmit} className="space-y-8">


          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
              className="peer w-full px-2 py-3 border-0 border-b-2 border-gray-300 bg-transparent text-gray-800 text-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
            />
            <label
              htmlFor="email"
              className="absolute left-2 top-3 text-gray-400 text-lg transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:top-[-20px] peer-focus:text-sm peer-focus:text-blue-500"
            >
              Email Address
            </label>
          </div>
          {/* Email Field End */}




          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
              className="peer w-full px-2 py-3 border-0 border-b-2 border-gray-300 bg-transparent text-gray-800 text-lg focus:outline-none focus:border-blue-500 transition-all duration-300"
            />
            <label
              htmlFor="password"
              className="absolute left-2 top-3 text-gray-400 text-lg transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:top-[-20px] peer-focus:text-sm peer-focus:text-blue-500"
            >
              Password
            </label>
          </div>
          {/* Password Fuils End  */}



          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="relative inline-flex items-center justify-center w-full px-6 py-4 overflow-hidden text-blue-600 border-2 border-blue-600 
             rounded-md group hover:text-white transition duration-300 font-semibold text-lg"
          >
            {/* Slide-in fill layer */}
            <span className="absolute left-0 top-0 w-0 h-full bg-blue-600 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>

            {/* Text stays on top */}
            <span className="relative z-10">Sign In</span>
          </motion.button>
          {/* Submit Button End*/}



          {/* don't have an account button */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{' '}
            <a href="/register" className="text-blue-600 hover:underline hover:font-medium transition">
              Register here
            </a>
          </p>
          {/* don't have an account button End*/}


        </form>
        {/* Form End*/}


      </motion.div>
    </div>
  );
};

export default LoginForm;

//test
