import React, { useState } from 'react';
import './Exams.css';

const Exams = () => {
    const [selectedStream, setSelectedStream] = useState('Engineering');
    const [searchTerm, setSearchTerm] = useState('');

    const streams = ["Engineering", "Medical", "Management", "Law", "Government", "Design"];

    const examsData = [
        {
            id: 1,
            name: "JEE Main 2026",
            full_name: "Joint Entrance Examination",
            stream: "Engineering",
            level: "National",
            mode: "Online (CBT)",
            status: "Registration Open",
            statusColor: "green",
            dates: {
                appStart: "Nov 01, 2025",
                appEnd: "Jan 10, 2026",
                examDate: "Jan 24 - Feb 01, 2026"
            },
            acceptingColleges: "NITs, IIITs, CFTIs",
            logo: "📐"
        },
        {
            id: 2,
            name: "NEET UG 2026",
            full_name: "National Eligibility cum Entrance Test",
            stream: "Medical",
            level: "National",
            mode: "Offline (Pen & Paper)",
            status: "Upcoming",
            statusColor: "orange",
            dates: {
                appStart: "Mar 2026",
                appEnd: "Apr 2026",
                examDate: "May 05, 2026"
            },
            acceptingColleges: "All Medical Colleges in India",
            logo: "🩺"
        },
        {
            id: 3,
            name: "CAT 2025",
            full_name: "Common Admission Test",
            stream: "Management",
            level: "National",
            mode: "Online (CBT)",
            status: "Result Declared",
            statusColor: "blue",
            dates: {
                appStart: "Aug 02, 2025",
                appEnd: "Sep 13, 2025",
                examDate: "Nov 24, 2025"
            },
            acceptingColleges: "IIMs, FMS, SP Jain, IITs",
            logo: "📊"
        },
        {
            id: 4,
            name: "UPSC CSE 2026",
            full_name: "Civil Services Examination",
            stream: "Government",
            level: "National",
            mode: "Offline",
            status: "Notification Out",
            statusColor: "purple",
            dates: {
                appStart: "Feb 14, 2026",
                appEnd: "Mar 05, 2026",
                examDate: "May 26, 2026"
            },
            acceptingColleges: "Recruitment for IAS, IPS, IFS",
            logo: "🇮🇳"
        },
        {
            id: 5,
            name: "CLAT 2026",
            full_name: "Common Law Admission Test",
            stream: "Law",
            level: "National",
            mode: "Offline",
            status: "Registration Closed",
            statusColor: "red",
            dates: {
                appStart: "Jul 01, 2025",
                appEnd: "Nov 03, 2025",
                examDate: "Dec 03, 2025"
            },
            acceptingColleges: "22 NLUs, Private Law Schools",
            logo: "⚖️"
        },
        {
            id: 6,
            name: "NID DAT 2026",
            full_name: "Design Aptitude Test",
            stream: "Design",
            level: "National",
            mode: "Offline",
            status: "Admit Card Out",
            statusColor: "yellow",
            dates: {
                appStart: "Oct 2025",
                appEnd: "Dec 2025",
                examDate: "Jan 07, 2026"
            },
            acceptingColleges: "NID Ahmedabad, NID Bangalore",
            logo: "🎨"
        }
    ];

    const [selectedExam, setSelectedExam] = useState(null);

    const openModal = (exam) => {
        setSelectedExam(exam);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedExam(null);
        document.body.style.overflow = 'auto';
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

                {/* 3. Stream Tabs */}
                <div className="stream-tabs">
                    {streams.map(stream => (
                        <button
                            key={stream}
                            className={`stream-tab ${selectedStream === stream ? 'active' : ''}`}
                            onClick={() => setSelectedStream(stream)}
                        >
                            {stream}
                        </button>
                    ))}
                </div>

                <div className="exams-content">

                    {/* 2. Exam Calendar / Alerts Widget */}
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

                        {filteredExams.map(exam => (
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

                                {/* 5. Acceptance Insight */}
                                <div className="exam-acceptance">
                                    <span className="acc-label">🎓 Accepted By:</span>
                                    <span className="acc-val">{exam.acceptingColleges}</span>
                                </div>

                                {/* 4. Quick Prep Links */}
                                <div className="exam-actions">
                                    <button className="btn-outline" onClick={() => openModal(exam)}>📄 Syllabus</button>
                                    <button className="btn-outline" onClick={() => openModal(exam)}>📝 Pattern</button>
                                    <button className="btn-primary" onClick={() => openModal(exam)}>View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Exam Details Modal */}
            {selectedExam && (
                <div className="exam-modal-overlay" onClick={closeModal}>
                    <div className="exam-modal" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>

                        <div className="modal-header">
                            <div className="exam-logo-large">{selectedExam.logo}</div>
                            <div>
                                <h2>{selectedExam.name}</h2>
                                <p className="modal-subtitle">{selectedExam.full_name}</p>
                            </div>
                        </div>

                        <div className="modal-grid">
                            <div className="modal-section">
                                <h3>📅 Important Dates</h3>
                                <div className="date-row">
                                    <span>Application Start:</span> <strong>{selectedExam.dates.appStart}</strong>
                                </div>
                                <div className="date-row">
                                    <span>Application End:</span> <strong>{selectedExam.dates.appEnd}</strong>
                                </div>
                                <div className="date-row">
                                    <span>Exam Date:</span> <strong className="text-blue">{selectedExam.dates.examDate}</strong>
                                </div>
                            </div>

                            <div className="modal-section">
                                <h3>📖 Syllabus & Pattern</h3>
                                <p><strong>Mode:</strong> {selectedExam.mode}</p>
                                <p><strong>Level:</strong> {selectedExam.level}</p>
                                <div className="syllabus-tags">
                                    <span>Physics</span>
                                    <span>Chemistry</span>
                                    <span>Mathematics</span>
                                    <span>Aptitude</span>
                                </div>
                                <button className="btn-download-syllabus">Download Full Syllabus PDF ⬇</button>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn-primary full-width" onClick={() => alert('Redirecting to official website...')}>Apply Now / Visit Official Site</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Exams;
