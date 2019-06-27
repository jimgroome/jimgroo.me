import React from "react";
import ReactGA from "react-ga";
import SiteContent from "./components/SiteContent";

function App() {
  ReactGA.initialize("UA-142839175-1");
  ReactGA.pageview(window.location.pathname);

  const colours = ["blue", "green", "yellow", "pink"];

  const colour = colours[Math.floor(Math.random() * colours.length)];
  const containerClass = "page-container " + colour;

  return (
    <div className={containerClass}>
      <SiteContent />
    </div>
  );
}

export default App;
