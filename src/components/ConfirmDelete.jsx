import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const ConfirmDelete = ({deleteEmp,setdeleteEmp}) => {
  
  return (
    <div onClick={()=>{
        setdeleteEmp(null)
        document.body.classList.remove("overflow-hidden")
    }} className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800/40">
      <div onClick={(e)=>{e.stopPropagation()}} className="h-[35%] w-[95%] lg:w-[45%] bg-white rounded-2xl shadow-lg lg:p-6 p-3 overflow-y-auto">
        <div className='p-5 flex flex-col gap-2'>
            <p className='lg:text-3xl text-2xl font-medium text-center m-5'>Are You Sure?</p>
            <p className='lg:text-2xl text-xl text-gray-500'>This will permanently delete the employee and all associated payroll and attendance records. This action cannot be undone.</p>
        </div>
        <div className='flex justify-end'>
                    <button onClick={()=>{
                        setdeleteEmp(null)
                        document.body.classList.remove("overflow-hidden")
                    }} className='cursor-pointer flex items-center justify-center h-15 w-35 text-xl lg:text-2xl my-3 mx-3 py-5 px-3 border border-gray-300 rounded-2xl hover:bg-gray-400 font-medium'>Cancel</button>
                    <button onClick={async()=>{
                      setdeleteEmp(null)
                        document.body.classList.remove("overflow-hidden")
                    }} className='cursor-pointer flex items-center justify-center h-15 w-35 text-xl lg:text-2xl my-3 mx-3 py-3 px-3 border rounded-2xl text-white bg-black font-medium hover:bg-gray-900'>Delete</button>
                   </div>
      </div>
    </div>
  )
}

export default ConfirmDelete
