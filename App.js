import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPge from './pages/SearchPge';
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path='/search'>
            <SearchPge />
            </Route>
          <Route path='/'>
            <Home />
            </Route>
          </Switch> 
      </Router>
    </div>
  );
}

export default App;
