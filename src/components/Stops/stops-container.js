import React from 'react';
import { Link } from 'react-router-dom';
import { TransitContext } from "../../context/transit-context";
import SearchReducer from '../../reducers/search-reducer';
import API from '../../utils/API';
import Header from './stops-header';
import StopsView from './stops-view';
import './Stops.css';

function Stops() {

  const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
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
    setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  };

  // get stop times from API
  const fetchTimes = () => {
    const url = `${stop.route}/${stop.direction}/${stop.stop}`;
    API.fetchTransitData(url, 'setTimes', dispatch);
  };

  // Render content
  return (
    <div data-test="component-stops">
      <Header />
      <main className="main">
        <StopsView currentTime={currentTime} times={state.times} />
        {/* reset stop state when navigating back */}
        <Link id="link" to="/" onClick={() => setStop({ route: '', direction: '', stop: '' })}>
          <i aria-hidden="true" class="left arrow icon"></i>
          Go Back
      </Link>
      </main>
    </div>
  );
};

export default Stops;