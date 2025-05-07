import React from 'react';
import bgImg from '../assets/home.jpeg';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <div
      style={{
        background: `url(${bgImg}) center/cover no-repeat fixed`,
        minHeight: '100vh',
      }}
    >
      <Hero />
    </div>
  );
};

export default HomePage;