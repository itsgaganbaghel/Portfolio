import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <NavLink to={'/'} className='lg:text-2xl sm:text-lg  font-semibold font-mono'> Portfolio.</NavLink>
  )
}

export default Logo