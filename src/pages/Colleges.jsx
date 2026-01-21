import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './Colleges.css';

const Colleges = () => {
    const [searchParams] = useSearchParams();
    const initialSearch = searchParams.get('search') || '';
    const streamParam = searchParams.get('stream');
    const stateParam = searchParams.get('state');
    const degreeParam = searchParams.get('degree');

    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [filteredColleges, setFilteredColleges] = useState([]);

    const colleges = [
        {
            id: 1,
            name: "Sanskriti University",
            location: "Mathura, Uttar Pradesh",
            rating: 4.2,
            reviews: 156,
            fees: "₹1.5L - 2.8L",
            placement: "₹6.5 LPA Avg",
            highestPlacement: "₹45 LPA",
            type: "Private",
            courses: ["B.Tech", "MBA", "BCA", "Medical", "Engineering"],
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
            featured: true
        },
        {
            id: 2,
            name: "Amity University",
            location: "Noida, Uttar Pradesh",
            rating: 4.5,
            reviews: 420,
            fees: "₹2.2L - 5.5L",
            placement: "₹8.2 LPA Avg",
            highestPlacement: "₹52 LPA",
            type: "Private",
            courses: ["B.Tech", "MBA", "Law", "Arts", "Management"],
            image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1000&auto=format&fit=crop",
            featured: false
        },
        {
            id: 3,
            name: "Parul University",
            location: "Vadodara, Gujarat",
            rating: 4.0,
            reviews: 890,
            fees: "₹1.2L - 3.5L",
            placement: "₹5.8 LPA Avg",
            highestPlacement: "₹38 LPA",
            type: "Private",
            courses: ["B.Tech", "Design", "Pharmacy", "Engineering"],
            image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1000&auto=format&fit=crop",
            featured: false
        },
        {
            id: 4,
            name: "IIT Kharagpur",
            location: "Kharagpur, West Bengal",
            rating: 4.8,
            reviews: 2100,
            fees: "₹80K - 2.5L",
            placement: "₹18 LPA Avg",
            highestPlacement: "₹2.4 Cr",
            type: "Government",
            courses: ["B.Tech", "M.Tech", "Architecture", "Engineering", "Science"],
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
            featured: true
        },
        {
            id: 5,
            name: "IIT Bombay",
            location: "Mumbai, Maharashtra",
            rating: 4.9,
            reviews: 2500,
            fees: "₹2.2L",
            placement: "₹22 LPA Avg",
            highestPlacement: "₹3.6 Cr",
            type: "Government",
            courses: ["B.Tech", "M.Tech", "PhD", "Engineering"],
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
            featured: true
        },
        {
            id: 6,
            name: "AIIMS Delhi",
            location: "New Delhi, Delhi",
            rating: 4.9,
            reviews: 3000,
            fees: "₹1.6K", /* heavily subsidized */
            placement: "₹12 LPA Avg", /* Stipend/Job */
            highestPlacement: "N/A",
            type: "Government",
            courses: ["MBBS", "MD", "Medical"],
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
            featured: true
        },
        {
            id: 7,
            name: "IIM Ahmedabad",
            location: "Ahmedabad, Gujarat",
            rating: 4.9,
            reviews: 1200,
            fees: "₹23L",
            placement: "₹32 LPA Avg",
            highestPlacement: "₹1.2 Cr",
            type: "Government",
            courses: ["MBA", "PGP", "Management"],
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
            featured: true
        }
    ];

    const [selectedStates, setSelectedStates] = useState([]);
    const [selectedDegrees, setSelectedDegrees] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [sortOption, setSortOption] = useState('Popularity');

    // Sync URL params to local state on mount/update
    useEffect(() => {
        if (stateParam) setSelectedStates([stateParam]);
        if (degreeParam) setSelectedDegrees([degreeParam]);
    }, [stateParam, degreeParam]);

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
                                        <input type="checkbox" id={`compare-${college.id}`} />
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
        </div>
    );
};

export default Colleges;
