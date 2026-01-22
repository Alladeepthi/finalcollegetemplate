import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { examsData } from '../data/examsData';
import './Exams.css';

const Exams = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    // Initialize derived state
    const initialStream = searchParams.get('cat') || 'Engineering';
    const [selectedStream, setSelectedStream] = useState(initialStream);
    const [searchTerm, setSearchTerm] = useState('');

    const streams = ["Engineering", "Medical", "Management", "Law", "Government", "Design", "International"];

    // Effect: Handle Stream Change via Query Param
    useEffect(() => {
        const cat = searchParams.get('cat');
        if (cat) {
            setSelectedStream(cat);
        }
    }, [searchParams]);

    const handleStreamChange = (stream) => {
        setSelectedStream(stream);
        setSearchParams({ cat: stream });
    };

    const handleViewDetails = (exam) => {
        // Navigate to the dedicated details page
        navigate(`/exams/${exam.slug}`);
    };

    const filteredExams = examsData.filter(exam => {
        const matchesStream = selectedStream === 'All' || exam.stream === selectedStream;
        const matchesSearch = exam.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStream && matchesSearch;
    });

    return (
        <div className="exams-page">

            {/* Hero Section */}
            <div className="exams-hero">
                <div className="container">
                    <h1>Top Entrance Exams in India</h1>
                    <p>Get latest updates on exam dates, syllabus, admit cards, and results.</p>

                    <div className="exam-search-wrapper">
                        <span className="search-icon">🔍</span>
                        <input
                            type="text"
                            placeholder="Search exam (e.g. JEE, NEET, CAT)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="container exams-layout">

                {/* Stream Tabs */}
                <div className="stream-tabs">
                    {streams.map(stream => (
                        <button
                            key={stream}
                            className={`stream-tab ${selectedStream === stream ? 'active' : ''}`}
                            onClick={() => handleStreamChange(stream)}
                        >
                            {stream}
                        </button>
                    ))}
                </div>

                <div className="exams-content">

                    {/* Sidebar */}
                    <aside className="exam-sidebar">
                        <div className="widget-box notification-widget">
                            <h3>🔔 Exam Alerts</h3>
                            <p>Never miss a deadline! Subscribe to get instant updates.</p>
                            <div className="subscribe-form">
                                <input type="email" placeholder="Enter your email" />
                                <button onClick={() => alert("Subscribed successfully!")}>Subscribe</button>
                            </div>
                        </div>

                        <div className="widget-box upcoming-deadlines">
                            <h3>⏳ Upcoming Deadlines</h3>
                            <ul>
                                <li>
                                    <span className="deadline-exam">JEE Main Session 2</span>
                                    <span className="deadline-date text-red">Ends in 2 Days</span>
                                </li>
                                <li>
                                    <span className="deadline-exam">VITEEE Reg</span>
                                    <span className="deadline-date">Mar 30, 2026</span>
                                </li>
                                <li>
                                    <span className="deadline-exam">BITSAT App</span>
                                    <span className="deadline-date">Apr 10, 2026</span>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    {/* Main Exam List */}
                    <div className="exams-grid">
                        <div className="results-header">
                            <h2>{selectedStream} Exams</h2>
                            <span>{filteredExams.length} Exams Found</span>
                        </div>

                        {filteredExams.length > 0 ? (
                            filteredExams.map(exam => (
                                <div className="exam-card" key={exam.id}>
                                    <div className="exam-card-header">
                                        <div className="exam-logo">{exam.logo}</div>
                                        <div className="exam-title-info">
                                            <div className="exam-top-row">
                                                <h3>{exam.name}</h3>
                                                <span className={`status-badge ${exam.statusColor}`}>
                                                    {exam.status}
                                                </span>
                                            </div>
                                            <span className="exam-full-name">{exam.full_name}</span>
                                            <div className="exam-tags">
                                                <span className="tag">{exam.level} Level</span>
                                                <span className="tag">{exam.mode}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="exam-dates-grid">
                                        <div className="date-item">
                                            <span className="date-label">Application</span>
                                            <span className="date-val">{exam.dates.appStart} - {exam.dates.appEnd}</span>
                                        </div>
                                        <div className="date-item">
                                            <span className="date-label">Exam Date</span>
                                            <span className="date-val highlight-blue">{exam.dates.examDate}</span>
                                        </div>
                                    </div>

                                    <div className="exam-acceptance">
                                        <span className="acc-label">🎓 Accepted By:</span>
                                        <span className="acc-val">{exam.acceptingColleges}</span>
                                    </div>

                                    <div className="exam-actions">
                                        <button className="btn-outline" onClick={() => handleViewDetails(exam)}>📄 Syllabus</button>
                                        <button className="btn-outline" onClick={() => handleViewDetails(exam)}>📝 Pattern</button>
                                        <button className="btn-primary" onClick={() => handleViewDetails(exam)}>View Details</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No exams found for {selectedStream}. Try another category or search.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exams;
