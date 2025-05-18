import React from 'react'
import NavBarIndex from './Components/NavBarComponents/NavBarIndex'
import { NavLink, Outlet } from 'react-router-dom'
import { IoHome } from 'react-icons/io5'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { IoMdContact } from 'react-icons/io'
import { FaInfoCircle } from 'react-icons/fa'
import ScrollToTop from './Components/utilities/ScrollToTop'
import Navbar from './Components/NavBarComponents/Navbar'
import { AnimatePresence } from 'motion/react'

const App = () => {
  return (
    <section className='w-full min-h-screen bg-primary text-white relative'>
      <ScrollToTop />
      <NavBarIndex />
      <section className='w-full min-h-[90vh]'>
        <Outlet />
      </section>

    </section>
  )
}

export default App