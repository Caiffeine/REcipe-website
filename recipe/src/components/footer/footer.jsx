// REcipe Web - Footer Component
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_NAME, NAVIGATION_LINKS, SOCIAL_LINKS, CONTACT_INFO } from '../../utils/constants';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__section">
                        <h3 className="footer__title">{SITE_NAME}</h3>
                        <p className="footer__description">
                            Reducing food waste through smart technology.
                            Empowering Filipino households to make sustainable food choices.
                        </p>
                        <div className="footer__social">
                            <a
                                href={SOCIAL_LINKS.facebook}
                                className="footer__social-link"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href={SOCIAL_LINKS.twitter}
                                className="footer__social-link"
                                aria-label="Twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href={SOCIAL_LINKS.instagram}
                                className="footer__social-link"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href={SOCIAL_LINKS.github}
                                className="footer__social-link"
                                aria-label="GitHub"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__subtitle">Quick Links</h4>
                        <ul className="footer__links">
                            {NAVIGATION_LINKS.map((link) => (
                                <li key={link.path} className="footer__link-item">
                                    <Link to={link.path} className="footer__link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__subtitle">Contact Us</h4>
                        <ul className="footer__contact">
                            <li className="footer__contact-item">
                                <Mail size={18} />
                                <a href={`mailto:${CONTACT_INFO.email}`} className="footer__contact-link">
                                    {CONTACT_INFO.email}
                                </a>
                            </li>
                            <li className="footer__contact-item">
                                <Phone size={18} />
                                <a href={`tel:${CONTACT_INFO.phone}`} className="footer__contact-link">
                                    {CONTACT_INFO.phone}
                                </a>
                            </li>
                            <li className="footer__contact-item">
                                <MapPin size={18} />
                                <span>{CONTACT_INFO.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        &copy; {currentYear} {SITE_NAME}. All rights reserved.
                    </p>
                    <div className="footer__legal">
                        <Link to="/privacy" className="footer__legal-link">Privacy Policy</Link>
                        <span className="footer__divider">|</span>
                        <Link to="/terms" className="footer__legal-link">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
