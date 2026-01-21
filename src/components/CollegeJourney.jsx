import React, { useState, useEffect } from 'react';
import './CollegeJourney.css';
import AuthModal from './AuthModal';
import ContactModal from './ContactModal';

const CollegeJourney = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const steps = [
        "Register",
        "Select Course",
        "Fill Application",
        "Upload Documents",
        "Make Payment",
        "Admission Confirmed"
    ];

    // Auto-animate the steps loop for visual interest
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 2000); // Change step every 2 seconds
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            title: "Get Your Career Match",
            desc: "Take our free career compass personality quiz and get top career options for you.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 10 L14 12" />
                </svg>
            ),
            isQuiz: true
        },
        {
            title: "Apply With One Form",
            desc: "One platform to apply to 2000+ esteemed colleges",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="2" />
                    <path d="M9 14l2 2 4-4" />
                </svg>
            )
        },
        {
            title: "Track applications in one place",
            desc: "Apply to and manage all college applications through My Profile",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M5 21v-7l8-5 8 5v7M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
                </svg>
            )
        },
        {
            title: "Talk to Admission Experts",
            desc: "Get free personalised expert guidance on colleges & courses",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 18v-6a9 9 0 0118 0v6" />
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                </svg>
            ),
            isAction: 'contact'
        },
        {
            title: "Easy Apply in 5 mins",
            desc: "Fill your college applications in 5 minutes or less.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                    <path d="M22 2L19 5" />
                </svg>
            )
        },
        {
            title: "Get Exciting Rewards",
            desc: "Win amazing rewards and cash-backs while applying",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
            )
        }
    ];

    const handleCardClick = (feature) => {
        if (feature.isAction === 'contact') {
            setIsContactOpen(true);
        } else if (feature.isQuiz) {
            alert("Starting Career Compass Quiz... (Demo)");
        } else {
            setIsAuthOpen(true); // Default to register for other features
        }
    };

    return (
        <section className="journey-section">
            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} initialTab="signup" />
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

            <div className="container">
                <div className="journey-header">
                    <h2>Choosing the right college can be confusing</h2>
                    <p>We're here to guide you at every step of your college journey.</p>
                </div>

                {/* Progress Steps */}
                <div className="journey-steps-wrapper">
                    <div className="journey-steps">
                        {steps.map((step, index) => (
                            <div className="journey-step-item" key={index}>
                                <div className={`step-badge ${index <= activeStep ? 'active-pulse' : ''}`}>
                                    <span className="check-icon">{index < activeStep ? '✓' : index + 1}</span>
                                    {step}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`step-connector ${index < activeStep ? 'filled' : ''}`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Grid */}
                <div className="journey-grid">
                    {features.map((feature, index) => (
                        <div
                            className="journey-card"
                            key={index}
                            onClick={() => handleCardClick(feature)}
                        >
                            <div className="journey-card-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                            <div className="journey-icon-box">
                                {feature.icon}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Actions */}
                <div className="journey-actions">
                    <button className="btn-start-app" onClick={() => setIsAuthOpen(true)}>Let's start your application</button>
                    <button className="btn-talk-expert" onClick={() => setIsContactOpen(true)}>Talk to a college expert</button>
                </div>
            </div>
        </section>
    );
};

export default CollegeJourney;
