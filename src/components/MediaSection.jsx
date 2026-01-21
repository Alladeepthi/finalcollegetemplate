import React from 'react';
import './MediaSection.css';

const MediaSection = () => {
    const logos = [
        { name: 'HT', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Hindustan_Times_logo.svg' },
        { name: 'TOI', url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/The_Times_of_India.svg' },
        { name: 'Mint', url: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Mint_Logo.svg' },
        { name: 'ET', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/The_Economic_Times_logo.svg' },
        { name: 'Indian Express', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/The_Indian_Express_logo.svg' },
        { name: 'YourStory', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/YourStory_logo.png' },
        { name: 'Dainik Bhaskar', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Dainik_Bhaskar_Logo.svg' },
        { name: 'CNBC', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg' },
        { name: 'Financial Express', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/The_Financial_Express_logo.svg' },
        { name: 'Dainik Jagran', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Dainik_Jagran_Logo.png' }
    ];

    return (
        <section className="media-section">
            <div className="container">
                <h3 className="media-title">Praised by the media</h3>
                <div className="media-logos">
                    {logos.map((logo, index) => (
                        <div key={index} className="media-logo-item">
                            <img src={logo.url} alt={logo.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MediaSection;
