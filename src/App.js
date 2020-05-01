import React from 'react';
import Weather from "./Weather";
import Forecast from "./Forecast";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="row">
        <Weather cityDefault="Lisbon"/>
        <Forecast />
        <footer>
          <a href="https://github.com/anaritavalente/weather-react" target="_blank"> Open-source project </a> coded by Ana Rita Valente
        </footer>
      </div>
    </div>
  );
}

export default App;
