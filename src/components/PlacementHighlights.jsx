import React from 'react';
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

    const displayList = [...placements, ...placements]; // Duplicate for loop

    return (
        <section className="placement-highlights-section">
            <div className="container" style={{ overflow: 'hidden' }}>
                <div className="placement-header">
                    <h2 className="placement-title">Highest <span>Placement Packages</span> 2025</h2>
                    <p className="placement-subtitle">Top students securing dream offers from global giants</p>
                </div>

                <div className="ticker-wrapper">
                    <div className="ticker-container">
                        {displayList.map((item, index) => (
                            <div className="placement-card" key={index}>
                                <div className="company-row">
                                    <span className="company-name">{item.company}</span>
                                    <span className="package-badge">{item.package}</span>
                                </div>
                                <div className="role-text">Offers: {item.role}</div>
                                <div className="college-name-sm">
                                    🎓 {item.college}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlacementHighlights;
