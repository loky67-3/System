import React from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dasboard from "./pages/Dasboard"
import axios from "axios"
import { Toaster } from 'react-hot-toast'




axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true




function App() {
  const location = useLocation();
  return (
    <>
    {location.pathname !== "/dashboard" && location.pathname !== "/login" && location.pathname !== "/register" && <Navbar/>}
    <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dasboard />} />

    </Routes>
    </>
  )
}

export default App;