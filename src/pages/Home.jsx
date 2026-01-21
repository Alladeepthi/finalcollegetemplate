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

const Home = () => {
    return (
        <>
            <Hero />
            <main>
                <Features />
                <WelcomeSection />
                <CollegeJourney />
                <FeaturedExams />
                <CareerCompass />
                <CourseCategories />
                <CollegeFinder />
                <OnlineDegrees />
            </main>
        </>
    );
};

export default Home;
