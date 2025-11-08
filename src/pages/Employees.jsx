import {React,useState} from 'react'
import Navbar from '../components/Navbar'
import { PlusIcon } from 'lucide-react'
import { UserIcon } from 'lucide-react'
import SearchFilter from '../components/SearchFilter'
import EmployeeDetails from '../components/EmployeeDetails'
import AddEmployee from '../components/AddEmployee'
import EditEmployee from '../components/EditEmployee'
import ConfirmDelete from '../components/ConfirmDelete'

const Employees = () => {
  const [addEmployee, setaddEmployee] = useState(false);
  const [editEmployee, seteditEmployee] = useState(null);
  const [deleteEmp, setdeleteEmp] = useState(null);
const employees = [
  {
    id: 1,
    name: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    department: "Engineering",
    position: "Software Developer",
    salary: "₹75,000",
    status: "Active"
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    department: "Human Resources",
    position: "HR Manager",
    salary: "₹68,000",
    status: "Active"
  },
  {
    id: 3,
    name: "Rohit Verma",
    email: "rohit.verma@example.com",
    department: "Finance",
    position: "Accountant",
    salary: "₹55,000",
    status: "Inactive"
  },
  {
    id: 4,
    name: "Sneha Iyer",
    email: "sneha.iyer@example.com",
    department: "Marketing",
    position: "Marketing Executive",
    salary: "₹60,000",
    status: "Active"
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    department: "IT Support",
    position: "System Administrator",
    salary: "₹50,000",
    status: "Inactive"
  },
  {
    id: 6,
    name: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    department: "Engineering",
    position: "Software Developer",
    salary: "₹75,000",
    status: "Active"
  },
  {
    id: 7,
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    department: "Human Resources",
    position: "HR Manager",
    salary: "₹68,000",
    status: "Active"
  },
  {
    id: 8,
    name: "Rohit Verma",
    email: "rohit.verma@example.com",
    department: "Finance",
    position: "Accountant",
    salary: "₹55,000",
    status: "Inactive"
  },
  {
    id: 9,
    name: "Sneha Iyer",
    email: "sneha.iyer@example.com",
    department: "Marketing",
    position: "Marketing Executive",
    salary: "₹60,000",
    status: "Active"
  },
  {
    id: 10,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    department: "IT Support",
    position: "System Administrator",
    salary: "₹50,000",
    status: "Inactive"
  }
];

  return (
    <div>
      {
        addEmployee?<AddEmployee setaddEmployee={setaddEmployee}/>:''
      }
      {
        deleteEmp?<ConfirmDelete setdeleteEmp={setdeleteEmp}/>:''
      }
      {editEmployee?<EditEmployee e={editEmployee} seteditEmployee={seteditEmployee}/>:""}
      <Navbar/>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='flex w-[95%] h-[30%] m-5'>
            <div className='w-[85%]'>
                <p className='text-3xl font-bold '>Employees</p>
                <p className='text-2xl font-sans text-gray-600 my-6'>Manage your organization's employees</p>
            </div>
            <div className='flex justify-center items-center'>
                <div className='flex m-2 text-lg text-white bg-black px-10 py-3 font-bold rounded-2xl cursor-pointer hover:bg-gray-900 hover:shadow-2xl' onClick={()=>{
                  setaddEmployee(true)
                  document.body.classList.add("overflow-hidden")
                }}><UserIcon/><PlusIcon/> Add Employee</div>
            </div>
        </div>
        <div className='w-[95%]'>
            <SearchFilter/>
        </div>
        <div className='w-[95%] border border-gray-300 rounded-xl my-5'>
        <div className='flex my-10 px-5'>
            <p className='w-[15%] text-xl font-bold'>Name</p>
            <p className='w-[20%] text-xl font-bold'>Email</p>
            <p className='w-[15%] text-xl font-bold'>Department</p>
            <p className='w-[20%] text-xl font-bold'>Position</p>
            <p className='w-[10%] text-xl font-bold'>Salary</p>
            <p className='w-[10%] text-xl font-bold'>Status</p>
            <p className='w-[10%] text-xl font-bold'>Actions</p>
        </div>
        {
            employees.map((e)=>{
                return <EmployeeDetails setdeleteEmp={setdeleteEmp} seteditEmployee={seteditEmployee} e={e} key={e.id}/>
            })
        }
        </div>
      </div>
    </div>
  )
}

export default Employees
