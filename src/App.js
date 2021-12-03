import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Route,BrowserRouter as Router,Routes,Switch} from 'react-router-dom';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';

class App extends React.Component {
  render(){
    return (
      <Router>
      <div className="App-header">
          <Header/>
          {/* <Login/> */}
          <Switch>
          <Route path="/" component={Login}/>
          <Route  path="/home" component={Home}/>
          <Route  path="/products" component={Products}/>
          <Route  path="/contact" component={ContactUs}></Route>
          <Route path="/about" component={AboutUs}/>
        </Switch>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
 
