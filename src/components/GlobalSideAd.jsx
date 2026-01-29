import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GlobalSideAd.css';

const GlobalSideAd = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thanks for your enquiry! Our counselors will contact you shortly.');
        setFormData({ name: '', email: '', phone: '', course: '' });
    };

    return (
        <aside className="global-side-ad">
            {/* Quick Enquiry Form */}
            <div className="side-widget enquiry-widget">
                <div className="widget-header">
                    <h3>📢 Free Counseling</h3>
                    <p>Get expert guidance for your career</p>
                </div>
                <form onSubmit={handleSubmit} className="side-form">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Mobile Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <select name="course" value={formData.course} onChange={handleChange} required>
                            <option value="">Select Course Interest</option>
                            <option value="B.Tech">B.Tech / Engineering</option>
                            <option value="MBA">MBA / Management</option>
                            <option value="MBBS">MBBS / Medical</option>
                            <option value="BCA">BCA / MCA</option>
                            <option value="Design">Design / Arch</option>
                        </select>
                    </div>
                    <button type="submit" className="btn-submit-side">Request Call Back</button>
                    <p className="privacy-text">We value your privacy. Your data is safe.</p>
                </form>
            </div>

            {/* Exam Alerts Widget */}
            <div className="side-widget alerts-widget">
                <div className="widget-header-small">
                    <h3>⚡ Exam Alerts</h3>
                    <span onClick={() => navigate('/exams')} className="view-more">View All</span>
                </div>
                <ul className="alert-list">
                    <li className="alert-item urgent">
                        <span className="badge-urgent">URGENT</span>
                        <div className="alert-content">
                            <strong>JEE Main 2026</strong>
                            <p>Registration closes in 2 days</p>
                        </div>
                    </li>
                    <li className="alert-item">
                        <span className="badge-new">NEW</span>
                        <div className="alert-content">
                            <strong>VITEEE 2026</strong>
                            <p>Slot booking started today</p>
                        </div>
                    </li>
                    <li className="alert-item">
                        <span className="badge-info">INFO</span>
                        <div className="alert-content">
                            <strong>NEET PG</strong>
                            <p>Admit card releasing soon</p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Top College Ad */}
            <div className="side-widget promo-widget" onClick={() => navigate('/colleges')}>
                <div className="promo-badge">Featured</div>
                <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" alt="Top College" className="promo-img" />
                <div className="promo-content">
                    <h4>LPU Jalandhar</h4>
                    <p>Applications open for 2026 Batch. Highest Package 3Cr.</p>
                    <button className="btn-promo">Apply Now</button>
                </div>
            </div>
        </aside>
    );
};

export default GlobalSideAd;
