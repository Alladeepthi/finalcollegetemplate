import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { examsData } from '../data/examsData';
import Header from '../components/Header'; // Assuming we want the full layout including header
import './Exams.css'; // Reusing or you can create ExamDetails.css

const ExamDetails = () => {
    const { id } = useParams(); // This will correspond to the exam slug 
    const [exam, setExam] = useState(null);

    useEffect(() => {
        // Find the exam by slug
        const foundExam = examsData.find(e => e.slug === id);
        setExam(foundExam);
        window.scrollTo(0, 0);
    }, [id]);

    if (!exam) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Exam not found</h2>
                <Link to="/exams" className="btn-primary">Back to Exams</Link>
            </div>
        );
    }

    return (
        <div className="exam-details-page">
            <div className="container">
                <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                    <Link to={`/exams?cat=${exam.stream}`} style={{ color: '#666', textDecoration: 'none' }}>&larr; Back to {exam.stream} Exams</Link>
                </div>

                <div className="exam-card" style={{ maxWidth: '100%', cursor: 'default' }}>
                    <div className="exam-card-header">
                        <div className="exam-logo-large">{exam.logo}</div>
                        <div>
                            <h1>{exam.name}</h1>
                            <p className="modal-subtitle" style={{ fontSize: '1.2rem', color: '#555' }}>{exam.full_name}</p>
                            <span className={`status-badge ${exam.statusColor}`} style={{ marginTop: '0.5rem', display: 'inline-block' }}>
                                {exam.status}
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    {exam.description && (
                        <div style={{ margin: '1.5rem 0', lineHeight: '1.6', color: '#333' }}>
                            <p>{exam.description}</p>
                        </div>
                    )}

                    <div className="modal-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '2rem' }}>

                        {/* Important Dates */}
                        <div className="modal-section" style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px' }}>
                            <h3 style={{ marginBottom: '1rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>📅 Important Dates</h3>
                            <div className="date-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                                <span>Application Start:</span> <strong>{exam.dates.appStart}</strong>
                            </div>
                            <div className="date-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                                <span>Application End:</span> <strong>{exam.dates.appEnd}</strong>
                            </div>
                            <div className="date-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Exam Date:</span> <strong className="text-blue">{exam.dates.examDate}</strong>
                            </div>
                        </div>

                        {/* Pattern & Syllabus */}
                        <div className="modal-section" style={{ background: '#fff9db', padding: '1.5rem', borderRadius: '8px' }}>
                            <h3 style={{ marginBottom: '1rem', borderBottom: '2px solid #ffebb0', paddingBottom: '0.5rem' }}>📖 Syllabus & Pattern</h3>
                            <div style={{ marginBottom: '1rem' }}>
                                <p><strong>Mode:</strong> {exam.mode}</p>
                                <p><strong>Level:</strong> {exam.level}</p>
                                {exam.pattern && (
                                    <>
                                        <p><strong>Duration:</strong> {exam.pattern.duration}</p>
                                        <p><strong>Questions:</strong> {exam.pattern.questions}</p>
                                    </>
                                )}
                            </div>

                            <h4>Subjects:</h4>
                            <div className="syllabus-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                                {exam.syllabus ? (
                                    exam.syllabus.map((s, idx) => (
                                        <span key={idx} style={{
                                            background: '#fff',
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            border: '1px solid #ddd',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                        }}>
                                            {s.subject}
                                        </span>
                                    ))
                                ) : (
                                    <span>As per official notification</span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Detailed Syllabus Table if available */}
                    {exam.syllabus && (
                        <div style={{ marginTop: '3rem' }}>
                            <h3>Detailed Topics</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                                {exam.syllabus.map((sub, idx) => (
                                    <div key={idx} style={{ border: '1px solid #eee', padding: '1rem', borderRadius: '8px' }}>
                                        <h4 style={{ color: '#2563EB', marginBottom: '0.5rem' }}>{sub.subject}</h4>
                                        <ul style={{ paddingLeft: '1.2rem', color: '#555' }}>
                                            {sub.topics.map((topic, tIdx) => (
                                                <li key={tIdx}>{topic}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="modal-footer" style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <button
                            className="btn-primary"
                            style={{
                                padding: '1rem 3rem',
                                fontSize: '1.1rem',
                                borderRadius: '8px'
                            }}
                            onClick={() => {
                                if (exam.officialLink) {
                                    window.open(exam.officialLink, '_blank', 'noopener,noreferrer');
                                } else {
                                    alert(`Official website link not available for ${exam.name}. Check back later!`);
                                }
                            }}
                        >
                            Apply Now / Visit Official Site ↗
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamDetails;
