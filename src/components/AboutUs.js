import React, { Component } from 'react';
import {Card,CardBody,Col, Row } from 'reactstrap';
import about from '../assets/img/about.jpg';
import Intro from '../assets/img/about-p.png';
import team1 from '../assets/img/team1.jpg';
import team2 from '../assets/img/team2.jpg';
import team3 from '../assets/img/team3.jpg';
import team4 from '../assets/img/team4.jpg';
import Header from './Header';
import Footer from './Footer';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <Header/>
               <Card style={{backgroundColor:"#7d91fd"}}>
                   <CardBody>
                       <h3>About Us</h3>
                   </CardBody>
               </Card>
               <Card>
                   <CardBody>
                       <Row>
                           <Col xs="2">
                           <img src={about} alt="about" style={{width:"500px",height:"340px",marginLeft:"85px",marginTop:"75px"}}></img>
                           </Col>
                           <Col xs="2">
                           <img src={Intro} alt="about"style={{width:"500px",height:"340px",marginLeft:"400px",marginTop:"75px"}}></img>
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
                                <img src={team1} alt="about" style={{height:"230px",width:"200px",marginTop:"0px"}}></img>
                                <h4>John Doe</h4>
                                <p>Founder / CEO</p>
                            </CardBody>
                        </Card>
                   </Col>
                   <Col>
                        <Card style={{backgroundColor:"#ccc",width:"230px",height:"320px",marginLeft:"20px"}}>
                            <CardBody>
                                <img src={team3} alt="about" style={{height:"230px",width:"200px",marginTop:"0px"}}></img>
                                <h4>Alisha</h4>
                                <p>CEO/Founder</p>
                            </CardBody>
                        </Card>
                   </Col>
                   <Col>
                        <Card style={{backgroundColor:"#ccc",width:"230px",height:"320px",marginLeft:"20px"}}>
                            <CardBody>
                                <img src={team2} alt="about" style={{height:"230px",width:"200px",marginTop:"0px"}}></img>
                                <h4>Natasha</h4>
                                <p>CTO</p>
                            </CardBody>
                        </Card>
                   </Col>
                   <Col>
                        <Card style={{backgroundColor:"#ccc",width:"230px",height:"320px",marginLeft:"20px"}}>
                            <CardBody>
                                <img src={team4} alt="about" style={{height:"230px",width:"200px",marginTop:"0px"}}></img>
                                <h4>Thomus</h4>
                                <p>CTO</p>
                            </CardBody>
                        </Card>
                   </Col>
               </Row><br/><br/>
               <Footer/>
            </div>
        )
    }
}

export default AboutUs;
