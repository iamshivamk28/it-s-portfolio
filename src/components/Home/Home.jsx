import React from 'react';

import './Home.css'
import { Link } from 'react-router-dom';
import Animation from '../../assets/Animation.json'
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import TechStack from '../TechStack/TechStack';

const Home = () => {
  return (
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
        <h2>Frontend Developer & Video Editor</h2>
        <p>
          Passionate about crafting modern, responsive UIs and cinematic video stories.
          I blend code and creativity to deliver stunning user experiences on web and social platforms.
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
        <Lottie animationData={Animation} loop autoplay style={{ height: 400 }} />
      </motion.div>

     
    </section>


  );
}

export default Home;
