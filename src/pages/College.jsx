import React, { useState } from 'react';
import college from '../assets/col3.jpg';
import { FaLocationDot } from 'react-icons/fa6';
import { BsPinFill } from 'react-icons/bs';
import { VscStarFull } from 'react-icons/vsc';
import { FaHeart } from 'react-icons/fa';
import Btech from './college/Btech';
import Bsc from './college/Bsc';
import Mca from './college/Mca';
import Pharmacy from './college/Pharmacy';
import Mba from './college/Mba';
import { Link } from 'react-router-dom';

const College = () => {
  const [tab, setTab] = useState('btech');

  return (
    <div className='container mt-[100px]'>
      <div>
        <div>
          <div className='college-cover'>
            <div className='p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8'>
              <div>
                <h1 className='text-[25px] xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[28px] font-semibold leading-10'>
                  JSS Academy Of Technical Education
                </h1>
              </div>
              <div className='flex flex-wrap text-[9px] xl:text-[11px] lg:text-[10px] md:text-[9.5px] sm:text-[9px] gap-4 leading-3 mt-[15px]'>
                <p className='flex items-center gap-1'>
                  <FaLocationDot /> Noida, Uttar Pradesh
                </p>
                <p className='flex items-center gap-1'>
                  <BsPinFill /> Estd 2005
                </p>
                <p className='flex items-center gap-1'>
                  <BsPinFill /> AKTU, Lucknow
                </p>
                <p className='flex items-center gap-1'>
                  <BsPinFill /> Private
                </p>
                <p className='flex items-center gap-1'>
                  <BsPinFill /> NAAC
                </p>
                <p className='flex items-center gap-1'>
                  <BsPinFill /> AICTE
                </p>
                <p className='flex items-center gap-1'>
                  <BsPinFill /> UGC
                </p>
              </div>
              <div className='flex items-center text-[12px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[14px] mt-[15px] gap-11'>
                <p className='flex items-center gap-2'>
                  <VscStarFull />
                  4.3 (157)
                </p>
                <p>
                  <FaHeart />
                </p>
              </div>
              <div className='mt-[15px] sm:mt-[20px] md:mt-[25px] lg:mt-[30px] xl:mt-[35px] flex justify-between'>
                <Link to='/contact/1'>
                  <button className='py-[8px] w-[150px] sm:w-[160px] md:w-[170px] px-[10px] bg-gray-700/80 shadow-2xl text-[11.5px] sm:text-[12px] md:text-[12px] lg:text-[12.5px] xl:text-[13px] rounded font-semibold'>
                    Get The Contact Details
                  </button>
                </Link>
                <Link to='/confirm/1'>
                  <button className='py-[8px] w-[150px] sm:w-[160px] md:w-[170px] lg:w-[180px] xl:w-[200px] px-[10px] bg-gray-700/80 shadow-2xl text-[11.5px] sm:text-[12px] md:text-[12px] lg:text-[12.5px] xl:text-[13px] rounded font-semibold'>
                    Book Your Spot
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className='mt-[30px]'>
            <h1 className='mb-[20px] text-[20px] font-semibold'>Available Stream's:</h1>
            <div className='grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-3 justify-between gap-5'>
              <button
                onClick={() => setTab('btech')}
                className={`${
                  tab === 'btech' && 'bg-gray-700/90 rounded'
                } py-2 px-5 mr-5 bg-gray-700/30 rounded hover:bg-gray-700/90 text-[16px] font-semibold`}
              >
                B.tech
              </button>
              <button
                onClick={() => setTab('mca')}
                className={`${
                  tab === 'mca' && 'bg-gray-700/90 rounded'
                } py-2 px-5 mr-5 bg-gray-700/30 rounded hover:bg-gray-700/90 text-[16px] font-semibold`}
              >
                MCA
              </button>
              <button
                onClick={() => setTab('bsc')}
                className={`${
                  tab === 'bsc' && 'bg-gray-700/90 rounded'
                } py-2 px-5 mr-5 bg-gray-700/30 rounded hover:bg-gray-700/90 text-[16px] font-semibold`}
              >
                Bsc
              </button>
              <button
                onClick={() => setTab('pharmacy')}
                className={`${
                  tab === 'pharmacy' && 'bg-gray-700/90 rounded'
                } py-2 px-5 mr-5 bg-gray-700/30 rounded hover:bg-gray-700/90 text-[16px] font-semibold`}
              >
                Pharmacy
              </button>
              <button
                onClick={() => setTab('mba')}
                className={`${
                  tab === 'mba' && 'bg-gray-700/90 rounded'
                } py-2 px-5 mr-5 bg-gray-700/30 rounded hover:bg-gray-700/90 text-[16px] font-semibold`}
              >
                MBA
              </button>
            </div>
            <hr className='mt-[30px]' />
            <div className='mt-[50px]'>
              {tab === 'btech' && <Btech />}
              {tab === 'bsc' && <Bsc />}
              {tab === 'mca' && <Mca />}
              {tab === 'pharmacy' && <Pharmacy />}
              {tab === 'mba' && <Mba />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default College;
