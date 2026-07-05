import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Office Executive + Website Contributor',
      company: 'Unique Industrial Solutions Pvt Ltd',
      duration: 'September 2025 - Present',
      location: 'Sri Lanka',
      bullets: [
        'Managed corporate office communications, operational planning, and administrative databases.',
        'Contributed to the modernization of the main company website, integrating responsive product sections, customized quote request systems, and optimized image galleries.',
        'Collaborated with stakeholders to define visual guidelines, improving the accessibility and contrast of customer-facing portals.'
      ]
    },
    {
      id: 2,
      role: 'Game Design & Development Intern',
      company: 'Evolking Digital Designs',
      duration: 'June 2025 - September 2025',
      location: 'Sri Lanka',
      bullets: [
        'Developed interactive 2D/3D gameplay mechanics using Unity and C# scripts.',
        'Designed detailed environment layouts, asset maps, and UI elements to elevate user immersion.',
        'Participated in daily scrum stand-ups, debug runs, and beta deployment procedures, solving physics-engine anomalies.'
      ]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="section-container">
        <div className="experience-header">
          <span className="section-subtitle">Chronology</span>
          <h2 className="section-title">Professional Path</h2>
          <div className="title-bar"></div>
        </div>

        <div className="timeline-container">
          <div className="timeline-spine"></div>

          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Glowing Timeline Marker */}
              <div className="timeline-marker">
                <Briefcase size={16} className="marker-icon" />
              </div>

              {/* Experience Card */}
              <div className="experience-card-wrapper glass-panel">
                <div className="experience-card-header">
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-company">{exp.company}</span>
                </div>

                <div className="experience-meta">
                  <span className="experience-duration">
                    <Calendar size={13} /> {exp.duration}
                  </span>
                  <span className="experience-location">
                    <MapPin size={13} /> {exp.location}
                  </span>
                </div>

                <ul className="experience-bullets">
                  {exp.bullets.map((bullet, index) => (
                    <li key={index}>
                      <span className="bullet-indicator"></span>
                      <p>{bullet}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
