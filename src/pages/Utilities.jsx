import React, { useState } from 'react';
import './Utilities.css';

const Utilities = () => {
    // --- STATE MANAGEMENT ---
    const [activeExam, setActiveExam] = useState('JEE Main');
    const [rank, setRank] = useState('');
    const [isPredicting, setIsPredicting] = useState(false);
    const [predictionResults, setPredictionResults] = useState(null);
    const [scholarshipFilter, setScholarshipFilter] = useState('All');

    // --- MOCK DATA ---
    const scholarshipsData = [
        { id: 1, name: "National Merit Scholarship", amount: "₹50,000/Yr", type: "Merit", deadline: "Exp: 30 days", link: "https://scholarships.gov.in/" },
        { id: 2, name: "Vidyalakshmi Loan Scheme", amount: "Low Interest", type: "Means", deadline: "Open All Year", link: "https://www.vidyalakshmi.co.in/" },
        { id: 3, name: "AICTE Pragati Scheme", amount: "₹50,000/Yr", type: "Girls", deadline: "Exp: 15 days", link: "https://www.aicte-india.org/schemes/students-development-schemes/Pragati" },
        { id: 4, name: "HDFC Badhte Kadam", amount: "₹30,000", type: "Private", deadline: "Exp: 10 days", link: "https://www.buddy4study.com/page/hdfc-bank-parivartan-ecss-programme" },
        { id: 5, name: "ONGC Scholarship", amount: "₹48,000/Yr", type: "Means", deadline: "Exp: 20 days", link: "https://ongcindia.com/" },
        { id: 6, name: "Tata Trust Grant", amount: "Variable", type: "Merit", deadline: "Exp: 5 days", link: "https://www.tatatrusts.org/" },
        { id: 7, name: "L'Oreal India Scholarship", amount: "₹2.5 Lakhs", type: "Girls", deadline: "Exp: 25 days", link: "https://www.loreal.com/en/india/" },
        { id: 8, name: "Adobe India Women-in-Tech", amount: "USD 10,000", type: "Girls", deadline: "Exp: 45 days", link: "https://www.adobe.com/in/careers/university/research-scholarship.html" },
        { id: 9, name: "LIC Golden Jubilee", amount: "₹20,000/Yr", type: "Means", deadline: "Exp: 12 days", link: "https://licindia.in/" },
        { id: 10, name: "Keep India Smiling Grant", amount: "₹30,000", type: "Merit", deadline: "Exp: 60 days", link: "https://www.buddy4study.com/page/keep-india-smiling-foundational-scholarship-programme" },
        { id: 11, name: "Santoor Scholarship", amount: "₹24,000/Yr", type: "Girls", deadline: "Exp: 18 days", link: "https://www.santoorscholarships.com/" },
        { id: 12, name: "Foundation for Excellence", amount: "Variable", type: "Means", deadline: "Exp: 30 days", link: "https://ffe.org/" }
    ];

    const materials = [
        { id: 1, title: "JEE Main 10 Yr Papers", size: "125 MB", icon: "📚" },
        { id: 2, title: "Formula Cheatsheets (PCM)", size: "45 MB", icon: "📝" },
        { id: 3, title: "NEET Biology Atlas", size: "86 MB", icon: "🧬" },
        { id: 4, title: "Mock Test Series Vol.1", size: "150 MB", icon: "🧠" }
    ];

    // --- HANDLERS ---

    // 1. Predictor Logic
    const handlePredict = () => {
        if (!rank) {
            alert("Please enter a rank first!");
            return;
        }
        setIsPredicting(true);
        setPredictionResults(null);

        // Simulate API delay
        setTimeout(() => {
            const mockResults = [
                { name: "NIT Trichy", branch: "Computer Science", chance: 85, color: "#16a34a" },
                { name: "NIT Warangal", branch: "Electronics", chance: 72, color: "#f59e0b" },
                { name: "IIIT Hyderabad", branch: "ECE", chance: 45, color: "#ef4444" },
                { name: "VNIT Nagpur", branch: "Mechanical", chance: 92, color: "#16a34a" }
            ];
            setPredictionResults(mockResults);
            setIsPredicting(false);
        }, 1500);
    };

    // 2. Scholarship Filtering
    const filteredScholarships = scholarshipFilter === 'All'
        ? scholarshipsData
        : scholarshipsData.filter(s => s.type === scholarshipFilter);

    // 3. Download Logic
    const handleDownload = (title) => {
        alert(`Starting download for: ${title}`);
    };

    return (
        <div className="utilities-page-new">
            {/* Hero Section */}
            <section className="utilities-hero">
                <div className="container">
                    <h1 className="hero-title">Student Toolkit & Resources</h1>
                    <p className="hero-subtitle">
                        Access premium tools designed to simplify your admission journey. Predict colleges, find funding, and prepare better.
                    </p>
                </div>
            </section>

            <div className="utilities-container">

                {/* 1. COLLEGE PREDICTOR CARD */}
                <div className="predictor-section-card">
                    <div className="pred-left">
                        <h2>College Predictor</h2>
                        <p>Enter your rank to see your admission chances based on last year's cutoff data. We analyze over 500+ colleges.</p>

                        <div className="exam-tabs">
                            {['JEE Main', 'NEET', 'EAMCET', 'BITSAT', 'VITEEE'].map(ex => (
                                <button
                                    key={ex}
                                    className={`exam-tab ${activeExam === ex ? 'active' : ''}`}
                                    onClick={() => setActiveExam(ex)}
                                >
                                    {ex}
                                </button>
                            ))}
                        </div>

                        <div className="predictor-input-group">
                            <input
                                type="number"
                                className="pred-input"
                                placeholder={`Enter ${activeExam} Rank (e.g., 15000)`}
                                value={rank}
                                onChange={(e) => setRank(e.target.value)}
                            />
                            <button className="btn-predict" onClick={handlePredict} disabled={isPredicting}>
                                {isPredicting ? 'Analyzing...' : 'Predict Now'}
                            </button>
                        </div>
                    </div>

                    <div className="pred-right">
                        <div className="pred-results-area">
                            {!predictionResults && !isPredicting && (
                                <div className="result-placeholder">
                                    <span style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</span>
                                    <h4>Results will appear here</h4>
                                    <p>Enter your rank and hit Predict to see options.</p>
                                </div>
                            )}

                            {isPredicting && (
                                <div className="result-placeholder">
                                    <div className="loader"></div> {/* You'd typically use a spinner here */}
                                    <h4>Crunching numbers...</h4>
                                </div>
                            )}

                            {predictionResults && (
                                <div className="results-list-animated">
                                    <h4 style={{ marginBottom: '1rem', color: '#334155' }}>Prediction Results:</h4>
                                    {predictionResults.map((res, i) => (
                                        <div className="pred-result-card" key={i}>
                                            <div className="pr-info">
                                                <h4>{res.name}</h4>
                                                <p>{res.branch}</p>
                                            </div>
                                            <div className="pr-chance">
                                                <span style={{ color: res.color, fontWeight: '700' }}>{res.chance}% Chance</span>
                                                <div className="chance-bar">
                                                    <div className="chance-fill" style={{ width: `${res.chance}%`, background: res.color }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* AD HEADER BANNER */}
                <div className="utilities-ad-banner">
                    <div className="ad-content">
                        <span className="ad-label">Sponsored</span>
                        <h3>LPU National Entrance and Scholarship Test (LPUNEST)</h3>
                        <p>Applications Open for 2025. Get up to 100% Scholarship.</p>
                        <button>Apply Now</button>
                    </div>
                </div>

                {/* 2. SPLIT SECTION: SCHOLARSHIPS & MATERIALS */}
                <div className="tools-grid">

                    {/* Scholarships Feed */}
                    <div className="scholarship-widget">
                        <div className="widget-header">
                            <h3>Find Scholarships</h3>
                            <div className="filter-tabs">
                                {['All', 'Merit', 'Means', 'Girls'].map(f => (
                                    <button
                                        key={f}
                                        className={`filter-btn ${scholarshipFilter === f ? 'active' : ''}`}
                                        onClick={() => setScholarshipFilter(f)}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="scholarship-list">
                            {filteredScholarships.map(s => (
                                <a
                                    href={s.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="scholarship-item"
                                    key={s.id}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <div className="sch-info">
                                        <h4>{s.name}</h4>
                                        <div className="sch-tags">
                                            <span className="sch-badge">{s.type}</span>
                                            <span className="sch-deadline">{s.deadline}</span>
                                        </div>
                                    </div>
                                    <div className="sch-amount">
                                        <span className="amount-val">{s.amount}</span>
                                        <span style={{ fontSize: '0.75rem', color: '#2563EB', fontWeight: '600' }}>Apply Now ↗</span>
                                    </div>
                                </a>
                            ))}
                            {filteredScholarships.length === 0 && (
                                <p style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>No scholarships found for this category.</p>
                            )}
                        </div>
                    </div>

                    {/* Study Materials Sidebar */}
                    <div className="right-sidebar-stack">
                        {/* SIDEBAR AD */}
                        <div className="utilities-ad-square">
                            <span className="ad-label-sm">Ad</span>
                            <h4>Allen Test Series</h4>
                            <p>Ace JEE 2026 with India's best mock tests.</p>
                            <button className="btn-ad-sm">Explore</button>
                        </div>

                        <div className="materials-widget">
                            <div className="widget-header">
                                <h3>Study Materials</h3>
                            </div>
                            <div className="material-list">
                                {materials.map(m => (
                                    <div className="material-item" key={m.id}>
                                        <div className="mat-icon">{m.icon}</div>
                                        <div className="mat-info">
                                            <h5>{m.title}</h5>
                                            <p>{m.size} • PDF</p>
                                        </div>
                                        <button
                                            className="btn-download-mini"
                                            onClick={() => handleDownload(m.title)}
                                            title="Download"
                                        >
                                            ↓
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button className="btn-view-all-plain" style={{ marginTop: '1rem' }}>
                                Browse All Resources →
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Utilities;
