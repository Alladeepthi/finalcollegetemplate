import React from 'react';
import './ComparisonModal.css';

const ComparisonModal = ({ colleges, onClose }) => {
    if (!colleges || colleges.length === 0) return null;

    return (
        <div className="comparison-modal-overlay" onClick={onClose}>
            <div className="comparison-modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>Compare Colleges</h2>

                <div className="comparison-table-wrapper">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                {colleges.map(col => (
                                    <th key={col.id}>
                                        <div className="th-content">
                                            <img src={col.image} alt={col.name} className="th-img" />
                                            <span>{col.name}</span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="feature-label">Location</td>
                                {colleges.map(col => <td key={col.id}>{col.location}</td>)}
                            </tr>
                            <tr>
                                <td className="feature-label">Rating</td>
                                {colleges.map(col => <td key={col.id}>⭐ {col.rating} ({col.reviews} reviews)</td>)}
                            </tr>
                            <tr>
                                <td className="feature-label">Type</td>
                                {colleges.map(col => <td key={col.id}>{col.type}</td>)}
                            </tr>
                            <tr>
                                <td className="feature-label">Fees</td>
                                {colleges.map(col => <td key={col.id}>{col.fees}</td>)}
                            </tr>
                            <tr>
                                <td className="feature-label">Avg Placement</td>
                                {colleges.map(col => <td key={col.id} className="text-green">{col.placement}</td>)}
                            </tr>
                            <tr>
                                <td className="feature-label">Highest Package</td>
                                {colleges.map(col => <td key={col.id}>{col.highestPlacement}</td>)}
                            </tr>
                            <tr>
                                <td className="feature-label">Top Courses</td>
                                {colleges.map(col => (
                                    <td key={col.id}>
                                        {col.courses.slice(0, 3).join(", ")}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="feature-label">Action</td>
                                {colleges.map(col => (
                                    <td key={col.id}>
                                        <button className="btn-primary-sm" onClick={() => window.location.href = `/colleges/${col.id}`}>View Details</button>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ComparisonModal;
