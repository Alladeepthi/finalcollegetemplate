import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { careersData } from '../data/careersData';
import './Careers.css';

const Careers = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    // Initial industry from URL or Default 'All'
    // Note: URL might use lowercase 'medical' but data uses 'Medical'. We should normalize.
    const urlField = searchParams.get('field');
    const [selectedIndustry, setSelectedIndustry] = useState('All');

    useEffect(() => {
        if (urlField) {
            // Capitalize first letter to match data convention if needed, strictly speaking we should make comparison case-insensitive
            // But for UI state, let's try to match one of the known industries
            const matchedStats = industries.find(ind => ind.name.toLowerCase() === urlField.toLowerCase());
            if (matchedStats) {
                setSelectedIndustry(matchedStats.name);
            } else if (urlField.toLowerCase() === 'civil') {
                setSelectedIndustry('Civil Services');
            } else if (urlField.toLowerCase() === 'business') {
                setSelectedIndustry('Business');
            } else {
                // If direct match isn't found, just set it directly to show "Results for 'foo'"
                // Or map common aliases
                if (urlField.toLowerCase() === 'engineering') setSelectedIndustry('Engineering');
                else if (urlField.toLowerCase() === 'medical') setSelectedIndustry('Medical');
                else if (urlField.toLowerCase() === 'design') setSelectedIndustry('Design');
            }
        }
    }, [urlField]);

    // 5. Trending Careers Data
    const trendingCareers = [
        "AI Ethicist", "Drone Pilot", "Green Energy Engineer", "Data Scientist", "Cybersecurity Analyst", "UX Designer"
    ];

    // 1. Industries Data
    const industries = [
        { name: "Engineering", icon: "⚙️" },
        { name: "Medical", icon: "🩺" },
        { name: "Business", icon: "💼" }, // Changed from Management to Business to match data
        { name: "Design", icon: "🎨" },
        { name: "Aviation", icon: "✈️" },
        { name: "Legal", icon: "⚖️" },
        { name: "Civil Services", icon: "🏛️" }, // Added
        { name: "Science", icon: "🔬" }
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
            setSearchParams({ field: indName.toLowerCase() });
        }
    };

    return (
        <div className="careers-page">

            {/* Hero Section with Search */}
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

                    {/* 5. Trending Ticker */}
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
                {/* 1. Industry Grid (Sidebar/Top) */}
                <div className="industry-filter-section">
                    <h3>Explore by Industry</h3>
                    <div className="industry-grid">
                        <div
                            className={`industry-card ${selectedIndustry === 'All' ? 'active' : ''}`}
                            onClick={() => handleIndustryClick('All')}
                        >
                            <span className="ind-icon">🌍</span>
                            <span>All</span>
                        </div>
                        {industries.map((ind, i) => (
                            <div
                                key={i}
                                className={`industry-card ${selectedIndustry === ind.name ? 'active' : ''}`}
                                onClick={() => handleIndustryClick(ind.name)}
                            >
                                <span className="ind-icon">{ind.icon}</span>
                                <span>{ind.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Career Library Grid */}
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
                                        View Roadmap & Details
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
                                <p>No careers found for {selectedIndustry}. Try searching or selecting another industry.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
