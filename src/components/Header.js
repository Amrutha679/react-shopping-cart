import React, { Component } from 'react';
import {Button } from 'reactstrap';
import Logo from '../assets/img/logo.png';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.history.push('/login');
      }
    render() {
        return (
            <div>
              <header>
                    <div className="head">
                        <ul>
                            <img src={Logo} style={{ marginRight: "200px", marginTop: "10px" }}></img>
                            <li><a href="/">Home</a></li>
                            <li><a href='/products'>Products</a></li>
                            <li><a href='/contact'>Contact Us</a></li>
                            <li><a href='/about'>About Us</a></li>
                            <Button onClick= {this.handleClick} className="primary" style={{ marginLeft: "20px" }}>Logout</Button>
                        </ul>
                    </div>
                </header>
            </div>
        )
    }
}

export default withRouter(Header);