import React, { useState } from 'react';
import './CourseCategories.css';

// Import images
import imgArchitecture from '../assets/cat_architecture.png';
import imgEducation from '../assets/cat_education.png';
import imgEngineering from '../assets/cat_engineering.png';
import imgGeography from '../assets/cat_geography.png';
import imgLaw from '../assets/cat_law.png';
import imgMedical from '../assets/cat_medical.png';
import imgPhysics from '../assets/cat_physics.png';
import imgScience from '../assets/cat_science.png';
import imgMarket from '../assets/cat_market.png';

const CourseCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        {
            name: "Architecture",
            image: imgArchitecture,
            description: "Design the future of living spaces. Explore structure, sustainability, and aesthetics.",
            streams: ["B.Arch", "M.Arch", "Interior Design", "Urban Planning"],
            careers: ["Architect", "Interior Designer", "Urban Planner"]
        },
        {
            name: "Education",
            image: imgEducation,
            description: "Shape young minds and lead the future of learning and pedagogy.",
            streams: ["B.Ed", "M.Ed", "Diploma in Elementary Education"],
            careers: ["Teacher", "Professor", "Education Counselor"]
        },
        {
            name: "Engineering",
            image: imgEngineering,
            description: "Innovate and solve real-world problems through technology and science.",
            streams: ["B.Tech", "M.Tech", "Diploma in Engineering"],
            careers: ["Software Engineer", "Civil Engineer", "Mechanical Engineer"]
        },
        {
            name: "Geography",
            image: imgGeography,
            description: "Study the earth's landscapes, environments, and the relationships between people and their environments.",
            streams: ["B.Sc Geography", "M.Sc Geography", "Geology"],
            careers: ["Geologist", "Cartographer", "Environmental Consultant"]
        },
        {
            name: "Law",
            image: imgLaw,
            description: "Uphold justice and understand the legal frameworks that govern society.",
            streams: ["LLB", "LLM", "BA LLB"],
            careers: ["Lawyer", "Judge", "Legal Advisor"]
        },
        {
            name: "Medical",
            image: imgMedical,
            description: "Dedicate your life to saving others through medicine and healthcare.",
            streams: ["MBBS", "BDS", "BAMS", "Nursing"],
            careers: ["Doctor", "Surgeon", "Nurse", "Pharmacist"]
        },
        {
            name: "Quantum Physics",
            image: imgPhysics,
            description: "Dive into the fundamental principles of the universe and matter.",
            streams: ["B.Sc Physics", "M.Sc Physics", "PhD in Physics"],
            careers: ["Physicist", "Researcher", "Data Analyst"]
        },
        {
            name: "Science",
            image: imgScience,
            description: "Explore the natural world through experimentation and observation.",
            streams: ["B.Sc", "M.Sc", "Biotechnology", "Microbiology"],
            careers: ["Scientist", "Lab Technician", "Research Associate"]
        },
        {
            name: "Share Market",
            image: imgMarket,
            description: "Master the art of trading, investment, and financial analysis.",
            streams: ["BBA Finance", "MBA Finance", "Stock Market Certification"],
            careers: ["Stock Broker", "Financial Analyst", "Investment Banker"]
        }
    ];

    const openModal = (category) => {
        setSelectedCategory(category);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setSelectedCategory(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <section className="course-categories-section">
            <div className="container">

                <div className="section-header text-center">
                    <div className="header-decoration">
                        <span className="line"></span>
                        <h2 className="section-title">Course <span className="highlight">Categories</span></h2>
                        <span className="line"></span>
                    </div>
                    <p className="section-subtitle">JUST PICK WHAT YOU NEED TO LEARN</p>
                </div>

                <div className="categories-grid">
                    {categories.map((cat, index) => (
                        <div
                            className="category-card"
                            key={index}
                            onClick={() => openModal(cat)}
                        >
                            <img src={cat.image} alt={cat.name} className="category-bg" />
                            <div className="category-overlay"></div>
                            <h3 className="category-name">{cat.name}</h3>
                        </div>
                    ))}
                </div>

                {/* Category Details Modal */}
                {selectedCategory && (
                    <div className="category-modal-overlay" onClick={closeModal}>
                        <div className="category-modal-content" onClick={e => e.stopPropagation()}>
                            <button className="modal-close-btn" onClick={closeModal}>×</button>

                            <div className="modal-header">
                                <div className="modal-icon-wrapper">
                                    <img src={selectedCategory.image} alt={selectedCategory.name} />
                                </div>
                                <h2>{selectedCategory.name}</h2>
                            </div>

                            <p className="modal-description">{selectedCategory.description}</p>

                            <div className="modal-details-grid">
                                <div className="modal-detail-box">
                                    <h3>Popular Streams</h3>
                                    <ul>
                                        {selectedCategory.streams.map((stream, i) => (
                                            <li key={i}>{stream}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="modal-detail-box">
                                    <h3>Career Paths</h3>
                                    <ul>
                                        {selectedCategory.careers.map((career, i) => (
                                            <li key={i}>{career}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <a href={`/courses?category=${encodeURIComponent(selectedCategory.name)}`} className="modal-cta-btn">
                                View All {selectedCategory.name} Courses →
                            </a>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default CourseCategories;
