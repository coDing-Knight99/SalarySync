import { React , useState } from "react";
import { Users , IndianRupee , Calendar , Clock , ChartNoAxesCombined , CircleAlert, Circle } from "lucide-react";
import { FaRupeeSign } from "react-icons/fa" ;
import Navbar from "../components/Navbar";
const Dashboard = () => {
    const [activeEmployeeCount, setActiveEmployeeCount] = useState(5) ;
    const [totalMonthlyPayroll , setTotalMonthlyPayroll] = useState(34000) ;
    const [avgSalary, setAvgSalary] = useState(6800) ;
    const [attendanceRate, setAttendanceRate] = useState(90.0) ;
    const [totalOvertime , setOvertime] = useState(41.5) ;
    const [pendingPayment, setPendingPayment] = useState(5)

  return (
    <>
    <Navbar/>
    <div className="px-10 md:px-40 min-h-screen py-10 bg-gray-50">
      <div className="Dashboard-box w-full flex flex-col gap-10">
        <div className="Dashboard-text w-full h-20">
          <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
          <h2 className="text-sm md:text-md text-gray-500 mt-2">
            Key metrics and insights for your organization
          </h2>
        </div>
        <div className="Dashboard-data w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="Box bg-white text-black p-6 rounded-xl text-center border border-gray-200 flex flex-col gap-4 justify-between">
            <div className="boxTop flex flex-row items-center gap-4">
              <h1 className="text-md">Total Employees</h1>
              <Users className="scale-75" />
            </div>
            <div className="boxBottom text-left">
                <h1 className="text-4xl font-bold">{activeEmployeeCount}</h1>
                <h2 className="text-[12px] text-gray-500 mt-1">Active Employees</h2>
            </div>
          </div>
          <div class="Box bg-white text-black p-6 rounded-xl text-center border border-gray-200 flex flex-col gap-4 justify-between">
            <div className="boxTop flex flex-row items-center gap-4">
              <h1 className="text-md">Total Montly Payroll</h1>
              <IndianRupee className="scale-75" />
            </div>
            <div className="boxBottom text-left">
                <h1 className="text-4xl font-bold flex flex-row items-center"><FaRupeeSign className="scale-50 font-bold w-5" />{totalMonthlyPayroll}</h1>
                <h2 className="text-[12px] text-gray-500 mt-1 ml-[22px]">Per month</h2>
            </div>
          </div>
                    <div class="Box bg-white text-black p-6 rounded-xl text-center border border-gray-200 flex flex-col gap-4 justify-between">
            <div className="boxTop flex flex-row items-center gap-4">
              <h1 className="text-md">Average Salary</h1>
              <ChartNoAxesCombined className="scale-75" />
            </div>
            <div className="boxBottom text-left">
                <h1 className="text-4xl font-bold flex flex-row items-center"><FaRupeeSign className="scale-50 font-bold w-5" />{avgSalary}</h1>
                <h2 className="text-[12px] text-gray-500 mt-1 ml-[22px]">Per employee</h2>
            </div>
          </div>
                    <div class="Box bg-white text-black p-6 rounded-xl text-center border border-gray-200 flex flex-col gap-4 justify-between">
            <div className="boxTop flex flex-row items-center gap-4">
              <h1 className="text-md">Attendance Rate</h1>
              <Calendar className="scale-75" />
            </div>
            <div className="boxBottom text-left">
                <h1 className="text-4xl font-bold">{attendanceRate}%</h1>
                <h2 className="text-[12px] text-gray-500 mt-1">This month</h2>
            </div>
          </div>
                    <div class="Box bg-white text-black p-6 rounded-xl text-center border border-gray-200 flex flex-col gap-4 justify-between">
            <div className="boxTop flex flex-row items-center gap-4">
              <h1 className="text-md">Total Overtime</h1>
              <Clock className="scale-75" />
            </div>
            <div className="boxBottom text-left">
                <h1 className="text-4xl font-bold">{totalOvertime} h</h1>
                <h2 className="text-[12px] text-gray-500 mt-1">This month</h2>
            </div>
          </div>
                    <div class="Box bg-white text-black p-6 rounded-xl text-center border border-gray-200 flex flex-col gap-4 justify-between">
            <div className="boxTop flex flex-row items-center gap-4">
              <h1 className="text-md">Pending Payment</h1>
              <CircleAlert className="scale-75" />
            </div>
            <div className="boxBottom text-left">
                <h1 className="text-4xl font-bold">{pendingPayment}</h1>
                <h2 className="text-[12px] text-gray-500 mt-1">This month</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Dashboard;
