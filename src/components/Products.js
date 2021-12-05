import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import product1 from '../assets/img/products-1.jpg';
import product2 from '../assets/img/products-2.jpg';
import product3 from '../assets/img/products-3.jpg';
import Footer from './Footer';
import Header from './Header';

class Products extends Component {
    render() {
        return (
            <div>
                  <Header/>
                  <Card>
                    <CardBody style={{ backgroundColor: "#7d91fd" }}>
                        <h3>Products</h3>
                    </CardBody>
                </Card><br/><br/>
                  <Row style={{marginLeft:"300px"}}>
                      <Col xs="3">
                        <Card className="shadow-lg p-2 mb-2 bg-white rounded" >
                            <CardBody>
                                <img src={product1} alt="iphone" style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card className="shadow-lg p-2 mb-2 bg-white rounded">
                            <CardBody>
                                <img src={product2} alt="iphone" style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card className="shadow-lg p-2 mb-2 bg-white rounded">
                            <CardBody>
                                <img src={product3} alt="iphone" style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                  </Row><br/>
                  <Row style={{marginLeft:"300px"}}>
                  <Col xs="3">
                        <Card className="shadow-lg p-2 mb-2 bg-white rounded">
                            <CardBody>
                                <img src={product3} alt="iphone" style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card className="shadow-lg p-2 mb-2 bg-white rounded">
                            <CardBody>
                                <img src={product1} alt="iphone" style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card className="shadow-lg p-2 mb-2 bg-white rounded">
                            <CardBody>
                                <img src={product2} alt="iphone" style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                  </Row><br/>
                  <Row style={{marginLeft:"300px"}}>
                  <Col xs="3">
                        <Card className="shadow-lg p-2 mb-2 bg-white rounded">
                            <CardBody>
                                <img src={product1} alt="iphone" style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                      <Col xs="3">
                        <Card className="shadow-lg p-2 mb-2 bg-white rounded">
                            <CardBody>
                                <img src={product3} alt="iphone" style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col><Col xs="3">
                        <Card className="shadow-lg p-2 mb-2 bg-white rounded">
                            <CardBody>
                                <img src={product2} alt="iphone" style={{width:"200px",height:"150px"}}></img>
                            </CardBody>
                        </Card>
                      </Col>
                  </Row>
                  <Footer/>
            </div>
        )
    }
}

export default Products;