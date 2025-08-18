import React from 'react';
import './Testimonials.css';
import { FaQuoteLeft } from 'react-icons/fa';

// Add your testimonial data here
const testimonialsData = [
  {
    quote: "Working with VJ was an absolute pleasure. Their attention to detail and commitment to the project were outstanding. The final product exceeded all our expectations.",
    name: 'Jane Doe',
    title: 'Project Manager, Tech Solutions Inc.',
    image: '', // e.g., import authorImg1 from '../assets/jane-doe.png'
  },
  {
    quote: "VJ is a proactive and talented developer. They were able to quickly understand complex requirements and deliver high-quality code. I would highly recommend them.",
    name: 'John Smith',
    title: 'Senior Developer, Code Academy',
    image: '',
  },
   {
    quote: "The creativity and technical skill VJ brought to our website redesign were remarkable. They are a reliable and communicative partner.",
    name: 'Emily White',
    title: 'Founder, Creative Co.',
    image: '',
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <blockquote className="testimonial-text">
              {testimonial.quote}
            </blockquote>
            <div className="testimonial-author">
              <div className="author-image">
                {testimonial.image ? <img src={testimonial.image} alt={testimonial.name} /> : <div className="author-placeholder"></div>}
              </div>
              <div className="author-details">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;