import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Lucide icons
import Logo from "./Logo";
import MenuSection from "./MenuSection";
import SocialHandles from "./SocialHandles";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = ["Home", "About", "Services", "Contact"];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-primary shadow-md fixed w-full z-50">
            <section className='w-full flex justify-between h-[10vh] items-center px-10 sticky top-0 bg-primary z-100'>
                <Logo />
                <MenuSection />
                <SocialHandles />
                <motion.section className='w-full h-[1px] bg-slate-700 fixed top-[10vh] left-0 origin-left'
                    style={{
                        scaleX: scrollYProgress
                    }}
                >
                </motion.section>

                <button onClick={toggleMenu} className="md:hidden block text-gray-800">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
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
                                    <a href={''} className="text-white text-lg inline-block w-full hover:text-sky-300 hover:border-b text-center pb-2">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
