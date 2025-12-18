import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data';
import './Projects.css';

const Projects = () => {
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
        <section id="projects" className="projects-section" ref={sectionRef}>
            <div className="container">
                <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
                    Featured <span className="gradient-text">Projects</span>
                </h2>

                <div className="projects-grid">
                    {portfolioData.projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-card glass-card ${isVisible ? 'fade-in-up' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-number">{project.number}</div>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p className="project-date">{project.date}</p>
                                <p className="project-description">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
