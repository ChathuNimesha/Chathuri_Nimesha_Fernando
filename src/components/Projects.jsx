import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Heart, BookOpen, Cloud, Cpu, LayoutDashboard, Calculator, Gamepad2 } from 'lucide-react';
import { Github } from './SocialIcons';
import './Projects.css';

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'Unique Industrial Solutions Web',
      desc: 'A corporate web platform featuring interactive services panels, custom product catalogs, quote requests, and optimized light/dark themes. A premier showcase of modern web design and functionality.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/ChathuNimesha/Unique-Industrial-Solutions-Web',
      live: 'https://unique-industrial-solutions-web.vercel.app',
      color: '#10b981', // vibrant emerald
      icon: <Cpu size={28} className="project-feature-icon" />,
      featured: true
    },
    {
      id: 2,
      title: 'Mindfulness with Yoga',
      desc: 'A premium mental health and wellness platform designed to schedule classes, track meditation cycles, and connect with instructors—inspired by my 2 years of certified yoga training.',
      tech: ['React', 'Node.js', 'MySQL', 'Express'],
      github: 'https://github.com/ChathuNimesha',
      live: 'https://github.com/ChathuNimesha',
      color: '#4DA8DA', // ocean/mint hue
      icon: <Heart size={28} className="project-feature-icon" />
    },
    {
      id: 3,
      title: 'KidzZone',
      desc: 'An interactive, rich Android application designed for kids, featuring gamified reading modules, storytelling zones, and parent progress trackers.',
      tech: ['Kotlin', 'Android Studio', 'Firebase', 'XML'],
      github: 'https://github.com/ChathuNimesha/KidzZone',
      live: 'https://github.com/ChathuNimesha/KidzZone',
      color: '#e6c875', // soft amber
      icon: <BookOpen size={28} className="project-feature-icon" />
    },
    {
      id: 4,
      title: 'Weather Forecasting App',
      desc: 'A sleek, real-time weather system offering detailed climatic metrics, high-precision forecasts, and smart alert notifications using OpenWeather API.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
      github: 'https://github.com/ChathuNimesha/WeatherApp',
      live: 'https://chathunimesha.github.io/WeatherApp',
      color: '#5bc0be', // teal
      icon: <Cloud size={28} className="project-feature-icon" />
    },
    {
      id: 5,
      title: 'Management System FrontEnd',
      desc: 'A modern and clean admin management system dashboard designed for tracking database records, handling operations, and managing operational workflows.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      github: 'https://github.com/ChathuNimesha/ChathuNimesha-Management-System-FrontEnd',
      live: 'https://management-system-seven-topaz.vercel.app',
      color: '#9A7BFF', // soft purple
      icon: <LayoutDashboard size={28} className="project-feature-icon" />
    },
    {
      id: 6,
      title: 'Number Guessing Game',
      desc: 'An engaging web-based guessing game built as an interactive challenge, featuring random number generation, player score tracking, and custom response status styles.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      github: 'https://github.com/ChathuNimesha/Number-Guessing-Game',
      live: 'https://number-guessing-game-ten-ecru.vercel.app',
      color: '#f87171', // soft coral/red
      icon: <Gamepad2 size={28} className="project-feature-icon" />
    },
    {
      id: 7,
      title: 'Simple Calculator',
      desc: 'A clean and responsive calculator application executing fundamental arithmetic operations, using clear interactive selectors and an elegant minimalist layout.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      github: 'https://github.com/ChathuNimesha/SimpleCalculator',
      live: 'https://simple-calculator-ruddy-eight.vercel.app',
      color: '#ec4899', // soft pink/rose
      icon: <Calculator size={28} className="project-feature-icon" />
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <div className="projects-header">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Selected Works</h2>
          <div className="title-bar"></div>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <motion.div 
              key={project.id}
              className={`project-card glass-panel ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8 }}
            >
              {/* Project Card Graphic / Mockup background */}
              <div 
                className="project-thumbnail" 
                style={{ 
                  background: `linear-gradient(135deg, ${project.color}22, ${project.color}05)`,
                  borderBottom: `1px solid ${project.color}22`
                }}
              >
                {/* Floating graphic */}
                <div 
                  className="thumbnail-circle"
                  style={{
                    boxShadow: `0 0 40px ${project.color}33`,
                    background: `linear-gradient(135deg, ${project.color}44, transparent)`
                  }}
                >
                  {project.icon}
                </div>
                <div className="thumbnail-grid-overlay"></div>
              </div>

              {/* Project Card Info */}
              <div className="project-info-container">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.desc}</p>
                
                {/* Tech tags */}
                <div className="project-tech-tags">
                  {project.tech.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="tech-tag"
                      style={{
                        borderColor: `${project.color}44`,
                        color: project.color,
                        background: `${project.color}0b`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-card-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-btn"
                  >
                    <Github size={18} />
                    <span>Codebase</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-btn primary-style"
                    style={{
                      backgroundColor: project.color,
                      color: '#070908'
                    }}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
