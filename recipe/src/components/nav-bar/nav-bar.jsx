// REcipe Web - Navigation Component
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAVIGATION_LINKS, SITE_NAME } from '../../utils/constants';
import logoImage from '../../assets/recipe-logo.svg';
import './nav-bar.css';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`nav-bar ${isScrolled ? 'nav-bar--scrolled' : ''}`}>
            <div className="container">
                <div className="nav-bar__content">
                    <Link to="/" className="nav-bar__logo">
                        <img src={logoImage} alt={SITE_NAME} className="nav-bar__logo-image" />
                    </Link>

                    <button
                        className="nav-bar__toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <ul className={`nav-bar__links ${isMenuOpen ? 'nav-bar__links--open' : ''}`}>
                        {NAVIGATION_LINKS.map((link) => (
                            <li key={link.path} className="nav-bar__item">
                                <Link
                                    to={link.path}
                                    className={`nav-bar__link ${location.pathname === link.path ? 'nav-bar__link--active' : ''
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
