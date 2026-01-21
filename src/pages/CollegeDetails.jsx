import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CollegeDetails.css';

const CollegeDetails = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('overview');

    // Mock Data - In real app, fetch by id
    const collegeData = {
        name: "Indian Institute of Technology (IIT), Bombay",
        location: "Mumbai, Maharashtra",
        est: 1958,
        type: "Government",
        rating: 4.9,
        reviews: 2500,
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png",
        cover: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
        highlights: [
            { label: "Avg Package", value: "₹21.82 LPA" },
            { label: "Highest Package", value: "₹3.67 Cr" },
            { label: "Total Fees", value: "₹2.25 Lakhs" },
            { label: "Institute Type", value: "Government" },
        ],
        about: "IIT Bombay is recognized worldwide as a leader in the field of engineering education and research. Established in 1958, the second of its kind, IIT Bombay was the first to be set up with foreign assistance.",
        courses: [
            { name: "B.Tech Computer Science", duration: "4 Years", fee: "₹2.25 L" },
            { name: "B.Tech Electrical", duration: "4 Years", fee: "₹2.25 L" },
            { name: "BS in Economics", duration: "4 Years", fee: "₹2.25 L" }
        ]
    };

    return (
        <div className="college-details-page">
            {/* HER HERO SECTION */}
            <div className="cd-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${collegeData.cover})` }}>
                <div className="container cd-hero-content">
                    <div className="cd-logo-box">
                        <img src={collegeData.logo} alt="Logo" />
                    </div>
                    <div className="cd-info-box">
                        <h1 className="cd-title">{collegeData.name}</h1>
                        <p className="cd-meta">
                            <span>📍 {collegeData.location}</span>
                            <span>🏛️ Estd. {collegeData.est}</span>
                            <span>⭐ {collegeData.rating}/5 ({collegeData.reviews} Reviews)</span>
                        </p>
                        <div className="cd-actions">
                            <button className="btn-cd-primary">Download Brochure</button>
                            <button className="btn-cd-secondary">Shortlist</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* NAV TABS */}
            <div className="cd-nav-wrapper">
                <div className="container">
                    <nav className="cd-nav">
                        <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>Overview</button>
                        <button className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}>Courses & Fees</button>
                        <button className={activeTab === 'placements' ? 'active' : ''} onClick={() => setActiveTab('placements')}>Placements</button>
                        <button className={activeTab === 'campus' ? 'active' : ''} onClick={() => setActiveTab('campus')}>Campus Life</button>
                        <button className={activeTab === 'reviews' ? 'active' : ''} onClick={() => setActiveTab('reviews')}>Reviews</button>
                    </nav>
                </div>
            </div>

            {/* MAIN CONTENT + SIDEBAR */}
            <div className="container cd-layout">
                <main className="cd-main">
                    {/* OVERVIEW CONTENT */}
                    {activeTab === 'overview' && (
                        <div className="cd-section animate-fade">
                            <h2>About {collegeData.name}</h2>
                            <p>{collegeData.about}</p>

                            <h3 className="mt-4">Highlights</h3>
                            <div className="highlights-grid">
                                {collegeData.highlights.map((h, i) => (
                                    <div key={i} className="highlight-card">
                                        <span className="hl-value">{h.value}</span>
                                        <span className="hl-label">{h.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* COURSES MOCK */}
                    {activeTab === 'courses' && (
                        <div className="cd-section animate-fade">
                            <h2>Courses Offered</h2>
                            <div className="courses-table">
                                <div className="c-row c-head">
                                    <span>Course Name</span>
                                    <span>Duration</span>
                                    <span>Total Fees</span>
                                    <span>Action</span>
                                </div>
                                {collegeData.courses.map((c, i) => (
                                    <div key={i} className="c-row">
                                        <span className="c-name">{c.name}</span>
                                        <span>{c.duration}</span>
                                        <span className="c-fee">{c.fee}</span>
                                        <button className="btn-sm-apply">Apply Now</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </main>

                <aside className="cd-sidebar">
                    <div className="sidebar-card form-card">
                        <h3>Interested in this College?</h3>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email Address" />
                        <input type="tel" placeholder="Mobile Number" />
                        <button className="btn-submit-lead">Get Free Counselling</button>
                    </div>

                    <div className="sidebar-card contact-card">
                        <h3>Contact Information</h3>
                        <p>📞 +91 22 2572 2545</p>
                        <p>✉️ registrar@iitb.ac.in</p>
                        <p>🌐 www.iitb.ac.in</p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default CollegeDetails;
