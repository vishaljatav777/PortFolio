import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-container">
        
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm currently looking for new opportunities, and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll get back to you!
          </p>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>vishal.jatav.it@gmail.com</span>
          </div>
          {/* <div className="info-item">
            <FaPhone className="info-icon" />
            <span>+91 12345 67890</span>
          </div> */}
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Bhopal, Madhya Pradesh, India</span>
          </div>
        </div>

        <div className="contact-form">
          <form 
            action="https://formspree.io/f/xwpqjpaw" // <-- PASTE YOUR FORMSPREE URL HERE
            method="POST"
          >
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;