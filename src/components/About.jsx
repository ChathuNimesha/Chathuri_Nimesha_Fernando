import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

// Custom CountUp element to run when visible
const CounterItem = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="counter-number">
      {count}{suffix}
    </span>
  );
};

const personalValues = [
  { icon: '💻', label: 'Innovation',              desc: 'Building creative and meaningful software solutions.' },
  { icon: '🌱', label: 'Environmental Responsibility', desc: 'Promoting sustainability and protecting nature.' },
  { icon: '🤝', label: 'Empathy',                 desc: 'Designing technology that genuinely helps people.' },
  { icon: '🧘', label: 'Mindfulness',             desc: 'Encouraging balance, focus, and lifelong learning.' },
  { icon: '🏃', label: 'Discipline',              desc: 'Developing resilience through sports and continuous improvement.' },
  { icon: '🌍', label: 'Social Impact',           desc: 'Using technology to solve real-world problems and strengthen communities.' },
];

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <motion.div
          className="about-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <span className="section-subtitle">Storytelling</span>
          <h2 className="section-title">About Me</h2>
          <div className="title-bar"></div>
        </motion.div>

        {/* Role Tags Row */}
        <motion.div
          className="about-roles-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {['Software Engineer', 'Environmental Advocate', 'Sports Enthusiast', 'Yoga & Mindfulness Practitioner'].map((role, i) => (
            <span key={i} className="about-role-tag">{role}</span>
          ))}
        </motion.div>

        <div className="about-grid">
          {/* Narrative Text */}
          <motion.div
            className="about-text-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h3 className="about-greeting">Blending technology, advocacy, and well-being.</h3>
            <p className="about-desc">
              I am a passionate and self-motivated Software Engineering student based in Sri Lanka,
              committed to creating innovative technology solutions that make a positive social impact.
            </p>
            <p className="about-desc">
              I am committed to environmental sustainability, personal well-being, and continuous learning —
              with a mission to use technology to support people in overcoming everyday challenges
              and improving their quality of life.
            </p>

            <div className="about-education">
              <h4 className="education-heading">Education &amp; Leadership</h4>
              <ul className="education-list">
                <li>
                  <div className="education-dot"></div>
                  <div>
                    <strong>BEng (Hons) Software Engineering</strong>
                    <span className="edu-sub">Canterbury Christ Church University</span>
                  </div>
                </li>
                <li>
                  <div className="education-dot"></div>
                  <div>
                    <strong>Higher Diploma in Information Technology</strong>
                    <span className="edu-sub">IUHS Campus</span>
                  </div>
                </li>
                <li>
                  <div className="education-dot"></div>
                  <div>
                    <strong>2-Year Professional Yoga Training &amp; Certification</strong>
                    <span className="edu-sub">Certified Yoga &amp; Mindfulness Practitioner</span>
                  </div>
                </li>
                <li>
                  <div className="education-dot gold"></div>
                  <div>
                    <strong>Head of Operations</strong>
                    <span className="edu-sub">Planet Protectors Organization</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Stats Panel */}
          <motion.div
            className="about-stats-panel glass-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="stats-grid">
              <div className="stat-card">
                <CounterItem target={15} suffix="+" />
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-card">
                <CounterItem target={10} suffix="+" />
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat-card">
                <CounterItem target={8} suffix="+" />
                <span className="stat-label">Volunteer Activities</span>
              </div>
              <div className="stat-card">
                <CounterItem target={12} suffix="+" />
                <span className="stat-label">Technologies Learned</span>
              </div>
            </div>

            <div className="expertise-tags">
              <span className="tag">Web Development</span>
              <span className="tag">Mobile App Development</span>
              <span className="tag">UI/UX Design</span>
              <span className="tag">Game Development</span>
              <span className="tag">Environmental Conservation</span>
              <span className="tag">Sports &amp; Fitness</span>
              <span className="tag">Yoga &amp; Mindfulness</span>
            </div>
          </motion.div>
        </div>

        {/* Personal Values Section */}
        <motion.div
          className="values-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
        >
          <h3 className="values-heading">Personal Values</h3>
          <div className="title-bar" style={{ margin: '12px 0 40px' }}></div>

          <motion.div
            className="values-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {personalValues.map((val, i) => (
              <motion.div
                key={i}
                className="value-card glass-panel"
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <span className="value-icon">{val.icon}</span>
                <h4 className="value-label">{val.label}</h4>
                <p className="value-desc">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
