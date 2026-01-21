import React, { useState } from 'react';
import './Utilities.css';

const Utilities = () => {
    const [activeTab, setActiveTab] = useState('scholarships');

    const scholarships = [
        {
            id: 1,
            name: "National Merit Scholarship",
            badge: "MERIT BASED",
            amount: "₹50,000",
            period: "/ Year",
            desc: "Awarded to top 1% of students in Class 12th board exams. Applicable for all undergraduate courses.",
            type: "merit"
        },
        {
            id: 2,
            name: "Vidyalakshmi Education Loan",
            badge: "MEANS BASED",
            amount: "Low Interest",
            period: "Loans",
            desc: "Government initiative to provide easy education loans to students with poor economic background.",
            type: "means" // Using this to style the amount text differently if needed
        },
        {
            id: 3,
            name: "Pragati Scholarship",
            badge: "GIRLS SPECIFIC",
            amount: "₹50,000",
            period: "/ Year",
            desc: "AICTE scheme for girl students pursuing technical education. Up to 2 girls per family eligible.",
            type: "girls"
        }
    ];

    const [activeExam, setActiveExam] = useState('JEE Main');
    const [rank, setRank] = useState('');
    const [results, setResults] = useState(null);
    const [isCalculating, setIsCalculating] = useState(false);

    const examData = {
        'JEE Main': {
            title: "JEE Rank Predictor",
            desc: "Enter your expected CRL rank to see your most likely college options based on last year's cutoffs.",
            placeholder: "Enter CRL Rank (e.g. 15000)",
            colleges: [
                { name: "NIT Trichy", branch: "Computer Science", minRank: 0, maxRank: 5000 },
                { name: "NIT Surathkal", branch: "IT", minRank: 5001, maxRank: 10000 },
                { name: "IIIT Hyderabad", branch: "Electronics", minRank: 0, maxRank: 15000 },
                { name: "NIT Warangal", branch: "Mechanical", minRank: 10001, maxRank: 20000 },
                { name: "DTU Delhi", branch: "Civil", minRank: 20001, maxRank: 50000 }
            ]
        },
        'NEET': {
            title: "NEET College Predictor",
            desc: "Predict your MBBS/BDS college options based on your NEET All India Rank.",
            placeholder: "Enter NEET AIR (e.g. 5000)",
            colleges: [
                { name: "AIIMS Delhi", branch: "MBBS", minRank: 0, maxRank: 50 },
                { name: "MAMC Delhi", branch: "MBBS", minRank: 51, maxRank: 500 },
                { name: "KGMU Lucknow", branch: "MBBS", minRank: 501, maxRank: 2000 },
                { name: "GMC Mumbai", branch: "MBBS", minRank: 2001, maxRank: 10000 },
                { name: "Government Dental College", branch: "BDS", minRank: 10001, maxRank: 50000 }
            ]
        },
        'TS EAMCET': {
            title: "EAMCET Predictor",
            desc: "Find the best regional engineering colleges based on your state rank.",
            placeholder: "Enter EAMCET Rank (e.g. 10000)",
            colleges: [
                { name: "JNTU Hyderabad", branch: "CSE", minRank: 0, maxRank: 1000 },
                { name: "OU College of Eng", branch: "ECE", minRank: 1001, maxRank: 2500 },
                { name: "CBIT Hyderabad", branch: "IT", minRank: 2501, maxRank: 5000 },
                { name: "VNR VJIET", branch: "CSM", minRank: 5001, maxRank: 8000 },
                { name: "Vasavi College", branch: "Civil", minRank: 8001, maxRank: 15000 }
            ]
        }
    };

    const handleCalculate = () => {
        if (!rank) return;
        setIsCalculating(true);
        setResults(null);

        // Simulate calculation delay
        setTimeout(() => {
            const currentExmData = examData[activeExam] || examData['JEE Main'];
            const numericRank = parseInt(rank);
            const filtered = currentExmData.colleges.filter(c => numericRank >= c.minRank && numericRank <= c.maxRank);

            // If no exact match found in our small mock list, provide a fallback
            if (filtered.length === 0) {
                setResults([{ name: "Local Private Institute", branch: "General", note: "Based on your rank, you may consider local private institutions." }]);
            } else {
                setResults(filtered);
            }
            setIsCalculating(false);
        }, 1200);
    };

    const handleExamChange = (exam) => {
        setActiveExam(exam);
        setResults(null);
        setRank('');
    };

    return (
        <div className="utilities-page-new">
            {/* Hero Section */}
            <section className="utilities-hero">
                <div className="container text-center">
                    <h1 className="hero-title">Start Funding Your Future</h1>
                    <p className="hero-subtitle">
                        Explore exclusive scholarships, predict your college admission chances, and access premium study materials.
                    </p>

                    {/* Tabs Navigation */}
                    <div className="tabs-wrapper">
                        <div className="tabs-pill">
                            <button
                                className={`tab-item ${activeTab === 'scholarships' ? 'active' : ''}`}
                                onClick={() => setActiveTab('scholarships')}
                            >
                                Scholarships
                            </button>
                            <button
                                className={`tab-item ${activeTab === 'predictor' ? 'active' : ''}`}
                                onClick={() => setActiveTab('predictor')}
                            >
                                College Predictor
                            </button>
                            <button
                                className={`tab-item ${activeTab === 'materials' ? 'active' : ''}`}
                                onClick={() => setActiveTab('materials')}
                            >
                                Study Materials
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="utilities-content container">
                {activeTab === 'scholarships' && (
                    <div className="scholarships-grid">
                        {scholarships.map((item) => (
                            <div className="scholarship-card" key={item.id}>
                                <span className={`badge badge-${item.badge.toLowerCase().replace(' ', '-')}`}>
                                    {item.badge}
                                </span>

                                <h3 className="card-name">{item.name}</h3>

                                <div className="card-amount-block">
                                    <span className={`amount ${item.type === 'means' ? 'text-green' : 'text-green'}`}>
                                        {item.amount}
                                    </span>
                                    <span className="period"> {item.period}</span>
                                </div>

                                <p className="card-desc">{item.desc}</p>

                                <button className="btn-details">View Details</button>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'predictor' && (
                    <div className="predictor-container">

                        {/* Exam Switcher for Predictor */}
                        <div className="predictor-exams-nav">
                            {['JEE Main', 'NEET', 'TS EAMCET', 'BITSAT', 'VITEEE'].map(ex => (
                                <button
                                    key={ex}
                                    className={`exam-pill ${activeExam === ex ? 'active' : ''}`}
                                    onClick={() => handleExamChange(ex)}
                                >
                                    {ex}
                                </button>
                            ))}
                        </div>

                        <div className="predictor-card-main text-center">
                            <h2 className="predictor-title">{examData[activeExam]?.title || activeExam}</h2>
                            <p className="predictor-desc">
                                {examData[activeExam]?.desc || "Find the best colleges based on your exam rank and performance."}
                            </p>

                            <div className="input-group">
                                <input
                                    type="number"
                                    placeholder={examData[activeExam]?.placeholder || "Enter Rank"}
                                    className="rank-input"
                                    value={rank}
                                    onChange={(e) => setRank(e.target.value)}
                                />
                            </div>

                            <button
                                className="btn-calculate"
                                onClick={handleCalculate}
                                disabled={isCalculating}
                            >
                                {isCalculating ? "Calculating..." : "Calculate Possibilities"}
                            </button>
                        </div>

                        {/* Results Section */}
                        {results && (
                            <div className="predictor-results">
                                <h3 className="results-heading">Most Likely Options For You</h3>
                                <div className="results-list">
                                    {results.map((res, i) => (
                                        <div key={i} className="result-item">
                                            <div className="result-info">
                                                <h4>{res.name}</h4>
                                                <p>{res.branch}</p>
                                            </div>
                                            <span className="match-tag">Excellent Match</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                )}

                {activeTab === 'materials' && (
                    <div className="materials-grid">
                        <div className="material-card">
                            <div className="material-icon">📚</div>
                            <h3 className="material-title">JEE Previous Papers</h3>
                            <p className="material-desc">
                                Comprehensive archive of last 10 years of Question papers with detailed solution keys.
                            </p>
                            <button className="btn-material">Download PDF Bundle</button>
                        </div>

                        <div className="material-card">
                            <div className="material-icon">📝</div>
                            <h3 className="material-title">Formula Cheatsheets</h3>
                            <p className="material-desc">
                                Quick revision sheets for Physics, Chemistry, and Maths formulas tailored for last-minute prep.
                            </p>
                            <button className="btn-material">Download PDF Bundle</button>
                        </div>

                        <div className="material-card">
                            <div className="material-icon">🧠</div>
                            <h3 className="material-title">Mock Tests</h3>
                            <p className="material-desc">
                                Full-length timed mock tests designed to simulate the actual exam environment.
                            </p>
                            <button className="btn-material outline">Start Practice</button>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Utilities;
