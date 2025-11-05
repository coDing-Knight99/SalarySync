import React from 'react'

const AttendanceDetails = ({a}) => {
  return (
            <div className='flex my-10 px-5'>
                <p className='w-[15%] text-lg font-bold'>{a.employee}</p>
                <p className='w-[15%] text-lg font-bold'>{a.department}</p>
                <p className='w-[15%] text-lg text-gray-800 font-bold flex items-center justify-center'>
                    <p className='w-10 h-10 text-white bg-black py-1 rounded-full flex items-center justify-center text-center'>{a.present_days}</p>
                </p>
                <p className='w-[15%] text-lg text-gray-800 font-bold flex items-center justify-center'>
                    <p className='w-10 h-10 text-white bg-red-500 py-1 rounded-full flex text-center justify-center items-center'>{a.absent_days}</p>
                </p>
                <p className='w-[15%] text-lg text-gray-800 font-bold text-center'>{a.leave_days}</p>
                <p className='w-[15%] text-lg text-gray-800 font-bold text-center'>{a.overtime_hours}</p>
                <p className='w-[15%] text-lg text-gray-800 font-bold text-center'>{a.attendance_rate}</p>
            </div>

  )
}

export default AttendanceDetails
