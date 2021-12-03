import React, { Component } from 'react';
import { Navbar, Card, Row, CardBody, Col, Form, Input, Button } from 'reactstrap';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
        }
    }
    render() {
        return (
            <div>
                <Card>
                    <CardBody style={{ backgroundColor: "#7d91fd" }}>
                        <h3>Contact Us</h3>
                    </CardBody>
                </Card>
                <Card style={{ textAlign: "left" }}>
                    <CardBody style={{ marginLeft: "200px" }}>
                        <Row>
                            <Col>
                                <h6>Contact Us</h6><br />
                                <h1 style={{ fontSize: "64px" }}>Hello, what's<br /> on your mind?</h1><br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit dolor,<br /> blandit vel euismod ac, lentesque et dolor. Ut id tempus ipsum.</p>
                            </Col>
                            <Col style={{marginLeft:"20px"}}>
                                <Form>
                                    <Input type="text" placeholder="Name*" style={{ width: "300px", height: "45px",marginTop:"25px" }}></Input><br/>
                                    <Input type="text" placeholder="Email*" style={{ width: "300px", height: "45px" }}></Input>
                                    <Input type="text" placeholder="Mobile Number*" style={{ width: "300px", height: "45px",marginTop:"25px" }}></Input><br/>
                                    <Input type="select" placeholder="Name*" style={{ height: "45px",width:"300px" }}></Input><br />
                                    <textarea name="comment" form="usrform" style={{width:"300px",height:"150px"}}>Enter text here...</textarea><br/>
                                    <Button style={{marginLeft:"220px"}}>SUBMIT</Button>
                                </Form>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Products;
