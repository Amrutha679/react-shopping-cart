import React, { Component } from 'react';
import { Navbar, Card, Container, CardBody,Button } from 'reactstrap';
import Logo from '../assets/img/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
        }
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
                            <button type="submit" style={{ marginLeft: "100px", width: "100px", height: "35px" }}>Login</button>
                            <Button className="primary" style={{ marginLeft: "20px" }}>Cart</Button>
                        </ul>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;