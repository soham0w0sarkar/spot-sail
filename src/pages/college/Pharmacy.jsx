import React from 'react'

const Pharmacy = () => {
  return (
    <div>
        <div>
            <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-10'>

                <div className='flex flex-col justify-between rounded bg-gray-700/20 shadow-2xl p-2 items-center gap-5'>
                    <h1 className='text-center text-[16px] font-semibold'>Pharmaceutics</h1>
                    <p className='text-[15px] border-dashed border-t-[1.5px] border-gray-700/90 text-center'>Available Seats: 121</p>
                </div>

                <div className='flex flex-col justify-between rounded bg-gray-700/20 shadow-2xl p-2 items-center gap-5'>
                    <h1 className='text-center text-[16px] font-semibold'>Medicinal chemistry</h1>
                    <p className='text-[15px] border-dashed border-t-[1.5px] border-gray-700/90 text-center'>Available Seats: 121</p>
                </div>

                <div className='flex flex-col justify-between rounded bg-gray-700/20 shadow-2xl p-2 items-center gap-5'>
                    <h1 className='text-center text-[16px] font-semibold'>Pharmacognosy</h1>
                    <p className='text-[15px] border-dashed border-t-[1.5px] border-gray-700/90 text-center'>Available Seats: 121</p>
                </div>

                <div className='flex flex-col justify-between rounded bg-gray-700/20 shadow-2xl p-2 items-center gap-5'>
                    <h1 className='text-center text-[16px] font-semibold'>Pharmacy practice</h1>
                    <p className='text-[15px] border-dashed border-t-[1.5px] border-gray-700/90 text-center'>Available Seats: 121</p>
                </div>

                <div className='flex flex-col justify-between rounded bg-gray-700/20 shadow-2xl p-2 items-center gap-5'>
                    <h1 className='text-center text-[16px] font-semibold'>Pharmacology</h1>
                    <p className='text-[15px] border-dashed border-t-[1.5px] border-gray-700/90 text-center'>Available Seats: 121</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Pharmacy