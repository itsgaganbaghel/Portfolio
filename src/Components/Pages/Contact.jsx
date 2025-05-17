
import { motion } from 'motion/react';

const fadeInLeft = {
  hidden: { opacity: 0, x:-300 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut', }
  }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 500 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut', }
  }
}

const Contact = () => {

  return (
    <section className="w-full h-[90vh] flex items-center justify-between text-white overflow-hidden md:px-12 px-4" id="contact">
      <motion.section
        variants={fadeInLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="w-[35%] ">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/contact-us-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--phone-telephone-communication-copywriting-pack-marketing-branding-illustrations-4568180.png"
          alt="Animated GIF"
          className="w-full "
        />
      </motion.section>

      <motion.section
        variants={fadeInRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className=" relative rounded-2xl shadow-xl p-8 border-4 border-secondary w-1/2">
        <h2 className="text-6xl font-bold mb-6 ">Let's Connect</h2>
        <p className=" text-gray-400 mb-6">
          Whether you want to hire me or just say hello —
        </p>
        <button className=' bg-slate-800 flex justify-center items-center p-1 rounded-2xl outline-1 outline-slate-500'>
          <a href='mailto:gagan717114baghel@gmail.com'
            className='text-primary  bg-white  rounded-xl py-3 px-4 font-bold font-serif'>
            Drop a message
          </a>
        </button>
      </motion.section>
    </section >
  );
};

export default Contact;
