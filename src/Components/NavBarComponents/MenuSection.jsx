import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'motion/react'
import { delay } from 'motion'

const MenuSection = () => {
    let [isOpen, setIsOpen] = useState(false)
    let toggleAnimation = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        toggleAnimation()
    }, [])


    const childVariant = {
        open: {
            opacity: 1,
            y: 0,
        },
        closed: {
            opacity: 0,
            y: -10
        }
    }
    return (
        <motion.section
            initial={false}
            animate={isOpen ? "open" : "closed"}
            transition={{
                duration: 0.3   
            }}
            className='lg:gap-8 md:flex hidden'>
            <motion.p variants={childVariant}>
                <NavLink className={'navBarLinks px-5 py-1  rounded-xl'} to={'/'} >Home</NavLink>
            </motion.p>
            <motion.p variants={childVariant}>
                <NavLink className={'navBarLinks px-5 py-1  rounded-xl'} to={'About'} >About</NavLink>
            </motion.p>
            <motion.p variants={childVariant}>
                <NavLink className={'navBarLinks px-5 py-1  rounded-xl'} to={'Projects'} >Project</NavLink>
            </motion.p>
            <motion.p variants={childVariant}>
                <a href='mailto:gaganbaghel393@gmail.com'target='_blank' className={'navBarLinks px-5 py-1  rounded-xl'} to={'Contact'} >Contact </a>
            </motion.p>
            <motion.p variants={childVariant}>
                <NavLink className={'navBarLinks px-5 pt-1  rounded-xl ' } to={'/Blogs'} >Blogs</NavLink>
            </motion.p>
        </motion.section>
    )
}

export default MenuSection