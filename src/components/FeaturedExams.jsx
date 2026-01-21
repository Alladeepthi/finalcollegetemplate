import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedExams.css';

// Reusing existing assets since they fit the context beautifully
import imgJee from '../assets/cat_engineering.png'; // Engineering context for JEE
import imgNeet from '../assets/cat_medical.png';     // Medical context for NEET
import imgEamcet from '../assets/cat_education.png';  // General education/campus for EAMCET
import imgCat from '../assets/cat_market.png';
import imgGate from '../assets/cat_architecture.png';

const FeaturedExams = () => {
    const exams = [
        {
            id: 1,
            image: imgJee,
            tag: "NATIONAL LEVEL",
            category: "Engineering",
            title: "JEE Main 2026",
            date: "Jan 24, 2026",
            applicants: "12L+ Applicants",
            features: [
                "Gateway to NITs, IIITs",
                "Computer Based Test",
            ],
            difficulty: "Hard",
        },
        {
            id: 2,
            image: imgNeet,
            tag: "NATIONAL LEVEL",
            category: "Medical",
            title: "NEET UG 2026",
            date: "May 03, 2026",
            applicants: "20L+ Applicants",
            features: [
                "Gateway to MBBS, BDS",
                "Pen & Paper Mode",
            ],
            difficulty: "Hard",
        },
        {
            id: 3,
            image: imgEamcet,
            tag: "STATE LEVEL",
            category: "Engg & Med",
            title: "TS EAMCET 2026",
            date: "May 10, 2026",
            applicants: "3L+ Applicants",
            features: [
                "State Govt Colleges",
                "Online Mode",
            ],
            difficulty: "Moderate",
        },
        {
            id: 4,
            image: imgCat,
            tag: "NATIONAL LEVEL",
            category: "Management",
            title: "CAT 2025",
            date: "Nov 24, 2025",
            applicants: "3L+ Applicants",
            features: [
                "Gateway to IIMs",
                "Computer Based Test",
            ],
            difficulty: "Hard",
        },
        {
            id: 5,
            image: imgGate,
            tag: "NATIONAL LEVEL",
            category: "Postgrad Engg",
            title: "GATE 2026",
            date: "Feb 03, 2026",
            applicants: "8L+ Applicants",
            features: [
                "M.Tech Admissions & PSUs",
                "Online Mode",
            ],
            difficulty: "Hard",
        }
    ];

    return (
        <section className="featured-exams-section">
            <div className="container">

                <div className="section-header text-center">
                    <div className="header-decoration">
                        <span className="line"></span>
                        <h2 className="section-title">Important <span className="highlight">Exams</span></h2>
                        <span className="line"></span>
                    </div>
                    <p className="section-subtitle">GATEWAY TO YOUR DREAM CAREER</p>
                </div>

                <div className="exams-marquee-container">
                    <div className="marquee-track">
                        {/* Duplicate the array to ensure smooth infinite scrolling */}
                        {[...exams, ...exams, ...exams].map((item, index) => (
                            <div className="exam-wide-card scroll-card" key={`${item.id}-${index}`}>
                                <div className="card-image-wrapper-wide">
                                    <img src={item.image} alt={item.title} className="card-image-wide" />
                                    <span className="badge-category">{item.category}</span>
                                    <span className="badge-tag">{item.tag}</span>
                                </div>

                                <div className="card-content-wide">
                                    <div className="exam-meta">
                                        <span className="exam-date">📅 {item.date}</span>
                                    </div>

                                    <h3 className="card-title">{item.title}</h3>

                                    <div className="exam-stats">
                                        <span>👥 {item.applicants}</span>
                                    </div>

                                    <div className="card-divider-dotted"></div>

                                    <ul className="card-features-wide">
                                        {item.features.map((feat, idx) => (
                                            <li key={idx}>✓ {feat}</li>
                                        ))}
                                    </ul>

                                    <div className="card-footer-wide">
                                        <span className="difficulty-label">Difficulty: <span className={`diff-${item.difficulty.toLowerCase()}`}>{item.difficulty}</span></span>
                                        <Link to="/exams" className="view-details">View Details &gt;</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="view-all-wrapper">
                    <Link to="/exams" className="btn-view-all-exams">View All Exams</Link>
                </div>

            </div>
        </section>
    );
};

export default FeaturedExams;
