import React, { Component } from 'react';
import { Button, Card,CardBody, CardGroup, Col, Row } from 'reactstrap';
import about from '../assets/img/about.jpg';
import Intro from '../assets/img/about-p.png';
import team1 from '../assets/img/team1.jpg';
import team2 from '../assets/img/team2.jpg';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
        }
    }
    render() {
        return (
            <div>
               <Card style={{backgroundColor:"#7d91fd"}}>
                   <CardBody>
                       <h3>About Us</h3>
                   </CardBody>
               </Card>
               <Card>
                   <CardBody>
                       <Row>
                           <Col xs="2">
                           <img src={about} style={{width:"500px",height:"340px",marginLeft:"85px",marginTop:"75px"}}></img>
                           </Col>
                           <Col xs="2">
                           <img src={Intro} style={{width:"500px",height:"340px",marginLeft:"400px",marginTop:"75px"}}></img>
                           </Col>
                       </Row>
                   </CardBody>
               </Card>
               <br/>
               <h4>Our Team</h4>
               <br/>
               <Row xs="5" style={{marginLeft:"180px"}}>
                   <Col>
                        <Card style={{backgroundColor:"#ccc",width:"230px",height:"320px",marginLeft:"20px"}}>
                            <CardBody>
                                <img src={team1} style={{height:"230px",width:"200px",marginTop:"0px"}}></img>
                                <h4>John Doe</h4>
                                <p>Founder / CEO</p>
                            </CardBody>
                        </Card>
                   </Col>
                   <Col>
                        <Card style={{backgroundColor:"#ccc",width:"230px",height:"320px",marginLeft:"20px"}}>
                            <CardBody>
                                <img src={team1} style={{height:"230px",width:"200px",marginTop:"0px"}}></img>
                                <h4>John Doe</h4>
                                <p>Founder / CEO</p>
                            </CardBody>
                        </Card>
                   </Col>
                   <Col>
                        <Card style={{backgroundColor:"#ccc",width:"230px",height:"320px",marginLeft:"20px"}}>
                            <CardBody>
                                <img src={team1} style={{height:"230px",width:"200px",marginTop:"0px"}}></img>
                                <h4>John Doe</h4>
                                <p>Founder / CEO</p>
                            </CardBody>
                        </Card>
                   </Col>
                   <Col>
                        <Card style={{backgroundColor:"#ccc",width:"230px",height:"320px",marginLeft:"20px"}}>
                            <CardBody>
                                <img src={team1} style={{height:"230px",width:"200px",marginTop:"0px"}}></img>
                                <h4>John Doe</h4>
                                <p>Founder / CEO</p>
                            </CardBody>
                        </Card>
                   </Col>
               </Row>
               <CardGroup>
                   <Card>
                       <p>0</p>
                       <h6>Happy Customers</h6>
                   </Card>
               </CardGroup>
            </div>
        )
    }
}

export default AboutUs;
