import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ApplicationTracker from '../components/ApplicationTracker';
import { useUser } from '../context/UserContext';
import './Dashboard.css';

const Dashboard = () => {
    // Context State
    const { user, applications, shortlist, updateProfile, removeFromShortlist } = useUser();

    // Local UI State
    const [activeTab, setActiveTab] = useState('overview');
    const [viewingAppId, setViewingAppId] = useState(null);

    // Filter Stats
    const stats = {
        applied: applications.length,
        shortlisted: shortlist.length,
        pending: 3
    };

    const recommended = [
        { id: 1, name: "Stanford University", location: "California, USA", img: "https://images.unsplash.com/photo-1592280771883-1c9486f8963f?q=80&w=1000&auto=format&fit=crop" },
        { id: 2, name: "MIT", location: "Massachusetts, USA", img: "https://plus.unsplash.com/premium_photo-1681505364808-d205e461b17a?q=80&w=1000&auto=format&fit=crop" },
        { id: 3, name: "Oxford University", location: "Oxford, UK", img: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?q=80&w=1000&auto=format&fit=crop" }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <>
                        <section className="stats-grid">
                            <div className="stat-card">
                                <span className="stat-label">Applications Sent</span>
                                <div className="stat-value">{stats.applied}</div>
                            </div>
                            <div className="stat-card">
                                <span className="stat-label">Shortlisted</span>
                                <div className="stat-value">{stats.shortlisted}</div>
                            </div>
                            <div className="stat-card">
                                <span className="stat-label">Pending Actions</span>
                                <div className="stat-value">{stats.pending}</div>
                            </div>
                        </section>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                            <div className="dash-section">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <h3 className="section-title" style={{ marginBottom: 0 }}>Recent Activity</h3>
                                    <button onClick={() => setActiveTab('applications')} style={{ background: 'none', border: 'none', color: '#2563EB', cursor: 'pointer', fontWeight: 600 }}>View All</button>
                                </div>
                                <div className="app-list">
                                    {applications.length > 0 ? applications.slice(0, 2).map(app => (
                                        <div className="app-item" key={app.id}>
                                            <div className="app-college">
                                                <h4>{app.college}</h4>
                                                <p>{app.course} • {app.date}</p>
                                            </div>
                                            <span className={`status-badge ${app.status === 'Shortlisted' ? 'status-shortlisted' : 'status-review'}`}>
                                                {app.status}
                                            </span>
                                        </div>
                                    )) : <p style={{ padding: '20px', color: '#64748b' }}>No applications yet.</p>}
                                </div>
                            </div>

                            <section className="dash-section">
                                <h3 className="section-title">Recommended for You</h3>
                                <div className="rec-grid">
                                    {recommended.map(college => (
                                        <div className="rec-card" key={college.id}>
                                            <div className="rec-img">
                                                <img src={college.img} alt={college.name} />
                                            </div>
                                            <div className="rec-content">
                                                <h4 className="rec-name">{college.name}</h4>
                                                <p className="rec-loc">📍 {college.location}</p>
                                                <Link to={`/colleges`} className="btn-view" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>View Details</Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </>
                );

            case 'applications':
                return (
                    <div className="dash-section">
                        <h3 className="section-title">My Applications</h3>
                        <div className="app-list">
                            {applications.length > 0 ? applications.map(app => (
                                <div key={app.id}>
                                    <div className="app-item">
                                        <div className="app-college">
                                            <h4>{app.college}</h4>
                                            <p>{app.course} • Applied on {app.date}</p>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <span className={`status-badge ${app.status === 'Shortlisted' ? 'status-shortlisted' : 'status-review'}`}>
                                                {app.status}
                                            </span>
                                            <button
                                                onClick={() => setViewingAppId(viewingAppId === app.id ? null : app.id)}
                                                style={{ background: 'none', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}
                                            >
                                                {viewingAppId === app.id ? 'Hide Status' : 'Track Status'}
                                            </button>
                                        </div>
                                    </div>
                                    {viewingAppId === app.id && (
                                        <div style={{ padding: '0 1.5rem 1.5rem', borderBottom: '1px solid #f1f5f9', background: '#f8fafc' }}>
                                            <p style={{ marginBottom: '10px', fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>Application Journey:</p>
                                            <ApplicationTracker currentStep={app.step || 2} />
                                        </div>
                                    )}
                                </div>
                            )) : <p>You haven't applied to any colleges yet.</p>}
                        </div>
                    </div>
                );

            case 'shortlist':
                return (
                    <div className="dash-section">
                        <h3 className="section-title">Shortlisted Colleges</h3>
                        <div className="shortlist-grid">
                            {shortlist.length > 0 ? shortlist.map(college => (
                                <div className="short-card" key={college.id}>
                                    <div className="short-img">
                                        <img src={college.img} alt={college.name} />
                                    </div>
                                    <div className="short-content">
                                        <h4>{college.name}</h4>
                                        <p className="short-loc">📍 {college.location}</p>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <button className="btn-remove" onClick={() => removeFromShortlist(college.id)}>Remove</button>
                                            <Link to="/colleges" style={{ flex: 1, textAlign: 'center', background: '#2563EB', color: 'white', padding: '5px', borderRadius: '4px', fontSize: '0.8rem', textDecoration: 'none' }}>View</Link>
                                        </div>
                                    </div>
                                </div>
                            )) : <p>Your shortlist is empty.</p>}
                        </div>
                    </div>
                );

            case 'profile':
                return (
                    <div className="dash-section">
                        <h3 className="section-title">My Profile</h3>
                        <div className="profile-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" defaultValue={user.name} onChange={(e) => updateProfile({ name: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" defaultValue={user.email} onChange={(e) => updateProfile({ email: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Current Education</label>
                                <input type="text" defaultValue={user.education} onChange={(e) => updateProfile({ education: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Target Course</label>
                                <input type="text" defaultValue={user.targetCourse} onChange={(e) => updateProfile({ targetCourse: e.target.value })} />
                            </div>
                            <button className="save-btn" onClick={() => alert('Profile Updated!')}>Save Changes</button>
                        </div>
                    </div>
                );
            case 'settings':
                return (
                    <div className="dash-section">
                        <h3 className="section-title">Settings</h3>
                        <div className="profile-form">
                            <p style={{ marginBottom: '1rem', color: '#64748b' }}>Manage your account preferences.</p>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                                    <input type="checkbox" defaultChecked /> Receive Email Notifications
                                </label>
                            </div>
                            <button className="save-btn" style={{ background: '#dc2626' }}>Delete Account</button>
                        </div>
                    </div>
                );
            default:
                return <div>Select a tab</div>;
        }
    };

    return (
        <div className="dashboard-container">
            <aside className="dash-sidebar">
                <div className="dash-brand">
                    <span>🎓 EduMon</span>
                </div>
                <nav className="dash-nav">
                    <button className={`dash-link ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
                        <span className="dash-icon">📊</span> Overview
                    </button>
                    <button className={`dash-link ${activeTab === 'applications' ? 'active' : ''}`} onClick={() => setActiveTab('applications')}>
                        <span className="dash-icon">📝</span> My Applications
                    </button>
                    <button className={`dash-link ${activeTab === 'shortlist' ? 'active' : ''}`} onClick={() => setActiveTab('shortlist')}>
                        <span className="dash-icon">🔖</span> Shortlisted
                    </button>
                    <button className={`dash-link ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
                        <span className="dash-icon">👤</span> Profile
                    </button>
                    <button className={`dash-link ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
                        <span className="dash-icon">⚙️</span> Settings
                    </button>
                    <div style={{ marginTop: 'auto', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                        <Link to="/" className="dash-link" style={{ color: '#ef4444' }}>
                            <span className="dash-icon">🚪</span> Logout
                        </Link>
                    </div>
                </nav>
            </aside>
            <main className="dash-main">
                <header className="dash-header">
                    <div>
                        <h1 className="dash-title">Welcome back, {user.name.split(' ')[0]}!</h1>
                        <p className="dash-subtitle">Here's a quick look at your college application progress.</p>
                    </div>
                    <div className="user-profile-pill" onClick={() => setActiveTab('profile')}>
                        <div className="user-avatar">{user.name.charAt(0)}</div>
                        <span className="user-name">{user.name}</span>
                    </div>
                </header>
                {renderContent()}
            </main>
        </div>
    );
};

export default Dashboard;
