import {React,useState} from 'react'
import Select from 'react-select'
import { toast } from 'react-toastify'
import { CalendarIcon, IndianRupeeIcon, PlusIcon } from 'lucide-react'
import DatePicker from 'react-datepicker'
const AddAttendance = ({setaddAttendance}) => {
    const [selectdept, setselectdept] = useState(null)
    const [selectpos, setselectpos] = useState(null)
    const [date, setdate] = useState(new Date())
    const options = [{ value: "engineering", label: "Engineering" }]
    const optionsStatus = [{value:"present",label:"Present"},{value:"absent",label:"Absent"},{value:"leave",label:"Label"}] 
    const [Status, setStatus] = useState(null)
    const employees = [{value:"Aarav Mehta",label:"Aarav Mehta"}]
    const [employee, setemployee] = useState(null)
    let Today=new Date();
    Today=Today.toDateString();
    return (
        <div onClick={() => {
            setaddAttendance(false)
            document.body.classList.remove("overflow-hidden")
        }} className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800/40">
            <div className='w-[40%] h-[70%] flex flex-col bg-white rounded-2xl' onClick={(e) => { e.stopPropagation() }}>
                <div className='text-center p-5 text-2xl font-bold'>Mark Attendance</div>
                <div className='h-full flex flex-col gap-5'>
                    <div className='px-5'>
                        <label className='text-xl font-medium'>Employee</label>
                        <Select
                        options={employees}
                        value={employee}
                        onChange={setemployee}
                        placeholder='Select Employee...'
                        />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <div className='w-[50%] px-5 flex flex-col'>
                            <label className='text-xl font-medium'>Date</label>
                            <div className='flex items-center gap-2'>
                                <CalendarIcon/>
                                <div className='w-[50%] border rounded-lg p-2 text-center shadow-sm'>{Today}</div>
                            </div>
                        </div>
                        <div className='w-[50%] px-5'>
                            <label className='text-xl font-medium flex items-center gap-1'>Status</label>
                            <Select
                                options={optionsStatus}
                                value={Status}
                    
                                onChange={setStatus}
                                placeholder='Select Status...'
                            />
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <div className='w-[50%] px-5 flex flex-col'>
                            <label className='text-xl font-medium flex items-center gap-1'>Check In</label>
                            <input type="time" className='w-full my-2 pl-3 pr-4 py-2 bg-white border border-gray-300  
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition-all'/>
                        </div>
                        <div className='w-[50%] px-5'>
                            <label className='text-xl font-medium flex items-center gap-1'>Check Out</label>
                            <input type="time" className='w-full my-2 pl-3 pr-4 py-2 bg-white border border-gray-300  
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition-all'/>
                        </div>
                    </div>
                    <div className='px-5 flex flex-col h-full'>
                        <label className='text-xl font-medium'>Notes</label>
                        <textarea className='w-full h-[95%] pl-3 pr-4 py-2 bg-white border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition-all' placeholder='Optional Notes...'/>
                    </div>
                    
                    <div className='w-full flex items-center justify-end gap-3'>
                        <div onClick={()=>{setaddAttendance(false)}} className=' border py-3 px-2 rounded-2xl cursor-pointer hover:shadow-2xl'>Cancel</div>
                        <div className='flex m-5 text-white bg-black font-bold rounded-2xl py-3 px-5 hover:shadow-2xl cursor-pointer hover:bg-gray-900'>Save</div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AddAttendance
