import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { careersData } from '../data/careersData';
import './Careers.css';

const Careers = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const urlField = searchParams.get('field');
    const [selectedIndustry, setSelectedIndustry] = useState('All');

    // Industries Data
    const industries = [
        { name: "Engineering", icon: "⚙️" },
        { name: "Medical", icon: "🩺" },
        { name: "Business", icon: "💼" },
        { name: "Design", icon: "🎨" },
        { name: "Aviation", icon: "✈️" },
        { name: "Legal", icon: "⚖️" },
        { name: "Civil Services", icon: "🏛️" },
        { name: "Science", icon: "🔬" }
    ];

    useEffect(() => {
        if (urlField) {
            const matchedStats = industries.find(ind => ind.name.toLowerCase() === urlField.toLowerCase());
            if (matchedStats) {
                setSelectedIndustry(matchedStats.name);
            } else if (urlField.toLowerCase() === 'civil') {
                setSelectedIndustry('Civil Services');
            } else {
                // Fallback or exact match check
                const exact = industries.find(ind => ind.name === urlField);
                if (exact) setSelectedIndustry(exact.name);
            }
        }
    }, [urlField]);

    const trendingCareers = [
        "AI Ethicist", "Drone Pilot", "Green Energy Engineer", "Data Scientist", "Cybersecurity Analyst", "UX Designer"
    ];

    const filteredCareers = careersData.filter(career => {
        const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesIndustry = selectedIndustry === 'All' || career.industry === selectedIndustry;
        return matchesSearch && matchesIndustry;
    });

    const handleIndustryClick = (indName) => {
        setSelectedIndustry(indName);
        if (indName === 'All') {
            setSearchParams({});
        } else {
            setSearchParams({ field: indName });
        }
    };

    return (
        <div className="careers-page">

            {/* Hero Section */}
            <header className="careers-hero">
                <div className="container">
                    <h1>Find Your Dream Career</h1>
                    <p>Explore thousands of career paths, salaries, and roadmaps.</p>

                    <div className="career-search-bar">
                        <input
                            type="text"
                            placeholder="Search for a career (e.g. Pilot, Designer)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn-search">Search</button>
                    </div>

                    <div className="trending-ticker">
                        <span className="ticker-label">🔥 Trending Now: </span>
                        <div className="ticker-items">
                            {trendingCareers.map((c, i) => (
                                <span key={i} className="ticker-item">{c}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <div className="container careers-layout">

                {/* 1. SIDEBAR GRID */}
                <aside className="career-sidebar">

                    {/* Industry Filter Widget */}
                    <div className="sidebar-widget">
                        <div className="widget-title">Industries</div>
                        <div className="industry-list">
                            <div
                                className={`ind-item ${selectedIndustry === 'All' ? 'active' : ''}`}
                                onClick={() => handleIndustryClick('All')}
                            >
                                <span className="ind-icon">🌍</span>
                                <span>All Fields</span>
                            </div>
                            {industries.map((ind, i) => (
                                <div
                                    key={i}
                                    className={`ind-item ${selectedIndustry === ind.name ? 'active' : ''}`}
                                    onClick={() => handleIndustryClick(ind.name)}
                                >
                                    <span className="ind-icon">{ind.icon}</span>
                                    <span>{ind.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Counselor Widget */}
                    <div className="sidebar-widget promo-widget">
                        <div className="promo-title">Need Guidance?</div>
                        <p className="promo-desc">
                            Talk to our certified career counselors and get a personalized roadmap.
                        </p>
                        <button className="btn-promo">Book Free Session</button>
                    </div>

                    {/* Quick Stats Widget */}
                    <div className="sidebar-widget">
                        <div className="widget-title">Market Insights</div>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Top Growth:</span>
                                <span style={{ fontWeight: '700', color: '#16a34a' }}>AI & ML</span>
                            </li>
                            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Highest Pay:</span>
                                <span style={{ fontWeight: '700', color: '#1e293b' }}>Surgeons</span>
                            </li>
                            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>New Jobs:</span>
                                <span style={{ fontWeight: '700', color: '#2563EB' }}>2.5M+</span>
                            </li>
                        </ul>
                    </div>

                </aside>

                {/* 2. MAIN CONTENT */}
                <div className="career-library">
                    <div className="library-header">
                        <h2>{selectedIndustry} Careers</h2>
                        <span className="count">{filteredCareers.length} Found</span>
                    </div>

                    <div className="careers-grid">
                        {filteredCareers.length > 0 ? (
                            filteredCareers.map(career => (
                                <div className="career-card" key={career.id}>
                                    <div className="card-top">
                                        <span className="industry-badge">{career.industry}</span>
                                        <h3>{career.title}</h3>
                                        <p className="short-desc">{career.description}</p>
                                    </div>
                                    <div className="card-stats">
                                        <div className="stat">
                                            <span className="label">Avg Salary</span>
                                            <span className="value text-green">{career.avgSalary}</span>
                                        </div>
                                        <div className="stat">
                                            <span className="label">Growth</span>
                                            <span className="value">{career.growth}</span>
                                        </div>
                                    </div>
                                    <button
                                        className="btn-view-roadmap"
                                        onClick={() => navigate(`/careers/${career.slug}`)}
                                    >
                                        View Roadmap
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', background: 'white', borderRadius: '16px' }}>
                                <p style={{ fontSize: '1.2rem', color: '#64748b' }}>No careers found matching your criteria.</p>
                                <button
                                    style={{ marginTop: '1rem', padding: '10px 20px', background: '#2563EB', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
                                    onClick={() => { setSearchTerm(''); setSelectedIndustry('All'); }}
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
