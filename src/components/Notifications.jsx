import React from 'react';
import './Notifications.css';

const Notifications = () => {
    const notifications = [
        {
            id: 1,
            type: 'admission',
            icon: '📢',
            title: 'Admissions Open 2026',
            message: 'Join top-ranked universities today',
            date: 'Jan 28, 2026',
            urgent: true
        },
        {
            id: 2,
            type: 'exam',
            icon: '📝',
            title: 'JEE Main Registration',
            message: 'Last date to register: Feb 15, 2026',
            date: 'Jan 25, 2026',
            urgent: false
        },
        {
            id: 3,
            type: 'scholarship',
            icon: '🎓',
            title: 'Merit Scholarships Available',
            message: 'Up to 100% tuition fee waiver',
            date: 'Jan 20, 2026',
            urgent: false
        },
        {
            id: 4,
            type: 'event',
            icon: '🎯',
            title: 'Virtual College Fair',
            message: 'Meet representatives from 50+ colleges',
            date: 'Jan 18, 2026',
            urgent: false
        },
        {
            id: 5,
            type: 'deadline',
            icon: '⏰',
            title: 'NEET Application Deadline',
            message: 'Submit your application before Feb 10',
            date: 'Jan 15, 2026',
            urgent: true
        },
        {
            id: 6,
            type: 'update',
            icon: '✨',
            title: 'New Courses Added',
            message: 'Explore AI & Data Science programs',
            date: 'Jan 10, 2026',
            urgent: false
        }
    ];

    return (
        <section className="notifications-section">
            <div className="container">
                <div className="notifications-header">
                    <h2 className="notifications-title">
                        Latest <span className="highlight">Notifications</span>
                    </h2>
                    <a href="#" className="view-all-link">View all →</a>
                </div>

                <div className="notifications-grid">
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`notification-card ${notification.urgent ? 'urgent' : ''}`}
                        >
                            {notification.urgent && <span className="urgent-badge">Urgent</span>}
                            <div className="notification-icon">{notification.icon}</div>
                            <div className="notification-content">
                                <h3 className="notification-title">{notification.title}</h3>
                                <p className="notification-message">{notification.message}</p>
                                <span className="notification-date">{notification.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Notifications;
