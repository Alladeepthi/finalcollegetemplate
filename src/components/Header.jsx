import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import AuthModal from './AuthModal';
import ContactModal from './ContactModal';
import LiveTicker from './LiveTicker';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'colleges', 'exams', 'courses', 'careers' or null
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      <LiveTicker />
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
          <button
            className="mobile-menu-toggle"
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`hamburger-box ${isMobileMenuOpen ? 'open' : ''}`}>
              <span className="hamburger-inner"></span>
            </span>
          </button>

          <Link to="/" className="logo">
            <div className="logo-icon">🎓</div>
            <div className="logo-text">
              <h1>EduMon</h1>
            </div>
          </Link>
        </div>

        {/* Main Nav */}
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-visible' : ''}`}>
          <ul>
            <li
              className="nav-item-has-mega"
              onMouseEnter={() => window.innerWidth > 1024 && handleMouseEnter('colleges')}
              onMouseLeave={() => window.innerWidth > 1024 && handleMouseLeave()}
              onClick={() => window.innerWidth <= 1024 && setActiveDropdown(activeDropdown === 'colleges' ? null : 'colleges')}
            >
              <span className={`nav-link-mobile ${activeDropdown === 'colleges' ? 'open' : ''}`}>
                Colleges <span className="arrow-down-icon">▼</span>
              </span>
              {/* For Desktop Link is used, for mobile we might want a span trigger to open functionality or keep Link but prevent default if it has submenu? 
                  Current design: Hover for desktop. Click for mobile. 
                  We'll use a mixed approach for robustness. */}
              <Link to="/colleges" className="desktop-link">Colleges <span className="arrow-down-icon">▼</span></Link>

              <div className={`mega-menu colleges-mega ${activeDropdown === 'colleges' ? 'visible' : ''}`}>
                <div className="mega-content-wrapper">
                  <div className="mega-menu-sidebar">
                    <Link to="/colleges?stream=Engineering" onClick={() => setIsMobileMenuOpen(false)} className="active">Engineering</Link>
                    <Link to="/colleges?stream=Management" onClick={() => setIsMobileMenuOpen(false)}>Management</Link>
                    <Link to="/colleges?stream=Commerce" onClick={() => setIsMobileMenuOpen(false)}>Commerce & Banking</Link>
                    <Link to="/colleges?stream=Medical" onClick={() => setIsMobileMenuOpen(false)}>Medical</Link>
                    <Link to="/colleges?stream=Science" onClick={() => setIsMobileMenuOpen(false)}>Sciences</Link>
                    <Link to="/colleges?stream=Hotel Management" onClick={() => setIsMobileMenuOpen(false)}>Hotel Management</Link>
                    <Link to="/colleges?stream=Information Tech" onClick={() => setIsMobileMenuOpen(false)}>Information Tech</Link>
                    <Link to="/colleges?stream=Arts" onClick={() => setIsMobileMenuOpen(false)}>Arts & Humanities</Link>
                  </div>
                  <div className="mega-menu-content">
                    <div className="mega-column menu-column">
                      <h4>COLLEGES BY DEGREES</h4>
                      <Link to="/colleges?degree=B.Tech" onClick={() => setIsMobileMenuOpen(false)}>B.Tech Colleges</Link>
                      <Link to="/colleges?degree=M.Tech" onClick={() => setIsMobileMenuOpen(false)}>M.Tech Colleges</Link>
                      <Link to="/colleges?degree=BCA" onClick={() => setIsMobileMenuOpen(false)}>BCA Colleges</Link>
                      <Link to="/colleges?degree=MCA" onClick={() => setIsMobileMenuOpen(false)}>MCA Colleges</Link>
                      <Link to="/colleges?degree=BE" onClick={() => setIsMobileMenuOpen(false)}>BE Colleges</Link>
                      <Link to="/colleges" className="btn-view-all" onClick={() => setIsMobileMenuOpen(false)}>VIEW ALL ↗</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>POPULAR COLLEGES</h4>
                      <Link to="/colleges?search=Sanskriti University" onClick={() => setIsMobileMenuOpen(false)}>Sanskriti University</Link>
                      <Link to="/colleges?search=GNIOT Group" onClick={() => setIsMobileMenuOpen(false)}>GNIOT Group</Link>
                      <Link to="/colleges?search=Parul University" onClick={() => setIsMobileMenuOpen(false)}>Parul University</Link>
                      <Link to="/colleges?search=Sanjay Ghodawat" onClick={() => setIsMobileMenuOpen(false)}>Sanjay Ghodawat</Link>
                      <Link to="/colleges?search=Amity Punjab" onClick={() => setIsMobileMenuOpen(false)}>Amity Punjab</Link>
                      <Link to="/colleges?search=SRM University" onClick={() => setIsMobileMenuOpen(false)}>SRM University</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>TOP COLLEGES</h4>
                      <Link to="/colleges?search=IIT Kharagpur" onClick={() => setIsMobileMenuOpen(false)}>IIT Kharagpur</Link>
                      <Link to="/colleges?search=IIT Delhi" onClick={() => setIsMobileMenuOpen(false)}>IIT Delhi</Link>
                      <Link to="/colleges?search=IIT Madras" onClick={() => setIsMobileMenuOpen(false)}>IIT Madras</Link>
                      <Link to="/colleges?search=IIT Kanpur" onClick={() => setIsMobileMenuOpen(false)}>IIT Kanpur</Link>
                      <Link to="/colleges?search=IIT Roorkee" onClick={() => setIsMobileMenuOpen(false)}>IIT Roorkee</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <div className="admission-banner">
                        <h3>Admission 2026</h3>
                        <p>Apply to India's top ranking universities today.</p>
                        <button className="btn-apply-now" onClick={() => { setIsContactModalOpen(true); setIsMobileMenuOpen(false); }}>Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li
              className="nav-item-has-mega"
              onMouseEnter={() => window.innerWidth > 1024 && handleMouseEnter('exams')}
              onMouseLeave={() => window.innerWidth > 1024 && handleMouseLeave()}
              onClick={() => window.innerWidth <= 1024 && setActiveDropdown(activeDropdown === 'exams' ? null : 'exams')}
            >
              <span className={`nav-link-mobile ${activeDropdown === 'exams' ? 'open' : ''}`}>
                Exams <span className="arrow-down-icon">▼</span>
              </span>
              <Link to="/exams" className="desktop-link">Exams <span className="arrow-down-icon">▼</span></Link>

              <div className={`mega-menu exams-mega ${activeDropdown === 'exams' ? 'visible' : ''}`}>
                <div className="mega-content-wrapper">
                  <div className="mega-menu-sidebar">
                    <Link to="/exams?cat=Engineering" onClick={() => setIsMobileMenuOpen(false)} className="active">Engineering Entrance</Link>
                    <Link to="/exams?cat=Medical" onClick={() => setIsMobileMenuOpen(false)}>Medical Entrance</Link>
                    <Link to="/exams?cat=Management" onClick={() => setIsMobileMenuOpen(false)}>Management Entrance</Link>
                    <Link to="/exams?cat=Law" onClick={() => setIsMobileMenuOpen(false)}>Law Entrance</Link>
                    <Link to="/exams?cat=Government" onClick={() => setIsMobileMenuOpen(false)}>Govt. Exams</Link>
                    <Link to="/exams?cat=International" onClick={() => setIsMobileMenuOpen(false)}>International</Link>
                  </div>
                  <div className="mega-menu-content">
                    <div className="mega-column menu-column">
                      <h4>ENGINEERING</h4>
                      <Link to="/exams/jee-main" onClick={() => setIsMobileMenuOpen(false)}>JEE Main</Link>
                      <Link to="/exams/jee-advanced" onClick={() => setIsMobileMenuOpen(false)}>JEE Advanced</Link>
                      <Link to="/exams/gate" onClick={() => setIsMobileMenuOpen(false)}>GATE</Link>
                      <Link to="/exams/bitsat" onClick={() => setIsMobileMenuOpen(false)}>BITSAT</Link>
                      <Link to="/exams/viteee" onClick={() => setIsMobileMenuOpen(false)}>VITEEE</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>MEDICAL</h4>
                      <Link to="/exams/neet" onClick={() => setIsMobileMenuOpen(false)}>NEET UG</Link>
                      <Link to="/exams/neet-pg" onClick={() => setIsMobileMenuOpen(false)}>NEET PG</Link>
                      <Link to="/exams/aiims" onClick={() => setIsMobileMenuOpen(false)}>AIIMS Nursing</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>MANAGEMENT</h4>
                      <Link to="/exams/cat" onClick={() => setIsMobileMenuOpen(false)}>CAT</Link>
                      <Link to="/exams/mat" onClick={() => setIsMobileMenuOpen(false)}>MAT</Link>
                      <Link to="/exams/xat" onClick={() => setIsMobileMenuOpen(false)}>XAT</Link>
                      <Link to="/exams/cmat" onClick={() => setIsMobileMenuOpen(false)}>CMAT</Link>
                      <Link to="/exams/snap" onClick={() => setIsMobileMenuOpen(false)}>SNAP</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <div className="admission-banner">
                        <h3>Exam Calendar</h3>
                        <p>Check important dates for 2026 exams.</p>
                        <button className="btn-apply-now" onClick={() => { setIsMobileMenuOpen(false); window.location.href = '/exams'; }}>View Dates</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li
              className="nav-item-has-mega"
              onMouseEnter={() => window.innerWidth > 1024 && handleMouseEnter('courses')}
              onMouseLeave={() => window.innerWidth > 1024 && handleMouseLeave()}
              onClick={() => window.innerWidth <= 1024 && setActiveDropdown(activeDropdown === 'courses' ? null : 'courses')}
            >
              <span className={`nav-link-mobile ${activeDropdown === 'courses' ? 'open' : ''}`}>
                Courses <span className="arrow-down-icon">▼</span>
              </span>
              <Link to="/courses" className="desktop-link">Courses <span className="arrow-down-icon">▼</span></Link>

              <div className={`mega-menu courses-mega ${activeDropdown === 'courses' ? 'visible' : ''}`}>
                <div className="mega-content-wrapper">
                  <div className="mega-menu-sidebar">
                    <Link to="/courses?level=ug" onClick={() => setIsMobileMenuOpen(false)} className="active">Undergraduate (UG)</Link>
                    <Link to="/courses?level=pg" onClick={() => setIsMobileMenuOpen(false)}>Postgraduate (PG)</Link>
                    <Link to="/courses?level=diploma" onClick={() => setIsMobileMenuOpen(false)}>Diploma</Link>
                    <Link to="/courses?level=phd" onClick={() => setIsMobileMenuOpen(false)}>Doctorate (PhD)</Link>
                    <Link to="/courses?level=cert" onClick={() => setIsMobileMenuOpen(false)}>Certificates</Link>
                  </div>
                  <div className="mega-menu-content">
                    <div className="mega-column menu-column">
                      <h4>ENGINEERING & TECH</h4>
                      <Link to="/courses/btech" onClick={() => setIsMobileMenuOpen(false)}>B.Tech</Link>
                      <Link to="/courses/mtech" onClick={() => setIsMobileMenuOpen(false)}>M.Tech</Link>
                      <Link to="/courses/bca" onClick={() => setIsMobileMenuOpen(false)}>BCA</Link>
                      <Link to="/courses/mca" onClick={() => setIsMobileMenuOpen(false)}>MCA</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>MANAGEMENT & COMMERCE</h4>
                      <Link to="/courses/mba" onClick={() => setIsMobileMenuOpen(false)}>MBA</Link>
                      <Link to="/courses/bba" onClick={() => setIsMobileMenuOpen(false)}>BBA</Link>
                      <Link to="/courses/bcom" onClick={() => setIsMobileMenuOpen(false)}>B.Com</Link>
                      <Link to="/courses/mcom" onClick={() => setIsMobileMenuOpen(false)}>M.Com</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>MEDICAL & SCIENCE</h4>
                      <Link to="/courses/mbbs" onClick={() => setIsMobileMenuOpen(false)}>MBBS</Link>
                      <Link to="/courses/bds" onClick={() => setIsMobileMenuOpen(false)}>BDS</Link>
                      <Link to="/courses/bsc" onClick={() => setIsMobileMenuOpen(false)}>B.Sc</Link>
                      <Link to="/courses/msc" onClick={() => setIsMobileMenuOpen(false)}>M.Sc</Link>
                      <Link to="/courses/pharmacy" onClick={() => setIsMobileMenuOpen(false)}>B.Pharm</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>ARTS & LAW</h4>
                      <Link to="/courses/ba" onClick={() => setIsMobileMenuOpen(false)}>B.A</Link>
                      <Link to="/courses/m-a" onClick={() => setIsMobileMenuOpen(false)}>M.A</Link>
                      <Link to="/courses/llb" onClick={() => setIsMobileMenuOpen(false)}>LL.B</Link>
                      <Link to="/courses/ballb" onClick={() => setIsMobileMenuOpen(false)}>BA LL.B</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="nav-item-has-mega"
              onMouseEnter={() => window.innerWidth > 1024 && handleMouseEnter('careers')}
              onMouseLeave={() => window.innerWidth > 1024 && handleMouseLeave()}
              onClick={() => window.innerWidth <= 1024 && setActiveDropdown(activeDropdown === 'careers' ? null : 'careers')}
            >
              <span className={`nav-link-mobile ${activeDropdown === 'careers' ? 'open' : ''}`}>
                Careers <span className="arrow-down-icon">▼</span>
              </span>
              <Link to="/careers" className="desktop-link">Careers <span className="arrow-down-icon">▼</span></Link>

              <div className={`mega-menu careers-mega ${activeDropdown === 'careers' ? 'visible' : ''}`}>
                <div className="mega-content-wrapper">
                  <div className="mega-menu-sidebar">
                    <Link to="/careers?field=medical" onClick={() => setIsMobileMenuOpen(false)} className="active">Medical Careers</Link>
                    <Link to="/careers?field=engineering" onClick={() => setIsMobileMenuOpen(false)}>Engineering Careers</Link>
                    <Link to="/careers?field=business" onClick={() => setIsMobileMenuOpen(false)}>Business & Finance</Link>
                    <Link to="/careers?field=design" onClick={() => setIsMobileMenuOpen(false)}>Design & Arts</Link>
                    <Link to="/careers?field=civil" onClick={() => setIsMobileMenuOpen(false)}>Civil Services</Link>
                  </div>
                  <div className="mega-menu-content">
                    <div className="mega-column menu-column">
                      <h4>HIGH DEMAND</h4>
                      <Link to="/careers/software-engineer" onClick={() => setIsMobileMenuOpen(false)}>Software Engineer</Link>
                      <Link to="/careers/doctor" onClick={() => setIsMobileMenuOpen(false)}>Doctor</Link>
                      <Link to="/careers/data-scientist" onClick={() => setIsMobileMenuOpen(false)}>Data Scientist</Link>
                      <Link to="/careers/mba" onClick={() => setIsMobileMenuOpen(false)}>Investment Banker</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>CREATIVE</h4>
                      <Link to="/careers/fashion-design" onClick={() => setIsMobileMenuOpen(false)}>Fashion Designer</Link>
                      <Link to="/careers/graphic-design" onClick={() => setIsMobileMenuOpen(false)}>Graphic Designer</Link>
                      <Link to="/careers/architect" onClick={() => setIsMobileMenuOpen(false)}>Architect</Link>
                      <Link to="/careers/ux-ui" onClick={() => setIsMobileMenuOpen(false)}>UX/UI Designer</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <h4>GOVERNMENT</h4>
                      <Link to="/careers/ias" onClick={() => setIsMobileMenuOpen(false)}>IAS Officer</Link>
                      <Link to="/careers/ips" onClick={() => setIsMobileMenuOpen(false)}>IPS Officer</Link>
                      <Link to="/careers/ifs" onClick={() => setIsMobileMenuOpen(false)}>IFS Officer</Link>
                      <Link to="/careers/ssc" onClick={() => setIsMobileMenuOpen(false)}>Bank PO</Link>
                    </div>
                    <div className="mega-column menu-column">
                      <div className="admission-banner">
                        <h3>Career Guide</h3>
                        <p>Not sure what to choose?</p>
                        <button className="btn-apply-now" onClick={() => { setIsMobileMenuOpen(false); window.location.href = '/utilities'; }}>Take Quiz</button>
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
