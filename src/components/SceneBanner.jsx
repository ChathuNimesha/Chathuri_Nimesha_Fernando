import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/Images/bg new.jpg';
import './SceneBanner.css';

export default function SceneBanner() {
  return (
    <motion.section
      className="scene-banner"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Parallax image layer */}
      <div
        className="scene-banner-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay gradient */}
      <div className="scene-banner-overlay" />

      {/* Text content */}
      <div className="scene-banner-content">
        <motion.p
          className="scene-banner-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Four Passions. One Journey.
        </motion.p>

        <motion.div
          className="scene-banner-roles"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <span className="role-pill">Software Engineer</span>
          <span className="role-divider">·</span>
          <span className="role-pill">Environmental Advocate</span>
          <span className="role-divider">·</span>
          <span className="role-pill">Sports Enthusiast</span>
          <span className="role-divider">·</span>
          <span className="role-pill gold">Yoga &amp; Mindfulness</span>
        </motion.div>
      </div>
    </motion.section>
  );
}
