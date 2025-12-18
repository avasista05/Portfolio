import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data';
import './Education.css';

const Education = () => {
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
        <section id="education" className="education-section" ref={sectionRef}>
            <div className="container">
                <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
                    <span className="gradient-text">Education</span>
                </h2>

                <div className="education-timeline">
                    {portfolioData.education.map((edu, index) => (
                        <div
                            key={index}
                            className={`education-item glass-card ${isVisible ? 'fade-in-up' : ''}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="education-year">{edu.year}</div>
                            <div className="education-content">
                                <h3>{edu.institution}</h3>
                                <h4>{edu.degree}</h4>
                                <p>{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
