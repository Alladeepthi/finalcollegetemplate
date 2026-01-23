import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { careersData } from '../data/careersData';
import './Careers.css'; // Reusing existing CSS

const CareerDetails = () => {
    const { id } = useParams(); // URL slug
    const [career, setCareer] = useState(null);

    useEffect(() => {
        const found = careersData.find(c => c.slug === id);
        setCareer(found);
        window.scrollTo(0, 0);
    }, [id]);

    if (!career) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Career path not found</h2>
                <Link to="/careers" className="btn-primary">Back to Careers Library</Link>
            </div>
        );
    }

    return (
        <div className="career-details-page" style={{ paddingBottom: '4rem' }}>
            {/* Hero Like Banner */}
            <div style={{ background: '#f0f9ff', padding: '3rem 0', marginBottom: '2rem' }}>
                <div className="container">
                    <Link to="/careers" style={{ textDecoration: 'none', color: '#64748b', marginBottom: '1rem', display: 'inline-block' }}>
                        &larr; Back to {career.industry} Careers
                    </Link>
                    <div style={{ marginTop: '1rem' }}>
                        <span className="industry-badge" style={{ background: '#2563EB', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            {career.industry}
                        </span>
                        <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '0.5rem', color: '#1e293b' }}>{career.title}</h1>
                        <p style={{ fontSize: '1.2rem', color: '#475569', maxWidth: '700px' }}>{career.description}</p>
                    </div>

                    <div className="modal-stats-row" style={{ marginTop: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                            <span style={{ display: 'block', fontSize: '0.85rem', color: '#64748b' }}>Avg Salary</span>
                            <strong style={{ fontSize: '1.1rem', color: '#059669' }}>{career.avgSalary}</strong>
                        </div>
                        <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                            <span style={{ display: 'block', fontSize: '0.85rem', color: '#64748b' }}>Education</span>
                            <strong style={{ fontSize: '1.1rem', color: '#1e293b' }}>{career.education}</strong>
                        </div>
                        <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                            <span style={{ display: 'block', fontSize: '0.85rem', color: '#64748b' }}>Growth</span>
                            <strong style={{ fontSize: '1.1rem', color: '#7c3aed' }}>{career.growth}</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>

                    {/* Main Content */}
                    <div>
                        <div className="modal-section" style={{ marginBottom: '3rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderLeft: '4px solid #2563EB', paddingLeft: '1rem' }}>🚀 Career Roadmap</h3>
                            <div className="roadmap-container">
                                {career.roadmap.map((step, idx) => (
                                    <div className="roadmap-step" key={idx}>
                                        <div className="step-circle">{idx + 1}</div>
                                        <div className="step-content">
                                            <h4>{step.step}</h4>
                                            <p>{step.detail}</p>
                                        </div>
                                        {idx < career.roadmap.length - 1 && <div className="step-line"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="modal-section day-in-life">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderLeft: '4px solid #e11d48', paddingLeft: '1rem' }}>⏰ Day in the Life</h3>
                            <div className="life-quote" style={{ fontStyle: 'italic', fontSize: '1.1rem', color: '#334155', background: '#f8fafc', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid #cbd5e1' }}>
                                "{career.dayInLife}"
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Actions */}
                    <div>
                        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', position: 'sticky', top: '100px' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Ready to start?</h4>
                            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>Find the best colleges to kickstart your career in {career.title}.</p>
                            <Link to="/colleges" className="btn-find-colleges" style={{ width: '100%', marginBottom: '1rem', display: 'block', textAlign: 'center', textDecoration: 'none' }}>Find Colleges</Link>
                            <button className="btn-outline" style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e1', borderRadius: '6px', background: 'transparent' }}>Take Career Quiz</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CareerDetails;
