import React from 'react';
import './Features.css';

const Features = () => {
    const stats = [
        {
            number: '1300',
            label: 'Wide Choice of Subjects',
            color: '#fbbf24',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            number: '1276',
            label: 'Thats a lot',
            color: '#ec4899',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8V12L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            number: '256',
            label: 'All trained professionals',
            color: '#06b6d4',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2522 22.1614 16.5523C21.6184 15.8524 20.8581 15.3516 20 15.13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    const features = [
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1a1b4b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12H22" stroke="#1a1b4b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="#1a1b4b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Expand Knowledge",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 11V16" stroke="#1a1b4b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 16H15" stroke="#1a1b4b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 10.53 5.5 12.5 7 14C8 15 9 15.5 10 16H14C15 15.5 16 15 17 14C18.5 12.5 19 10.53 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" stroke="#1a1b4b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 21H16" stroke="#1a1b4b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Develop Your Skill",
            desc: "Nam efficitur tincidunt blandit. Pellentesque dignissim ultricies."
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="#1a1b4b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 18H12.01" stroke="#1a1b4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Invest Time",
            desc: "Mauris vel porta dui, id maximus eros. Proin nec velit euismod."
        },
        {
            icon: (
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 19.9391 11.5786 18.9217 10.8284 18.1716C10.0783 17.4214 9.06087 17 8 17H2V3Z" stroke="#1a1b4b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 19.9391 12.4214 18.9217 13.1716 18.1716C13.9217 17.4214 14.9391 17 16 17H22V3Z" stroke="#1a1b4b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Learn Yourself",
            desc: "Proin aliquet, metus fringilla mattis dignissim, nulla dolor."
        }
    ];

    return (
        <section className="features-section">
            <div className="container">
                {/* Stats Bar */}
                <div className="stats-bar">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-icon-circle" style={{ backgroundColor: stat.color }}>
                                {stat.icon}
                            </div>
                            <div className="stat-info">
                                <h3>{stat.number}</h3>
                                <p>{stat.label}</p>
                            </div>
                            {index < stats.length - 1 && <div className="stat-divider"></div>}
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
