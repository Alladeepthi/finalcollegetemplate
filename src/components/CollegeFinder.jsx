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
            courses: ["Computer Science", "Mechanical Engg", "Electronics", "Civil Engg", "Aerospace"]
        },
        'Management': {
            colleges: ["IIM Ahmedabad", "XLRI Jamshedpur", "SP Jain", "FMS Delhi", "NMIMS Mumbai", "Symbiosis Pune"],
            exams: ["CAT", "XAT", "MAT", "CMAT", "NMAT", "SNAP"],
            states: ["Maharashtra", "Delhi", "Karnataka", "Gujarat", "West Bengal"],
            courses: ["MBA Finance", "MBA Marketing", "BBA", "Executive MBA", "Human Resources"]
        },
        'Medical': {
            colleges: ["AIIMS Delhi", "CMC Vellore", "KMC Manipal", "JIPMER", "AFMC Pune", "Maulana Azad"],
            exams: ["NEET UG", "NEET PG", "AIIMS Nursing", "JIPMER"],
            states: ["Delhi", "Tamil Nadu", "Maharashtra", "Karnataka", "Uttar Pradesh"],
            courses: ["MBBS", "BDS", "B.Pharma", "Nursing", "Physiotherapy"]
        },
        'Science': {
            colleges: ["IISc Bangalore", "IISER Pune", "St. Stephens", "Hindu College", "Miranda House", "Loyola College"],
            exams: ["CUET", "NEST", "IAT", "JAM"],
            states: ["Delhi", "Karnataka", "Maharashtra", "Tamil Nadu", "West Bengal"],
            courses: ["B.Sc Physics", "B.Sc Chemistry", "M.Sc Data Science", "Biotechnology", "Forensic Science"]
        },
        'Commerce': {
            colleges: ["SRCC Delhi", "LSR College", "St. Xaviers Mumbai", "Christ University", "Narsee Monjee"],
            exams: ["CUET", "CA Foundation", "CS Executive", "CMA"],
            states: ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "West Bengal"],
            courses: ["B.Com Hons", "Economics Hons", "CA", "CS", "CFA"]
        },
        'Arts': {
            colleges: ["JNU Delhi", "TISS Mumbai", "Ashoka University", "Lady Shri Ram", "St. Stephens"],
            exams: ["CUET", "TISSNET", "PUBDET"],
            states: ["Delhi", "Maharashtra", "West Bengal", "Karnataka"],
            courses: ["BA Psychology", "BA English", "Journalism", "Political Science", "Sociology"]
        }
    };

    const currentData = finderData[activeTab];

    const handleChipClick = (type, value) => {
        // Navigate with search params for instant filtering
        if (type === 'college') navigate(`/colleges?search=${value}`);
        if (type === 'exam') navigate(`/exams?search=${value}`);
        if (type === 'course') navigate(`/courses?search=${value}`);
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

                    {/* Middle Column - Exams and States */}
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

                        <div className="finder-card states-card">
                            <div className="card-header">
                                <h3>Top States</h3>
                                <span className="view-all">View all</span>
                            </div>
                            <div className="chips-flex">
                                {currentData.states.map((state, idx) => (
                                    <span key={idx} className="data-chip state-chip">{state}</span>
                                ))}
                            </div>
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
