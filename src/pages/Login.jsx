import { useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <div className='container mt-[140px] xl:mt-[100px] lg:mt-[110px] md:mt-[120px] sm:mt-[120px] mb-[80px]'>
      <div className='container flex justify-center'>
        <div className='shadow-[inset_0px_20px_20px_10px_#00000024] p-11'>
          <div>
            <div>
              <h1 className='text-[22px] xl:text-[30px] lg:text-[28px] md:text-[26px] sm:text-[24px] font-bold mb-[30px]'>
                Login to your account
              </h1>
            </div>
            <div className='flex flex-col mb-[15px]'>
              <label htmlFor='' className='text-[15px] mb-[5px]'>
                Email
              </label>
              <input
                name='email'
                type='email'
                className='bg-transparent outline-none border-solid border-[1px] border-gray-400 px-[10px] py-[5px] rounded'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='' className='text-[15px] mb-[5px]'>
                Password
              </label>
              <input
                name='password'
                type='password'
                className='bg-transparent outline-none border-solid border-[1px] border-gray-400 px-[10px] py-[5px] rounded'
              />
            </div>
            <button className='w-full mt-[20px] mb-[10px] p-1 bg-gray-500/30 shadow-[inset_0px_20px_20px_10px_#00000024]'>
              Login
            </button>
          </div>
          <p className='text-[14px]'>
            Don't have an account? <span>Signup</span>
          </p>
          <button className='w-full mt-[40px] mb-[10px] p-1 bg-gray-500/30 shadow-[inset_0px_20px_20px_10px_#00000024] flex gap-2 items-center justify-center'>
            <FaGoogle />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
