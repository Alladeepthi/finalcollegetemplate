import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedCollections.css';

const FeaturedCollections = () => {
    const navigate = useNavigate();

    const collections = [
        {
            id: 1,
            title: "Top 10 Engineering Colleges in India",
            count: "35 Colleges",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
            tag: "Best of Engineering",
            link: "/colleges?category=Engineering&sort=rank"
        },
        {
            id: 2,
            title: "Best ROI MBA Colleges with Low Fees",
            count: "22 Colleges",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
            tag: "Value for Money",
            link: "/colleges?category=Management&sort=roi"
        },
        {
            id: 3,
            title: "Medical Colleges with Best Hospitals",
            count: "18 Colleges",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
            tag: "Medical Excellence",
            link: "/colleges?category=Medical&sort=rating"
        },
        {
            id: 4,
            title: "Universities with Most Beautiful Campuses",
            count: "12 Campuses",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
            tag: "Campus Life",
            link: "/colleges?sort=campus"
        }
    ];

    const handleCardClick = (link) => {
        navigate(link);
    };

    return (
        <section className="featured-collections-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Curated Collections</h2>
                    <p className="section-desc">Handpicked lists of top colleges based on rankings, placements, and student reviews.</p>
                </div>

                <div className="collections-grid-wrapper">
                    {collections.map((collection) => (
                        <div
                            className="collection-card"
                            key={collection.id}
                            onClick={() => handleCardClick(collection.link)}
                        >
                            <span className="collection-tag">{collection.tag}</span>
                            <div className="collection-image-container">
                                <img src={collection.image} alt={collection.title} className="collection-img" />
                            </div>
                            <div className="collection-meta">
                                <div>
                                    <h3 className="collection-title">{collection.title}</h3>
                                    <span className="collection-count">
                                        📚 {collection.count}
                                    </span>
                                </div>
                                <div className="btn-explore-collection">
                                    Explore List <span>→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollections;
