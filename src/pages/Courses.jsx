import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();

    // Initialize search term from URL query parameter
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const category = params.get('category');
        if (category) {
            setSearchTerm(category);
        }
    }, [location]);

    const courses = [
        {
            id: 1,
            title: "B.Tech (Bachelor of Technology)",
            level: "Undergraduate",
            stream: "Engineering",
            duration: "4 Years",
            eligibility: "10+2 with PCM (50% aggregate)",
            avgSalary: "₹4L - ₹10L PA",
            careers: ["Software Engineer", "Data Scientist", "Civil Engineer"],
            mode: "Full Time",
            icon: "💻"
        },
        {
            id: 2,
            title: "MBA (Master of Business Administration)",
            level: "Postgraduate",
            stream: "Management",
            duration: "2 Years",
            eligibility: "Graduation (50%) + CAT/MAT",
            avgSalary: "₹6L - ₹15L PA",
            careers: ["HR Manager", "Marketing Head", "Finance Analyst"],
            mode: "Full Time",
            icon: "📊"
        },
        {
            id: 3,
            title: "MBBS (Bachelor of Medicine)",
            level: "Undergraduate",
            stream: "Medical",
            duration: "5.5 Years",
            eligibility: "10+2 with PCB + NEET",
            avgSalary: "₹8L - ₹12L PA",
            careers: ["Doctor", "Surgeon", "Medical Researcher"],
            mode: "Full Time",
            icon: "🩺"
        },
        {
            id: 4,
            title: "BCA (Bachelor of Computer Applications)",
            level: "Undergraduate",
            stream: "Computer Applications",
            duration: "3 Years",
            eligibility: "10+2 with Math/Computer",
            avgSalary: "₹3L - ₹6L PA",
            careers: ["Web Developer", "System Analyst", "Technical Support"],
            mode: "Full Time",
            icon: "🖥️"
        },
        {
            id: 5,
            title: "B.Com (Bachelor of Commerce)",
            level: "Undergraduate",
            stream: "Commerce",
            duration: "3 Years",
            eligibility: "10+2 in Commerce stream",
            avgSalary: "₹3L - ₹5L PA",
            careers: ["Accountant", "Banker", "Tax Consultant"],
            mode: "Full Time/Distance",
            icon: "💰"
        },
        {
            id: 6,
            title: "Data Science Certification",
            level: "Diploma/Certification",
            stream: "IT & Software",
            duration: "6 - 12 Months",
            eligibility: "Any Graduate",
            avgSalary: "₹6L - ₹14L PA",
            careers: ["Data Analyst", "ML Engineer"],
            mode: "Online",
            icon: "📈"
        }
    ];

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.stream.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="courses-page">
            <div className="courses-header">
                <div className="container">
                    <h1>Explore Top Courses</h1>
                    <p>Discover the right degree, diploma, or certification to boost your career prospects.</p>
                </div>
            </div>

            <div className="container courses-layout">
                {/* Filters Sidebar */}
                <aside className="filters-sidebar">
                    <div className="filter-group">
                        <h3>Course Level</h3>
                        <div className="filter-options">
                            <label><input type="checkbox" /> Undergraduate</label>
                            <label><input type="checkbox" /> Postgraduate</label>
                            <label><input type="checkbox" /> Diploma</label>
                            <label><input type="checkbox" /> Ph.D</label>
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Stream</h3>
                        <div className="filter-options">
                            <label><input type="checkbox" /> Engineering</label>
                            <label><input type="checkbox" /> Management</label>
                            <label><input type="checkbox" /> Medical</label>
                            <label><input type="checkbox" /> Arts & Humanities</label>
                            <label><input type="checkbox" /> Commerce</label>
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Study Mode</h3>
                        <div className="filter-options">
                            <label><input type="radio" name="mode" /> Full Time</label>
                            <label><input type="radio" name="mode" /> Part Time</label>
                            <label><input type="radio" name="mode" /> Online / Distance</label>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="courses-main">
                    <div className="search-and-sort">
                        <div className="search-box">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                placeholder="Search courses (e.g., MBA, B.Tech)..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="sort-box">
                            <label>Sort By:</label>
                            <select>
                                <option>Popularity</option>
                                <option>Salary: High to Low</option>
                                <option>Duration: Low to High</option>
                            </select>
                        </div>
                    </div>

                    <div className="results-count">
                        Showing {filteredCourses.length} Courses
                    </div>

                    <div className="courses-grid-list">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map(course => (
                                <div className="course-card" key={course.id}>
                                    <div className="course-card-top">
                                        <div className="course-icon-wrapper">
                                            {course.icon}
                                        </div>
                                        <div className="course-header-info">
                                            <div className="course-badges">
                                                <span className="badge level-badge">{course.level}</span>
                                                <span className="badge mode-badge">{course.mode}</span>
                                            </div>
                                            <h2>{course.title}</h2>
                                            <p className="course-stream">{course.stream}</p>
                                        </div>
                                    </div>

                                    <div className="course-divider"></div>

                                    <div className="course-details-row">
                                        <div className="c-detail">
                                            <span className="c-label">Duration</span>
                                            <span className="c-value">{course.duration}</span>
                                        </div>
                                        <div className="c-detail">
                                            <span className="c-label">Eligibility</span>
                                            <span className="c-value">{course.eligibility}</span>
                                        </div>
                                        <div className="c-detail">
                                            <span className="c-label">Avg Salary</span>
                                            <span className="c-value salary-text">{course.avgSalary}</span>
                                        </div>
                                    </div>

                                    <div className="course-careers">
                                        <span className="c-label">Career Options:</span>
                                        <div className="career-tags">
                                            {course.careers.map((career, i) => (
                                                <span key={i} className="career-tag">{career}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="course-actions">
                                        <button className="btn-secondary">View Syllabus</button>
                                        <button className="btn-primary">Find Colleges</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>
                                No courses found matching "{searchTerm}"
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Courses;
