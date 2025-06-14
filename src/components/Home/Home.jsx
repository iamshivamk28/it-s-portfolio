import React from "react";

import "./Home.css";
import { Link } from "react-router-dom";
import Animation from "../../assets/skills.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiPostman } from "react-icons/si";

//import TechStack from "../TechStack/TechStack";

const Home = () => {
  return (
       <>
    <section className="home">
      <motion.div
        className="home-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I’m <span>Shivam Khandare</span>
        </h1>
        <h2>Frontend Developer</h2>
        <p>
          I am a passionate web developer specializing in building exceptional
          digital experiences. With expertise in modern web technologies, I
          create responsive and performant applications that solve real-world
          problems.
        </p>
        <Link to="/projects" className="home-btn">
          View My Work
        </Link>
      </motion.div>

      <motion.div
        className="home-right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
      >
        <Lottie
          animationData={Animation}
          loop
          autoplay
          style={{ height: 400 }}
        />
      </motion.div>
    </section>

    <motion.section
  className="skills-section"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <h2 className="skills-title">Skills</h2>

  <div className="skills-container">
    {/* Left side: Animation */}
    <div className="skills-animation">
      <Lottie animationData={Animation} loop autoplay style={{ height: 400 }} />
    </div>

    {/* Right side: Skills List */}
    <div className="skills-list">
      <div className="skill-category">
        <h3>Front-end Development</h3>
        <p>
          <FaHtml5 /> HTML5, <FaCss3Alt /> CSS3, <FaJs /> JavaScript,{" "}
          <FaBootstrap /> Bootstrap, <SiTailwindcss /> Tailwind CSS
        </p>
      </div>
      <div className="skill-category">
        <h3>JavaScript Libraries</h3>
        <p>
          <FaReact /> React.js, <SiRedux /> Redux Toolkit, <FaReact /> React Native
        </p>
      </div>
      <div className="skill-category">
        <h3>Version Control</h3>
        <p>
          <FaGitAlt /> Git, <FaGithub /> GitHub
        </p>
      </div>
      <div className="skill-category">
        <h3>API Handling</h3>
        <p>
          <SiPostman /> RESTful API Integration, Postman
        </p>
      </div>
    </div>
  </div>
</motion.section>


      <div className="skill-marquee">
        <div className="marquee-track">
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaBootstrap />
          <FaReact />
          <SiRedux />
          <SiTailwindcss />
          <FaGitAlt />
          <FaGithub />
          <SiPostman />
         <FaReact />
        </div>
      </div>

     
   
      </>
  );
};

export default Home;
