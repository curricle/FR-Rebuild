import React from 'react';
import './fr.css';
import Header from './Header.js';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import Content from './Content.js';
import DragonPage from './DragonPage.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Navigation />
        <DragonPage />
        <Footer />
      </div>
    );
  }
}

export default App;
