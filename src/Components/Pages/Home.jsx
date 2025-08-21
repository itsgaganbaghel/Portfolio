import HeroSection from "../HomeComponents/HeroSection";
import { motion } from "motion/react";
import { lazy, Suspense } from "react";
import Fallback from "./Fallback";
import GoToTop from "../utilities/GoToTop";

let SkillsSection = lazy(() => import("../HomeComponents/SkillsSection"));
let ProjectsSection = lazy(() => import("../HomeComponents/ProjectsSection"));
let Contact = lazy(() => import("./Contact"));

const Home = () => {
  return (
    <section className="w-full  bg-primary lg:flex lg:flex-col cursor-none">
      <HeroSection />

      <GoToTop />

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
