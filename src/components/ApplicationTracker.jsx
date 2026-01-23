import React from 'react';
import './ApplicationTracker.css';

const ApplicationTracker = ({ currentStep = 2 }) => {
    const steps = [
        { id: 1, label: "Register" },
        { id: 2, label: "Select Course" },
        { id: 3, label: "Fill Application" },
        { id: 4, label: "Upload Documents" },
        { id: 5, label: "Make Payment" },
        { id: 6, label: "Admission Confirmed" }
    ];

    return (
        <div className="tracker-container">
            <div className="tracker-steps">
                {steps.map((step) => {
                    let status = 'pending';
                    if (step.id < currentStep) status = 'completed';
                    if (step.id === currentStep) status = 'current';

                    return (
                        <div key={step.id} className={`step-badge ${status}`}>
                            <div className="step-icon">
                                {status === 'completed' ? '✓' : step.id}
                            </div>
                            <span className="step-label">{step.label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ApplicationTracker;
