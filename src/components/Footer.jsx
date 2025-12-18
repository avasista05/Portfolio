import { portfolioData } from '../data';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo gradient-text">
                        {portfolioData.personal.logo}
                    </div>

                    <button onClick={scrollToTop} className="scroll-top" aria-label="Scroll to top">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} {portfolioData.footer.copyrightText}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
