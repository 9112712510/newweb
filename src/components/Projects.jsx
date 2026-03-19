import { useEffect, useRef, useState } from 'react';
import './Projects.css';
import urbanLogo from '../assets/urban.png';
import techHeavenLogo from '../assets/techheaven.png';
import buildLogo from '../assets/build.png';

const projects = [
  {
    title: 'Urban-Muse',
    description: 'Ecommerce Website for selling products',
    technologies: 'React.js | Tailwind css |Node.js | Express.js | MongoDB ',
    logo: urbanLogo,
    platforms: ['Web'],
    url: 'https://urban-muse01-b9dd.vercel.app/',
  },
  {
    title: 'Gada Electronics(Tech Heaven)',
    description: 'Electronics products Selling  Website',
    technologies: 'React.js |Javascript| Tailwind Css ',
    logo: techHeavenLogo,
    platforms: ['Web'],
    url: 'https://poetic-chebakia-c6390e.netlify.app/',
  },
  {
    title: 'Build With US',
    description: 'Construction Company Website',
    technologies: 'React.js | Javascript |Taiwind css | Bootstrap ',
    logo: buildLogo,
    platforms: ['Web'],
    url: 'https://prathameshconstructionwebsite.netlify.app',
  },
  // {
  //   title: 'Victors Kafe',
  //   description: 'Feature-rich Food Ordering app with secure authentication, Stripe payments.',
  //   technologies: 'React Native | Voice Service | XCode | Android Studio',
  //   logo: '/assets/victors-kafe-logo.png',
  //   platforms: ['IOS', 'Android'],
  // },
  // {
  //   title: 'iMenu4u Merchant',
  //   description: 'Development of the iMenu4U Merchant App, empowering restaurant owners.',
  //   technologies: 'React Native | State Management | WebView',
  //   logo: '/assets/imen4u-merchant-logo.png',
  //   platforms: ['IOS', 'Android'],
  // },
  // {
  //   title: 'Loving Hut',
  //   description: 'Food Ordering app enhancing user engagement through secure logins.',
  //   technologies: 'React Native | Food Delivery | Maps | Stripe',
  //   logo: '/assets/loving-hut-logo.png',
  //   platforms: ['Android'],
  // },
  // {
  //   title: 'iMenu4u Notification',
  //   description: 'Push notification service for iMenu4U platform.',
  //   technologies: 'React Native | Firebase Cloud Messaging | Notifications',
  //   logo: '/assets/imen4u-notification-logo.png',
  //   platforms: ['IOS', 'Android'],
  // },
  // {
  //   title: 'Neo Automata',
  //   description: 'Enterprise mobile solutions with advanced security features.',
  //   technologies: 'React Native | Security | Enterprise Solutions',
  //   logo: '/assets/neo-automata-logo.png',
  //   platforms: ['IOS', 'Android'],
  // },
];

export default function Projects() {
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
      id="projects" 
      className={`projects ${isVisible ? 'projects-visible' : ''}`}
      ref={sectionRef}
    >
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const CardContent = (
            <>
              <div className="project-logo-container">
                <img src={project.logo} alt={project.title} className="project-logo" />
              </div>
              <div className="project-technologies">{project.technologies}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-platforms">
                {project.platforms.map((platform) => (
                  <span 
                    key={platform} 
                    className={`platform-badge ${platform.toLowerCase() === 'web' ? 'platform-web' : ''}`}
                  >
                    <span className="platform-icon">
                      {platform.toLowerCase() === 'web' ? '🌐' : '🔗'}
                    </span>
                    {platform}
                  </span>
                ))}
              </div>
            </>
          );

          return project.url ? (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card project-card-${index + 1} project-card-link`}
            >
              {CardContent}
            </a>
          ) : (
            <div key={index} className={`project-card project-card-${index + 1}`}>
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
