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
import Placements from './pages/Placements';
import Dashboard from './pages/Dashboard';
import { UserProvider } from './context/UserContext';

import GlobalAdPopup from './components/GlobalAdPopup';
import ChatBot from './components/ChatBot';
import MobileStickyCTA from './components/MobileStickyCTA';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Header />

          {/* Global Ads */}
          <GlobalAdPopup />
          <ChatBot />

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
            <Route path="/placements" element={<Placements />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

          <Footer />
          <MobileStickyCTA />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
