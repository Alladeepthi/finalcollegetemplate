import React from 'react';
import { Link } from 'react-router-dom';
import './PlacementHighlights.css';

const PlacementHighlights = () => {
    // Mock Data for Top Placements
    // We duplicate the array to ensure seamless infinite scrolling
    const placements = [
        { company: "Google", package: "₹ 1.2 Cr", role: "SDE III", college: "IIT Bombay" },
        { company: "Microsoft", package: "₹ 55 LPA", role: "Software Eng.", college: "BITS Pilani" },
        { company: "Amazon", package: "₹ 45 LPA", role: "SDE I", college: "VIT Vellore" },
        { company: "Goldman Sachs", package: "₹ 38 LPA", role: "Analyst", college: "SRM University" },
        { company: "Adobe", package: "₹ 60 LPA", role: "Product Mgr", college: "IIT Delhi" },
        { company: "Atlassian", package: "₹ 82 LPA", role: "Developer", college: "IIIT Hyderabad" },
        { company: "Oracle", package: "₹ 32 LPA", role: "Cloud Eng.", college: "Manipal Inst." },
        { company: "Samsung", package: "₹ 28 LPA", role: "R&D Eng.", college: "Thapar Univ" },
    ];

    const displayList = [...placements, ...placements]; // 2x Duplicate for standard seamless loop

    const stats = [
        { label: "Highest Package", value: "₹ 1.2 Cr" },
        { label: "Average Package", value: "₹ 8.5 LPA" },
        { label: "Total Recruiters", value: "850+" },
        { label: "Offers Made", value: "4,500+" },
        { label: "International Offers", value: "120+" },
        { label: "Dream Offers", value: "1,100+" },
        { label: "Placement Rate", value: "98.5%" },
    ];
    // Duplicate 4x since cards are smaller to fill width
    const displayStats = [...stats, ...stats, ...stats, ...stats];

    return (
        <section className="placement-highlights-section">
            <div className="container">
                <div className="placement-header">
                    <h2 className="placement-title">Highest <span>Placement Packages</span> 2025</h2>
                    <p className="placement-subtitle">Top students securing dream offers from global giants</p>
                </div>
            </div>

            <div className="ticker-wrapper">
                <div className="ticker-container">
                    {displayList.map((item, index) => (
                        <div className="placement-card" key={index}>
                            <div className="card-top-row">
                                <span className="year-badge">2025</span>
                                <span className="package-badge">{item.package} <small>(CTC)</small></span>
                            </div>
                            <div className="company-logo-placeholder">{item.company.charAt(0)}</div>
                            <div className="company-name">{item.company}</div>

                            <div className="role-text">Offers: {item.role}</div>

                            <div className="college-info">
                                🎓 {item.college}
                            </div>

                            <div className="card-cta">
                                <Link to="/placements" className="view-details-link">View Placement Details →</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="placement-footer">
                <p className="disclaimer">*Packages mentioned are CTC unless specified</p>
                <Link to="/placements">
                    <button className="view-all-records-btn">View All Placement Records →</button>
                </Link>
            </div>
        </section>
    );
};

export default PlacementHighlights;
