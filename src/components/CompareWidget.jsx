import React from 'react';
import './CompareWidget.css';

const CompareWidget = () => {
    return (
        <section className="compare-section">
            <div className="container">
                <div className="compare-card">
                    <div className="compare-header">
                        <h2>Compare & Decide</h2>
                        <p>Confused between two colleges? Compare fees, placements, and cutoffs side-by-side.</p>
                    </div>

                    <div className="compare-inputs">
                        <div className="cmp-input-group">
                            <input type="text" className="cmp-input" placeholder="Enter College 1 (e.g. IIT Bombay)" />
                        </div>

                        <div className="vs-badge">VS</div>

                        <div className="cmp-input-group">
                            <input type="text" className="cmp-input" placeholder="Enter College 2 (e.g. IIT Delhi)" />
                        </div>
                    </div>

                    <button className="btn-compare">Compare Now</button>

                    <div className="popular-comparisons">
                        <span>Trending: </span>
                        <span className="pop-cmp-link">NIT Trichy vs Warangal</span> •
                        <span className="pop-cmp-link">VIT vs SRM</span> •
                        <span className="pop-cmp-link">IIM-A vs IIM-B</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompareWidget;
