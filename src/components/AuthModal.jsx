import React, { useState } from 'react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, initialTab = 'login' }) => {
    const [activeTab, setActiveTab] = useState(initialTab);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        gender: '',
        category: '',
        password: '',
        confirmPassword: '',
        loginIdentifier: '',
        loginPassword: ''
    });

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (activeTab === 'register') {
            if (formData.password !== formData.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            console.log("Registering:", formData);
            alert("Registration Successful!");
        } else {
            console.log("Logging in:", formData.loginIdentifier);
            alert("Login Successful!");
        }
        onClose();
    };

    return (
        <div className="auth-modal-overlay" onClick={onClose}>
            <div className="auth-modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-modal" onClick={onClose}>✕</button>

                <div className="auth-tabs">
                    <button
                        className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
                        onClick={() => setActiveTab('login')}
                    >
                        Login
                    </button>
                    <button
                        className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
                        onClick={() => setActiveTab('register')}
                    >
                        Register
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {activeTab === 'login' ? (
                        <>
                            <div className="form-group">
                                <label>Phone Number / Email</label>
                                <input
                                    type="text"
                                    name="loginIdentifier"
                                    placeholder="Enter your phone or email"
                                    value={formData.loginIdentifier}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="loginPassword"
                                    placeholder="Enter password"
                                    value={formData.loginPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-auth-submit">Login Account</button>
                            <p className="auth-footer">
                                Don't have an account? <span onClick={() => setActiveTab('register')}>Register Now</span>
                            </p>
                        </>
                    ) : (
                        <>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Mobile Number"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select name="gender" value={formData.gender} onChange={handleInputChange} required>
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Interested Category</label>
                                    <select name="category" value={formData.category} onChange={handleInputChange} required>
                                        <option value="">Select Course</option>
                                        <option value="btech">B.Tech</option>
                                        <option value="mtech">M.Tech</option>
                                        <option value="mba">MBA</option>
                                        <option value="medical">Medical</option>
                                        <option value="bca">BCA</option>
                                        <option value="law">Law</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Create Password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn-auth-submit">Create Account</button>
                            <p className="auth-footer">
                                Already have an account? <span onClick={() => setActiveTab('login')}>Login Here</span>
                            </p>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AuthModal;
