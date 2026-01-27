import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ComparisonModal from '../components/ComparisonModal';
import collegesData from '../data/collegesData';
import './Colleges.css';

const Colleges = () => {
    const [searchParams] = useSearchParams();
    const initialSearch = searchParams.get('search') || '';
    const streamParam = searchParams.get('stream');
    const stateParam = searchParams.get('state');
    const degreeParam = searchParams.get('degree');

    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [filteredColleges, setFilteredColleges] = useState([]);

    // Use shared data
    const colleges = collegesData;

    const [selectedStates, setSelectedStates] = useState([]);
    const [selectedDegrees, setSelectedDegrees] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [sortOption, setSortOption] = useState('Popularity');

    // Comparison State
    const [comparisonList, setComparisonList] = useState([]);
    const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

    // Sync URL params to local state on mount/update
    useEffect(() => {
        if (stateParam) setSelectedStates([stateParam]);
        if (degreeParam) setSelectedDegrees([degreeParam]);

        // Handle Comparison URL Param
        const compareParam = searchParams.get('compare');
        if (compareParam) {
            const idsToCompare = compareParam.split(',').map(id => parseInt(id));
            const collegesToCompare = colleges.filter(c => idsToCompare.includes(c.id));
            if (collegesToCompare.length > 0) {
                setComparisonList(collegesToCompare);
                setIsCompareModalOpen(true);
            }
        }
    }, [stateParam, degreeParam, searchParams]); // Dependencies updated

    const handleStateChange = (state) => {
        setSelectedStates(prev =>
            prev.includes(state) ? prev.filter(s => s !== state) : [...prev, state]
        );
    };

    const handleDegreeChange = (degree) => {
        setSelectedDegrees(prev =>
            prev.includes(degree) ? prev.filter(d => d !== degree) : [...prev, degree]
        );
    };

    const handleCompareToggle = (college) => {
        setComparisonList(prev => {
            const exists = prev.find(c => c.id === college.id);
            if (exists) {
                return prev.filter(c => c.id !== college.id);
            } else {
                if (prev.length >= 3) {
                    alert("You can compare up to 3 colleges at a time.");
                    return prev;
                }
                return [...prev, college];
            }
        });
    };

    useEffect(() => {
        let results = colleges;

        // 1. Search Term
        if (searchTerm) {
            const lowerSearch = searchTerm.toLowerCase();
            results = results.filter(col =>
                col.name.toLowerCase().includes(lowerSearch) ||
                col.location.toLowerCase().includes(lowerSearch) ||
                col.courses.some(c => c.toLowerCase().includes(lowerSearch))
            );
        }

        // 2. Stream (URL only for now)
        if (streamParam) {
            const lowerStream = streamParam.toLowerCase();
            const streamKeywords = {
                'engineering': ['b.tech', 'm.tech', 'engineering'],
                'medical': ['mbbs', 'bds', 'medical'],
                'management': ['mba', 'bba', 'management'],
                'commerce': ['b.com', 'commerce'],
                'arts': ['ba', 'arts'],
                'science': ['b.sc', 'science']
            };
            const keywords = streamKeywords[lowerStream] || [lowerStream];
            results = results.filter(col =>
                col.courses.some(c => keywords.some(k => c.toLowerCase().includes(k)))
            );
        }

        // 3. States Filter (Local State)
        if (selectedStates.length > 0) {
            results = results.filter(col =>
                selectedStates.some(state => col.location.includes(state))
            );
        }

        // 4. Degrees Filter (Local State)
        if (selectedDegrees.length > 0) {
            results = results.filter(col =>
                selectedDegrees.some(degree => col.courses.some(c => c.includes(degree)))
            );
        }

        // 5. Type Filter
        if (selectedType) {
            results = results.filter(col => col.type === selectedType);
        }

        // 6. Sorting
        if (sortOption === 'Fees: Low to High') {
            // simplistic parsing for mock string '₹1.5L'
            results.sort((a, b) => parseFloat(a.fees.replace(/[^0-9.]/g, '')) - parseFloat(b.fees.replace(/[^0-9.]/g, '')));
        } else if (sortOption === 'Rating: High to Low') {
            results.sort((a, b) => b.rating - a.rating);
        }

        setFilteredColleges(results);
    }, [searchTerm, streamParam, selectedStates, selectedDegrees, selectedType, sortOption]);

    const navigate = useNavigate();

    const handleViewDetails = (id) => {
        navigate(`/colleges/${id}`);
    };

    return (
        <div className="colleges-page">
            <div className="colleges-header">
                <div className="container">
                    <h1>Explore Top Colleges in India</h1>
                    <p>Find the best colleges for your career goals with verified reviews and placement data.</p>
                </div>
            </div>

            <div className="container colleges-layout">
                {/* Sidebar Filters */}
                <aside className="filters-sidebar">
                    <div className="filter-group">
                        <h3>Filter by Location</h3>
                        <div className="filter-options">
                            {['Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Gujarat', 'Delhi', 'West Bengal'].map(state => (
                                <label key={state}>
                                    <input
                                        type="checkbox"
                                        checked={selectedStates.includes(state)}
                                        onChange={() => handleStateChange(state)}
                                    /> {state}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Degree Type</h3>
                        <div className="filter-options">
                            {['B.Tech', 'MBA', 'BCA', 'Medical', 'M.Tech', 'PhD'].map(degree => (
                                <label key={degree}>
                                    <input
                                        type="checkbox"
                                        checked={selectedDegrees.includes(degree)}
                                        onChange={() => handleDegreeChange(degree)}
                                    /> {degree}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>College Type</h3>
                        <div className="filter-options">
                            <label><input type="radio" name="type" checked={selectedType === 'Private'} onChange={() => setSelectedType('Private')} /> Private</label>
                            <label><input type="radio" name="type" checked={selectedType === 'Government'} onChange={() => setSelectedType('Government')} /> Government</label>
                            <label><input type="radio" name="type" checked={selectedType === ''} onChange={() => setSelectedType('')} /> All</label>
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Fees Range</h3>
                        <input type="range" min="0" max="10" className="range-slider" />
                        <div className="range-labels">
                            <span>0</span>
                            <span>10L+</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="colleges-main">
                    <div className="search-and-sort">
                        <div className="search-box">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                placeholder="Search by college name, city or course..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="sort-box">
                            <label>Sort By:</label>
                            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                                <option value="Popularity">Popularity</option>
                                <option value="Fees: Low to High">Fees: Low to High</option>
                                <option value="Rating: High to Low">Rating: High to Low</option>
                            </select>
                        </div>
                    </div>

                    <div className="results-count">
                        Found {filteredColleges.length} Colleges
                        {(streamParam || stateParam || degreeParam) && <span className="filter-tag"> (Filtered)</span>}
                    </div>

                    <div className="college-list">
                        {filteredColleges.map(college => (
                            <div className={`college-card ${college.featured ? 'featured' : ''}`} key={college.id}>
                                {college.featured && <div className="featured-badge">FEATURED</div>}
                                <div className="college-card-img">
                                    <img src={college.image} alt={college.name} />
                                    <div className="compare-toggle">
                                        <input
                                            type="checkbox"
                                            id={`compare-${college.id}`}
                                            checked={comparisonList.some(c => c.id === college.id)}
                                            onChange={() => handleCompareToggle(college)}
                                        />
                                        <label htmlFor={`compare-${college.id}`}>Add to Compare</label>
                                    </div>
                                </div>

                                <div className="college-card-content">
                                    <div className="college-card-header">
                                        <div>
                                            <h2 className="college-name">{college.name}</h2>
                                            <p className="college-location">📍 {college.location}</p>
                                        </div>
                                        <div className="college-rating">
                                            <span className="rating-num">{college.rating}</span>
                                            <span className="rating-stars">⭐</span>
                                            <div className="review-count">{college.reviews} Reviews</div>
                                        </div>
                                    </div>

                                    <div className="college-details-grid">
                                        <div className="detail-item">
                                            <span className="detail-label">Courses</span>
                                            <div className="course-chips">
                                                {college.courses.slice(0, 3).map((c, i) => (
                                                    <span key={i} className="course-chip">{c}</span>
                                                ))}
                                                {college.courses.length > 3 && <span className="course-chip">+{college.courses.length - 3}</span>}
                                            </div>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">Total Fees</span>
                                            <span className="detail-value">{college.fees}</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">Avg Placement</span>
                                            <span className="detail-value text-success">{college.placement}</span>
                                        </div>
                                    </div>

                                    <div className="college-card-actions">
                                        <button className="btn-secondary">Download Brochure</button>
                                        <button className="btn-primary" onClick={() => handleViewDetails(college.id)}>View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>

            {/* Sticky Compare Bar */}
            {comparisonList.length > 0 && (
                <div className="compare-sticky-bar">
                    <span>Selected for comparison <span className="compare-count">{comparisonList.length}/3</span></span>

                    <button className="btn-compare-now" onClick={() => setIsCompareModalOpen(true)}>
                        Compare Now
                    </button>

                    <button className="btn-clear-compare" onClick={() => setComparisonList([])}>
                        Clear
                    </button>
                </div>
            )}

            {/* Comparison Modal */}
            {isCompareModalOpen && (
                <ComparisonModal
                    colleges={comparisonList}
                    onClose={() => setIsCompareModalOpen(false)}
                />
            )}
        </div>
    );
};

export default Colleges;
