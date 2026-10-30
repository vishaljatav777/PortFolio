import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { contactInfo } from '../../data/socialLinks';
import { Button } from '../common/Button';
import './Contact.css';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_URL || 'https://formspree.io/f/xwpqjpaw';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setFeedbackMessage('');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFeedbackMessage('Thank you! Your message has been sent successfully. I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus('error');
        setFeedbackMessage(errorData?.error || 'Oops! There was a problem submitting your form. Please try again.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setFeedbackMessage('Network error: Unable to send message. Please check your connection or email me directly.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-heading">Let's Connect</h3>
            <p className="contact-subtext">
              I am currently looking for new opportunities, and my inbox is always open.
              Whether you have a question, want to collaborate on a project, or just want to say hi,
              I'll do my best to get back to you!
            </p>

            <div className="info-item">
              <span className="info-icon-wrapper" aria-hidden="true">
                <FaEnvelope />
              </span>
              <div>
                <span className="info-label">Email</span>
                <a href={`mailto:${contactInfo.email}`} className="info-value">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon-wrapper" aria-hidden="true">
                <FaMapMarkerAlt />
              </span>
              <div>
                <span className="info-label">Location</span>
                <span className="info-value">{contactInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              {status === 'success' && (
                <div className="alert alert-success" role="alert">
                  {feedbackMessage}
                </div>
              )}

              {status === 'error' && (
                <div className="alert alert-danger" role="alert">
                  {feedbackMessage}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="e.g. jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-input form-textarea"
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={status === 'sending'}
                className="submit-btn"
              >
                {status === 'sending' ? 'Sending Message...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

