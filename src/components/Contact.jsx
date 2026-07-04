import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Facebook, Instagram, Tiktok, Threads, XIcon } from './SocialIcons';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      emailjs.send(
        'service_svfscq4', // Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
      )
      .then(() => {
        setSubmitted(true);
        setTimeout(() => {
          setForm({ name: '', email: '', message: '' });
          setSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Something went wrong. Please try again later.');
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="contact-grid">
          
          {/* Info Column */}
          <motion.div 
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">Reach Out</span>
            <h2 className="section-title">Let's Connect</h2>
            <div className="title-bar left-align"></div>

            <p className="contact-pitch">
              Whether you are looking to collaborate on a software system, design a new interface, 
              plan an environmental conservation campaign, or talk about trekking routes in Sri Lanka, 
              drop me a line!
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <Mail size={18} className="gold" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:chathurinimesha386@gmail.com">chathurinimesha386@gmail.com</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <MapPin size={18} className="gold" />
                <div>
                  <h4>Location</h4>
                  <span>Panadura, Sri Lanka</span>
                </div>
              </div>
            </div>

            <div className="contact-social-row">
              <a href="https://www.linkedin.com/in/chathuri-nimesha-fernando-9a83b3295" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/ChathuNimesha" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.facebook.com/share/18wbYteXTJ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/chathunimesha__?igsh=MXVtOHdqbjA3ZWI0Zw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@chathu_nimm?_r=1&_t=ZS-97X32GfVFHY" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="TikTok">
                <Tiktok size={18} />
              </a>
              <a href="https://www.threads.com/@chathunimesha__?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="Threads">
                <Threads size={18} />
              </a>
              <a href="https://x.com/chathunimesha_?s=11" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="X (Twitter)">
                <XIcon size={18} />
              </a>
            </div>

            {/* Footer Quote */}
            <div className="contact-footer-quote">
              <p>“Building technology with creativity, purpose, and adventure.”</p>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            className="contact-form-col glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div 
                className="submission-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <h3>Thank you!</h3>
                <p>Your message has been dispatched successfully. I will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@example.com" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    required 
                    rows="6"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we collaborate?"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary form-submit-btn">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
