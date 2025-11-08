import React from 'react'
import { Edit } from 'lucide-react'
import { Trash2Icon } from 'lucide-react'

const EmployeeDetails = ({e,seteditEmployee,setdeleteEmp}) => {
  return (
        <div className='w-full flex my-10 px-5'>
            <p className='w-[15%] text-lg font-bold text-gray-800'>{e.name}</p>
            <p className='w-[20%] text-lg font-bold text-gray-800'>{e.email}</p>
            <p className='w-[15%] text-lg font-bold text-gray-800'>{e.department}</p>
            <p className='w-[20%] text-lg font-bold text-gray-800'>{e.position}</p>
            <p className='w-[10%] text-lg font-bold text-gray-800'>{e.salary}</p>
            <p className='w-[10%] text-lg font-bold'>
                <p className='w-[50%] text-center bg-black text-white rounded-xl'>{e.status}</p>
                </p>
            <p className='w-[10%] text-xl font-bold flex gap-5 items-center' ><Edit onClick={()=>{seteditEmployee(e)
              document.body.classList.add("overflow-hidden")
            }}/><Trash2Icon onClick={()=>{setdeleteEmp(e)
              document.body.classList.add("overflow-hidden")
            }} className='text-red-500'/></p>
        </div>
  )
}

export default EmployeeDetails
