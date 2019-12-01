import React from 'react';


function SearchView({ handleInputChange }) {
  return (
    <div>
      <label htmlFor="selectRoute">Select a Route:</label>
      <select name="route" id="selectRoutes" data-test="search-dropdown" onChange={handleInputChange}>
        <option value="">Choose a Route</option>
      </select>
      <button data-test="submit-button">Submit</button>
    </div >
  );
};


export default SearchView;