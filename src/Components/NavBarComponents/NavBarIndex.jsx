import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import SocialHandles from './SocialHandles'
import { motion, useScroll } from 'motion/react'

const NavBarIndex = () => {
    const {scrollYProgress} = useScroll()
    return (
        <section className='w-full flex justify-between h-[10vh] items-center px-10 sticky top-0 bg-primary z-100'>
            <Logo />
            <Menu />
            <SocialHandles />
            <motion.section className='w-full h-[1px] bg-slate-700 fixed top-[10vh] left-0 origin-left'
                style={{
                    scaleX: scrollYProgress
                }}
            >
            </motion.section>
        </section>
    )
}

export default NavBarIndex