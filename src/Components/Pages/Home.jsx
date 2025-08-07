import { RiArrowUpDoubleFill } from "react-icons/ri";
// import Contact from "./Contact";
import HeroSection from "../HomeComponents/HeroSection";
// import SkillsSection from "../HomeComponents/SkillsSection";
// import ProjectsSection from "../HomeComponents/ProjectsSection";
import { motion } from "motion/react";
import { lazy, Suspense } from "react";
import Fallback from "./Fallback";
import { NavLink } from "react-router-dom";

let SkillsSection = lazy(() => import("../HomeComponents/SkillsSection"));
let ProjectsSection = lazy(() => import("../HomeComponents/ProjectsSection"));
let Contact = lazy(() => import("./Contact"));

const Home = () => {
  return (
    <section className="w-full  bg-primary lg:flex lg:flex-col cursor-none">
      <HeroSection />
    

      <NavLink
        path="/"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="hidden lg:block fixed bottom-3 right-0 text-6xl  text-gray-300 scrollUp z-50 hover:px-2 hover:py-2 hover:bg-white hover:text-black hover:rounded-[100%] transition-all duration-500 ease-in-out"
      >
        <RiArrowUpDoubleFill />
      </NavLink>

      <Suspense fallback={<Fallback data={"Skill section"} />}>
        <SkillsSection />
      </Suspense>

      <Suspense fallback={<Fallback data={"Project section"} />}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={<Fallback data={"Contact section"} />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<Fallback data={"Footer section"} />}>
        <motion.footer
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className=" relative bg-secondary w-full md:w-[94%] mx-auto flex justify-center rounded-t-xl pt-4 pb-2 md:tracking-widest md:font-medium font-mono overflow-hidden"
        >
          <p>Made with lots of 💖 by - Gagan Baghel</p>
        </motion.footer>
      </Suspense>
    </section>
  );
};

export default Home;
