import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import coursesData from '../data/coursesData';
import './Courses.css';

const COURSES_DATA = coursesData;

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();

    // Filters State
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [selectedStreams, setSelectedStreams] = useState([]);
    const [selectedMode, setSelectedMode] = useState('');
    const [sortBy, setSortBy] = useState('Popularity');

    // Initialize search term from URL query parameter
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const category = params.get('category');
        const level = params.get('level');
        const search = params.get('search');

        if (category) setSearchTerm(category);
        if (search) setSearchTerm(search);
        if (level) {
            // Map URL level param to actual level text if needed, simplifies for now
            if (level === 'ug') setSelectedLevels((prev) => [...prev, 'Undergraduate']);
            if (level === 'pg') setSelectedLevels((prev) => [...prev, 'Postgraduate']);
            if (level === 'diploma') setSelectedLevels((prev) => [...prev, 'Diploma/Certification']);
        }

    }, [location]);

    // Handle Filter Changes
    const handleLevelChange = (level) => {
        setSelectedLevels(prev =>
            prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
        );
    };

    const handleStreamChange = (stream) => {
        setSelectedStreams(prev =>
            prev.includes(stream) ? prev.filter(s => s !== stream) : [...prev, stream]
        );
    };

    const handleModeChange = (mode) => {
        setSelectedMode(prev => prev === mode ? '' : mode);
    };

    const handleClearFilters = () => {
        setSelectedLevels([]);
        setSelectedStreams([]);
        setSelectedMode('');
        setSearchTerm('');
        setSortBy('Popularity');
    };

    // Filter Logic
    const filteredCourses = COURSES_DATA.filter(course => {
        const matchesSearch = (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.stream.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.careers.some(c => c.toLowerCase().includes(searchTerm.toLowerCase())));

        const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level);
        const matchesStream = selectedStreams.length === 0 || selectedStreams.includes(course.stream);
        const matchesMode = !selectedMode || course.mode.includes(selectedMode);

        return matchesSearch && matchesLevel && matchesStream && matchesMode;
    });

    // Sort Logic
    const sortedCourses = [...filteredCourses].sort((a, b) => {
        if (sortBy === 'Salary: High to Low') {
            return b.avgSalaryValue - a.avgSalaryValue;
        } else if (sortBy === 'Duration: Low to High') {
            return a.durationValue - b.durationValue;
        }
        return 0; // Default (Popularity/ID)
    });

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
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3>Filters</h3>
                            <button onClick={handleClearFilters} style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', fontSize: '0.85rem' }}>Clear All</button>
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Course Level</h3>
                        <div className="filter-options">
                            <label><input type="checkbox" checked={selectedLevels.includes('Undergraduate')} onChange={() => handleLevelChange('Undergraduate')} /> Undergraduate</label>
                            <label><input type="checkbox" checked={selectedLevels.includes('Postgraduate')} onChange={() => handleLevelChange('Postgraduate')} /> Postgraduate</label>
                            <label><input type="checkbox" checked={selectedLevels.includes('Diploma/Certification')} onChange={() => handleLevelChange('Diploma/Certification')} /> Diploma</label>
                            <label><input type="checkbox" checked={selectedLevels.includes('Ph.D')} onChange={() => handleLevelChange('Ph.D')} /> Ph.D</label>
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Stream</h3>
                        <div className="filter-options">
                            <label><input type="checkbox" checked={selectedStreams.includes('Engineering')} onChange={() => handleStreamChange('Engineering')} /> Engineering</label>
                            <label><input type="checkbox" checked={selectedStreams.includes('Management')} onChange={() => handleStreamChange('Management')} /> Management</label>
                            <label><input type="checkbox" checked={selectedStreams.includes('Medical')} onChange={() => handleStreamChange('Medical')} /> Medical</label>
                            <label><input type="checkbox" checked={selectedStreams.includes('Arts & Humanities')} onChange={() => handleStreamChange('Arts & Humanities')} /> Arts & Humanities</label>
                            <label><input type="checkbox" checked={selectedStreams.includes('Commerce')} onChange={() => handleStreamChange('Commerce')} /> Commerce</label>
                            <label><input type="checkbox" checked={selectedStreams.includes('Computer Applications')} onChange={() => handleStreamChange('Computer Applications')} /> Computer Applications</label>
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Study Mode</h3>
                        <div className="filter-options">
                            <label><input type="radio" name="mode" checked={selectedMode === 'Full Time'} onChange={() => handleModeChange('Full Time')} /> Full Time</label>
                            <label><input type="radio" name="mode" checked={selectedMode === 'Part Time'} onChange={() => handleModeChange('Part Time')} /> Part Time</label>
                            <label><input type="radio" name="mode" checked={selectedMode === 'Online'} onChange={() => handleModeChange('Online')} /> Online / Distance</label>
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
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option>Popularity</option>
                                <option>Salary: High to Low</option>
                                <option>Duration: Low to High</option>
                            </select>
                        </div>
                    </div>

                    <div className="results-count">
                        Showing {sortedCourses.length} Courses
                    </div>

                    <div className="courses-grid-list">
                        {sortedCourses.length > 0 ? (
                            sortedCourses.map(course => (
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
                                        <Link to={`/courses/${course.id}`} className="btn-secondary" style={{ textAlign: 'center', textDecoration: 'none' }}>View Syllabus</Link>
                                        <Link to={`/colleges?stream=${course.stream}`} className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none' }}>Find Colleges</Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div style={{ padding: '40px', textAlign: 'center', color: '#64748b', gridColumn: '1/-1' }}>
                                <h3>No courses found matching your criteria.</h3>
                                <p>Try clearing filters or using different keywords.</p>
                                <button onClick={handleClearFilters} style={{ marginTop: '15px', padding: '8px 16px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Clear All Filters</button>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Courses;
