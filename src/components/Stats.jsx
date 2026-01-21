import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <div className="stats-container">
            <div className="stat-item">
                <div className="stat-icon yellow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                        <path d="M11.25 4.533A9.707 9.707 0 006 3.75a9.706 9.706 0 00-6 3.75V16.5a9.706 9.706 0 006-3.75h.75a9.706 9.706 0 016 3.75V4.533zM12.75 4.533V16.5a9.706 9.706 0 006-3.75h.75a9.706 9.706 0 016 3.75V3.75a9.707 9.707 0 00-6 3.75 9.706 9.706 0 00-6-3.75z" />
                    </svg>
                </div>
                <div className="stat-text">
                    <h3>1300</h3>
                    <p>Wide Choice of Subjects</p>
                </div>
            </div>

            <div className="stat-separator"></div>

            <div className="stat-item">
                <div className="stat-icon pink">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.25 6.25a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 111.06-1.06l.97.97 5.72-5.72a.75.75 0 011.06 0z" clipRule="evenodd" />
                        <path d="M10.5 5.25a.75.75 0 00-1.5 0v3.5h-3.5a.75.75 0 000 1.5h3.5v3.5a.75.75 0 001.5 0v-3.5h3.5a.75.75 0 000-1.5h-3.5v-3.5z" /> {/* Note: Generic puzzle piece is hard to draw by hand, using a generic 'check/plus' or similar icon shapes for representation or just a shape */}
                        <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 1.5a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5z" />
                    </svg>
                </div>
                <div className="stat-text">
                    <h3>1276</h3>
                    <p>Thats a lot</p>
                </div>
            </div>

            <div className="stat-separator"></div>

            <div className="stat-item">
                <div className="stat-icon blue">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                        <path fillRule="evenodd" d="M15.5 12.75a3.75 3.75 0 00-3.75-3.75h-7.5a3.75 3.75 0 00-3.75 3.75v3a3.75 3.75 0 003.75 3.75h.75a3.75 3.75 0 003.75 3.75h3.75a3.75 3.75 0 003.75-3.75v-.75a3.75 3.75 0 003.75-3.75v-3zm0 3v-3h1.5v3h-1.5z" clipRule="evenodd" /> {/* Rough Cup shape */}
                        <path d="M19 12.75a2.25 2.25 0 10-4.5 0v3a2.25 2.25 0 104.5 0v-3z" />
                    </svg>
                </div>
                <div className="stat-text">
                    <h3>256</h3>
                    <p>All trained professionals</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
