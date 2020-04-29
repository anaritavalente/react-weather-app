import React from 'react';
import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <div className="container"> 
        <Weather />
        <footer className="finalnote">
          <a href="https://github.com/anaritavalente/weather-react" target="_blank"> Open-sourced project </a> coded by Ana Rita Valente
        </footer>
      </div>
    </div>
  );
}

export default App;
