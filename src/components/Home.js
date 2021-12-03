import React, { Component } from 'react';
import { Navbar, Card, Container, CardBody, Col, Row, Button, Form, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../css/home.css';
import Logo from '../assets/img/logo.png';
import Hero from '../assets/img/hero.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
        }
    }
    render() {
        return (
            <div>
                <section>
                    <div className="hero-head">
                        {/* <img src={Hero}></img> */}
                        <Row>
                            <Container>
                                <h1 style={{ fontSize: "62px", color: "white", marginTop: "1px" }}>Buy & Sell Near You</h1><br />
                                <p style={{ fontSize: "20px", color: "white" }}>Join the millions who buy and sell from each other<br />
                                    everyday in local communities around the world<br />
                                </p>
                                <br />
                                <Card style={{ width: "1000px", marginLeft: "170px", height: "120px" }}>
                                    <CardBody>
                                        <Form>
                                            <Row style={{ marginTop: "20px" }}>
                                                <Col xs="3">
                                                    <Input type="text" placeholder="What are you looking for"></Input>
                                                </Col>
                                                <Col xs="3">
                                                    <Input type="text" placeholder="Category"></Input>
                                                </Col>
                                                <Col xs="3">
                                                    <Input type="text" placeholder="Location"></Input>
                                                </Col>
                                                <Col xs="3">
                                                    <Button className="primary">Search</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Container>
                        </Row>
                    </div>
                </section>
                <section className="content">
                    <Card style={{ marginTop: "10px", backgroundColor: "" }} >
                        <CardBody>
                            <h3>All Categories</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, provident!</p>
                            <br />
                            <br />
                            <Row style={{ marginLeft: "60px", marginRight: "50px" }}>
                                <Col md="3">
                                    <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                                        <CardBody>
                                            <i className="fa fa-laptop icon-bg-1" style={{ blockSize: "30px" }}> </i>
                                            <br />
                                            <h6>Electronics</h6>
                                            <hr />
                                            <p>Laptops</p>
                                            <p>Iphone</p>
                                            <p>Microsoft</p>
                                            <p>Monitors</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3">
                                    <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                                        <CardBody>
                                            <i className="fa fa-home icon-bg-2" style={{ blockSize: "30px" }}> </i>
                                            <h6>Restaurants</h6>
                                            <hr />
                                            <p>Cafe</p>
                                            <p>FastFood</p>
                                            <p>Restaurants</p>
                                            <p>Food Track</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3">
                                    <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                                        <CardBody>
                                            <i className="fa fa-shopping-basket icon-bg-2" style={{ blockSize: "30px" }}> </i>
                                            <h6>Shoppings</h6>
                                            <hr />
                                            <p>Men Wears</p>
                                            <p>Accessories</p>
                                            <p>Kids Wears</p>
                                            <p>It & Software</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3">
                                    <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                                        <CardBody>
                                            <i className="fa fa-laptop icon-bg-2" style={{ blockSize: "30px" }}> </i>
                                            <h6>Pets</h6>
                                            <hr />
                                            <p>Cats</p>
                                            <p>Birds</p>
                                            <p>Dogs</p>
                                            <p>Others</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </section>
            </div >
        )
    }
}

export default Home;
