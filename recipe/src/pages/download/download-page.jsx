// REcipe Web - Download Page
import { Download, Smartphone, Check, Users, Star, Zap, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from '../../components/button/button';
import './download-page.css';

const DownloadPage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

const features = [
    'AI-Powered Food Recognition',
    'Universal Scanner (Barcode, QR, OCR)',
    'SousChef AI Recipe Generator',
    'Smart Expiry Alerts (7/3/1 Days)',
    'User Pantry Management',
    'Cross-Device Sync via Supabase'
];

    const stats = [
        { number: '10K+', label: 'Active Users', icon: <Users size={32} /> },
        { number: '4.8', label: 'User Rating', icon: <Star size={32} /> },
        { number: '50K+', label: 'Foods Tracked', icon: <Zap size={32} /> },
        { number: '100%', label: 'Secure', icon: <Shield size={32} /> }
    ];

    return (
        <div className="download-page">
            {/* Hero Section */}
            <section className="download-hero">
                <div className="download-hero__background"></div>
                <div className="container">
                    <div className="download-hero__content">
                        <div className="download-hero__text" data-aos="fade-right">
                            <h1 className="download-hero__title">
                                Download REcipe
                                <br />
                                <span className="download-hero__title--highlight">Start Saving Food Today</span>
                            </h1>
                                Compatible with Android 8.0+ • Free Forever
                            </p>
                        </div>

                        <div className="download-hero__image" data-aos="fade-left" data-aos-delay="200">
                            <img
                                src="/images/REcipe.gif"
                                alt="REcipe logo animation"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section download-features">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <h2 className="section-title">What's Included</h2>
                        <p className="section-subtitle">
                            Everything you need to manage your food and reduce waste
                        </p>
                    </div>

                    <div className="features-list" data-aos="fade-up" data-aos-delay="100">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item" data-aos="zoom-in" data-aos-delay={index * 50}>
                                <div className="feature-item__icon">
                                    <Check size={24} />
                                </div>
                                <span className="feature-item__text">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
{/* Developer Insights Section */}
<section className="section section-alt developer-insights">
    <div className="container">
        <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Powered by Modern Tech</h2>
            <p className="section-subtitle">
                Built for performance, reliability, and scale.
            </p>
        </div>
        <div className="features-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-xl)', marginTop: 'var(--spacing-2xl)' }}>
            <div className="feature-item" data-aos="fade-up">
                <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary)' }}>React Native</h3>
                <p>Native Android performance.</p>
            </div>
            <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
                <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary)' }}>Supabase</h3>
                <p>Real-time database & secure auth.</p>
            </div>
            <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
                <h3 style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary)' }}>Edamam & SousChef AI</h3>
                <p>Enterprise-grade recipe intelligence.</p>
            </div>
        </div>
    </div>
