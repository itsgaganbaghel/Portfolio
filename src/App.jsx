import React from 'react'
import NavBarIndex from './Components/NavBarComponents/NavBarIndex'
import { NavLink, Outlet } from 'react-router-dom'
import { IoHome } from 'react-icons/io5'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { IoMdContact } from 'react-icons/io'
import { FaInfoCircle } from 'react-icons/fa'
import ScrollToTop from './Components/utilities/ScrollToTop'

const App = () => {
  return (
    <section className='w-full min-h-screen bg-primary text-white relative'>
      <ScrollToTop />
      <NavBarIndex />
      <section className='w-full min-h-[90vh]'>
        <Outlet />
      </section>

      {/*  Mobile Navbar  */}
      <section className='flex  justify-between  top-[90vh] fixed w-full md:hidden bg-[#1A0B2E] py-3 px-4 '>
        <NavLink className={'PhoneNavBarLinks text-4xl  rounded-full px-2 py-2'} to={'/'} >
          <IoHome />
        </NavLink>
        <NavLink className={'PhoneNavBarLinks text-4xl rounded-full px-2 py-2  '} to={'About'} >
          <FaInfoCircle />
        </NavLink>
        <NavLink className={'PhoneNavBarLinks text-4xl    rounded-full px-2 py-2'} to={'Projects'} >
          <BiWorld />
        </NavLink>
        <NavLink className={'PhoneNavBarLinks text-4xl    rounded-full px-2 py-2'} to={'Contact'} >
          <IoMdContact />
        </NavLink>
      </section>
    </section>
  )
}

export default App