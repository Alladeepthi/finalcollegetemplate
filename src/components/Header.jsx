import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import AuthModal from './AuthModal';
import ContactModal from './ContactModal';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'colleges', 'exams', 'courses', 'careers' or null
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [authInitialTab, setAuthInitialTab] = useState('login');
  const location = useLocation();

  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const openAuth = (tab) => {
    setAuthInitialTab(tab);
    setIsAuthModalOpen(true);
  };

  return (
    <header className="header">
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialTab={authInitialTab}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <div className="container header-container">

        {/* Logo & Search */}
        <div className="header-left">
          <Link to="/" className="logo">
            <div className="logo-icon">🎓</div>
            <div className="logo-text">
              <h1>EduMon</h1>
            </div>
          </Link>
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search colleges, exams..." />
          </div>
        </div>

        {/* Main Nav */}
        <nav className="nav">
          <ul>
            <li
              className="nav-item-has-mega"
              onMouseEnter={() => handleMouseEnter('colleges')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/colleges" className={`has-dropdown ${activeDropdown === 'colleges' ? 'open' : ''}`}>Colleges <span className="arrow-down-icon">▼</span></Link>
              {activeDropdown === 'colleges' && (
                <div className="mega-menu colleges-mega">
                  <div className="mega-sidebar mega-menu-sidebar">
                    <Link to="/colleges?stream=Engineering" className="active">Engineering <span className="sidebar-arrow">▶</span></Link>
                    <Link to="/colleges?stream=Management">Management <span className="sidebar-arrow">▶</span></Link>
                    <Link to="/colleges?stream=Commerce">Commerce & Banking <span className="sidebar-arrow">▶</span></Link>
                    <Link to="/colleges?stream=Medical">Medical <span className="sidebar-arrow">▶</span></Link>
                    <Link to="/colleges?stream=Science">Sciences <span className="sidebar-arrow">▶</span></Link>
                    <Link to="/colleges?stream=Hotel Management">Hotel Management <span className="sidebar-arrow">▶</span></Link>
                    <Link to="/colleges?stream=Information Tech">Information Tech <span className="sidebar-arrow">▶</span></Link>
                    <Link to="/colleges?stream=Arts">Arts & Humanities <span className="sidebar-arrow">▶</span></Link>
                  </div>
                  <div className="mega-content-grid mega-menu-content">
                    <button className="menu-close" onClick={() => setActiveDropdown(null)}>✕</button>
                    <div className="mega-column menu-column">
                      <h4>COLLEGES BY DEGREES</h4>
                      <Link to="/colleges?degree=B.Tech">B.Tech Colleges</Link>
                      <Link to="/colleges?degree=M.Tech">M.Tech Colleges</Link>
                      <Link to="/colleges?degree=BCA">BCA Colleges</Link>
                      <Link to="/colleges?degree=MCA">MCA Colleges</Link>
                      <Link to="/colleges?degree=BE">BE Colleges</Link>
                      <Link to="/colleges" className="btn-view-all">VIEW ALL ↗</Link>

                      <div className="admission-banner">
                        <h3>Admission 2026</h3>
                        <p>Apply to India's top ranking universities today.</p>
                        <button className="btn-apply-now">Apply Now</button>
                      </div>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>POPULAR COLLEGES</h4>
                      <Link to="/colleges?search=Sanskriti University">Sanskriti University</Link>
                      <Link to="/colleges?search=GNIOT Group">GNIOT Group</Link>
                      <Link to="/colleges?search=Parul University">Parul University</Link>
                      <Link to="/colleges?search=Sanjay Ghodawat">Sanjay Ghodawat</Link>
                      <Link to="/colleges?search=Amity Punjab">Amity Punjab</Link>
                      <Link to="/colleges?search=SRM University">SRM University</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>TOP COLLEGES</h4>
                      <Link to="/colleges?search=IIT Kharagpur">IIT Kharagpur</Link>
                      <Link to="/colleges?search=IIT Delhi">IIT Delhi</Link>
                      <Link to="/colleges?search=IIT Madras">IIT Madras</Link>
                      <Link to="/colleges?search=IIT Kanpur">IIT Kanpur</Link>
                      <Link to="/colleges?search=IIT Roorkee">IIT Roorkee</Link>
                      <Link to="/colleges?search=BITS Pilani">BITS Pilani</Link>
                      <Link to="/colleges?search=NIT Trichy">NIT Trichy</Link>
                      <Link to="/colleges" className="btn-view-all">VIEW ALL ↗</Link>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li
              className="nav-item-has-mega"
              onMouseEnter={() => handleMouseEnter('exams')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/exams" className={`has-dropdown ${activeDropdown === 'exams' ? 'open' : ''}`}>Exams <span className="arrow-down-icon">▼</span></Link>
              {activeDropdown === 'exams' && (
                <div className="mega-menu exams-mega">
                  <div className="mega-row">
                    <div className="mega-column">
                      <h4>JEE Mains</h4>
                      <Link to="/exams?search=JEE Main">Eligibility</Link>
                      <Link to="/exams?search=JEE Main">Syllabus</Link>
                      <Link to="/exams?search=JEE Main">Exam Pattern</Link>
                      <Link to="/exams?search=JEE Main">How to Prepare</Link>
                      <Link to="/exams?search=JEE Main">Prev. Year Papers</Link>
                    </div>
                    <div className="mega-column">
                      <h4>JEE Advanced</h4>
                      <Link to="/exams?search=JEE Advanced">Eligibility</Link>
                      <Link to="/exams?search=JEE Advanced">Syllabus</Link>
                      <Link to="/exams?search=JEE Advanced">Exam Pattern</Link>
                      <Link to="/exams?search=JEE Advanced">How to Prepare</Link>
                      <Link to="/exams?search=JEE Advanced">Prev. Year Papers</Link>
                    </div>
                    <div className="mega-column">
                      <h4>NEET UG</h4>
                      <Link to="/exams?search=NEET">Eligibility</Link>
                      <Link to="/exams?search=NEET">Syllabus</Link>
                      <Link to="/exams?search=NEET">Exam Pattern</Link>
                      <Link to="/exams?search=NEET">How to Prepare</Link>
                      <Link to="/exams?search=NEET">Prev. Year Papers</Link>
                    </div>
                    <div className="mega-column">
                      <h4>GATE</h4>
                      <Link to="/exams?search=GATE">Eligibility</Link>
                      <Link to="/exams?search=GATE">Syllabus</Link>
                      <Link to="/exams?search=GATE">Exam Pattern</Link>
                      <Link to="/exams?search=GATE">How to Prepare</Link>
                      <Link to="/exams?search=GATE">Prev. Year Papers</Link>
                    </div>
                    <div className="mega-column">
                      <h4>CAT</h4>
                      <Link to="/exams?search=CAT">Eligibility</Link>
                      <Link to="/exams?search=CAT">Syllabus</Link>
                      <Link to="/exams?search=CAT">Exam Pattern</Link>
                      <Link to="/exams?search=CAT">How to Prepare</Link>
                      <Link to="/exams?search=CAT">Prev. Year Papers</Link>
                    </div>
                  </div>
                  <div className="mega-footer">
                    <Link to="/exams" className="view-all-link">View All Exams →</Link>
                  </div>
                </div>
              )}
            </li>

            <li
              className="nav-item-has-mega"
              onMouseEnter={() => handleMouseEnter('courses')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/courses" className={`has-dropdown ${activeDropdown === 'courses' ? 'open' : ''}`}>Courses <span className="arrow-down-icon">▼</span></Link>
              {activeDropdown === 'courses' && (
                <div className="mega-menu courses-mega">
                  <div className="mega-menu-header">
                    <h3>Popular Courses</h3>
                  </div>
                  <div className="mega-row">
                    <div className="mega-column">
                      <Link to="/courses?search=B.Tech">B.Tech</Link>
                      <Link to="/courses?search=B.Arch">B.Arch</Link>
                      <Link to="/courses?search=Mechanical">B.Tech in Mech</Link>
                      <Link to="/courses?search=Nursing">B.Sc Nursing</Link>
                      <Link to="/courses?search=Pharma">B.Pharma</Link>
                    </div>
                    <div className="mega-column">
                      <Link to="/courses?search=MBA">MBA</Link>
                      <Link to="/courses?search=BBA">BBA</Link>
                      <Link to="/courses?search=B.Com">B.Com</Link>
                      <Link to="/courses?search=Design">B.Des</Link>
                      <Link to="/courses?search=B.Ed">B.Ed</Link>
                    </div>
                    <div className="mega-column">
                      <Link to="/courses?search=MBBS">MBBS</Link>
                      <Link to="/courses?search=BAMS">BAMS</Link>
                      <Link to="/courses?search=BDS">BDS</Link>
                      <Link to="/courses?search=M.Tech">M.Tech</Link>
                      <Link to="/courses?search=MCA">MCA</Link>
                    </div>
                    <div className="mega-column">
                      <Link to="/courses?search=Law">LL.B</Link>
                      <Link to="/courses?search=Law">BA LL.B</Link>
                      <Link to="/courses?search=Hotel">BHM</Link>
                      <Link to="/courses?search=BCA">BCA</Link>
                      <Link to="/courses?search=PhD">PhD</Link>
                    </div>
                  </div>
                  <div className="mega-footer">
                    <Link to="/courses" className="view-all-link">View All Courses →</Link>
                  </div>
                </div>
              )}
            </li>
            <li
              className="nav-item-has-mega"
              onMouseEnter={() => handleMouseEnter('careers')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/careers" className={`has-dropdown ${activeDropdown === 'careers' ? 'open' : ''}`}>Careers <span className="arrow-down-icon">▼</span></Link>

              {/* CAREERS MEGA MENU */}
              {activeDropdown === 'careers' && (
                <div className="mega-menu careers-mega">
                  <div className="careers-menu-header">
                    <h3>Popular Careers</h3>
                  </div>

                  <div className="careers-grid">
                    <div className="careers-column">
                      <a href="#">IAS Officer</a>
                      <a href="#">Police Officer</a>
                      <a href="#">Doctor</a>
                      <a href="#">CID Officer</a>
                      <a href="#">IFS Officer</a>
                    </div>
                    <div className="careers-column">
                      <a href="#">Pilot</a>
                      <a href="#">Veterinarian</a>
                      <a href="#">Army Officer</a>
                      <a href="#">Fashion Designer</a>
                      <a href="#">Air Force Officer</a>
                    </div>
                    <div className="careers-column">
                      <a href="#">Company Secretary CS</a>
                      <a href="#">Loco Pilot</a>
                      <a href="#">Just Chartered Accountant</a>
                      <a href="#">CRPF Officer</a>
                      <a href="#">Merchant Navy</a>
                    </div>
                    <div className="careers-column">
                      <a href="#">Drug Inspector</a>
                      <a href="#">Investment Banker</a>
                      <a href="#">Probationary Officer</a>
                      <a href="#">Air Traffic Controller</a>
                      <a href="#">Bank PO</a>
                    </div>
                  </div>

                  <div className="careers-footer">
                    <Link to="/careers" className="view-all-careers">View All Careers →</Link>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Right Nav (Blue Action items) */}
        <div className="header-right-wrapper">
          <div className="header-right">
            <Link to="/utilities" className={isActive('/utilities')}>Utilities</Link>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsContactModalOpen(true);
              }}
            >
              Contact Us
            </a>
            <button
              className="btn-login-header"
              onClick={() => openAuth('login')}
            >
              Login / Register
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
