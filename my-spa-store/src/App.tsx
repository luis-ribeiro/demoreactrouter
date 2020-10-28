import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import AppProducts from './components/AppProducts';
import AppProductDetail from './components/AppProductDetail';

export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <AppHeader></AppHeader>
        <Router>
          <Switch>
            <Route path="/products/:id" component={AppProductDetail}>
            </Route>
            <Route path="/products">
              <AppProducts></AppProducts>
            </Route>
            <Route path="/cart">
              cart
            </Route>
            <Route path="/myprofile">
              myprofile
            </Route>
            <Route path="/">
              home
            </Route>
          </Switch>
        </Router>
        <AppFooter></AppFooter>
      </React.Fragment>
    );
  }
}

