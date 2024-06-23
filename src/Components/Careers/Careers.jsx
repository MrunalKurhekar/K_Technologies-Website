import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import plusIcon from '../../assets/plus.png';
import ConnectIcon from '../../assets/Connect.png'
import './Careers.css';

const jobListings = [
  {
    id: 1,
    title: 'CAD Engineer',
    description: 'We are looking for a talented CAD Engineer to join our team.',
    responsibilities: [
      'Engineering support on Sustaining projects that includes',
      'Interpret ECR and understand the changes, impact and work independently',
      'Initiate ECR while working with engineering and manufacturing teams',
      'Develop design concepts using CAD software (SolidWorks) as required by manufacturing groups',
      'Produce detailed, final drawings, 3D models and specifications to produce design specifications, including parts lists and costings'
    ],
    knowledge: [
      'Knowledge of HVAC products',
      'Knowledge of Solid Works 2018 (Modeling, Drawing, Handling Design table)',
      'Knowledge about Excel automation with formulation',
      'Knowledge about Sheet metal basics',
      'Good understanding of Heat Exchangers'
    ],
    experience: '3 to 4 Years',
    joining: '15 to 30 days',
    location: 'Pune'
  },
  {
    id: 2,
    title: 'Product Manager',
    description: 'We need a Product Manager to help us define the future of our product.',
    responsibilities: ['Define product vision', 'Manage the product lifecycle', 'Work with cross-functional teams'],
    knowledge: ['Strong leadership skills', 'Excellent communication skills'],
    experience: '3 to 4 Years',
    joining: '15 to 30 days',
    location: 'Pune'
  },
  {
    id: 3,
    title: 'Software Engineer',
    location: 'Remote',
    description: 'We are looking for a talented Software Engineer to join our team.',
    responsibilities: ['Develop and maintain web applications', 'Collaborate with the team', 'Write clean, scalable code'],
    knowledge: ['3+ years of experience', 'Proficient in React.js', 'Good problem-solving skills'],
    experience: '3 to 4 Years',
    joining: '15 to 30 days',
    location: 'Pune'
  },
  // Add more job listings as needed
];

const Careers = () => {
  const [openJobId, setOpenJobId] = useState(null);

  const toggleJob = (id) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  return (
    <div className="careers-container" id="career">
      <h1>OPENINGS</h1>
      <div className="job-listings">
        {jobListings.map((job) => (
          <div key={job.id} className="job-listing">
            <div className="job-header" onClick={() => toggleJob(job.id)}>
              <img src={plusIcon} alt="Plus" className="plus-icon" />
              <h2>{job.title}</h2>
            </div>
            <Collapse isOpened={openJobId === job.id}>
              <div className="job-details">
                <h4>Description</h4>
                <p>{job.description}</p>
                <h4>Responsibilities</h4>
                <ul>
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
                <h4>Knowledge</h4>
                <ul>
                  {job.knowledge.map((knowledge, index) => (
                    <li key={index}>{knowledge}</li>
                  ))}
                </ul>
                <p><strong>Experience:</strong> {job.experience}</p>
                <p><strong>Joining:</strong> {job.joining}</p>
                <p><strong>Location:</strong> {job.location}</p>
              </div>
            </Collapse>
          </div>
        ))}
      </div>
      <div className="Connect" id="Connect">
      <img src={ConnectIcon} alt="Join Us" className="Connect-icon" />
        <h2>Want to join our team</h2>
        <p>Interested Candidates, please send your CV to the below Mail ID</p>
        <p><strong>Mail ID:</strong> itservices0719@gmail.com</p>
        <p><strong>Contact No.:</strong> 7507161910</p>
      </div>
    </div>
  );
};

export default Careers;

