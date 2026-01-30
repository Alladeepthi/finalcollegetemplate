import React, { useState } from 'react';
import './Placements.css';

const Placements = () => {
    // Mock Data for Placements
    const allPlacements = [
        { id: 1, student: "Rahul Sharma", company: "Google", package: "₹ 1.2 Cr", role: "SDE III", college: "IIT Bombay", year: "2025" },
        { id: 2, student: "Priya V.", company: "Microsoft", package: "₹ 55 LPA", role: "Software Eng.", college: "BITS Pilani", year: "2025" },
        { id: 3, student: "Amit Kumar", company: "Amazon", package: "₹ 45 LPA", role: "SDE I", college: "VIT Vellore", year: "2025" },
        { id: 4, student: "Sara Khan", company: "Goldman Sachs", package: "₹ 38 LPA", role: "Analyst", college: "SRM University", year: "2025" },
        { id: 5, student: "David J.", company: "Adobe", package: "₹ 60 LPA", role: "Product Mgr", college: "IIT Delhi", year: "2025" },
        { id: 6, student: "Sneha Reddy", company: "Atlassian", package: "₹ 82 LPA", role: "Developer", college: "IIIT Hyderabad", year: "2025" },
        { id: 7, student: "Vikram Singh", company: "Oracle", package: "₹ 32 LPA", role: "Cloud Eng.", college: "Manipal Inst.", year: "2025" },
        { id: 8, student: "Anjali M.", company: "Samsung", package: "₹ 28 LPA", role: "R&D Eng.", college: "Thapar Univ", year: "2024" },
        { id: 9, student: "Rohan Das", company: "Uber", package: "₹ 60 LPA", role: "SDE II", college: "IIT Kanpur", year: "2024" },
        { id: 10, student: "Kavya P.", company: "Airbnb", package: "₹ 50 LPA", role: "Frontend Dev", college: "IIIT Bangalore", year: "2024" },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredPlacements = allPlacements.filter(p =>
        p.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.student.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="placements-page">
            <div className="pl-hero">
                <div className="container">
                    <h1>Placement Records & Highlights</h1>
                    <p>Celebrated success stories from top universities across the country.</p>
                </div>
            </div>

            <div className="container pl-content">

                {/* Stats Summary */}
                <div className="pl-stats-grid">
                    <div className="pl-stat-card">
                        <h3>100%</h3>
                        <p>Placement Support</p>
                    </div>
                    <div className="pl-stat-card">
                        <h3>₹ 1.2 Cr</h3>
                        <p>Highest Package</p>
                    </div>
                    <div className="pl-stat-card">
                        <h3>850+</h3>
                        <p>Top Recruiters</p>
                    </div>
                    <div className="pl-stat-card">
                        <h3>5000+</h3>
                        <p>Offers Made</p>
                    </div>
                </div>

                {/* Search & Filter */}
                <div className="pl-controls">
                    <input
                        type="text"
                        placeholder="Search by Student, Company, or College..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-search-input"
                    />
                </div>

                {/* Placements Table */}
                <div className="pl-table-container">
                    <table className="pl-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Company</th>
                                <th>Role</th>
                                <th>Package (CTC)</th>
                                <th>College</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPlacements.length > 0 ? (
                                filteredPlacements.map(item => (
                                    <tr key={item.id}>
                                        <td className="fw-600">{item.student}</td>
                                        <td>
                                            <div className="pl-company">
                                                <span className="pl-company-icon">{item.company.charAt(0)}</span>
                                                {item.company}
                                            </div>
                                        </td>
                                        <td>{item.role}</td>
                                        <td className="text-success fw-700">{item.package}</td>
                                        <td>{item.college}</td>
                                        <td><span className="badge-year">{item.year}</span></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">No records found matching your search.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Placements;
