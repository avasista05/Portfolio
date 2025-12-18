import { useEffect, useState } from 'react';
import { portfolioData } from '../data';
import './Hero.css';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero-section">
            <div className="hero-container">
                <div className={`hero-content ${isVisible ? 'fade-in-up' : ''}`}>
                    <div className="hero-text">
                        <h1 className="hero-title">
                            {portfolioData.personal.tagline.split('. ').map((line, index) => (
                                <span key={index} className="title-line" style={{ animationDelay: `${index * 0.1}s` }}>
                                    {line}.
                                    <br />
                                </span>
                            ))}
                        </h1>
                        <p className="hero-subtitle">{portfolioData.personal.subtitle}</p>
                        <div className="hero-cta">
                            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                                <span>Let's Connect</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="btn btn-secondary" onClick={() => scrollToSection('projects')}>
                                View Projects
                            </button>
                        </div>
                    </div>
                    <div className={`hero-image ${isVisible ? 'slide-in-right' : ''}`}>
                        <div className="image-wrapper">
                            <img src={portfolioData.personal.profileImage} alt={portfolioData.personal.name} />
                            <div className="image-glow"></div>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <span>Scroll Down</span>
                    <div className="scroll-arrow"></div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="floating-elements">
                <div className="float-element" style={{ top: '20%', left: '10%' }}>📊</div>
                <div className="float-element" style={{ top: '60%', right: '15%' }}>🎯</div>
                <div className="float-element" style={{ bottom: '20%', left: '15%' }}>💡</div>
            </div>
        </section>
    );
};

export default Hero;
