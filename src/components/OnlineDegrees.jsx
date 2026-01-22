import React, { useState } from 'react';
import './OnlineDegrees.css';
import ContactModal from './ContactModal';

const OnlineDegrees = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="online-degrees-section">
            <div className="degree-banner">
                <div className="container degree-container">

                    <div className="degree-text">
                        <p className="degree-subtitle">Unlock Your <strong>Future</strong> with</p>
                        <h2 className="degree-title">Online Degrees</h2>
                        <p className="degree-subtext">from <strong>Top Universities!</strong></p>
                    </div>

                    <div className="degree-features">
                        <div className="feature-row">
                            <div className="icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V6C22 4.89543 21.1046 4 20 4Z" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 21H16" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 18V21" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p><strong>100% Online</strong> | Flexible Learning Schedules</p>
                        </div>
                        <div className="feature-row">
                            <div className="icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 21H16C16.5523 21 17 20.5523 17 20V19C17 17.8954 16.1046 17 15 17H9C7.89543 17 7 17.8954 7 19V20C7 20.5523 7.44772 21 8 21Z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17 7A5 5 0 0 0 7 7" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 14C14.7614 14 17 11.7614 17 9V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V9C7 11.7614 9.23858 14 12 14Z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17 9H19C19.5304 9 20.0391 9.21071 20.4142 9.58579C20.7893 9.96086 21 10.4696 21 11C21 11.5304 20.7893 12.0391 20.4142 12.4142C20.0391 12.7893 19.5304 13 19 13H17" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 9H5C4.46957 9 3.96086 9.21071 3.58579 9.58579C3.21071 9.96086 3 10.4696 3 11C3 11.5304 3.21071 12.0391 3.58579 12.4142C3.96086 12.7893 4.46957 13 5 13H7" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p><strong>Govt. & UGC</strong> Approved Programs</p>
                        </div>
                    </div>

                    <div className="degree-action">
                        <button className="btn-counselling" onClick={() => setIsModalOpen(true)}>Get Career Recommendations</button>
                    </div>

                </div>

                {/* Decorative Circle for the background effect */}
                <div className="circle-decoration"></div>
                <div className="circle-decoration-2"></div>
            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Career Recommendation"
                subtitle="Let us help you find the best online degree for your career."
            />
        </section>
    );
};

export default OnlineDegrees;
