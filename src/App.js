import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MenuPage from './pages/menu-page/menu-page.component.jsx';

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MenuPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
