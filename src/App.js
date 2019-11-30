import React from 'react';
import Stops from './components/Stops';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App" data-test="component-app">
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/stops" component={Stops} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
