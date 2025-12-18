import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data';
import './About.css';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
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
        <section id="about" className="about-section" ref={sectionRef}>
            <div className="container">
                <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
                    About <span className="gradient-text">Me</span>
                </h2>

                <p className={`about-story ${isVisible ? 'fade-in-up' : ''}`}>
                    {portfolioData.about.story}
                </p>

                <div className="skills-grid">
                    {portfolioData.about.skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`skill-card glass-card ${isVisible ? 'fade-in-up' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
