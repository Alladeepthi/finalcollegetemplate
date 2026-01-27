import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CollegeFinder.css';

const CollegeFinder = () => {
    const [activeTab, setActiveTab] = useState('Engineering');
    const navigate = useNavigate();

    const tabs = ["Engineering", "Management", "Medical", "Science", "Commerce", "Arts"];

    // Full Dataset for all streams
    const finderData = {
        'Engineering': {
            colleges: ["IIT Bombay", "BITS Pilani", "VIT Vellore", "SRM University", "Manipal Institute", "Chandigarh University", "LPU"],
            exams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "SRMJEEE"],
            states: ["Maharashtra", "Tamil Nadu", "Karnataka", "Delhi", "Telangana"],
            courses: ["Computer Science", "Mechanical Engg", "Electronics", "Civil Engg", "Aerospace"],
            comparisons: [
                { id1: 1, name1: "IIT Madras", img1: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=100&auto=format&fit=crop", id2: 2, name2: "IIT Delhi", img2: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=100&auto=format&fit=crop", course: "BE/B.Tech" },
                { id1: 3, name1: "IIT Bombay", img1: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=100&auto=format&fit=crop", id2: 4, name2: "BITS Pilani", img2: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1000&auto=format&fit=crop", course: "BE/B.Tech" }
            ]
        },
        'Management': {
            colleges: ["IIM Ahmedabad", "IIM Bangalore", "XLRI Jamshedpur", "FMS Delhi", "NMIMS Mumbai"],
            exams: ["CAT", "XAT", "MAT", "CMAT", "NMAT", "SNAP"],
            states: ["Maharashtra", "Delhi", "Karnataka", "Gujarat", "West Bengal"],
            courses: ["MBA Finance", "MBA Marketing", "BBA", "Executive MBA", "Human Resources"],
            comparisons: [
                { id1: 7, name1: "IIM Ahmedabad", img1: "https://images.unsplash.com/photo-1526948128573-703ea1c19b9d?q=80&w=1000&auto=format&fit=crop", id2: 8, name2: "IIM Bangalore", img2: "https://images.unsplash.com/photo-1590012314607-6da99984e38e?q=80&w=1000&auto=format&fit=crop", course: "MBA/PGDM" }
            ]
        },
        'Medical': {
            colleges: ["AIIMS Delhi", "CMC Vellore", "KMC Manipal", "JIPMER", "AFMC Pune"],
            exams: ["NEET UG", "NEET PG", "AIIMS Nursing", "JIPMER"],
            states: ["Delhi", "Tamil Nadu", "Maharashtra", "Karnataka", "Uttar Pradesh"],
            courses: ["MBBS", "BDS", "B.Pharma", "Nursing", "Physiotherapy"],
            comparisons: [
                { id1: 6, name1: "AIIMS Delhi", img1: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop", id2: 5, name2: "CMC Vellore", img2: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1000&auto=format&fit=crop", course: "MBBS" }
            ]
        },
        'Science': {
            colleges: ["IISc Bangalore", "IISER Pune", "St. Stephens", "Hindu College", "Miranda House", "Loyola College"],
            exams: ["CUET", "NEST", "IAT", "JAM"],
            states: ["Delhi", "Karnataka", "Maharashtra", "Tamil Nadu", "West Bengal"],
            courses: ["B.Sc Physics", "B.Sc Chemistry", "M.Sc Data Science", "Biotechnology", "Forensic Science"],
            comparisons: []
        },
        'Commerce': {
            colleges: ["SRCC Delhi", "LSR College", "St. Xaviers Mumbai", "Christ University", "Narsee Monjee"],
            exams: ["CUET", "CA Foundation", "CS Executive", "CMA"],
            states: ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "West Bengal"],
            courses: ["B.Com Hons", "Economics Hons", "CA", "CS", "CFA"],
            comparisons: []
        },
        'Arts': {
            colleges: ["JNU Delhi", "TISS Mumbai", "Ashoka University", "Lady Shri Ram", "St. Stephens"],
            exams: ["CUET", "TISSNET", "PUBDET"],
            states: ["Delhi", "Maharashtra", "West Bengal", "Karnataka"],
            courses: ["BA Psychology", "BA English", "Journalism", "Political Science", "Sociology"],
            comparisons: []
        }
    };

    const currentData = finderData[activeTab];

    const handleChipClick = (type, value) => {
        // Navigate with search params for instant filtering
        if (type === 'college') navigate(`/colleges?search=${value}`);
        if (type === 'exam') navigate(`/exams?search=${value}`);
        if (type === 'course') navigate(`/courses?search=${value}`);
    };

    const handleCompareClick = (id1, id2) => {
        navigate(`/colleges?compare=${id1},${id2}`);
    };

    return (
        <section className="college-finder-section">
            <div className="container">

                <div className="finder-header text-center">
                    <h2 className="finder-title">Find The Perfect College For You</h2>
                    <p className="finder-subtitle">Discover top colleges, exams, and opportunities in your preferred field.</p>
                </div>

                <div className="finder-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                            {activeTab === tab && <span className="tab-indicator">&gt;</span>}
                        </button>
                    ))}
                </div>

                <div className="finder-content">
                    {/* Featured Colleges - Left Block */}
                    <div className="finder-card colleges-card">
                        <div className="card-header">
                            <h3>Featured Colleges</h3>
                            <Link to="/colleges" className="view-all">View all <span className="view-all-dot">●</span></Link>
                        </div>
                        <div className="chips-grid">
                            {currentData.colleges.map((college, idx) => (
                                <button
                                    key={idx}
                                    className="data-chip college-chip"
                                    onClick={() => handleChipClick('college', college)}
                                >
                                    {college}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Middle Column - Exams and Comparison */}
                    <div className="middle-column">
                        <div className="finder-card exams-card">
                            <div className="card-header">
                                <h3>Important Exams</h3>
                                <Link to="/exams" className="view-all">View all</Link>
                            </div>
                            <div className="chips-flex">
                                {currentData.exams.map((exam, idx) => (
                                    <button
                                        key={idx}
                                        className="data-chip exam-chip"
                                        onClick={() => handleChipClick('exam', exam)}
                                    >
                                        {exam}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Compare Colleges Card - Dynamic */}
                        <div className="finder-card compare-card">
                            <div className="compare-header-block">
                                <div>
                                    <h3>Compare Colleges</h3>
                                    <p className="compare-sub">Compare on the basis of rank, fees, etc.</p>
                                </div>
                                <img src="https://cdn-icons-png.flaticon.com/512/3401/3401569.png" alt="Study" className="compare-illustration" />
                            </div>

                            <div className="compare-list">
                                {currentData.comparisons && currentData.comparisons.length > 0 ? (
                                    currentData.comparisons.map((comp, idx) => (
                                        <div className="compare-item" key={idx} onClick={() => handleCompareClick(comp.id1, comp.id2)} style={{ cursor: 'pointer' }}>
                                            <div className="comp-col">
                                                <img src={comp.img1} alt={comp.name1} className="comp-logo" />
                                                <div className="comp-info">
                                                    <span>{comp.name1}</span>
                                                    <small>{comp.course}</small>
                                                </div>
                                            </div>
                                            <div className="comp-vs">VS</div>
                                            <div className="comp-col">
                                                <img src={comp.img2} alt={comp.name2} className="comp-logo" />
                                                <div className="comp-info">
                                                    <span>{comp.name2}</span>
                                                    <small>{comp.course}</small>
                                                </div>
                                            </div>
                                            <div className="comp-arrow">→</div>
                                        </div>
                                    ))
                                ) : (
                                    <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem', padding: '20px' }}>
                                        No comparisons available for this stream.
                                    </div>
                                )}
                            </div>

                            <Link to="/colleges" className="compare-link-bottom">Compare Colleges &gt;</Link>
                        </div>
                    </div>

                    {/* Right Column - Related Courses */}
                    <div className="finder-card courses-card">
                        <div className="card-header">
                            <h3>Related Courses</h3>
                            <Link to="/courses" className="view-all">View all</Link>
                        </div>
                        <ul className="courses-list">
                            {currentData.courses.map((course, idx) => (
                                <li
                                    key={idx}
                                    className="course-item"
                                    onClick={() => handleChipClick('course', course)}
                                >
                                    {course}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CollegeFinder;
