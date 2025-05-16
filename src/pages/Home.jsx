
import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import CategorySection from '../components/CategorySection.jsx';
//import FeaturedProducts from '../components/FeaturedProducts.jsx';
import Footer from '../components/Footer.jsx';
import './Home.module.css'; // Assuming you have a CSS file for styling
const Home = () => {
    return (
        <div>
        <HeroSection />
        <CategorySection />
        
        
        </div>
    );
};

export default Home;