import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { PlusIcon } from 'lucide-react'
import AttendanceDetails from '../components/AttendanceDetails'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar1Icon } from 'lucide-react'
import AddAttendance from '../components/AddAttendance'
const Attendance = () => {

    const [addAttendance, setaddAttendance] = useState(false)
    const [selectedDate, setselectedDate] = useState(new Date())
    useEffect(() => {
    }, [selectedDate])
    

    const attendanceRecords = [
  {
    id: 1,
    employee: "Aarav Mehta",
    department: "Engineering",
    present_days: 22,
    absent_days: 2,
    leave_days: 1,
    overtime_hours: 5,
    attendance_rate: "91%"
  },
  {
    id: 2,
    employee: "Priya Sharma",
    department: "Human Resources",
    present_days: 24,
    absent_days: 0,
    leave_days: 1,
    overtime_hours: 3,
    attendance_rate: "96%"
  },
  {
    id: 3,
    employee: "Rohit Verma",
    department: "Finance",
    present_days: 18,
    absent_days: 4,
    leave_days: 2,
    overtime_hours: 1,
    attendance_rate: "80%"
  },
  {
    id: 4,
    employee: "Sneha Iyer",
    department: "Marketing",
    present_days: 21,
    absent_days: 3,
    leave_days: 2,
    overtime_hours: 6,
    attendance_rate: "88%"
  },
  {
    id: 5,
    employee: "Vikram Singh",
    department: "IT Support",
    present_days: 20,
    absent_days: 4,
    leave_days: 1,
    overtime_hours: 8,
    attendance_rate: "86%"
  },
  {
    id: 6,
    employee: "Neha Patel",
    department: "Engineering",
    present_days: 25,
    absent_days: 0,
    leave_days: 0,
    overtime_hours: 10,
    attendance_rate: "100%"
  },
  {
    id: 7,
    employee: "Arjun Nair",
    department: "Sales",
    present_days: 19,
    absent_days: 3,
    leave_days: 3,
    overtime_hours: 4,
    attendance_rate: "84%"
  },
  {
    id: 8,
    employee: "Kavya Reddy",
    department: "Design",
    present_days: 23,
    absent_days: 1,
    leave_days: 1,
    overtime_hours: 2,
    attendance_rate: "92%"
  },
  {
    id: 9,
    employee: "Manish Kumar",
    department: "Operations",
    present_days: 22,
    absent_days: 2,
    leave_days: 1,
    overtime_hours: 6,
    attendance_rate: "91%"
  },
  {
    id: 10,
    employee: "Tanya Deshmukh",
    department: "Engineering",
    present_days: 21,
    absent_days: 3,
    leave_days: 2,
    overtime_hours: 7,
    attendance_rate: "87%"
  }
];

  return (
    <div>
      <Navbar/>
      {
        addAttendance?<AddAttendance setaddAttendance={setaddAttendance}/>:''
      }
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='flex w-[95%] h-[30%] m-5'>
            <div className='w-[85%]'>
                <p className='text-3xl font-bold '>Attendance Tracker</p>
                <p className='text-2xl font-sans text-gray-600 my-6'>Monitor and manage employee attendance</p>
            </div>
            <div className='flex justify-center items-center'>
                <div className='flex m-2 text-lg text-white bg-black px-5 py-3 font-bold rounded-2xl cursor-pointer hover:bg-gray-900' onClick={()=>{setaddAttendance(true)}}><PlusIcon/> Mark Attendance</div>
            </div>
        </div>
        <div className='w-[95%] flex gap-4 items-center'>
            <Calendar1Icon/>
            <DatePicker 
                selected={selectedDate}
                onChange={(date)=>{setselectedDate(date)
                }}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                 className="border rounded-lg p-2 text-center shadow-sm cursor-pointer"        
                />       
        </div>
        <div className='w-[95%] border border-gray-300 rounded-xl my-5 '>
        <div className='flex my-10 px-5'>
            <p className='w-[15%] text-xl font-bold'>Employee</p>
            <p className='w-[15%] text-xl font-bold'>Department</p>
            <p className='w-[15%] text-xl font-bold text-center'>Present Days</p>
            <p className='w-[15%] text-xl font-bold text-center'>Absent Days</p>
            <p className='w-[15%] text-xl font-bold text-center'>Leave Days</p>
            <p className='w-[15%] text-xl font-bold text-center'>OverTime Hours</p>
            <p className='w-[15%] text-xl font-bold text-center'>Attendance Rate</p>
        </div>
        {
            attendanceRecords.map((a)=>{
                return <AttendanceDetails a={a} key={a.id}/>
            })
        }
        </div>
      </div>
    </div>
  )
}

export default Attendance
