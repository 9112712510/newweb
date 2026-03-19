import { useEffect, useRef, useState } from 'react';
import './Education.css';
import pdeaLogo from '../assets/pdea.webp';
import rjspmLogo from '../assets/rjspm.jpg';

export default function Education() {
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
      id="education" 
      className={`education ${isVisible ? 'education-visible' : ''}`}
      ref={sectionRef}
    >
      <h2 className="education-title">Education</h2>

      <div className="education-timeline">
        {/* Row 1: Bachelor degree on left */}
        <div className="education-card education-card--right education-card-1">
          <div className="education-institute-logo">
            <img
              src={pdeaLogo}
              alt="PDEA logo"
              className="education-institute-logo-img"
            />
          </div>
          <h3 className="education-card-title">
            PROF. RAMKRISHNA MORE ARTS, COMMERCE &amp; SCIENCE COLLEGE
          </h3>
          <p className="education-card-subtitle">
            Bachelor of Science – Computer Science
          </p>
          <p className="education-card-grade">Grade: 8.48 CGPA</p>
          <p className="education-card-description">
            Completed Bachelor&apos;s degree in Computer Science from Prof.
            Ramkrishna More College, Pimpri-Chinchwad, Pune, Maharashtra.
          </p>
        </div>

        <div className="education-timeline-node education-node-1">
          <div className="education-timeline-node-circle">
            <img
              src={pdeaLogo}
              alt="PDEA logo"
              className="education-timeline-logo-img"
            />
          </div>
          <p className="education-timeline-date">Aug 2019 – Jun 2022</p>
        </div>

        <div className="education-spacer" />

        {/* Row 2: 12th on right */}
        <div className="education-spacer" />

        <div className="education-timeline-node education-node-2">
          <div className="education-timeline-node-circle">
            <img
              src={rjspmLogo}
              alt="RJSPM logo"
              className="education-timeline-logo-img"
            />
          </div>
          <p className="education-timeline-date education-timeline-date--left">
            Jun 2017 – Feb 2019
          </p>
        </div>

        <div className="education-card education-card-2">
          <div className="education-institute-logo">
            <img
              src={rjspmLogo}
              alt="RJSPM logo"
              className="education-institute-logo-img"
            />
          </div>
          <h3 className="education-card-title">
            Rajmata Jijau Shikshan Prasarak Mandal
          </h3>
          <p className="education-card-subtitle">HSC (PCMB)</p>
          <p className="education-card-grade">Grade: 62%</p>
          <p className="education-card-description">
            Completed class 12 (PCMB) from Rajmata Jijau Shikshan Prasarak Mandal Pune, Maharashtra.
          </p>
        </div>

        {/* Row 3: 10th on left */}
        <div className="education-card education-card-3">
          <div className="education-institute-logo">
            <img
              src={pdeaLogo}
              alt="PDEA logo"
              className="education-institute-logo-img"
            />
          </div>
          <h3 className="education-card-title">
            Shri Nageshwar Mahavidyalaya, Moshi
          </h3>
          <p className="education-card-subtitle">SSC Board</p>
          <p className="education-card-grade">Grade: 79.20%</p>
          <p className="education-card-description">
            Completed class 10 education from Shri Nageshwar Mahavidyalaya Moshi, Pune, Maharashtra.
          </p>
        </div>

        <div className="education-timeline-node education-node-3">
          <div className="education-timeline-node-circle">
            <img
              src={pdeaLogo}
              alt="PDEA logo"
              className="education-timeline-logo-img"
            />
          </div>
          <p className="education-timeline-date">Jun 2016 – Mar 2017</p>
        </div>

        <div className="education-spacer" />

        {/* Bottom icon */}
        <div className="education-spacer" />
        <div className="education-bottom-icon-wrapper">
          <div className="education-bottom-icon" />
        </div>
        <div className="education-spacer" />
      </div>
    </section>
  );
}
