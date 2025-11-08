// REcipe Web - Download Page
import { Download, Smartphone, Check } from 'lucide-react';
import Button from '../../components/button/button';
import './download-page.css';

const DownloadPage = () => {
    const features = [
        'AI-powered food recognition',
        'Smart expiry tracking',
        'Personalized recipe suggestions',
        'Nutritional information',
        'Inventory management',
        'Push notifications for expiring items'
    ];

    return (
        <div className="download-page">
            {/* Hero Section */}
            <section className="download-hero">
                <div className="container">
                    <div className="download-hero__content">
                        <div className="download-hero__text" data-aos="fade-right">
                            <h1 className="download-hero__title">
                                Download REcipe
                                <br />
                                <span className="download-hero__title--highlight">Start Saving Food Today</span>
                            </h1>
                            <p className="download-hero__description">
                                Get the REcipe app exclusively from our website. Available for Android devices.
                            </p>

                            <div className="download-buttons">
                                <Button
                                    variant="primary"
                                    size="large"
                                    icon={<Download size={24} />}
                                    className="download-btn"
                                >
                                    Download for Android
                                </Button>
                            </div>

                            <p className="download-note">
                                <Smartphone size={18} />
                                Compatible with Android 8.0+
                            </p>
                        </div>

                        <div className="download-hero__image" data-aos="fade-left" data-aos-delay="200">
                            <img
                                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop"
                                alt="REcipe mobile app interface"
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
                            <div key={index} className="feature-item">
                                <div className="feature-item__icon">
                                    <Check size={20} />
                                </div>
                                <span className="feature-item__text">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instructions Section */}
            <section className="section section-alt download-instructions">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <h2 className="section-title">Installation Guide</h2>
                        <p className="section-subtitle">
                            Follow these simple steps to get started
                        </p>
                    </div>

                    <div className="instructions">
                        <div className="instruction" data-aos="fade-right">
                            <div className="instruction__number">1</div>
                            <div className="instruction__content">
                                <h3 className="instruction__title">Download the App</h3>
                                <p className="instruction__description">
                                    Click the download button above for your device's operating system.
                                </p>
                            </div>
                        </div>

                        <div className="instruction" data-aos="fade-right" data-aos-delay="100">
                            <div className="instruction__number">2</div>
                            <div className="instruction__content">
                                <h3 className="instruction__title">Install & Grant Permissions</h3>
                                <p className="instruction__description">
                                    Open the downloaded file and follow the installation prompts.
                                    Grant camera and notification permissions for full functionality.
                                </p>
                            </div>
                        </div>

                        <div className="instruction" data-aos="fade-right" data-aos-delay="200">
                            <div className="instruction__number">3</div>
                            <div className="instruction__content">
                                <h3 className="instruction__title">Create Your Account</h3>
                                <p className="instruction__description">
                                    Sign up with your email or social media account to start tracking your food.
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
                    </div>

                    <div className="faq-list">
                        <div className="faq-item" data-aos="fade-up">
                            <h3 className="faq-item__question">Is REcipe free to use?</h3>
                            <p className="faq-item__answer">
                                Yes, REcipe is completely free to download and use with all core features included.
                            </p>
                        </div>

                        <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="faq-item__question">Why isn't REcipe on the Play Store or App Store?</h3>
                            <p className="faq-item__answer">
                                REcipe is currently available exclusively through our website as we continue to
                                develop and refine the app based on user feedback.
                            </p>
                        </div>

                        <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="faq-item__question">What permissions does the app require?</h3>
                            <p className="faq-item__answer">
                                REcipe requires camera access for food scanning and notification permissions
                                for expiry alerts. All permissions are optional but recommended for the best experience.
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
                                <li>Added dark mode support</li>
                                <li>Enhanced recipe suggestion algorithm</li>
                                <li>Fixed minor bugs and improved performance</li>
                            </ul>
                        </div>

                        <div className="version-item" data-aos="fade-up" data-aos-delay="100">
                            <div className="version-item__header">
                                <span className="version-item__number">Version 1.1.0</span>
                                <span className="version-item__date">October 2025</span>
                            </div>
                            <ul className="version-item__changes">
                                <li>Added nutritional information display</li>
                                <li>Improved notification system</li>
                                <li>New inventory management features</li>
                                <li>Bug fixes and stability improvements</li>
                            </ul>
                        </div>

                        <div className="version-item" data-aos="fade-up" data-aos-delay="200">
                            <div className="version-item__header">
                                <span className="version-item__number">Version 1.0.0</span>
                                <span className="version-item__date">September 2025</span>
                            </div>
                            <ul className="version-item__changes">
                                <li>Initial release</li>
                                <li>AI-powered food recognition</li>
                                <li>Smart expiry tracking</li>
                                <li>Personalized recipe suggestions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DownloadPage;
