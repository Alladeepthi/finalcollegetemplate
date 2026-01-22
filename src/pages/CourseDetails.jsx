import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    // Mock Data (In a real app, fetch from API based on ID)
    // Using a more comprehensive data set for the details view
    useEffect(() => {
        // Simulating data fetch
        const coursesDB = {
            1: {
                id: 1,
                title: "B.Tech (Bachelor of Technology)",
                stream: "Engineering",
                duration: "4 Years",
                level: "Undergraduate",
                overview: "Bachelor of Technology (B.Tech) is a professional undergraduate engineering degree programme awarded to candidates after completion of four years of study in the field. This undergraduate programme is your gateway to a career in engineering.",
                eligibility: [
                    "Passed 10+2 examination with Physics and Mathematics as compulsory subjects.",
                    "At least 50% marks in the above subjects taken together (45% for reserved categories).",
                    "Qualify in entrance exams like JEE Main, JEE Advanced, or state-level CETs."
                ],
                syllabus: [
                    { year: "Year 1", subjects: ["Engineering Mathematics", "Engineering Physics", "Basics of Electronics", "Programming in C", "Engineering Mechanics"] },
                    { year: "Year 2", subjects: ["Data Structures", "Digital Logic", "Discrete Mathematics", "Object Oriented Programming", "Computer Organization"] },
                    { year: "Year 3", subjects: ["Operating Systems", "Database Management", "Computer Networks", "Software Engineering", "Theory of Computation"] },
                    { year: "Year 4", subjects: ["Artificial Intelligence", "Compiler Design", "Cloud Computing", "Project Work", "Electives"] }
                ],
                careers: [
                    { role: "Software Engineer", salary: "₹6L - ₹15L PA" },
                    { role: "Data Scientist", salary: "₹8L - ₹20L PA" },
                    { role: "Product Manager", salary: "₹10L - ₹25L PA" },
                    { role: "System Analyst", salary: "₹5L - ₹12L PA" }
                ],
                topColleges: ["IIT Bombay", "IIT Delhi", "BITS Pilani", "NIT Trichy", "VIT Vellore"]
            },
            2: {
                id: 2,
                title: "MBA (Master of Business Administration)",
                stream: "Management",
                duration: "2 Years",
                level: "Postgraduate",
                overview: "The Master of Business Administration (MBA) is an internationally-recognized degree designed to develop the skills required for careers in business and management. The value of the MBA, however, is not limited strictly to the business world. An MBA can also be useful for those pursuing a managerial career in the public sector.",
                eligibility: [
                    "Bachelor's degree in any discipline from a recognized university.",
                    "Minimum 50% aggregate marks in graduation.",
                    "Score in entrance exams like CAT, MAT, XAT, GMAT, or CMAT."
                ],
                syllabus: [
                    { year: "Semester 1", subjects: ["Organizational Behavior", "Marketing Management", "Financial Accounting", "Quantitative Methods"] },
                    { year: "Semester 2", subjects: ["Human Resource Management", "Financial Management", "Operations Management", "Business Research Methods"] },
                    { year: "Semester 3", subjects: ["Strategic Management", "Elective 1 (Specialization)", "Elective 2 (Specialization)", "Summer Internship Project"] },
                    { year: "Semester 4", subjects: ["Corporate Law", "International Business", "Dissertation", "Final Project"] }
                ],
                careers: [
                    { role: "Marketing Manager", salary: "₹8L - ₹18L PA" },
                    { role: "Financial Analyst", salary: "₹6L - ₹14L PA" },
                    { role: "HR Business Partner", salary: "₹7L - ₹15L PA" },
                    { role: "Operations Head", salary: "₹12L - ₹25L PA" }
                ],
                topColleges: ["IIM Ahmedabad", "IIM Bangalore", "ISB Hyderabad", "FMS Delhi", "XLRI Jamshedpur"]
            },
            // Default fallback for other IDs not explicitly defined
            'default': {
                id: 0,
                title: "Course Details Not Found",
                stream: "N/A",
                duration: "N/A",
                level: "N/A",
                overview: "Details for this course are currently being updated. Please check back later.",
                eligibility: [],
                syllabus: [],
                careers: [],
                topColleges: []
            }
        };

        setCourse(coursesDB[id] || coursesDB['default']);
    }, [id]);

    if (!course) return <div className="loading">Loading...</div>;

    return (
        <div className="course-details-page">
            {/* Hero Section */}
            <div className="cd-hero">
                <div className="container cd-hero-content">
                    <span className="cd-badge">{course.stream}</span>
                    <h1 className="cd-title">{course.title}</h1>
                    <div className="cd-meta">
                        <span>⏱ {course.duration}</span>
                        <span>🎓 {course.level}</span>
                    </div>
                </div>
            </div>

            <div className="container cd-layout">
                {/* Main Content */}
                <div className="cd-main">

                    {/* Overview */}
                    <section className="cd-section">
                        <h2>Course Overview</h2>
                        <p>{course.overview}</p>
                    </section>

                    {/* Eligibility */}
                    <section className="cd-section">
                        <h2>Eligibility Criteria</h2>
                        <ul className="cd-list">
                            {course.eligibility.length > 0 ? (
                                course.eligibility.map((item, index) => <li key={index}>{item}</li>)
                            ) : (
                                <p>Information pending.</p>
                            )}
                        </ul>
                    </section>

                    {/* Syllabus */}
                    <section className="cd-section">
                        <h2>Syllabus & Curriculum</h2>
                        <div className="syllabus-grid">
                            {course.syllabus.length > 0 ? (
                                course.syllabus.map((term, index) => (
                                    <div key={index} className="syllabus-card">
                                        <h3>{term.year}</h3>
                                        <ul>
                                            {term.subjects.map((sub, i) => <li key={i}>{sub}</li>)}
                                        </ul>
                                    </div>
                                ))
                            ) : (
                                <p>Detailed syllabus will be updated soon.</p>
                            )}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <aside className="cd-sidebar">

                    {/* Key Stats / Careers */}
                    <div className="cd-card">
                        <h3>Future Scope & Salary</h3>
                        <div className="salary-list">
                            {course.careers.length > 0 ? (
                                course.careers.map((job, index) => (
                                    <div key={index} className="salary-item">
                                        <span className="job-role">{job.role}</span>
                                        <span className="salary-range">{job.salary}</span>
                                    </div>
                                ))
                            ) : (
                                <p>Career information coming soon.</p>
                            )}
                        </div>
                    </div>

                    {/* Top Colleges */}
                    <div className="cd-card">
                        <h3>Top Colleges for {course.title.split('(')[0]}</h3>
                        <ul className="college-list">
                            {course.topColleges.map((college, idx) => (
                                <li key={idx}>
                                    <Link to={`/colleges?search=${college}`}>{college}</Link>
                                </li>
                            ))}
                        </ul>
                        <div style={{ marginTop: '15px' }}>
                            <Link to={`/colleges?stream=${course.stream}`} className="btn-full-width">View All Colleges</Link>
                        </div>
                    </div>

                    <div className="cd-card help-card">
                        <h3>Need Counselling?</h3>
                        <p>Get expert advice on admission, fees, and college selection.</p>
                        <button className="btn-help">Talk to Expert</button>
                    </div>

                </aside>
            </div>
        </div>
    );
};

export default CourseDetails;
