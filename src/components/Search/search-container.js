import React from 'react';
import { Redirect } from 'react-router-dom';
import { TransitContext } from '../../context/transit-context';
import SearchReducer from '../../reducers/search-reducer';
import SearchView from './search-view';
import API from '../../utils/API';

function Search() {

  const [toStops, setToStops] = React.useState(false);
  const [state, dispatch] = React.useReducer(SearchReducer, { routes: [], directions: [], stops: [] });
  const [stop, setStop] = React.useContext(TransitContext);

  // run on mount and on change of stop state
  React.useEffect(() => {
    handleConditionalData(stop.route, stop.direction);
  }, [stop]);

  // request API with correct URL and pass setState
  const handleConditionalData = (routeId, directionId) => {
    // if there is not route or direction data being passed
    if (!routeId && !directionId) {
      API.fetchTransitData('Routes', 'setRoutes', dispatch);
      // if there is just route data
    } else if (routeId && !directionId) {
      API.fetchTransitData(`Directions/${routeId}`, 'setDirections', dispatch);
      //  if there is both route and direction data
    } else if (routeId && directionId) {
      API.fetchTransitData(`Stops/${routeId}/${directionId}`, 'setStops', dispatch);
    } else {
      return false;
    };
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setStop({ ...stop, [name]: value });
  };

  const handleSubmit = () => {
    !stop.route || !stop.direction || !stop.stop ?
      alert("select all") : setToStops(true);
  };

  // render content
  return (
    <div data-test="component-search">
      {/* redirect on state change */}
      {toStops ? <Redirect to="/stops" /> : null}
      <SearchView
        routes={state.routes}
        directions={state.directions}
        stops={state.stops}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit} />
    </div>
  );
};

export default Search;