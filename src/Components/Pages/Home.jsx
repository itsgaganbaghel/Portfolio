import { RiArrowUpDoubleFill, } from 'react-icons/ri'
import Contact from './Contact'
import HeroSection from '../HomeComponents/HeroSection'
import SkillsSection from '../HomeComponents/SkillsSection'
import ProjectsSection from '../HomeComponents/ProjectsSection'
import { motion } from 'motion/react'


const Home = () => {

    return (
        <section className='w-full  bg-primary lg:flex lg:flex-col'>
            <HeroSection />

            <SkillsSection />

            <ProjectsSection />

            <Contact />


            <motion.footer
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, }}
                className=' relative bg-secondary w-full flex justify-center rounded-t-xl pt-4 pb-2 tracking-widest font-medium font-mono overflow-hidden '>
                <p>Made with lots of 💖 by - Gagan Baghel</p>
                <a href='#' target='_top' className='absolute bottom-16 border rounded-full right-2 text-5xl  text-gray-300 hover:bg-secondary hover:scale-110 transition-all duration-200 '><RiArrowUpDoubleFill /></a>
            </motion.footer>

        </section >
    )
}

export default Home
