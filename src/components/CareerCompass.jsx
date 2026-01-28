import React, { useState } from 'react';
import './CareerCompass.css';
import ContactModal from './ContactModal';

const CareerCompass = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="career-compass-section-v2">
            <div className="compass-banner-v2">
                <div className="container compass-container-v2">
                    <div className="compass-content-v2">
                        <h2 className="compass-title-v2">Expert Counselling</h2>
                        <p className="compass-text-v2">
                            Confused about your career path? Get 1-on-1 mentorship from top experts to choose the right college and course.
                        </p>
                    </div>
                    <div className="compass-action-v2">
                        <button className="btn-career-v2" onClick={() => setIsModalOpen(true)}>Book Free Session</button>
                    </div>
                </div>
            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Get Free Counselling"
                subtitle="Speak to our experts to find the right path for you."
            />
        </section>
    );
};

export default CareerCompass;
