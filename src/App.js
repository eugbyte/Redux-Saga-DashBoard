import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Overview from "./containers/overview/Overview.js";
import ProductForm from './containers/addProduct/addProduct.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path = "/add-product" component={ProductForm}/>
          <Route exact path = "/" component={Overview}/>
          <Route render={() => <h1>Page Not Found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
