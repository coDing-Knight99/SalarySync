import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Employees from './pages/Employees'
import Attendance from './pages/Attendance'
import { ToastContainer } from 'react-toastify'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer className="font-bold"/>
     <Employees/>
     <Attendance/>
    </>
  )
}

export default App
