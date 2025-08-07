import { delay, motion } from 'framer-motion'
import { FaNodeJs } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io5'
import {
  RiArrowUpDoubleFill,
  RiFirebaseLine,
  RiMoneyRupeeCircleLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill
} from 'react-icons/ri'
import {
  TbBrandCss3,
  TbBrandRedux,
  TbBrandTypescript,
  TbCircleArrowUpRight,
  TbFileTypeJs
} from 'react-icons/tb'
import { SiCloudinary, SiExpress, SiMongodb, SiPostman } from 'react-icons/si'
import { GrHtml5 } from 'react-icons/gr'
import { LiaSass } from 'react-icons/lia'

import boy from '../../assets/boy.png'

const fadeIn = {
  hidden: { opacity: 0, y: 150 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', }
  }
}

const zoomIn = {
  hidden: { scale: 0.5, opacity: 0, y: 50 },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

const SkillsSection = () => {
  const frontendLogos = [
    { icon: <GrHtml5 />, color: "#E34F26" },
    { icon: <TbBrandCss3 />, color: "#1572B6" },
    { icon: <RiTailwindCssFill />, color: "#06B6D4" },
    { icon: <LiaSass />, color: "#CC6699" },
    { icon: <TbFileTypeJs />, color: "#F7DF1E" },
    { icon: <TbBrandTypescript />, color: "#3178C6" },
    { icon: <RiReactjsLine />, color: "#61DAFB" },
    { icon: <TbBrandRedux />, color: "#764ABC" },
    { icon: <RiNextjsLine />, color: "#000000" }
  ];

  const backendLogos = [
    { icon: <FaNodeJs />, color: "#339933" },
    { icon: <SiExpress />, color: "gray" },
    { icon: <SiMongodb />, color: "#47A248" },
    { icon: <RiFirebaseLine />, color: "#FFCA28" },
    { icon: <SiPostman />, color: "#FF6C37" }
  ];

  const otherSkillsLogos = [
    { icon: <SiCloudinary />, color: "#3448C5" },
    { icon: <RiMoneyRupeeCircleLine />, color: "green" },
    { icon: <IoLogoGithub />, color: "#181717" }
  ];

  const animationLibraries = [
    { name: 'GSAP', color: '#88CE02' },
    { name: 'Motion', color: '#F8EE2D' },
    { name: 'Lenis', color: '#FF98A2' }
  ];

  return (
    <section className='md:px-12 px-4'>
      <motion.span
        className='text-9xl font-serif mb-4'
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        Skills
      </motion.span>

      <article className="w-full lg:h-[70vh] overflow-hidden grid  lg:grid-cols-[1fr_1fr_0.5fr_0.5fr] lg:grid-rows-2  grid-rows-4 gap-6">

        {/* Frontend */}
        <motion.section
          className="border border-slate-700 lg:row-span-2 rounded-2xl flex flex-col items-center justify-center gap-10 lg:gap-16 p-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className='w-full text-center text-5xl'>Frontend</h2>
          <div className='flex flex-wrap items-center justify-center md:gap-x-16 md:gap-y-12 lg:gap-x-6 lg:gap-y-[max(2vh,2vw)]  gap-y-4 gap-x-6 '>
            {
              frontendLogos.map((data, index) => (
                <motion.p
                  key={index}
                  className="hover:scale-110 cursor-none border border-slate-800 lg:text-[max(3vh,3vw)] text-5xl px-5 py-4 rounded-2xl transition-transform duration-200"
                  style={{ backgroundColor: 'transparent' }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: index * 0.05 }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = data.color}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  {data.icon}
                </motion.p>
              ))
            }
          </div>
        </motion.section>

        {/* Animation Libraries */}
        <motion.section
          className="border border-slate-700 rounded-2xl flex flex-col flex-wrap items-center justify-center gap-10 lg:gap-4"
          variants={zoomIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className='w-full text-center text-5xl lg:text-[4vh]'>Animation Libraries</h2>
          <div className='flex flex-wrap items-center justify-center lg:gap-x-8 gap-8'>
            {
              animationLibraries.map((data, index) => (
                <motion.p
                  key={index}
                  className='hover:scale-110 cursor-none border border-slate-800 text-3xl px-4 py-3 rounded-2xl'
                  style={{ backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = data.color}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  {data.name}
                </motion.p>
              ))
            }
          </div>
        </motion.section>

        {/* Other */}
        <motion.section
          className="border border-slate-700 lg:col-span-2 rounded-2xl flex flex-col flex-wrap items-center justify-center gap-10"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h2 className='w-full text-center text-5xl'>Other</h2>
          <div className='flex flex-wrap items-center justify-center lg:gap-x-8 gap-12'>
            {
              otherSkillsLogos.map((data, index) => (
                <motion.p
                  key={index}
                  className="hover:scale-110 cursor-none border border-slate-800 text-5xl lg:text-[3vw] px-5 py-4 rounded-2xl transition-transform duration-200"
                  style={{ backgroundColor: 'transparent' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.6 }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = data.color}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  {data.icon}
                </motion.p>
              ))
            }
          </div>
        </motion.section>

        {/* Backend */}
        <motion.section
          className="border border-slate-700 lg:col-span-2 rounded-2xl flex flex-wrap items-center justify-center gap-x-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className='w-full text-center text-5xl'>Backend</h2>
          {
            backendLogos.map((data, index) => (
              <motion.p
                key={index}
                className="hover:scale-110 cursor-none border border-slate-800 text-5xl lg:text-[5vh] px-5 py-4 rounded-2xl transition-transform duration-200"
                style={{ backgroundColor: 'transparent' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.6 }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = data.color}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {data.icon}
              </motion.p>
            ))
          }
        </motion.section>

        {/* Boy Image */}
        <motion.section
          className="border hidden lg:flex justify-center items-center border-slate-700 rounded-2xl"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={boy} className="-scale-x-100 pt-4" />
        </motion.section>
      </article>
    </section>
  )
}

export default SkillsSection
