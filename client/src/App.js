import React, { useState, useEffect } from "react";
import './App.css';
import Map from './components/Map';
import Header from './components/Header';
import Trends from "./components/Trends";
import ByLang from "./components/Trends/ByLang";

function App() {
  const [location, setLocation] = useState([32.0468717, 34.7632573]);
  const geo = navigator.geolocation;
  useEffect(() => {
    if ('geolocation' in navigator) {
      geo.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setLocation([longitude, latitude]);
      });
    }

    else { }

  }, []);

  return (
    <>
      <Header />
      {/* <Map center={location} /> */}
      <Trends center={location} />
      {/* <ByLang center={location} /> */}
    </>
  );
}

export default App;
