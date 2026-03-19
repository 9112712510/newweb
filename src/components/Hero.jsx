import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const roles = ['ReactJS Developer', 'Web Developer', 'Full Stack Developer'];

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const photoRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedRole(currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        if (charIndex < currentRole.length) {
          setDisplayedRole(currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const handlePhotoMouseMove = (event) => {
    const card = photoRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * -15;
    const rotateY = ((x - midX) / midX) * 15;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handlePhotoMouseLeave = () => {
    const card = photoRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section id="hero" className="hero">
      <div className="stars-background">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
        <div className="star star-7"></div>
        <div className="star star-8"></div>
        <div className="star star-9"></div>
        <div className="star star-10"></div>
        <div className="star star-11"></div>
        <div className="star star-12"></div>
        <div className="star star-13"></div>
        <div className="star star-14"></div>
        <div className="star star-15"></div>
        <div className="star star-16"></div>
        <div className="star star-17"></div>
        <div className="star star-18"></div>
        <div className="star star-19"></div>
        <div className="star star-20"></div>
        <div className="star star-green star-21"></div>
        <div className="star star-green star-22"></div>
        <div className="star star-green star-23"></div>
        <div className="star star-green star-24"></div>
        <div className="star star-green star-25"></div>
        <div className="star star-orange star-26"></div>
        <div className="star star-orange star-27"></div>
        <div className="star star-orange star-28"></div>
        <div className="star star-orange star-29"></div>
        <div className="star star-orange star-30"></div>
      </div>
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="fade-in">Hi, I am Prathamesh Kanse</h1>
          <h2 className="fade-in-delay">I am a <span className="highlight typing">{displayedRole}<span className="cursor">|</span></span></h2>
          <p className="fade-in-delay-2">
            Proactive React developer with 1 year of experience creating
            scalable, user-focused mobile apps that deliver seamless performance
            and engaging user experiences.
          </p>
          <a href="/prathamesh.pdf" className="btn-primary fade-in-delay-3" download>
            Download Resume
          </a>
        </div>
        <div
          className="hero-right fade-in-delay-4"
          onMouseMove={handlePhotoMouseMove}
          onMouseLeave={handlePhotoMouseLeave}
        >
          <img
            src="/assets/pratham.jpeg"
            alt="Prathamesh Kanse"
            className="hero-image"
            ref={photoRef}
          />
        </div>
      </div>
    </section>
  );
}
