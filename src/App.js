import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MusicChart from './component/MusicChart';
import ItemDetail from './component/ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MusicChart />
        </Route>
        <Route exact path="/detail">
          <ItemDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
