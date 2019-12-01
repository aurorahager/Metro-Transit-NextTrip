import React from 'react';
import Stops from './components/Stops';
import Search from './components/Search';
import { TransitProvider } from './context/transit-context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <TransitProvider>
        <div className="App" data-test="component-app">
          <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/stops" component={Stops} />
          </Switch>
        </div>
      </TransitProvider>
    </Router>
  );
}

export default App;
