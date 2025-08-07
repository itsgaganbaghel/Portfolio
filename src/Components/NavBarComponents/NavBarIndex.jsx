import React, { useState } from 'react'
import Logo from './Logo'
import SocialHandles from './SocialHandles'
import { AnimatePresence, motion, useScroll } from 'motion/react'
import { Menu, X } from "lucide-react"; // Lucide icons
import MenuSection from './MenuSection'
import { NavLink } from 'react-router-dom';

const NavBarIndex = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [["Home", '/'], ["About", "About"], ["Projects", "Projects"], ["Blogs", "/Blogs"]];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const { scrollYProgress } = useScroll()
    return (
        <nav className="bg-primary shadow-md fixed  md:sticky top-0 w-full z-50 cursor-none ">
            <section className='w-full flex justify-between h-[10vh] items-center md:px-10 px-3 sticky top-0 bg-primary z-100'>
                <Logo />
                <MenuSection />
                <motion.section className='w-full h-[2px] bg-slate-700 fixed top-[10vh] left-0 origin-left'
                    style={{
                        scaleX: scrollYProgress
                    }}
                >
                </motion.section>

                <section className='flex gap-4 items-center'>
                    <SocialHandles />
                    <button onClick={toggleMenu} className="md:hidden block text-white ">
                        {isOpen ? <X size={35} /> : <Menu size={35} />}
                    </button>
                </section>
            </section>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-primary px-4 py-2"
                    >
                        <ul className="flex flex-col space-y-4 ">
                            {navLinks.map((link) => (
                                <li key={link}>
                                    <NavLink to={link[1]} onClick={toggleMenu} className="text-white text-lg inline-block w-full hover:text-sky-300 hover:border-b text-center pb-2">
                                        {link[0]}
                                    </NavLink>
                                </li>

                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default NavBarIndex