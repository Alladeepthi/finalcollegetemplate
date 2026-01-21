import React, { useState } from 'react';
import './Careers.css';

const Careers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('All');
    const [selectedCareer, setSelectedCareer] = useState(null);

    // 5. Trending Careers Data
    const trendingCareers = [
        "AI Ethicist", "Drone Pilot", "Green Energy Engineer", "Data Scientist", "Cybersecurity Analyst", "UX Designer"
    ];

    // 1. Industries Data
    const industries = [
        { name: "Engineering", icon: "⚙️" },
        { name: "Medical", icon: "🩺" },
        { name: "Management", icon: "💼" },
        { name: "Design", icon: "🎨" },
        { name: "Aviation", icon: "✈️" },
        { name: "Legal", icon: "⚖️" },
        { name: "Media", icon: "🎥" },
        { name: "Science", icon: "🔬" }
    ];

    // 2. Career Library Data (Mock DB)
    const careersData = [
        {
            id: 1,
            title: "Software Engineer",
            industry: "Engineering",
            avgSalary: "₹6L - ₹24L PA",
            education: "B.Tech / BCA",
            growth: "High (22%)",
            description: "Builds and maintains software systems.",
            roadmap: [
                { step: "Class 12 (PCM)", detail: "Focus on Math & Logic" },
                { step: "B.Tech / B.Sc CS", detail: "Learn DSA, Web Dev" },
                { step: "Internship", detail: "Gain Real-world Exp" },
                { step: "Junior Developer", detail: "Start your career" }
            ],
            dayInLife: "Starts with a stand-up meeting, spends 4-5 hours coding features, reviewing code, and debugging. Ends with documentation."
        },
        {
            id: 2,
            title: "Data Scientist",
            industry: "Science",
            avgSalary: "₹8L - ₹30L PA",
            education: "B.Tech / M.Sc Stats",
            growth: "Very High (30%)",
            description: "Analyzes complex data to help make business decisions.",
            roadmap: [
                { step: "Class 12 (PCM/Stats)", detail: "Strong Math base" },
                { step: "Degree in CS/Stats", detail: "Learn Python, SQL" },
                { step: "Certifications", detail: "ML & AI Courses" },
                { step: "Data Analyst", detail: "Entry level role" }
            ],
            dayInLife: "Cleaning large datasets, building machine learning models, and visualizing data trends for stakeholders."
        },
        {
            id: 3,
            title: "Commercial Pilot",
            industry: "Aviation",
            avgSalary: "₹15L - ₹40L PA",
            education: "10+2 PCM + CPL",
            growth: "Moderate",
            description: "Flies aircraft for airlines or cargo transport.",
            roadmap: [
                { step: "Class 12 (PCM)", detail: "Physics & Math Mandatory" },
                { step: "Student Pilot License", detail: "Medical & Written Exams" },
                { step: "Flying Training (CPL)", detail: "200 Hours Flying" },
                { step: "Type Rating", detail: "Specific Aircraft Training" }
            ],
            dayInLife: "Pre-flight checks, weather briefing, flying the aircraft, and post-flight logs. Shift-based work schedule."
        },
        {
            id: 4,
            title: "Product Designer",
            industry: "Design",
            avgSalary: "₹6L - ₹18L PA",
            education: "B.Des / M.Des",
            growth: "High",
            description: "Designs the look and feel of physical or digital products.",
            roadmap: [
                { step: "Class 12 (Any)", detail: "Creative Aptitude" },
                { step: "Design Entrance (NID)", detail: "Clear DAT/UCEED" },
                { step: "B.Des Degree", detail: "Portfolio Building" },
                { step: "UX/UI Designer", detail: "Start in Design Studio" }
            ],
            dayInLife: "Sketching concepts, creating 3D models or wireframes, user testing, and collaborating with engineers."
        },
        {
            id: 5,
            title: "Investment Banker",
            industry: "Management",
            avgSalary: "₹12L - ₹50L PA",
            education: "MBA Finance",
            growth: "High",
            description: "Helps companies raise capital and provides financial advice.",
            roadmap: [
                { step: "Class 12 (Comm/Science)", detail: "Math proficiency" },
                { step: "B.Com / BBA", detail: "Finance Basics" },
                { step: "MBA (Top Tier)", detail: "CAT / GMAT" },
                { step: "Analyst Role", detail: "High pressure entry role" }
            ],
            dayInLife: "Analyzing market trends, preparing financial models for mergers, client meetings, and long working hours."
        },
        {
            id: 6,
            title: "Doctor (MBBS)",
            industry: "Medical",
            avgSalary: "₹10L - ₹30L PA",
            education: "MBBS + MD",
            growth: "Stable",
            description: "Diagnoses and treats illnesses and injuries.",
            roadmap: [
                { step: "Class 12 (PCB)", detail: "Biology Focus" },
                { step: "NEET UG", detail: "High Score Required" },
                { step: "MBBS (5.5 Years)", detail: "Theory + Internship" },
                { step: "NEET PG / MD", detail: "Specialization" }
            ],
            dayInLife: "Morning rounds, patient consultations in OPD, performing surgeries or procedures, and updating patient records."
        },
        // ... add more as needed
    ];

    const filteredCareers = careersData.filter(career => {
        const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesIndustry = selectedIndustry === 'All' || career.industry === selectedIndustry;
        return matchesSearch && matchesIndustry;
    });

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
                            onClick={() => setSelectedIndustry('All')}
                        >
                            <span className="ind-icon">🌍</span>
                            <span>All</span>
                        </div>
                        {industries.map((ind, i) => (
                            <div
                                key={i}
                                className={`industry-card ${selectedIndustry === ind.name ? 'active' : ''}`}
                                onClick={() => setSelectedIndustry(ind.name)}
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
                        {filteredCareers.map(career => (
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
                                    onClick={() => {
                                        setSelectedCareer(career);
                                        document.body.style.overflow = 'hidden';
                                    }}
                                >
                                    View Roadmap & Details
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Career Details Modal */}
            {selectedCareer && (
                <div className="career-modal-overlay" onClick={() => {
                    setSelectedCareer(null);
                    document.body.style.overflow = 'auto';
                }}>
                    <div className="career-modal" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => {
                            setSelectedCareer(null);
                            document.body.style.overflow = 'auto';
                        }}>×</button>

                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="modal-industry">{selectedCareer.industry}</span>
                                <h2>{selectedCareer.title}</h2>
                                <div className="modal-stats-row">
                                    <span>💰 {selectedCareer.avgSalary}</span>
                                    <span>🎓 {selectedCareer.education}</span>
                                    <span>📈 {selectedCareer.growth} Growth</span>
                                </div>
                            </div>

                            {/* 3. Career Roadmap Visualization */}
                            <div className="modal-section">
                                <h3>🚀 Career Roadmap</h3>
                                <div className="roadmap-container">
                                    {selectedCareer.roadmap.map((step, idx) => (
                                        <div className="roadmap-step" key={idx}>
                                            <div className="step-circle">{idx + 1}</div>
                                            <div className="step-content">
                                                <h4>{step.step}</h4>
                                                <p>{step.detail}</p>
                                            </div>
                                            {idx < selectedCareer.roadmap.length - 1 && <div className="step-line"></div>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 4. Day in the Life */}
                            <div className="modal-section day-in-life">
                                <h3>⏰ Day in the Life</h3>
                                <div className="life-quote">
                                    "{selectedCareer.dayInLife}"
                                </div>
                            </div>

                            <div className="modal-actions">
                                <button className="btn-find-colleges">Find Colleges for {selectedCareer.title}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Careers;
