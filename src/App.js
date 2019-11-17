import React from 'react';
import logo from './logo.svg';
import './fr.css';
import Header from './Header.js';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import Content from './Content.js';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
