// REcipe Web - Contact Page
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../../components/button/button';
import { CONTACT_INFO } from '../../utils/constants';
import './contact-page.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero__content" data-aos="fade-up">
                        <h1 className="contact-hero__title">Get in Touch</h1>
                        <p className="contact-hero__subtitle">
                            Have questions or feedback? We'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info" data-aos="fade-right">
                            <h2 className="contact-info__title">Contact Information</h2>
                            <p className="contact-info__description">
                                Reach out to us through any of these channels. We'll get back to you as soon as possible.
                            </p>

                            <div className="contact-info__items">
                                <div className="contact-info__item">
                                    <div className="contact-info__icon">
                                        <Mail size={24} />
                                    </div>
                                    <div className="contact-info__details">
                                        <h3 className="contact-info__label">Email</h3>
                                        <a href={`mailto:${CONTACT_INFO.email}`} className="contact-info__link">
                                            {CONTACT_INFO.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-info__item">
                                    <div className="contact-info__icon">
                                        <Phone size={24} />
                                    </div>
                                    <div className="contact-info__details">
                                        <h3 className="contact-info__label">Phone</h3>
                                        <a href={`tel:${CONTACT_INFO.phone}`} className="contact-info__link">
                                            {CONTACT_INFO.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-info__item">
                                    <div className="contact-info__icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="contact-info__details">
                                        <h3 className="contact-info__label">Location</h3>
                                        <p className="contact-info__text">{CONTACT_INFO.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper" data-aos="fade-left">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h2 className="contact-form__title">Send us a Message</h2>

                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="form-input"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-textarea"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="large"
                                    icon={<Send size={20} />}
                                    className="contact-form__submit"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
