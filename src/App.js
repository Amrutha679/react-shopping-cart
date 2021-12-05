import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import React from 'react';
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App-header">
        <Router>
          <Switch>
            <Login path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={ContactUs}></Route>
            <Route path="/about" component={AboutUs} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withRouter(App);

