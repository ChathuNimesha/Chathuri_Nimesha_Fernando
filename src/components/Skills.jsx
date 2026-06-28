import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Wrench, Users, Monitor, Compass, 
  Cpu, Database, Layers, Feather, Award 
} from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const techSkills = [
    { name: 'Java', level: '90%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'React', level: '80%' },
    { name: 'Angular', level: '70%' },
    { name: 'Node.js', level: '75%' },
    { name: 'Spring Boot', level: '80%' },
    { name: 'Kotlin', level: '75%' },
    { name: 'PHP', level: '70%' },
    { name: 'AWS', level: '65%' },
    { name: 'MySQL', level: '85%' }
  ];

  const tools = [
    'Figma', 'Canva', 'Photoshop', 'Illustrator', 
    'Unity', 'VS Code', 'Android Studio', 'Git'
  ];

  const softSkills = [
    { name: 'Leadership', desc: 'Directing initiatives, motivating teams' },
    { name: 'Teamwork', desc: 'Collaborating in diverse development environments' },
    { name: 'Communication', desc: 'Conveying complex ideas clearly' },
    { name: 'Problem Solving', desc: 'Analytical troubleshooting and debug logic' }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <div className="skills-header">
          <span className="section-subtitle">Proficiencies</span>
          <h2 className="section-title">Capabilities</h2>
          <div className="title-bar"></div>
        </div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Technical Skills Card */}
          <motion.div className="skills-card glass-panel" variants={itemVariants}>
            <div className="card-header">
              <Code className="card-icon gold" />
              <h3>Technical Stack</h3>
            </div>
            <div className="skills-list">
              {techSkills.map((skill, index) => (
                <div key={index} className="skill-progress-wrapper">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}</span>
                  </div>
                  <div className="progress-bar-bg">
                    <motion.div 
                      className="progress-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Environment */}
          <motion.div className="skills-card glass-panel" variants={itemVariants}>
            <div className="card-header">
              <Wrench className="card-icon gold" />
              <h3>Tools & Software</h3>
            </div>
            <p className="card-desc">Industry-standard tools used to prototype, design, build, and debug software architectures.</p>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index} 
                  className="tool-badge"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="tool-dot"></span>
                  {tool}
                </motion.div>
              ))}
            </div>

            <div className="specialties-section">
              <h4 className="specialties-title">Specialized Domains</h4>
              <div className="specialties-grid">
                <div className="specialty-item">
                  <Layers size={18} className="gold" />
                  <span>UI/UX Architecture</span>
                </div>
                <div className="specialty-item">
                  <Cpu size={18} className="gold" />
                  <span>Backend REST APIs</span>
                </div>
                <div className="specialty-item">
                  <Database size={18} className="gold" />
                  <span>Relational Database Management</span>
                </div>
                <div className="specialty-item">
                  <Monitor size={18} className="gold" />
                  <span>Game Design & Physics</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div className="skills-card glass-panel" variants={itemVariants}>
            <div className="card-header">
              <Users className="card-icon gold" />
              <h3>Soft Skills</h3>
            </div>
            <div className="soft-skills-list">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  <div className="soft-skill-icon-wrapper">
                    <Award size={18} className="gold" />
                  </div>
                  <div className="soft-skill-text">
                    <h4>{skill.name}</h4>
                    <p>{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
