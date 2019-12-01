import React from 'react';


function SearchView({ routes, handleInputChange }) {
  return (
    <div>
      <label htmlFor="selectRoute">Select a Route:</label>
      <select name="route" id="selectRoutes" data-test="search-dropdown" onChange={handleInputChange}>
        <option value="">Choose a Route</option>
        {routes.map(route => (
          <option key={route.Route} value={route.Route}>{route.Description}</option>
        ))}
      </select>
      <button data-test="submit-button">Submit</button>
    </div >
  );
};


export default SearchView;