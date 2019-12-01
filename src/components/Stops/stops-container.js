import React from 'react';
import { Link } from 'react-router-dom';
import { TransitContext } from "../../context/transit-context";
import SearchReducer from '../../reducers/search-reducer';
import API from '../../utils/API';
import StopsView from './stops-view';

function Stops() {

  const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString());
  const [state, dispatch] = React.useReducer(SearchReducer, { times: [] });
  const [stop, setStop] = React.useContext(TransitContext);

  // fetchTimes on mount and update time every 30 seconds
  React.useEffect(() => {
    fetchTimes();
    const timer = setTimeout(
      () => { updateCurrentTime() },
      30000
    );
    return () => clearTimeout(timer);
  }, [currentTime]);


  // function to set time in state to current time
  const updateCurrentTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };

  // get stop times from API
  const fetchTimes = () => {
    const url = `${stop.route}/${stop.direction}/${stop.stop}`;
    API.fetchTransitData(url, 'setTimes', dispatch);
  };

  // Render content
  return (
    <div data-test="component-stops">
      <StopsView currentTime={currentTime} times={state.times} />
      {/* reset stop state when navigating back */}
      <Link to="/" onClick={() => setStop({ route: '', direction: '', stop: '' })}>
        Go Back
      </Link>
    </div>
  );
};

export default Stops;