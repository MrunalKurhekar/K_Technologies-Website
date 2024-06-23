import React, { useState } from 'react';
import './Services.css';

const services = [
  {
    title: 'Software Development',
    description: 'Tailored software solutions to meet your business needs, ensuring optimal performance and functionality.',
  },
  {
    title: 'IT Consulting',
    description: 'Providing expert advice and strategies to help you leverage technology for business growth.',
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to increase your online presence and drive business growth.',
  },
  {
    title: 'Cloud Solutions',
    description: 'Implementing cloud-based solutions that offer scalability, security, and cost-efficiency.',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-centric interfaces that provide an exceptional user experience.',
  },
  {
    title: 'Cybersecurity',
    description: 'Protecting your business with robust cybersecurity measures to safeguard your data.',
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const blocksPerSlide = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + blocksPerSlide) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - blocksPerSlide < 0 ? services.length - blocksPerSlide : prevIndex - blocksPerSlide
    );
  };

  const visibleServices = services.slice(currentIndex, currentIndex + blocksPerSlide);

  return (
    <div className="services" id="service">
      <h2>Our Services</h2>
      <div className="service-blocks">
        {visibleServices.map((service, index) => (
          <div className="service-block" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrev}>&laquo; Previous</button>
        <button onClick={handleNext}>Next &raquo;</button>
      </div>
    </div>
  );
};

export default Services;
