// REcipe Web - About Page
import { Leaf, Users, Target, Award } from 'lucide-react';
import './about-page.css';

const AboutPage = () => {
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
            <section className="section about-developers">
                <div className="container">
                    <div className="about-developers__content" data-aos="fade-up">
                        <h2 className="about-developers__title">Meet the Developers</h2>
                        <p className="about-developers__subtitle">The team behind REcipe</p>
                        <div className="developers-grid">
                            <div className="developer-card" data-aos="zoom-in" data-aos-delay="0">
                                <div className="developer-card__name">Cairos Magno</div>
                                <div className="developer-card__role">Developer</div>
                            </div>
                            <div className="developer-card" data-aos="zoom-in" data-aos-delay="100">
                                <div className="developer-card__name">Curt Reyes</div>
                                <div className="developer-card__role">Developer</div>
                            </div>
                            <div className="developer-card" data-aos="zoom-in" data-aos-delay="200">
                                <div className="developer-card__name">Russ Garcia</div>
                                <div className="developer-card__role">Developer</div>
                            </div>
                            <div className="developer-card" data-aos="zoom-in" data-aos-delay="300">
                                <div className="developer-card__name">Troy Gonzales</div>
                                <div className="developer-card__role">Developer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
