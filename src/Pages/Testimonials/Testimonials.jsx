import React from 'react';
import './Testimonials.css';
import testimonialsData from './TestimonialsItems.json';

const Testimonials = () => {
  const HeroSection = () => (
    <div className="hero-section center">
      <h1 className="page-title">Our Success Stories</h1>
      <p className="page-subtitle">Read about couples who found their perfect match.</p>
    </div>
  );

  const ActionButtons = () => (
    <div className="col s12">
      <div className="action-buttons-container">
        <button className="primary-action-btn">
          Share Your Story <i className="material-icons right">favorite</i>
        </button>
      </div>
    </div>
  );

  const TestimonialCard = ({ story }) => (
    <div className="testimonial-card">
      <div className="quote-icon">❝</div>
      <p className="story-text">{story.story}</p>
      <div className="testimonial-footer">
        <img src={story.image} alt={`Profile of ${story.coupleNames}`} className="couple-image" />
        <div className="couple-info">
          <div className="couple-names">{story.coupleNames}</div>
          <div className="couple-date">{story.date}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="main-wrapper">
      <div className="container-wrapper">
        <div className="row">
          <HeroSection />
          <ActionButtons />
          <div className="col s12 no-padding">
            <div className="testimonials-card-container">
              <h2 className="section-title">Happy Couples</h2>
              <div className="testimonial-grid">
                {testimonialsData.map((story) => (
                  <TestimonialCard key={story.id} story={story} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;