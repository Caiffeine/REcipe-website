// REcipe Web - About Page
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Users, Target, Award } from 'lucide-react';
import './about-page.css';

const AboutPage = () => {
    const [revealedCards, setRevealedCards] = useState({});
    const [mousePosition, setMousePosition] = useState({});

    // Helper function to get initials from name
    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase();
    };

    const developers = [
        {
            name: 'Cairos Magno',
            role: 'Frontend Developer',
            description: 'Crafting pixel-perfect interfaces and delightful user experiences.',
            photo: '/card-photos/cai.png',
        },
        {
            name: 'Curt Reyes',
            role: 'Quality Assurance Officer',
            description: 'Ensuring quality through rigorous testing and bug hunting.',
            photo: '/card-photos/curt.png',
        },
        {
            name: 'Russ Garcia',
            role: 'Backend Developer',
            description: 'Building robust backends and optimizing database performance.',
            photo: '/card-photos/russ.png',
        },
        {
            name: 'Troy Gonzales',
            role: 'Project Manager',
            description: 'Orchestrating sprints and keeping the team on track.',
            photo: '/card-photos/troy.png',
        },
    ];

    const handleCardReveal = (index) => {
        if (!revealedCards[index]) {
            setRevealedCards(prev => ({ ...prev, [index]: true }));
        }
    };

    const handleMouseMove = (e, index) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMousePosition(prev => ({
            ...prev,
            [index]: { x, y }
        }));
    };

    const handleMouseLeave = (index) => {
        setMousePosition(prev => ({
            ...prev,
            [index]: null
        }));
    };

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero__content" data-aos="fade-up">
                        <h1 className="about-hero__title">About REcipe</h1>
                        <p className="about-hero__subtitle">
                            Empowering Filipino households to reduce food waste through intelligent technology
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section about-mission">
                <div className="container">
                    <div className="about-mission__content">
                        <div className="about-mission__text" data-aos="fade-right">
                            <h2 className="about-mission__title">Our Mission</h2>
                            <p className="about-mission__description">
                                Food waste is a critical issue in the Philippines. According to the Department of Science
                                and Technology - Food and Nutrition Research Institute, rice, vegetables, and meat are among
                                the most frequently discarded items at the household level.
                            </p>
                            <p className="about-mission__description">
                                REcipe addresses this challenge by providing an AI-powered food management system that helps
                                households track inventory, monitor expiration dates, and generate recipe suggestions based
                                on available ingredients. Our goal is to reduce food waste while promoting sustainable
                                consumption practices.
                            </p>
                        </div>
                        <div className="about-mission__image" data-aos="fade-left">
                            <img
                                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop"
                                alt="Sustainable food management"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section section-alt about-values">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="section-subtitle">
                            The principles that guide our mission to reduce food waste
                        </p>
                    </div>
                    <div className="values-grid">
                        <div className="value-card" data-aos="fade-up" data-aos-delay="0">
                            <div className="value-card__icon">
                                <Leaf size={32} />
                            </div>
                            <h3 className="value-card__title">Sustainability</h3>
                            <p className="value-card__description">
                                Committed to environmental responsibility and promoting sustainable food practices.
                            </p>
                        </div>
                        <div className="value-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="value-card__icon">
                                <Users size={32} />
                            </div>
                            <h3 className="value-card__title">Community</h3>
                            <p className="value-card__description">
                                Building a community of conscious consumers working together to reduce waste.
                            </p>
                        </div>
                        <div className="value-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="value-card__icon">
                                <Target size={32} />
                            </div>
                            <h3 className="value-card__title">Innovation</h3>
                            <p className="value-card__description">
                                Leveraging cutting-edge AI technology to solve real-world food waste challenges.
                            </p>
                        </div>
                        <div className="value-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="value-card__icon">
                                <Award size={32} />
                            </div>
                            <h3 className="value-card__title">Excellence</h3>
                            <p className="value-card__description">
                                Dedicated to delivering a high-quality, user-friendly experience for all users.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Developers Section */}
            <section className="section about-developers team-section">
                <div className="container">
                    <motion.h2
                        className="about-developers__title section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.4 }}
                    >
                        Meet the Developers
                    </motion.h2>

                    <div className="developers-grid team-grid">
                        {developers.map((member, index) => {
                            const isRevealed = revealedCards[index];

                            return (
                                <motion.div
                                    key={index}
                                    className={`team-card-wrapper ${isRevealed ? 'revealed' : ''}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    onClick={() => handleCardReveal(index)}
                                    onMouseMove={(e) => !isRevealed && handleMouseMove(e, index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                    style={{ cursor: !isRevealed ? 'pointer' : 'default' }}
                                >
                                    {/* Card Front (Hidden) */}
                                    <AnimatePresence>
                                        {!isRevealed && (
                                            <motion.div
                                                className="team-card-front"
                                                initial={{ opacity: 1 }}
                                                exit={{
                                                    opacity: 0,
                                                    filter: "blur(20px)",
                                                    scale: 1.2
                                                }}
                                                transition={{
                                                    duration: 0.8,
                                                    ease: "easeOut"
                                                }}
                                            >
                                                {/* Shine effect covering entire card */}
                                                <div
                                                    className="card-shine"
                                                    style={mousePosition[index] ? {
                                                        background: `radial-gradient(circle 400px at ${mousePosition[index].x}px ${mousePosition[index].y}px, rgba(76, 175, 80, 0.6) 0%, rgba(76, 175, 80, 0.4) 25%, rgba(76, 175, 80, 0.2) 50%, transparent 100%)`
                                                    } : {}}
                                                ></div>

                                                <div className="card-front-content">
                                                    <div className="initials-circle">{getInitials(member.name)}</div>
                                                    <p className="mystery-text">Click to Reveal</p>
                                                </div>

                                                {/* Glass shatter overlay */}
                                                {isRevealed === false && (
                                                    <div className="glass-overlay"></div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Card Back (Revealed) */}
                                    <AnimatePresence>
                                        {isRevealed && (
                                            <motion.div
                                                className="team-card revealed-card"
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                    filter: "blur(20px)"
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                    filter: "blur(0px)"
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: "easeOut",
                                                    delay: 0.3
                                                }}
                                                whileHover="hover"
                                                variants={{
                                                    hover: { y: -8 }
                                                }}
                                            >
                                                {/* Floating placeholder that slides up behind card on hover */}
                                                <motion.div
                                                    className="floating-avatar"
                                                    variants={{
                                                        hover: {
                                                            y: -180,
                                                            scale: 1.1,
                                                            opacity: 1
                                                        }
                                                    }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 150,
                                                        damping: 25
                                                    }}
                                                >
                                                    {member.photo ? (
                                                        <img
                                                            src={member.photo}
                                                            alt={member.name}
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'cover',
                                                                borderRadius: '16px'
                                                            }}
                                                        />
                                                    ) : (
                                                        <img
                                                            src="/card-photos/cai.png"
                                                            alt={`${member.name} placeholder`}
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'cover',
                                                                borderRadius: '16px'
                                                            }}
                                                        />
                                                    )}
                                                </motion.div>
                                                <motion.div
                                                    className="team-avatar in-card"
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                                                >
                                                    {member.name.split(' ').map(n => n[0]).join('')}
                                                </motion.div>
                                                <motion.h3
                                                    className="team-name"
                                                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                                    transition={{ delay: 0.7, duration: 0.4 }}
                                                >
                                                    {member.name}
                                                </motion.h3>
                                                <motion.div
                                                    className="team-description"
                                                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                                    transition={{ delay: 0.8, duration: 0.4 }}
                                                >
                                                    <span className="team-role-inline">{member.role}</span>
                                                    <p className="team-description-text">{member.description}</p>
                                                </motion.div>

                                                {/* Particle effects */}
                                                <motion.div
                                                    className="reveal-particles"
                                                    initial={{ opacity: 1 }}
                                                    animate={{ opacity: 0 }}
                                                    transition={{ delay: 1, duration: 0.5 }}
                                                >
                                                    {[...Array(12)].map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            className="particle"
                                                            initial={{
                                                                x: 0,
                                                                y: 0,
                                                                opacity: 1,
                                                                scale: 1
                                                            }}
                                                            animate={{
                                                                x: Math.cos(i * 30 * Math.PI / 180) * 100,
                                                                y: Math.sin(i * 30 * Math.PI / 180) * 100,
                                                                opacity: 0,
                                                                scale: 0
                                                            }}
                                                            transition={{
                                                                delay: 0.3 + (i * 0.05),
                                                                duration: 0.8,
                                                                ease: "easeOut"
                                                            }}
                                                        />
                                                    ))}
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
