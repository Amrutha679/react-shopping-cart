import React, { Component } from 'react';
import { Card, CardBody, Input, Row, Col, Button } from 'reactstrap';
import { withRouter } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "amrutha",
            password: "amrutha@123",
        }
    }
     handleSubmit(e) {
        e.preventDefault();
      
        if((this.username != '')){
            this.props.history.push("/");
        }
        else{
            alert('wrong!!');
        }
      }
      componentDidMount() {
        if((this.username != '')){
            this.props.history.push("/products")
        }
        else{
            alert('wrong!!');
        }
    }
    render() {
        return (
            <div>
                <Card style={{width:"500px",height:"300px",marginLeft:"30px"}}>
                    <CardBody>
                        <h5>Login Now</h5><br/>
                        <Row>
                            <Col xs="8" style={{marginLeft:"75px"}}>
                                <Input type="text" placeholder="Username"></Input><br/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="8" style={{marginLeft:"75px"}}>
                                <Input type="password" placeholder="Password"></Input><br/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="8">
                                <Button style={{width:"200px",marginLeft:"110px"}} onClick={e => this.handleSubmit(e)}>Login</Button>
                            </Col>
                        </Row><br/>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default withRouter(Login);