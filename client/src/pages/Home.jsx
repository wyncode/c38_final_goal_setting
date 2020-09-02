import React from 'react';
import Navigation from '../components/Navigation';
import HomePage from '../components/HomePage';
import HomeSlides from '../components/HomeSlides';
import GoalsHome from '../components/GoalsHome';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navigation />
      <HomePage />
      <GoalsHome />
      <HomeSlides />
      <Footer />
    </div>
  );
};

export default Home;
