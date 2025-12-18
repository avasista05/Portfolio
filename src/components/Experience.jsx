import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data';
import './Experience.css';

const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section id="experience" className="experience-section" ref={sectionRef}>
            <div className="container">
                <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
                    <span className="gradient-text">Experience</span>
                </h2>

                <div className="experience-timeline">
                    {portfolioData.experience.map((exp, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${isVisible ? 'fade-in-up' : ''}`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">{exp.date}</div>
                            <div className="timeline-content glass-card">
                                <h3>{exp.title}</h3>
                                <h4>{exp.company}</h4>
                                <p className="tagline">{exp.tagline}</p>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
