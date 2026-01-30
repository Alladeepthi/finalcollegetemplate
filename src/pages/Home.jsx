import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';

import WelcomeSection from '../components/WelcomeSection';
import CollegeJourney from '../components/CollegeJourney';
import FeaturedExams from '../components/FeaturedExams';
import CareerCompass from '../components/CareerCompass';
import CourseCategories from '../components/CourseCategories';
import CollegeFinder from '../components/CollegeFinder';
import OnlineDegrees from '../components/OnlineDegrees';

import './Home.css';

const Home = () => {
    return (
        <>
            <Hero />
            <div style={{ position: 'relative' }}>
                <Features />
                <CollegeFinder />

                <WelcomeSection />
                <CollegeJourney />
                <FeaturedExams />
                <CareerCompass />
                <CourseCategories />
                <OnlineDegrees />
            </div>
        </>
    );
};

export default Home;
