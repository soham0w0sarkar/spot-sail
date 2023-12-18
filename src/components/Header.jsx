import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  return (
    <div className='header p-4 fixed top-0 w-full overflow-hidden z-[99999]'>
      <div className='container flex justify-between items-center border-gray-600'>
        <div className='flex items-center gap-10'>
          <div>
            <Link to='' className='cursor-pointer'>
              <img
                src={logo}
                alt=''
                className='h-[25px] xl:h-[30px] lg:h-[28px] md:h-[27px] sm:h-[26px]'
              />
            </Link>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <div>
            <Link to='/log-in'>
              <button className='border-[1px] border-slate-600 hover:bg-slate-600 w-[70px] xl:w-[80px] lg:w-[78px] md:w-[75px] sm:w-[73px] px-[15px] py-[5px] rounded font-semibold'>
                Login
              </button>
            </Link>
          </div>
          <div>
            <Link to='/sign-up'>
              <button className='bg-gray-100 text-black w-[70px] xl:w-[80px] lg:w-[78px] md:w-[75px] sm:w-[73px] px-[15px] py-[5px] rounded font-semibold flex justify-center items-center'>
                SignUp
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
