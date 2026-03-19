import { useRef } from 'react';
import './Skills.css';

const techStack = [
  { name: 'React Js', emoji: '⚛️' },
  { name: 'JavaScript', emoji: '💛' },
  { name: 'HTML5', emoji: '🏗️' },
  { name: 'CSS3', emoji: '🎨' },
  { name: 'Tailwind CSS', emoji: '🌬️' },
  { name: 'Bootstrap', emoji: '🅱️' },
  { name: 'Node.js', emoji: '🟢' },
  { name: 'Express.js', emoji: '🚀' },
  { name: 'MongoDB', emoji: '🍃' },
  { name: 'REST API', emoji: '🔗' },
  { name: 'API Integration', emoji: '🔌' },
  { name: 'Git', emoji: '🔧' },
  { name: 'GitHub', emoji: '🐙' },
  { name: 'Responsive Design', emoji: '📱' },
  { name: 'CSS Grid & Flexbox', emoji: '📐' }
];

export default function Skills() {
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * -15; // tilt up/down
    const rotateY = ((x - midX) / midX) * 15; // tilt left/right

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <section id="skills" className="skills">
      <h2>
        My Tech Stack <span className="bracket">{'{}'}</span>
      </h2>

      <div
        className="skills-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="tech-grid">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="tech-badge"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <span className="tech-emoji">{tech.emoji}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
