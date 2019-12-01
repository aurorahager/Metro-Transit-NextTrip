import React from 'react';
import SearchView from './search-view';

function Search() {

  const [stop, setStop] = React.useState({ route: '', direction: '', stop: '' });

  const handleInputChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setStop({ ...stop, [name]: value });
  };

  // render content
  return (
    <div data-test="component-search">
      search
      <SearchView handleInputChange={handleInputChange} />
    </div>
  );
};

export default Search;