import React from 'react';
import { Redirect } from 'react-router-dom';
import { TransitContext } from "../../context/transit-context";
import SearchView from './search-view';
import API from '../../utils/API';

function Search() {

  const [toStops, setToStops] = React.useState(false);
  const [routes, setRoutes] = React.useState([]);
  const [directions, setDirections] = React.useState([]);
  const [stops, setStops] = React.useState([]);
  const [stop, setStop] = React.useContext(TransitContext);

  // run on mount and on change of stop state
  React.useEffect(() => {
    handleConditionalData(stop.route, stop.direction);
  }, [stop]);

  const requestAPI = (url, setData) => {
    API.fetchTransitData(url).then(res => {
      setData(res);
    });
  };

  // request API with correct URL and setState
  const handleConditionalData = (routeId, directionId) => {
    // if there is not route or direction data being passed
    if (!routeId && !directionId) {
      requestAPI("Routes", setRoutes);
      // if there is just route data
    } else if (routeId && !directionId) {
      requestAPI(`Directions/${routeId}`, setDirections);
      //  if there is both route and direction data
    } else if (routeId && directionId) {
      requestAPI(`Stops/${routeId}/${directionId}`, setStops);
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
        routes={routes}
        directions={directions}
        stops={stops}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit} />
    </div>
  );
};

export default Search;