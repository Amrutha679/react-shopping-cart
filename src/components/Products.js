import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import product1 from '../assets/img/products-1.jpg';
import product2 from '../assets/img/products-2.jpg';
import product3 from '../assets/img/products-3.jpg';

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
                  <Row style={{marginLeft:"300px"}}>
                      <Col xs="3">
                        <Card >
                            <CardBody>
                                <img src={product1} style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card>
                            <CardBody>
                                <img src={product2} style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card>
                            <CardBody>
                                <img src={product3} style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                  </Row><br/>
                  <Row style={{marginLeft:"300px"}}>
                  <Col xs="3">
                        <Card>
                            <CardBody>
                                <img src={product3} style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card>
                            <CardBody>
                                <img src={product1} style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card>
                            <CardBody>
                                <img src={product2} style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                  </Row><br/>
                  <Row style={{marginLeft:"300px"}}>
                  <Col xs="3">
                        <Card>
                            <CardBody>
                                <img src={product1} style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card>
                            <CardBody>
                                <img src={product3} style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col><Col xs="3">
                        <Card>
                            <CardBody>
                                <img src={product2} style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                  </Row>
            </div>
        )
    }
}

export default Products;