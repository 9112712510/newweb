import { useEffect, useRef, useState } from 'react';
import './Experience.css';
import ikscLogo from '../assets/iksc.png';
import codesavvyLogo from '../assets/codesavvy.jpeg';

export default function Experience() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="experience" 
      className={`experience ${isVisible ? 'experience-visible' : ''}`}
      ref={sectionRef}
    >
      <h2 className="experience-title">Experience</h2>

      <div className="experience-timeline">
        {/* Row 1: card on left, node on center line */}
        <div className="experience-card experience-card-1">
          <div className="experience-company-logo">
            <img
              src={ikscLogo}
              alt="IKSC Knowledge Bridge Pvt Ltd logo"
              className="experience-company-logo-img"
            />
          </div>
          <h3 className="experience-role">MERN Stack Developer</h3>
          <p className="experience-company">IKSC Knowledge Bridge Pvt Ltd</p>
          <p className="experience-duration">Sep 2025 - Present </p>

          <p className="experience-description">
            Currently working on the development of a web-based psychometric assessment platform that evaluates users through structured quizzes and generates personality and compatibility reports. Developing dynamic quiz interfaces and multi-step questionnaire flows using HTML, CSS, and JavaScript. Designing responsive report layouts to display assessment results in a clear and structured format. Integrating frontend components with backend APIs to fetch quiz data and user responses. Implementing logic to process answers and generate detailed reports. Continuously improving UI responsiveness and usability for a better user experience across devices.
          </p>

          <p className="experience-skills-title">Skills</p>
          <ul className="experience-skills-list">
            <li>React Js</li>
            <li>HTML, CSS, Bootstrap, Javascript</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Enhancement</li>
            <li>Node.js, Express.js, MongoDB</li>
            <li>REST API Development</li>
            <li>Collaboration &amp; Problem Solving</li>
          </ul>
        </div>

        <div className="experience-timeline-node experience-node-1">
          <div className="experience-timeline-node-circle">
            <img
              src={ikscLogo}
              alt="IKSC Knowledge Bridge Pvt Ltd logo"
              className="experience-timeline-logo-img"
            />
          </div>
          <p className="experience-timeline-date">May 2025 – Feb 2026</p>
        </div>

        <div className="experience-spacer" />

        {/* Row 2: card on right, node on center line */}
        <div className="experience-spacer" />

        <div className="experience-timeline-node experience-node-2">
          <div className="experience-timeline-node-circle">
            <img
              src={codesavvyLogo}
              alt="Code Savvy Solutions logo"
              className="experience-timeline-logo-img"
            />
          </div>
          <p className="experience-timeline-date experience-timeline-date--left">
            Jan 2023 – Apr 2025
          </p>
        </div>

        <div className="experience-card experience-card-2">
          <div className="experience-company-logo">
            <img
              src={codesavvyLogo}
              alt="Code Savvy Solutions logo"
              className="experience-company-logo-img"
            />
          </div>
          <h3 className="experience-role">Junior Web Developer</h3>
          <p className="experience-company">Code Savvy Solutions.</p>
          <p className="experience-duration">Jun 2024 - Nov 2024</p>

          <p className="experience-description">
            Developed an interactive psychometric assessment platform that allows users to complete quizzes and receive structured personality and compatibility reports. Built responsive report layouts and dynamic quiz interfaces using HTML, CSS, JavaScript, and backend APIs.<br></br>
            Built a full-stack eCommerce application using React, Node.js, Express, and MongoDB. Implemented product listing, user authentication, shopping cart, and order management with REST API integration and responsive UI.
          </p>

          <p className="experience-skills-title">Skills</p>
          <ul className="experience-skills-list">

            <li>ReactJS &amp; Redux Toolkit</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>TypeScript, JavaScript, HTML, CSS, Bootstrap</li>
            <li>Git/GitHub &amp; Authentication Login</li>
          </ul>
        </div>
      </div>
    </section>
  );
}



