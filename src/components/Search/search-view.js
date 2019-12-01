import React from 'react';


function SearchView({ routes, directions, stops, handleInputChange }) {
  return (
    <div>
      <label htmlFor="selectRoute">Select a Route:</label>
      <select name="route" id="selectRoutes" data-test="search-dropdown" onChange={handleInputChange}>
        <option value="">Choose a Route</option>
        {routes.map(route => (
          <option key={route.Route} value={route.Route}>{route.Description}</option>
        ))}
      </select>
      {/* direction select */}
      <label htmlFor="selectDirections">Select a Direction:</label>
      <select name="direction" id="selectDirections" data-test="search-dropdown" onChange={handleInputChange}>
        <option value={null}>Choose a Direction</option>
        {directions.map(direction => (
          <option key={direction.Value} value={direction.Value}>{direction.Text}</option>
        ))}
      </select>
      {/* stop select */}
      <label htmlFor="selectStop">Select a Stop:</label>
      <select name="stop" id="selectStop" data-test="search-dropdown" onChange={handleInputChange}>
        <option value={null}>Choose a Stop</option>
        {stops.map(stop => (
          <option key={stop.Value} value={stop.Value}>{stop.Text}</option>
        ))}
      </select>
      <button data-test="submit-button">Submit</button>
    </div >
  );
};


export default SearchView;