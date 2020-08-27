import React from 'react';
import Navigation from '../components/Navigation';
import HomePage from '../components/HomePage';
import HomeSlides from '../components/HomeSlides';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navigation />
      <HomePage />
      <HomeSlides />

      <Footer />
    </div>
  );
};

export default Home;
