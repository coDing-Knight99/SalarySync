    import { React, useState } from 'react'
    import Select from 'react-select'
    import { toast } from 'react-toastify'
    import { CalendarIcon, IndianRupeeIcon, PlusIcon } from 'lucide-react'
    import DatePicker from 'react-datepicker'
const AddEmployee = ({ setaddEmployee }) => {
    const [selectdept, setselectdept] = useState(null)
    const [selectpos, setselectpos] = useState(null)
    const [date, setdate] = useState(new Date())
    const options = [{ value: "engineering", label: "Engineering" }]
    const optionsStatus = [{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}] 
    const [Status, setStatus] = useState(null)
    return (
        <div onClick={() => {
            setaddEmployee(false)
            document.body.classList.remove("overflow-hidden")
        }} className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800/40">
            <div className='w-[40%] h-[70%] flex flex-col bg-white rounded-2xl' onClick={(e) => { e.stopPropagation() }}>
                <div className='text-center p-5 text-2xl font-bold'>Add New Employee</div>
                <div className='flex flex-col gap-5'>
                    <div className='px-5'>
                        <label className='text-xl font-medium'>Full Name</label>
                        <input className="w-full my-2 pl-3 pr-4 py-2 bg-white border border-gray-300 rounded-xl 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition-all" placeholder='Enter Employee Name...' type="text" />
                    </div>
                    <div className='px-5'>
                        <label className='text-xl font-medium'>Email</label>
                        <input className="w-full my-2 pl-3 pr-4 py-2 bg-white border border-gray-300 rounded-xl 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition-all" placeholder='Enter Employee email...' type="text" />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <div className='w-[50%] px-5 flex flex-col'>
                            <label className='text-xl font-medium'>Department</label>
                            <Select
                                options={options}
                                value={selectdept}
                                onChange={setselectdept}
                                placeholder='Select Department...'
                            />
                        </div>
                        <div className='w-[50%] px-5'>
                            <label className='text-xl font-medium'>Position</label>
                            <Select
                                options={selectdept ? options : ''}
                                value={selectpos}
                                onFocus={() => {
                                    if (!selectdept) {
                                        toast('Please Select department first')
                                    }
                                }}
                                onChange={setselectpos}
                                placeholder='Select Position...'
                            />
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <div className='w-[50%] px-5 flex flex-col'>
                            <label className='text-xl font-medium flex items-center gap-1'><div><IndianRupeeIcon className='w-5' /></div> Monthly Salary</label>
                            <input type='number' placeholder='Enter Monthly Salary...' className='w-full my-2 pl-3 pr-4 py-2 bg-white border border-gray-300  
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition-all'/>
                        </div>
                        <div className='w-[50%] px-5'>
                            <label className='text-xl font-medium flex items-center gap-1'>Overtime Rate <div className='flex items-center'><IndianRupeeIcon className='w-5' />/hr</div></label>
                            <input type="number" className='w-full my-2 pl-3 pr-4 py-2 bg-white border border-gray-300  
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition-all' placeholder='Enter Overtime Rate (Rupees/hour)...'/>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <div className='w-[50%] px-5 flex flex-col'>
                            <label className='text-xl font-medium flex items-center gap-1'>Joining Date</label>
                            <div className='w-full flex gap-2 items-center'>
                                <CalendarIcon/>
                                <DatePicker
                                    selected={date}
                                    onChange={setdate}
                                    dateFormat={"dd/MM/yyyy"}
                                    className='w-full border rounded-lg p-2 text-center shadow-sm cursor-pointer' 
                                    placeholderText='Select Joining Date...'
                                    />
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
                    <div className='w-full flex items-center justify-end gap-3'>
                        <div onClick={()=>{setaddEmployee(false)}} className=' border py-3 px-2 rounded-2xl cursor-pointer hover:shadow-2xl'>Cancel</div>
                        <div className='flex m-5 text-white bg-black font-bold rounded-2xl py-3 px-5 hover:shadow-2xl cursor-pointer hover:bg-gray-900'><PlusIcon/> Add</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee
