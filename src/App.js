import React from 'react';
import ReactGA from 'react-ga';
import Navigation from './components/Navigation';
import SiteContent from './components/SiteContent';

function App() {
  ReactGA.initialize('UA-9828579-19');
  ReactGA.pageview(window.location.pathname);

  const colours = ['blue', 'green', 'yellow', 'pink'];

  const colour = colours[Math.floor(Math.random() * colours.length)];
  const containerClass = 'page-container ' + colour;

  return (
    <div className={containerClass}>
      {/* <Navigation /> */}
      <SiteContent />
    </div>
  );
}

export default App;
