import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MenuPage from './pages/menu-page/menu-page.component.jsx';
import CPUPage from './pages/cpu-page/cpu-page.component.jsx';
import PlayerPage from './pages/player-page/player-page.component.jsx';

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MenuPage} />
          <Route exact path='/cpu' component={CPUPage} />
          <Route exact path='/player' component={PlayerPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
