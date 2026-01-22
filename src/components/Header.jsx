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
              <Link to="/colleges" className={`has-dropdown ${activeDropdown === 'colleges' ? 'open' : ''}`} onClick={() => setActiveDropdown(null)}>Colleges <span className="arrow-down-icon">▼</span></Link>
              <div className={`mega-menu colleges-mega ${activeDropdown === 'colleges' ? 'visible' : ''}`}>
                <div className="mega-content-wrapper">
                  <div className="mega-menu-sidebar">
                    <Link to="/colleges?stream=Engineering" onClick={() => setActiveDropdown(null)} className="active">Engineering</Link>
                    <Link to="/colleges?stream=Management" onClick={() => setActiveDropdown(null)}>Management</Link>
                    <Link to="/colleges?stream=Commerce" onClick={() => setActiveDropdown(null)}>Commerce & Banking</Link>
                    <Link to="/colleges?stream=Medical" onClick={() => setActiveDropdown(null)}>Medical</Link>
                    <Link to="/colleges?stream=Science" onClick={() => setActiveDropdown(null)}>Sciences</Link>
                    <Link to="/colleges?stream=Hotel Management" onClick={() => setActiveDropdown(null)}>Hotel Management</Link>
                    <Link to="/colleges?stream=Information Tech" onClick={() => setActiveDropdown(null)}>Information Tech</Link>
                    <Link to="/colleges?stream=Arts" onClick={() => setActiveDropdown(null)}>Arts & Humanities</Link>
                  </div>
                  <div className="mega-menu-content">
                    <div className="mega-column menu-column">
                      <h4>COLLEGES BY DEGREES</h4>
                      <Link to="/colleges?degree=B.Tech" onClick={() => setActiveDropdown(null)}>B.Tech Colleges</Link>
                      <Link to="/colleges?degree=M.Tech" onClick={() => setActiveDropdown(null)}>M.Tech Colleges</Link>
                      <Link to="/colleges?degree=BCA" onClick={() => setActiveDropdown(null)}>BCA Colleges</Link>
                      <Link to="/colleges?degree=MCA" onClick={() => setActiveDropdown(null)}>MCA Colleges</Link>
                      <Link to="/colleges?degree=BE" onClick={() => setActiveDropdown(null)}>BE Colleges</Link>
                      <Link to="/colleges" className="btn-view-all" onClick={() => setActiveDropdown(null)}>VIEW ALL ↗</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>POPULAR COLLEGES</h4>
                      <Link to="/colleges?search=Sanskriti University" onClick={() => setActiveDropdown(null)}>Sanskriti University</Link>
                      <Link to="/colleges?search=GNIOT Group" onClick={() => setActiveDropdown(null)}>GNIOT Group</Link>
                      <Link to="/colleges?search=Parul University" onClick={() => setActiveDropdown(null)}>Parul University</Link>
                      <Link to="/colleges?search=Sanjay Ghodawat" onClick={() => setActiveDropdown(null)}>Sanjay Ghodawat</Link>
                      <Link to="/colleges?search=Amity Punjab" onClick={() => setActiveDropdown(null)}>Amity Punjab</Link>
                      <Link to="/colleges?search=SRM University" onClick={() => setActiveDropdown(null)}>SRM University</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>TOP COLLEGES</h4>
                      <Link to="/colleges?search=IIT Kharagpur" onClick={() => setActiveDropdown(null)}>IIT Kharagpur</Link>
                      <Link to="/colleges?search=IIT Delhi" onClick={() => setActiveDropdown(null)}>IIT Delhi</Link>
                      <Link to="/colleges?search=IIT Madras" onClick={() => setActiveDropdown(null)}>IIT Madras</Link>
                      <Link to="/colleges?search=IIT Kanpur" onClick={() => setActiveDropdown(null)}>IIT Kanpur</Link>
                      <Link to="/colleges?search=IIT Roorkee" onClick={() => setActiveDropdown(null)}>IIT Roorkee</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <div className="admission-banner">
                        <h3>Admission 2026</h3>
                        <p>Apply to India's top ranking universities today.</p>
                        <button className="btn-apply-now">Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li
              className="nav-item-has-mega"
              onMouseEnter={() => handleMouseEnter('exams')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/exams" className={`has-dropdown ${activeDropdown === 'exams' ? 'open' : ''}`} onClick={() => setActiveDropdown(null)}>Exams <span className="arrow-down-icon">▼</span></Link>
              <div className={`mega-menu exams-mega ${activeDropdown === 'exams' ? 'visible' : ''}`}>
                <div className="mega-content-wrapper">
                  <div className="mega-menu-sidebar">
                    <Link to="/exams?cat=Engineering" onClick={() => setActiveDropdown(null)} className="active">Engineering Entrance</Link>
                    <Link to="/exams?cat=Medical" onClick={() => setActiveDropdown(null)}>Medical Entrance</Link>
                    <Link to="/exams?cat=Management" onClick={() => setActiveDropdown(null)}>Management Entrance</Link>
                    <Link to="/exams?cat=Law" onClick={() => setActiveDropdown(null)}>Law Entrance</Link>
                    <Link to="/exams?cat=Government" onClick={() => setActiveDropdown(null)}>Govt. Exams</Link>
                    <Link to="/exams?cat=International" onClick={() => setActiveDropdown(null)}>International</Link>
                  </div>
                  <div className="mega-menu-content">
                    <div className="mega-column menu-column">
                      <h4>ENGINEERING</h4>
                      <Link to="/exams/jee-main" onClick={() => setActiveDropdown(null)}>JEE Main</Link>
                      <Link to="/exams/jee-advanced" onClick={() => setActiveDropdown(null)}>JEE Advanced</Link>
                      <Link to="/exams/gate" onClick={() => setActiveDropdown(null)}>GATE</Link>
                      <Link to="/exams/bitsat" onClick={() => setActiveDropdown(null)}>BITSAT</Link>
                      <Link to="/exams/viteee" onClick={() => setActiveDropdown(null)}>VITEEE</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>MEDICAL</h4>
                      <Link to="/exams/neet" onClick={() => setActiveDropdown(null)}>NEET UG</Link>
                      <Link to="/exams/neet-pg" onClick={() => setActiveDropdown(null)}>NEET PG</Link>
                      <Link to="/exams/aiims" onClick={() => setActiveDropdown(null)}>AIIMS Nursing</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>MANAGEMENT</h4>
                      <Link to="/exams/cat" onClick={() => setActiveDropdown(null)}>CAT</Link>
                      <Link to="/exams/mat" onClick={() => setActiveDropdown(null)}>MAT</Link>
                      <Link to="/exams/xat" onClick={() => setActiveDropdown(null)}>XAT</Link>
                      <Link to="/exams/cmat" onClick={() => setActiveDropdown(null)}>CMAT</Link>
                      <Link to="/exams/snap" onClick={() => setActiveDropdown(null)}>SNAP</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <div className="admission-banner">
                        <h3>Exam Calendar</h3>
                        <p>Check important dates for 2026 exams.</p>
                        <button className="btn-apply-now">View Dates</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li
              className="nav-item-has-mega"
              onMouseEnter={() => handleMouseEnter('courses')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/courses" className={`has-dropdown ${activeDropdown === 'courses' ? 'open' : ''}`} onClick={() => setActiveDropdown(null)}>Courses <span className="arrow-down-icon">▼</span></Link>
              <div className={`mega-menu courses-mega ${activeDropdown === 'courses' ? 'visible' : ''}`}>
                <div className="mega-content-wrapper">
                  <div className="mega-menu-sidebar">
                    <Link to="/courses?level=ug" onClick={() => setActiveDropdown(null)} className="active">Undergraduate (UG)</Link>
                    <Link to="/courses?level=pg" onClick={() => setActiveDropdown(null)}>Postgraduate (PG)</Link>
                    <Link to="/courses?level=diploma" onClick={() => setActiveDropdown(null)}>Diploma</Link>
                    <Link to="/courses?level=phd" onClick={() => setActiveDropdown(null)}>Doctorate (PhD)</Link>
                    <Link to="/courses?level=cert" onClick={() => setActiveDropdown(null)}>Certificates</Link>
                  </div>
                  <div className="mega-menu-content">
                    <div className="mega-column menu-column">
                      <h4>ENGINEERING & TECH</h4>
                      <Link to="/courses/btech" onClick={() => setActiveDropdown(null)}>B.Tech</Link>
                      <Link to="/courses/mtech" onClick={() => setActiveDropdown(null)}>M.Tech</Link>
                      <Link to="/courses/bca" onClick={() => setActiveDropdown(null)}>BCA</Link>
                      <Link to="/courses/mca" onClick={() => setActiveDropdown(null)}>MCA</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>MANAGEMENT & COMMERCE</h4>
                      <Link to="/courses/mba" onClick={() => setActiveDropdown(null)}>MBA</Link>
                      <Link to="/courses/bba" onClick={() => setActiveDropdown(null)}>BBA</Link>
                      <Link to="/courses/bcom" onClick={() => setActiveDropdown(null)}>B.Com</Link>
                      <Link to="/courses/mcom" onClick={() => setActiveDropdown(null)}>M.Com</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>MEDICAL & SCIENCE</h4>
                      <Link to="/courses/mbbs" onClick={() => setActiveDropdown(null)}>MBBS</Link>
                      <Link to="/courses/bds" onClick={() => setActiveDropdown(null)}>BDS</Link>
                      <Link to="/courses/bsc" onClick={() => setActiveDropdown(null)}>B.Sc</Link>
                      <Link to="/courses/msc" onClick={() => setActiveDropdown(null)}>M.Sc</Link>
                      <Link to="/courses/pharmacy" onClick={() => setActiveDropdown(null)}>B.Pharm</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>ARTS & LAW</h4>
                      <Link to="/courses/ba" onClick={() => setActiveDropdown(null)}>B.A</Link>
                      <Link to="/courses/m-a" onClick={() => setActiveDropdown(null)}>M.A</Link>
                      <Link to="/courses/llb" onClick={() => setActiveDropdown(null)}>LL.B</Link>
                      <Link to="/courses/ballb" onClick={() => setActiveDropdown(null)}>BA LL.B</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="nav-item-has-mega"
              onMouseEnter={() => handleMouseEnter('careers')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/careers" className={`has-dropdown ${activeDropdown === 'careers' ? 'open' : ''}`} onClick={() => setActiveDropdown(null)}>Careers <span className="arrow-down-icon">▼</span></Link>
              <div className={`mega-menu careers-mega ${activeDropdown === 'careers' ? 'visible' : ''}`}>
                <div className="mega-content-wrapper">
                  <div className="mega-menu-sidebar">
                    <Link to="/careers?field=medical" onClick={() => setActiveDropdown(null)} className="active">Medical Careers</Link>
                    <Link to="/careers?field=engineering" onClick={() => setActiveDropdown(null)}>Engineering Careers</Link>
                    <Link to="/careers?field=business" onClick={() => setActiveDropdown(null)}>Business & Finance</Link>
                    <Link to="/careers?field=design" onClick={() => setActiveDropdown(null)}>Design & Arts</Link>
                    <Link to="/careers?field=civil" onClick={() => setActiveDropdown(null)}>Civil Services</Link>
                  </div>
                  <div className="mega-menu-content">
                    <div className="mega-column menu-column">
                      <h4>HIGH DEMAND</h4>
                      <Link to="/careers/software-engineer" onClick={() => setActiveDropdown(null)}>Software Engineer</Link>
                      <Link to="/careers/doctor" onClick={() => setActiveDropdown(null)}>Doctor</Link>
                      <Link to="/careers/data-scientist" onClick={() => setActiveDropdown(null)}>Data Scientist</Link>
                      <Link to="/careers/mba" onClick={() => setActiveDropdown(null)}>Investment Banker</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>CREATIVE</h4>
                      <Link to="/careers/fashion-design" onClick={() => setActiveDropdown(null)}>Fashion Designer</Link>
                      <Link to="/careers/graphic-design" onClick={() => setActiveDropdown(null)}>Graphic Designer</Link>
                      <Link to="/careers/architect" onClick={() => setActiveDropdown(null)}>Architect</Link>
                      <Link to="/careers/ux-ui" onClick={() => setActiveDropdown(null)}>UX/UI Designer</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>GOVERNMENT</h4>
                      <Link to="/careers/ias" onClick={() => setActiveDropdown(null)}>IAS Officer</Link>
                      <Link to="/careers/ips" onClick={() => setActiveDropdown(null)}>IPS Officer</Link>
                      <Link to="/careers/ifs" onClick={() => setActiveDropdown(null)}>IFS Officer</Link>
                      <Link to="/careers/ssc" onClick={() => setActiveDropdown(null)}>Bank PO</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <div className="admission-banner">
                        <h3>Career Guide</h3>
                        <p>Not sure what to choose?</p>
                        <button className="btn-apply-now">Take Quiz</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
