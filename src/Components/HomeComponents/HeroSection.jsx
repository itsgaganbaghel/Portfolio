
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
        <section className='relative w-full h-[90vh] flex flex-col md:flex-row justify-center items-center '>

            <motion.section
                variants={parentVariant}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="md:w-[35%] md:h-[70%] h-[50vh] w-[100vw] relative rounded-xl overflow-hidden   "
            >

                <motion.img variants={childVariant}
                    src={user}
                    alt='user'
                    className='absolute z-30 w-1/2 h-[60%]  inset-0 translate-x-1/2 translate-y-[31%]'
                />
                <motion.img variants={childVariant}
                    src={light}
                    alt='light'
                    className='absolute z-20 w-1/2 scale-150 inset-0 translate-x-1/2 translate-y-1/2 text-white'
                />

            </motion.section>

            <motion.section
                variants={parentVariant1}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                transition={{
                    duration: 0.2
                }}
                className='relative md:h-[70%] md:w-[40%]  text-gray-400'>
                <motion.img variants={childVariant1}
                    src={arrow}
                    alt='arrow'
                    className='hidden md:block absolute -left-56  w-[25%] rotate-y-12 z-50'
                />
                <motion.section variants={childVariant1} className='text-3xl font-bold md:absolute -left-18 -top-5 w-full '>
                    Hello! , I am <span className='text-white font-serif'>Gagan Baghel...</span>
                </motion.section>
                <motion.h2 variants={childVariant1} className='md:pt-30 pt-10  font-semibold text-2xl ' >
                    <span className='font-serif text-3xl'>I am a</span>
                    <span className=' pl-2  text-white font-mono'>
                        <ContainerTextFlip />
                    </span>
                </motion.h2>
                <motion.p variants={childVariant1} className='mt-6 font-medium text-xl font-mono'>I do End-to-end web development with MERN Stack — turning visions into fast, functional, and beautiful applications based on the user requirements.</motion.p>

                <motion.article variants={childVariant1} className='  mt-10 flex justify-start gap-10 text-white'>

                    <article className='px-10 py-2 rounded-2xl bg-[#161D29]  flex items-center gap-2 cursor-pointer '>
                        <span className='text-xl'><IoCheckmarkDoneCircleSharp /> </span> Hire Me</article>

                    <article className='px-10 py-2 rounded-2xl bg-[#161D29]  flex items-center gap-2 cursor-pointer'>
                        <FaDownload />  Resume</article>
                </motion.article>
            </motion.section>

            <p className='absolute bottom-3 right-0 text-6xl  text-gray-300 scrollUp'><RiArrowUpDoubleFill /></p>
        </section>

    )
}

export default HeroSection