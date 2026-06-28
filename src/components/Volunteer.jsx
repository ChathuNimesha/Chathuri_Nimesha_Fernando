import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Trash2, Globe, Heart, CheckCircle, Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';
import './Volunteer.css';

// Event photo imports will be added here after user uploads images

export default function Volunteer() {
  const [activeActivity, setActiveActivity] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const activities = [
    {
      id: 1,
      title: 'Tree Planting Campaigns',
      desc: 'Organized and executed campaigns to plant native trees in deforested areas around Sri Lanka, helping restore the local ecosystem.',
      icon: <Leaf className="eco-icon" />,
      stats: '1,200+ Trees Planted',
      photos: []
    },
    {
      id: 2,
      title: 'Beach Cleanups',
      desc: 'Led coastal protection drives along Mirissa and Mount Lavinia beaches, collecting marine plastic debris and raising community awareness.',
      icon: <Trash2 className="eco-icon" />,
      stats: '450kg+ Waste Recycled',
      photos: []
    },
    {
      id: 3,
      title: 'Environmental Awareness',
      desc: 'Conducted educational workshops and digital media campaigns highlighting deforestation risks, waste segregation, and ecological footprints.',
      icon: <Globe className="eco-icon" />,
      stats: '15+ Workshops Conducted',
      photos: []
    },
    {
      id: 4,
      title: 'Recycling Drives',
      desc: 'Collaborated with municipal councils to run city-wide dry waste collection initiatives, ensuring proper processing of paper, glass, and e-waste.',
      icon: <Heart className="eco-icon" />,
      stats: '2.5 Tons Diverted from Landfills',
      photos: []
    },
    {
      id: 5,
      title: 'Community Sponsorships',
      desc: 'Supported local athletes like javelin champion Rumesh Tharanga and sponsored community sports events to foster regional development.',
      icon: <CheckCircle className="eco-icon" />,
      stats: 'Supported National Athletes',
      photos: []
    }
  ];

  const openGallery = (activity) => {
    setActiveActivity(activity);
    setPhotoIndex(0);
  };

  const closeGallery = () => {
    setActiveActivity(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    if (activeActivity && activeActivity.photos.length > 0) {
      setPhotoIndex((prevIndex) => (prevIndex + 1) % activeActivity.photos.length);
    }
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    if (activeActivity && activeActivity.photos.length > 0) {
      setPhotoIndex((prevIndex) => (prevIndex - 1 + activeActivity.photos.length) % activeActivity.photos.length);
    }
  };

  return (
    <section className="volunteer-section" id="volunteer">
      {/* Decorative Floating Leaves */}
      <div className="eco-particles">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-leaf"
            style={{
              left: `${15 + i * 15}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${i * 1.5}s`
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Leaf size={24} />
          </motion.div>
        ))}
      </div>

      <div className="section-container">
        <div className="volunteer-grid">
          {/* Introduction Card */}
          <motion.div 
            className="volunteer-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">Eco-conscious</span>
            <h2 className="section-title">Environmental Voluntarism</h2>
            <div className="title-bar left-align"></div>
            
            <p className="intro-text">
              As the <strong>Head of Operations</strong> at <strong>Planet Protectors Organization</strong>, 
              I coordinate actions aiming to restore, protect, and advocate for Sri Lanka’s unique biological heritage.
            </p>
            <p className="intro-text">
              We believe technology can serve as a catalyst for environmental education and conservation tracking. 
              By merging software logic with clean-up initiatives, we build systems that power a greener tomorrow.
            </p>

            <div className="planet-protectors-card glass-panel">
              <div className="pp-badge">ORGANIZATION</div>
              <h3>Planet Protectors</h3>
              <p>Active volunteer network running ecosystem restoration drives and ocean waste cleanups across Sri Lanka.</p>
            </div>
          </motion.div>

          {/* Activities Grid */}
          <div className="activities-grid">
            {activities.map((act) => (
              <motion.div 
                key={act.id}
                className="activity-card glass-panel"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="activity-icon-container">
                  {act.icon}
                </div>
                <h3 className="activity-title">{act.title}</h3>
                <p className="activity-desc">{act.desc}</p>
                
                {act.photos && act.photos.length > 0 && (
                  <button 
                    className="activity-gallery-btn"
                    onClick={() => openGallery(act)}
                  >
                    <Camera size={14} />
                    <span>View Gallery ({act.photos.length})</span>
                  </button>
                )}

                <div className="activity-stats-tag">
                  <CheckCircle size={14} className="gold" />
                  <span>{act.stats}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Gallery Modal */}
      <AnimatePresence>
        {activeActivity && activeActivity.photos && activeActivity.photos.length > 0 && (
          <motion.div 
            className="volunteer-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
          >
            <button className="volunteer-lightbox-close" onClick={closeGallery}>
              <X size={32} />
            </button>

            <motion.div 
              className="volunteer-lightbox-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="volunteer-lightbox-img-wrapper">
                {activeActivity.photos.length > 1 && (
                  <button className="volunteer-lightbox-nav prev" onClick={prevPhoto}>
                    <ChevronLeft size={24} />
                  </button>
                )}

                <motion.img 
                  key={photoIndex}
                  src={activeActivity.photos[photoIndex].url} 
                  alt={activeActivity.photos[photoIndex].title} 
                  className="volunteer-lightbox-img"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />

                {activeActivity.photos.length > 1 && (
                  <button className="volunteer-lightbox-nav next" onClick={nextPhoto}>
                    <ChevronRight size={24} />
                  </button>
                )}
              </div>

              <div className="volunteer-lightbox-meta">
                <h3 className="volunteer-lightbox-title">{activeActivity.photos[photoIndex].title}</h3>
                <div className="volunteer-lightbox-counter">
                  {activeActivity.title} &bull; {photoIndex + 1} of {activeActivity.photos.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
