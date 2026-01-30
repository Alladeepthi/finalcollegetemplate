import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CollegeFinder.css';

const CollegeFinder = () => {
    const [activeTab, setActiveTab] = useState('Engineering');
    const [currentTrendIndex, setCurrentTrendIndex] = useState(0);
    const navigate = useNavigate();

    const placementTrends = [
        { company: "Google", package: "₹ 1.2 Cr", role: "SDE III", logo: "G" },
        { company: "Atlassian", package: "₹ 85 LPA", role: "SDE II", logo: "A" },
        { company: "Microsoft", package: "₹ 55 LPA", role: "Software Eng", logo: "M" },
        { company: "Amazon", package: "₹ 45 LPA", role: "SDE I", logo: "A" }
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTrendIndex((prev) => (prev + 1) % placementTrends.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const currentTrend = placementTrends[currentTrendIndex];

    const tabs = ["Engineering", "Management", "Medical", "Science", "Commerce", "Arts"];

    // Full Dataset for all streams
    const finderData = {
        'Engineering': {
            colleges: ["IIT Bombay", "BITS Pilani", "VIT Vellore", "SRM University", "Manipal Institute", "Chandigarh University", "LPU"],
            exams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "SRMJEEE"],
            states: ["Maharashtra", "Tamil Nadu", "Karnataka", "Delhi", "Telangana"],
            courses: ["Computer Science", "Mechanical Engg", "Electronics", "Civil Engg", "Aerospace", "Chemical Engg"],
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

                        </button>
                    ))}
                </div>

                <div className="finder-content">
                    {/* Notifications - Left Block */}
                    <div className="finder-card notifications-card">
                        <div className="card-header">
                            <h3>📢 Latest Notifications</h3>
                            <a href="#" className="view-all">View all <span className="view-all-dot">●</span></a>
                        </div>
                        <div className="notifications-list">
                            <div className="notification-item urgent" onClick={() => navigate('/colleges')}>
                                <div className="notification-dot"></div>
                                <div className="notification-text">
                                    <strong>Admissions Open 2026</strong>
                                    <span>Join top-ranked universities</span>
                                </div>
                                <span className="notification-time">Today</span>
                            </div>
                            <div className="notification-item" onClick={() => navigate('/exams')}>
                                <div className="notification-dot"></div>
                                <div className="notification-text">
                                    <strong>JEE Main Registration</strong>
                                    <span>Last date: Feb 15, 2026</span>
                                </div>
                                <span className="notification-time">2 days ago</span>
                            </div>
                            <div className="notification-item" onClick={() => navigate('/scholarships')}>
                                <div className="notification-dot"></div>
                                <div className="notification-text">
                                    <strong>Merit Scholarships</strong>
                                    <span>Up to 100% tuition waiver</span>
                                </div>
                                <span className="notification-time">1 week ago</span>
                            </div>
                            <div className="notification-item urgent" onClick={() => navigate('/exams')}>
                                <div className="notification-dot"></div>
                                <div className="notification-text">
                                    <strong>NEET Application Deadline</strong>
                                    <span>Submit before Feb 10</span>
                                </div>
                                <span className="notification-time">3 days ago</span>
                            </div>
                            <div className="notification-item" onClick={() => navigate('/colleges')}>
                                <div className="notification-dot"></div>
                                <div className="notification-text">
                                    <strong>Virtual College Fair</strong>
                                    <span>Meet 50+ college reps</span>
                                </div>
                                <span className="notification-time">5 days ago</span>
                            </div>
                            <div className="notification-item" onClick={() => navigate('/courses')}>
                                <div className="notification-dot"></div>
                                <div className="notification-text">
                                    <strong>New AI & DS Courses</strong>
                                    <span>Explore latest programs</span>
                                </div>
                                <span className="notification-time">1 week ago</span>
                            </div>
                            <div className="notification-item" onClick={() => navigate('/events')}>
                                <div className="notification-dot"></div>
                                <div className="notification-text">
                                    <strong>Study Abroad Seminar</strong>
                                    <span>Expert guidance session</span>
                                </div>
                                <span className="notification-time">2 weeks ago</span>
                            </div>
                            <div className="notification-item" onClick={() => navigate('/colleges')}>
                                <div className="notification-dot"></div>
                                <div className="notification-text">
                                    <strong>Campus Open Days</strong>
                                    <span>Visit top campuses</span>
                                </div>
                                <span className="notification-time">2 weeks ago</span>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column - Exams, Placements, Study Hubs */}
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

                        {/* Premium Placement Spotlight Card (Now in Middle) */}
                        <div className="finder-card placement-spotlight-card">
                            <div className="spotlight-header">
                                <div className="header-title-group">
                                    <h3>Top Placements 2025</h3>
                                    <span className="verified-badge" title="Verified Data">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                </div>
                                <div className="live-indicator">
                                    <span className="live-dot"></span>
                                </div>
                            </div>

                            <div className="spotlight-content" key={currentTrendIndex}>
                                <div className="package-container">
                                    <span className="package-amount">{currentTrend.package}</span>
                                    <span className="package-label">Highest CTC</span>
                                </div>

                                <div className="company-role-info">
                                    <div className="info-row">
                                        <div className="icon-box role-icon">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                            </svg>
                                        </div>
                                        <span className="info-text role-text">{currentTrend.role}</span>
                                    </div>

                                    <div className="info-row">
                                        <div className="icon-box company-icon">
                                            {/* Using the letter logo as a placeholder if available, else building icon */}
                                            <span className="letter-logo">{currentTrend.logo}</span>
                                        </div>
                                        <span className="info-text company-text">{currentTrend.company}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="spotlight-footer">
                                <Link to="/placements" className="check-placements-btn">
                                    View Placement Report
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Popular States/Cities - Added to fill remaining space */}
                        <div className="finder-card popular-states-card">
                            <div className="card-header">
                                <h3>Popular Study Hubs</h3>
                                <Link to="/colleges" className="view-all">View all</Link>
                            </div>
                            <div className="chips-flex">
                                {currentData.states.map((state, idx) => (
                                    <button
                                        key={idx}
                                        className="data-chip location-chip"
                                        onClick={() => handleChipClick('college', state)}
                                    >
                                        📍 {state}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Compare (Top) & Related Courses (Bottom) */}
                    <div className="right-column">
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

            </div>
        </section>
    );
};

export default CollegeFinder;
