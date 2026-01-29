import React from 'react';
import './LiveTicker.css';

const LiveTicker = () => {
    const updates = [
        { type: 'Exam Alert', color: 'red', text: 'JEE Main 2026 Session 2 Registration Closing Soon! Apply Now.' },
        { type: 'Result', color: 'green', text: 'GATE 2026 Results Announced. Check Scorecard.' },
        { type: 'Admissions', color: 'blue', text: 'VITEEE 2026 Slot Booking Starts from April 10th.' },
        { type: 'Scholarship', color: 'green', text: 'National Merit Scholarship Deadline Extended to March 31st.' },
        { type: 'News', color: 'blue', text: 'BITS Pilani Introduces New AI & Data Science Program.' }
    ];

    return (
        <div className="live-ticker-container">
            <div className="ticker-wrapper">
                {/* Duplicate list for seamless loop effect if needed, though simple slide is implemented */}
                {updates.map((update, index) => (
                    <div className="ticker-item" key={index}>
                        <span className={`ticker-tag ${update.color}`}>{update.type}</span>
                        <a href="#" className="ticker-link">{update.text}</a>
                    </div>
                ))}
                {updates.map((update, index) => (
                    <div className="ticker-item" key={`dup-${index}`}>
                        <span className={`ticker-tag ${update.color}`}>{update.type}</span>
                        <a href="#" className="ticker-link">{update.text}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveTicker;
