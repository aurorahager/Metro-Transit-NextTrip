import React from 'react';


function SearchView() {
  return (
    <div>
      <label htmlFor="selectRoute">Select a Route:</label>
      <select name="route" id="selectRoutes" data-test="search-dropdown">
        <option value="">Choose a Route</option>
      </select>
      <button data-test="submit-button">Submit</button>
    </div >
  );
};


export default SearchView;