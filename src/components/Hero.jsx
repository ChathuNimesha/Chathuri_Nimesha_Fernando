import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { Github, Linkedin, Facebook, Instagram, Tiktok, Threads, XIcon } from './SocialIcons';
import profileImg from '../assets/Nimesha.jpg';
import cvFile from '../assets/C.Nimesha Fernando Cv-4.pdf';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-split">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="hero-intro">
            <span className="hero-greeting">Hello, I am</span>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-title-wrapper">
            <h1 className="hero-title">
              <span className="title-light">Chathuri Nimesha</span>
              <br />
              <span className="title-bold">Fernando</span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants} className="hero-tags">
            <span className="tag">Software Engineer</span>
            <span className="tag-separator">/</span>
            <span className="tag">Environmental Advocate</span>
            <span className="tag-separator">/</span>
            <span className="tag">Sports Enthusiast</span>
            <span className="tag-separator">/</span>
            <span className="tag">Yoga &amp; Mindfulness</span>
          </motion.div>

          <motion.p variants={itemVariants} className="hero-description">
            Building technology with creativity, purpose, and adventure. <br/>
            Crafting elegant digital experiences while exploring the world and protecting our environment.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <a href={cvFile} download="Chathuri_Nimesha_CV.pdf" className="btn-modern-primary">Download CV</a>
            <a href="#projects" className="btn-modern-secondary">Explore Projects</a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-socials">
            <a href="https://www.linkedin.com/in/chathuri-nimesha-fernando-9a83b3295" target="_blank" rel="noopener noreferrer" className="social-icon-modern">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/ChathuNimesha" target="_blank" rel="noopener noreferrer" className="social-icon-modern">
              <Github size={20} />
            </a>
            <a href="https://www.facebook.com/share/18wbYteXTJ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-icon-modern">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/chathunimesha__?igsh=MXVtOHdqbjA3ZWI0Zw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon-modern">
              <Instagram size={20} />
            </a>
            <a href="https://www.tiktok.com/@chathu_nimm?_r=1&_t=ZS-97X32GfVFHY" target="_blank" rel="noopener noreferrer" className="social-icon-modern">
              <Tiktok size={20} />
            </a>
            <a href="https://www.threads.com/@chathunimesha__?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer" className="social-icon-modern">
              <Threads size={20} />
            </a>
            <a href="https://x.com/chathunimesha_?s=11" target="_blank" rel="noopener noreferrer" className="social-icon-modern">
              <XIcon size={20} />
            </a>
            <a href="mailto:chathurinimesha386@gmail.com" className="social-icon-modern">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          <img src={profileImg} alt="Chathuri Nimesha Fernando" className="hero-profile-image" />
        </motion.div>
      </div>
    </section>
  );
}
