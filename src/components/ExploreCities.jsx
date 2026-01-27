import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExploreCities.css';

const ExploreCities = () => {
    const navigate = useNavigate();

    const cities = [
        { name: "Bangalore", count: "120+ Colleges", img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=600&auto=format&fit=crop" },
        { name: "Delhi", count: "95+ Colleges", img: "https://images.unsplash.com/photo-1587474262715-9aa44cb41fef?q=80&w=600&auto=format&fit=crop" },
        { name: "Mumbai", count: "80+ Colleges", img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=600&auto=format&fit=crop" },
        { name: "Hyderabad", count: "105+ Colleges", img: "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?q=80&w=600&auto=format&fit=crop" },
        { name: "Chennai", count: "90+ Colleges", img: "https://images.unsplash.com/photo-1582510003544-524378997228?q=80&w=600&auto=format&fit=crop" },
        { name: "Pune", count: "110+ Colleges", img: "https://images.unsplash.com/photo-1572099395250-934c56e30b35?q=80&w=600&auto=format&fit=crop" }
    ];

    return (
        <section className="explore-cities-section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '10px', color: '#1e293b' }}>Explore by City</h2>
                    <p style={{ color: '#64748b' }}>Find Top Colleges in India's Education Hubs</p>
                </div>

                <div className="cities-grid">
                    {cities.map((city, idx) => (
                        <div className="city-card" key={idx} onClick={() => navigate('/colleges')}>
                            <img src={city.img} alt={city.name} className="city-img" />
                            <div className="city-overlay">
                                <div className="city-name">{city.name}</div>
                                <div className="city-college-count">{city.count}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploreCities;
