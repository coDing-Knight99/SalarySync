import React from 'react'
import { useState,useEffect } from 'react';
import { ClipboardCheckIcon } from 'lucide-react';
import { Users } from 'lucide-react';
import { LogOutIcon } from 'lucide-react';
import { IndianRupeeIcon } from 'lucide-react';
import { LayoutDashboardIcon } from 'lucide-react';
import axios from 'axios';
const Navbar = () => {
  return (
    <div className='flex justify-between w-full h-[10%]'>
      <div className='flex flex-col gap-2'>
        <div className='flex pl-5 pt-5 lg:pl-10 lg:pt-10'>
            <p className='text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-blue-500'>S</p>
            <p className='text-3xl sm:text-4xl lg:text-5xl font-sans font-bold  '>alary</p>
            <p className='text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-blue-500'>S</p>
            <p className='text-3xl sm:text-4xl lg:text-5xl font-sans font-bold'>ync</p>    
        </div>
        <div>
            <p className='text-xl lg:text-2xl font-sans text-gray-600 p-5 lg:pl-10'>Manage employees, attendance, and payroll efficiently</p>
        </div>
      </div>
      <div className=''>
        <ul className='flex gap-5'>
          
              <div className='flex items-center justify-center'>
                <li className='flex cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 lg:mt-10 lg:mr-10 mt-3 p-2 font-bold text-xl'><LayoutDashboardIcon className='cursor-pointer m-2'/> Dashboard</li>
                <li className='flex cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 lg:mt-10 lg:mr-10 mt- p-2 font-bold text-xl '><Users className='cursor-pointer m-2'/> Employees</li>
                <li className='flex cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 lg:mt-10 lg:mr-10 mt- p-2 font-bold text-xl ' ><ClipboardCheckIcon className='cursor-pointer m-2'/> Attendance</li>
                <li className='flex cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 lg:mt-10 lg:mr-10 mt- p-2 font-bold text-xl '><IndianRupeeIcon className='cursor-pointer m-2'/> Payroll</li>
                <li className='flex cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-gray-200 lg:mt-10 lg:mr-10 mt-3 text-xl' ><LogOutIcon/></li>
              </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
