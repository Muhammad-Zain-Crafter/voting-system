import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Register from './pages/auth/Register'
import LogIn from './pages/auth/Login'
import VoterDashboard from './pages/dashboard/VoterDashboard'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar/>
          <Home/>
          <Footer/>
        </div>
      )
    },
    {
      path: "/register",
      element: (
        <div>
          <Navbar/>
          <Register/>
        </div>
      )
    },
    {
      path: "/login",
      element: (
        <div>
          <Navbar/>
          <LogIn/>
        </div>
      )
    },
    {
      path: "/voter-dashboard",
      element: (
        <div>
          <Navbar/>
          <VoterDashboard/>
          <Footer/>
        </div>
      )
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
