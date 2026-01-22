import React, { useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, title = "Reach Us", subtitle = "Tell us how we can help you grow." }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact Form Submitted:", formData);
        alert("Thank you! Your message has been sent.");
        onClose();
    };

    return (
        <div className="contact-modal-overlay" onClick={onClose}>
            <div className="contact-modal-content" onClick={e => e.stopPropagation()}>
                <button className="contact-close-modal" onClick={onClose}>✕</button>

                <div className="contact-container">
                    {/* Left Info Panel */}
                    <div className="contact-info-panel">
                        <h2 className="brand-title">Neuraltrix AI</h2>

                        <div className="info-list">
                            <div className="info-item">
                                <div className="info-icon">📍</div>
                                <div className="info-text">
                                    <h4>Location</h4>
                                    <p>VFSTR, N block, Guntur,<br />Andhra Pradesh, India</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">📧</div>
                                <div className="info-text">
                                    <h4>Email Us</h4>
                                    <p>info@neuraltrixai.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">📞</div>
                                <div className="info-text">
                                    <h4>Call Us</h4>
                                    <p>+91 8142438759</p>
                                </div>
                            </div>
                        </div>

                        <div className="shape-decoration"></div>
                    </div>

                    {/* Right Form Panel */}
                    <div className="contact-form-panel">
                        <div className="form-header">
                            <h3>{title}</h3>
                            <p>{subtitle}</p>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="contact-form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="contact-form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="contact-form-group">
                                <label>What's on your mind?</label>
                                <textarea
                                    name="message"
                                    placeholder="Write your message here..."
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-send-message">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
