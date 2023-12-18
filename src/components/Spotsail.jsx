import React from 'react';
import luffy from '../assets/luffy.gif';
import { FiLogIn } from 'react-icons/fi';
import { BiCategory } from 'react-icons/bi';
import { MdEventAvailable } from 'react-icons/md';
import { IoTicketSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Spotsail = () => {
  return (
    <div className='spot shadow-[inset_0px_20px_20px_10px_#00000024]'>
      <div className='container'>
        <div className='container mt-[30px] pt-[50px] pb-[50px]'>
          <div>
            <div className='flex justify-center items-center gap-5'>
              <div>
                <img
                  src={luffy}
                  alt=''
                  className='h-[70px] xl:h-[80px] lg:h-[76px] md:h-[74px] sm:h-[72px] '
                />
              </div>
              <div className='leading-8'>
                <h2 className='text-[15px] xl:text-[16px] lg:text-[16px] md:text-[15px] sm:text-[15px] font-semibold'>
                  What is SpotSail?
                </h2>
                <h1 className='text-[25px] xl:text-[40px] lg:text-[38px] md:text-[35px] sm:text-[30px] font-bold uppercase'>
                  How this works?
                </h1>
              </div>
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 mt-[50px] text-[15px] '>
              <div className='p-3 text-[14px] px-[20px] rounded-[30px] bg-gray-700/30 shadow-[inset_0px_20px_20px_10px_#00000024]'>
                <p>
                  Spotsail revolutionizes the way we navigate our daily lives by offering a
                  comprehensive platform that seamlessly connects users with real-time information
                  on available seating across diverse establishments.
                </p>
              </div>
              <div className='p-3 text-[14px] px-[20px] rounded-[30px] bg-gray-700/30 shadow-[inset_0px_20px_20px_10px_#00000024]'>
                <p>
                  Spotsail empowers you with instant access to data on vacant seats in restaurants,
                  colleges, hospitals, and hotels. Say goodbye to uncertainty and hello to a world
                  where the perfect seat is just a click away with Spotsail.
                </p>
              </div>
            </div>
            <div className='mt-[30px] '>
              <h2 className='text-[18px] mb-[10px]'>#getStarted</h2>
              <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-5 '>
                <Link to='/log-in'>
                  <div className='shadow-[inset_0px_0px_20px_10px_#00000024] p-4 rounded cursor-pointer'>
                    <div className='bg-gray-700 w-[35px] h-[35px] flex items-center justify-center rounded-full mb-[8px]'>
                      <FiLogIn />
                    </div>
                    <div>
                      <h3 className='text-[18px] mb-3 font-bold'>Login/SignUp</h3>
                    </div>
                    <div>
                      <p className='text-[14px]'>
                        Start by creating a Spotsail account or logging in if you're a returning
                        user.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link to='/log-in'>
                  <div className='shadow-[inset_0px_0px_20px_10px_#00000024] p-4 rounded cursor-pointer'>
                    <div className='bg-gray-700 w-[35px] h-[35px] flex items-center justify-center rounded-full mb-[8px]'>
                      <BiCategory />
                    </div>
                    <h3 className='text-[18px] mb-3 font-bold'>Location and Category</h3>
                    <p className='text-[14px]'>
                      Choose your preferred location and select the relevant category (restaurant,
                      college, hospital, hotel).
                    </p>
                  </div>
                </Link>

                <Link to='/log-in'>
                  <div className='shadow-[inset_0px_0px_20px_10px_#00000024] p-4 rounded cursor-pointer'>
                    <div className='bg-gray-700 w-[35px] h-[35px] flex items-center justify-center rounded-full mb-[8px]'>
                      <MdEventAvailable />
                    </div>
                    <h3 className='text-[18px] mb-3 font-bold'>View Real-Time Availability</h3>
                    <p className='text-[14px]'>
                      Check the real-time availability of vacant seats in your selected location and
                      category.
                    </p>
                  </div>
                </Link>

                <Link to='/log-in'>
                  <div className='p-4 rounded shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer'>
                    <div className='bg-gray-700 w-[35px] h-[35px] flex items-center justify-center rounded-full mb-[8px]'>
                      <IoTicketSharp />
                    </div>
                    <h3 className='text-[18px] mb-3 font-bold'>Reservation</h3>
                    <p className='text-[14px]'>
                      Reserve your spot on the app, get a confirmation with detail, and enjoy a
                      hassle-free Spotsail experience!
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotsail;
