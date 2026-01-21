import React from 'react';
import './FeaturedClasses.css';

// Import images if they are in src/assets, or use URLs if they are in public
import courseImg1 from '../assets/course1.png';
import courseImg2 from '../assets/course2.png';
import courseImg3 from '../assets/course3.png';

const FeaturedClasses = () => {
    const classes = [
        {
            id: 1,
            image: courseImg1,
            badge: "5 COURSES", // This is the blue badge bottom-left
            online: true,
            title: "Class With Unlimited Tabs",
            rating: 4.5,
            reviews: 2,
            lessons: [
                "1. Fitness Training Basics",
                "2. Create an Employee Profile",
            ],
            price: "$12",
        },
        {
            id: 2,
            image: courseImg2,
            badge: "3 COURSES",
            online: true,
            title: "Class With Certificate & Badge",
            rating: 4.5,
            reviews: 2,
            lessons: [
                "1. How to use Barcodes?",
                "2. Introduction to e-commerce",
            ],
            price: "$25",
        },
        {
            id: 3,
            image: courseImg3,
            badge: "3 COURSES",
            online: true,
            title: "Class With Purchase Option",
            rating: 4.5,
            reviews: 2,
            lessons: [
                "1. How to use Barcodes?",
                "2. Introduction to e-commerce",
            ],
            price: "$30",
        }
    ];

    const renderStars = (rating) => {
        // Simple star renderer
        return (
            <span className="stars">
                {'⭐'.repeat(Math.floor(rating))} {/* Emoji for simplicity, or we can use SVGs */}
            </span>
        );
    };

    return (
        <section className="featured-classes-section">
            <div className="container">

                <div className="section-header text-center">
                    <div className="header-decoration">
                        <span className="line"></span>
                        <h2 className="section-title">Featured <span className="highlight">Classes</span></h2>
                        <span className="line"></span>
                    </div>
                    <p className="section-subtitle">ONLY THE GREATEST MIND'S</p>
                </div>

                <div className="classes-grid">
                    {classes.map((item) => (
                        <div className="class-card" key={item.id}>
                            <div className="card-image-wrapper">
                                <img src={item.image} alt={item.title} className="card-image" />
                                {item.online && <span className="badge-online">🔴 ONLINE</span>}
                                {item.badge && <span className="badge-course-count">📘 {item.badge}</span>}
                            </div>

                            <div className="card-content">
                                <h3 className="card-title">{item.title}</h3>

                                <div className="card-rating">
                                    <div className="stars-wrapper">
                                        <i className="star filled">★</i>
                                        <i className="star filled">★</i>
                                        <i className="star filled">★</i>
                                        <i className="star filled">★</i>
                                        <i className="star half">★</i>
                                    </div>
                                    <span className="rating-text">{item.rating} ({item.reviews} Reviews)</span>
                                </div>

                                <ul className="card-lessons">
                                    {item.lessons.map((lesson, idx) => (
                                        <li key={idx}>{lesson}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="card-footer">
                                <span className="price">{item.price}</span>
                                <a href="#" className="view-details">View Details &gt;</a>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
};

export default FeaturedClasses;
