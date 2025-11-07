// REcipe Web - Home Page
import { Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from '../../components/button/button';
import GridMotion from '../../components/section-hero/GridMotion';
import GridMotionMobile from '../../components/section-hero/GridMotionMobile';
import logoImage from '../../assets/recipe-header-logo.png';
import { FEATURES } from '../../utils/constants';
import './home-page.css';

const HomePage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    // Food image URLs for the grid motion background
    const foodItems = [
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop', // Salad
        'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400&h=400&fit=crop', // Vegetables
        'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&h=400&fit=crop', // Bread
        'https://images.unsplash.com/photo-1447175008436-054170c2e979?w=400&h=400&fit=crop', // Carrots
        'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=400&fit=crop', // Tomatoes
        'https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=400&h=400&fit=crop', // Broccoli
        'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop', // Bananas
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop', // Leafy greens
        'https://images.unsplash.com/photo-1599819177338-1971fb78d1b6?w=400&h=400&fit=crop', // Grapes
        'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=400&h=400&fit=crop', // Cucumber
        'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&h=400&fit=crop', // Oranges
        'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop', // Avocado
        'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop', // Strawberries
        'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop', // Potatoes
        'https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400&h=400&fit=crop', // Watermelon
        'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=400&fit=crop', // Corn
        'https://images.unsplash.com/photo-1629828874514-9a3e0c5e7b68?w=400&h=400&fit=crop', // Peaches
        'https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=400&fit=crop', // Onions
        'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400&h=400&fit=crop', // Cherries
        'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400&h=400&fit=crop', // Nuts
        'https://images.unsplash.com/photo-1550828520-4cb496926fc9?w=400&h=400&fit=crop', // Pineapple
        'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop', // Bell peppers
        'https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?w=400&h=400&fit=crop', // Coconut
        'https://images.unsplash.com/photo-1619326537160-9b7d90fdf881?w=400&h=400&fit=crop', // Garlic
        'https://images.unsplash.com/photo-1553279746-1c3b7c6fd874?w=400&h=400&fit=crop', // Mango
        'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=400&fit=crop', // Chili peppers
        'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&h=400&fit=crop', // Blueberries
        'https://images.unsplash.com/photo-1568633686031-257c58df2a3d?w=400&h=400&fit=crop', // Lemons
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero__background">
                    {isMobile ? (
                        <GridMotionMobile items={foodItems} gradientColor="rgba(0, 0, 0, 0.4)" />
                    ) : (
                        <GridMotion items={foodItems} gradientColor="rgba(0, 0, 0, 0.4)" />
                    )}
                </div>
                <div className="container">
                    <div className="hero__content">
                        <div className="hero__logo-container" data-aos="zoom-in">
                            <img src={logoImage} alt="REcipe Logo" className="hero__logo" />
                        </div>
                        <div className="hero__actions" data-aos="fade-up" data-aos-delay="200">
                            <Button
                                to="/download"
                                variant="primary"
                                size="large"
                                icon={<Download size={20} />}
                            >
                                Download Now
                            </Button>
                            <Button to="/about" variant="outline" size="large">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <h2 className="section-title">Smart Features for Smarter Food Management</h2>
                        <p className="section-subtitle">
                            Everything you need to reduce waste and make the most of your ingredients
                        </p>
                    </div>
                    <div className="features__grid">
                        {FEATURES.map((feature, index) => (
                            <div
                                key={feature.id}
                                className="feature-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="feature-card__icon">
                                    <div className="feature-card__icon-bg" />
                                </div>
                                <h3 className="feature-card__title">{feature.title}</h3>
                                <p className="feature-card__description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="section section-alt how-it-works">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <h2 className="section-title">How It Works</h2>
                        <p className="section-subtitle">
                            Get started with REcipe in three simple steps
                        </p>
                    </div>
                    <div className="steps">
                        <div className="step" data-aos="fade-right">
                            <div className="step__number">1</div>
                            <div className="step__content">
                                <h3 className="step__title">Scan Your Food</h3>
                                <p className="step__description">
                                    Use your camera to identify and add items to your inventory instantly.
                                </p>
                            </div>
                        </div>
                        <div className="step" data-aos="fade-right" data-aos-delay="100">
                            <div className="step__number">2</div>
                            <div className="step__content">
                                <h3 className="step__title">Track Expiry Dates</h3>
                                <p className="step__description">
                                    Receive timely notifications before your food expires.
                                </p>
                            </div>
                        </div>
                        <div className="step" data-aos="fade-right" data-aos-delay="200">
                            <div className="step__number">3</div>
                            <div className="step__content">
                                <h3 className="step__title">Get Recipe Ideas</h3>
                                <p className="step__description">
                                    Discover delicious recipes based on what you have available.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta">
                <div className="container">
                    <div className="cta__content" data-aos="zoom-in">
                        <h2 className="cta__title">Ready to Make a Difference?</h2>
                        <p className="cta__description">
                            Join thousands of Filipino households reducing food waste every day.
                        </p>
                        <Button
                            to="/download"
                            variant="secondary"
                            size="large"
                            icon={<Download size={20} />}
                        >
                            Download REcipe Today
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