</section>

            {/* Instructions Section */}
            <section className="section section-alt download-instructions">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <h2 className="section-title">Installation Guide</h2>
                        <p className="section-subtitle">
                            Follow these simple steps to get started with REcipe
                        </p>
                    </div>

                    <div className="instructions">
                        <div className="instruction" data-aos="fade-right">
                            <div className="instruction__number">1</div>
                            <div className="instruction__content">
                                <h3 className="instruction__title">Download the App</h3>
                                <p className="instruction__description">
                                    Click the download button above to get the REcipe APK file.
                                    The file is safe, verified, and completely free to use.
                                </p>
                            </div>
                        </div>

                        <div className="instruction" data-aos="fade-right" data-aos-delay="100">
                            <div className="instruction__number">2</div>
                            <div className="instruction__content">
                                <h3 className="instruction__title">Install & Grant Permissions</h3>
                                <p className="instruction__description">
                                    Open the downloaded APK file and follow the installation prompts.
                                    You may need to enable "Install from Unknown Sources" in your settings.
                                    Grant camera and notification permissions for the best experience.
                                </p>
                            </div>
                        </div>

                        <div className="instruction" data-aos="fade-right" data-aos-delay="200">
                            <div className="instruction__number">3</div>
                            <div className="instruction__content">
                                <h3 className="instruction__title">Create Your Account</h3>
                                <p className="instruction__description">
                                    Sign up with your email or social media account to start tracking your food.
                                    Your data is encrypted and securely stored on our servers.
                                </p>
                            </div>
                        </div>

                        <div className="instruction" data-aos="fade-right" data-aos-delay="300">
                            <div className="instruction__number">4</div>
                            <div className="instruction__content">
                                <h3 className="instruction__title">Start Scanning & Saving!</h3>
                                <p className="instruction__description">
                                    Begin adding your food items by scanning them with your camera.
                                    REcipe will automatically track expiry dates and suggest recipes!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section download-faq">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <p className="section-subtitle">
                            Got questions? We've got answers!
                        </p>
                    </div>

                    <div className="faq-list">
                        <div className="faq-item" data-aos="fade-up">
                            <h3 className="faq-item__question">Is REcipe free to use?</h3>
                            <p className="faq-item__answer">
                                Yes! REcipe is completely free to download and use with all core features included.
                                There are no hidden fees, subscriptions, or in-app purchases.
                            </p>
                        </div>

                        <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="faq-item__question">Why isn't REcipe on the Play Store or App Store?</h3>
                            <p className="faq-item__answer">
                                REcipe is currently available exclusively through our website as we continue to
                                develop and refine the app based on user feedback. This allows us to update
                                faster and respond to our community's needs more efficiently.
                            </p>
                        </div>

                        <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="faq-item__question">What permissions does the app require?</h3>
                            <p className="faq-item__answer">
                                REcipe requires camera access for food scanning and notification permissions
                                for expiry alerts. Storage permission is needed to save scanned images. All
                                permissions are optional but highly recommended for the best experience.
                            </p>
                        </div>

                        <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
                            <h3 className="faq-item__question">Is my data secure?</h3>
                            <p className="faq-item__answer">
                                Absolutely! We use industry-standard encryption to protect your data. Your
                                information is stored securely and we never share it with third parties.
                                Your privacy is our top priority.
                            </p>
                        </div>

                        <div className="faq-item" data-aos="fade-up" data-aos-delay="400">
                            <h3 className="faq-item__question">How accurate is the food recognition?</h3>
                            <p className="faq-item__answer">
                                Our AI-powered food recognition has an accuracy rate of over 90% and continues
                                to improve with each use. If the app doesn't recognize an item, you can easily
                                add it manually or teach the AI by providing feedback.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Version History Section */}
            <section className="section section-alt download-version-history">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <h2 className="section-title">Version History</h2>
                        <p className="section-subtitle">
                            Track the latest updates and improvements to REcipe
                        </p>
                    </div>

                    <div className="version-list">
                        <div className="version-item" data-aos="fade-up">
                            <div className="version-item__header">
                                <span className="version-item__number">Version 1.2.0</span>
                                <span className="version-item__date">November 2025</span>
                            </div>
                            <ul className="version-item__changes">
                                <li>Improved AI food recognition accuracy by 25%</li>
                                <li>Added dark mode support for better nighttime use</li>
                                <li>Enhanced recipe suggestion algorithm with better personalization</li>
                                <li>New batch scanning feature - scan multiple items at once</li>
                                <li>Improved performance and reduced app size by 30%</li>
                                <li>Fixed minor bugs and stability improvements</li>
                            </ul>
                        </div>

                        <div className="version-item" data-aos="fade-up" data-aos-delay="100">
                            <div className="version-item__header">
                                <span className="version-item__number">Version 1.1.0</span>
                                <span className="version-item__date">October 2025</span>
                            </div>
                            <ul className="version-item__changes">
                                <li>Added detailed nutritional information display</li>
                                <li>Improved notification system with smart reminders</li>
                                <li>New inventory management features and categories</li>
                                <li>Added shopping list functionality</li>
                                <li>Bug fixes and stability improvements</li>
                            </ul>
                        </div>

                        <div className="version-item" data-aos="fade-up" data-aos-delay="200">
                            <div className="version-item__header">
                                <span className="version-item__number">Version 1.0.0</span>
                                <span className="version-item__date">September 2025</span>
                            </div>
                            <ul className="version-item__changes">
                                <li>Initial release - Welcome to REcipe! 🎉</li>
                                <li>AI-powered food recognition technology</li>
                                <li>Smart expiry tracking with customizable notifications</li>
                                <li>Personalized recipe suggestions based on your inventory</li>
                                <li>Easy-to-use inventory management system</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DownloadPage;