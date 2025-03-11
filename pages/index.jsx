import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center pt-72 xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h3
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            <span className="text-accent" style={{ fontSize: 24 }}>MERN | E-Commerce | PHP developer</span>
          </motion.h3>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="md:max-w-[40vw] mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
             &nbsp; I am a senior full-stack developer with over 5 years of experience in software development across various industries, with
            the 3 most recent years focused on MERN,E-Commerce, and Laravel.
            <br />&nbsp;✔ I have worked with MERN stack since 2018, building various websites and applications using React, Redux,Vue, MUI, Antd, Tailwind CSS, Laravel, Node, and Django.
            <br />&nbsp;✔ Also, as a skilled WooCommerce and Shopify expert, I have attended various supermartket, Store, and CMS project development.
            <br />&nbsp;&nbsp;So through this process, I have plenty of experience in custom plugin, Theme customization, UI/UX(Elementor, UX Builder), Third-party API, MailMarketing, SMS, AWS and plugin integration, Payment gateway integration and attractive web design.
            <br />&nbsp;Not only that, but I have always been a quick learner, so I can quickly adapt to new things.
            <br />&nbsp;Furthermore, I always provide the best solution and optimize with strong problem-solving and troubleshooting skills.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[300px] max-h-[300px] absolute top-[40%] lg:right-[25%]"
        >
          {/* <Avatar /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
