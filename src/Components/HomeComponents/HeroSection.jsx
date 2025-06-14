
import light from '../../assets/whiteLight.svg'
import user from '../../assets/user.svg'
import arrow from '../../assets/Vector.svg'
import { FaDownload } from 'react-icons/fa'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import { RiArrowUpDoubleFill } from 'react-icons/ri'
import { motion } from 'motion/react'
import { ContainerTextFlip } from '../utilities/ContainerTextFlipProps'
import { useEffect, useState } from 'react'

const HeroSection = () => {
    let [isOpen, setIsOpen] = useState(false)
    let toggleHeroSection = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        toggleHeroSection()
    }, [])

    const childVariant = {
        open: {
            opacity: 1,
        },
        closed: {
            opacity: 0,
        }
    }
    const parentVariant = {
        open: {
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.1
            }
        }
    }

    const childVariant1 = {
        open: {
            opacity: 1,
            y: 0
        },
        closed: {
            opacity: 0,
            y: 10
        }
    }
    const parentVariant1 = {
        open: {
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.5
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.3,
                staggerDirection: -1
            }
        }
    }
    return (
        <section className='relative w-full h-[90vh] mt-[10vh] md:mt-0 flex flex-col lg:flex-row lg:justify-center items-center overflow-hidden '>

            <motion.section
                variants={parentVariant}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="lg:w-[35%] lg:h-[70%] h-[35vh] w-[100vw] relative rounded-xl overflow-hidden "
            >

                <motion.img variants={childVariant}
                    src={user}
                    alt='user'
                    className='absolute z-30 w-1/2 h-[60%]  inset-0 translate-x-1/2 translate-y-[31%]'
                />
                <motion.img variants={childVariant}
                    src={light}
                    alt='light'
                    className='absolute z-20 w-1/2 h-[50%] lg:h-fit scale-150 inset-0 translate-x-1/2 translate-y-1/2 text-white '
                />

            </motion.section>

            <motion.section
                variants={parentVariant1}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                transition={{
                    duration: 0.2
                }}
                className='relative md:w-[60%] lg:h-[70%] lg:w-[40%]  text-gray-400 md-px-0 px-4 '>
                <motion.img variants={childVariant1}
                    src={arrow}
                    alt='arrow'
                    className='hidden lg:block absolute -left-56  w-[25%] rotate-y-12 z-40'
                />
                <motion.section variants={childVariant1} className='lg:text-3xl text-center lg:text-start text-lg font-bold lg:absolute -left-18 -top-5 w-full '>
                    Hello! , I am <span className='text-white font-serif'>Gagan Baghel...</span>
                </motion.section>
                <motion.h2 variants={childVariant1} className='lg:mt-30   font-semibold text-2xl md:h-[5vh] mt-10 ' >
                    <span className='font-serif text-3xl'>I am a</span>
                    <span className=' pl-2  text-white font-mono'>
                        <ContainerTextFlip />
                    </span>
                </motion.h2>
                <motion.p variants={childVariant1} className='mt-6 font-medium md:text-xl font-mono text-justify'>I do End-to-end web development with MERN Stack — turning visions into fast, functional, and beautiful applications based on the user requirements.</motion.p>

                <motion.article variants={childVariant1} className='  mt-10 flex justify-center gap-4 lg:justify-start md:gap-10 text-white'>

                    <a href='mailto:gaganbaghel393@gmail.com' target='_blank'
                        className='px-10 py-2 rounded-2xl bg-[#161D29]  flex items-center gap-2 cursor-pointer md:text-2xl'
                    >
                        <IoCheckmarkDoneCircleSharp /> Hire Me
                    </a>
                    <a href='https://drive.google.com/file/d/1Zf4B-nYPmru8zK6SX1F8CAsIB82HNvTt/view?usp=sharing' target='_blank'
                        className='px-10 py-2 rounded-2xl bg-[#161D29]  flex items-center gap-2 cursor-pointer md:text-2xl'
                    >
                        <FaDownload />  Resume
                    </a>

                </motion.article>
            </motion.section>

            <p className='hidden lg:block absolute bottom-3 right-0 text-6xl  text-gray-300 scrollUp'><RiArrowUpDoubleFill /></p>
        </section>

    )
}

export default HeroSection