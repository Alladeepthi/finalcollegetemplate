import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Utilities from './pages/Utilities';
import Colleges from './pages/Colleges';
import CollegeDetails from './pages/CollegeDetails';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Careers from './pages/Careers';
import CareerDetails from './pages/CareerDetails';
import Exams from './pages/Exams';
import ExamDetails from './pages/ExamDetails';
import Dashboard from './pages/Dashboard';
import { UserProvider } from './context/UserContext';

import GlobalAdPopup from './components/GlobalAdPopup';
import GlobalSideAd from './components/GlobalSideAd';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Header />

          {/* Global Ads */}
          <GlobalAdPopup />
          <GlobalSideAd />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/utilities" element={<Utilities />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/colleges/:id" element={<CollegeDetails />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:id" element={<CareerDetails />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/exams/:id" element={<ExamDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
