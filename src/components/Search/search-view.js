import React from 'react';
import './Search.css';
import logo from '../../assets/metro-transit-vector-logo.png';

function SearchView({ routes, directions, stops, handleInputChange, handleSubmit }) {
  return (
    <main className="wrapper" data-test="component-search-view">
      <div className="box aloneBox">
        <img src={logo} alt="Metro Transit Logo" className="ui large image" />
      </div>
      <div className="box aloneBox" >
        <h1>Let Us Take You <span id="blue">Somewhere</span><span id="red">.</span></h1>
      </div >
      <div className="box">
        {/* route select */}
        <select aria-label="Select a Route" className="ui selection dropdown" name="route" id="selectRoutes" data-test="search-dropdown-route" onChange={handleInputChange}>
          <option value={null}>Choose a Route</option>
          {routes.map(route => (
            <option key={route.Route} value={route.Route}>{route.Description}</option>
          ))}
        </select>
        {/* direction select */}
        <select aria-label="Select a Direction" className="ui selection dropdown" name="direction" id="selectDirections" data-test="search-dropdown-direction" onChange={handleInputChange}>
          <option value={null}>Choose a Direction</option>
          {directions.map(direction => (
            <option key={direction.Value} value={direction.Value}>{direction.Text}</option>
          ))}
        </select>
      </div>
      {/* stop select */}
      <div className="box bottomBox">
        <select aria-label="Select a Stop" className="ui selection dropdown" name="stop" id="selectStop" data-test="search-dropdown-stop" onChange={handleInputChange}>
          <option value={null}>Choose a Stop</option>
          {stops.map(stop => (
            <option key={stop.Value} value={stop.Value}>{stop.Text}</option>
          ))}
        </select>
        <button className="ui button" data-test="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </main >
  );
};


export default SearchView;