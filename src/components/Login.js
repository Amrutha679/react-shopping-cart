import React, { Component} from 'react';
import { Card, CardBody, Input, Row, Col, Button, Alert } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import '../css/home.css';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "amrutha",
            password: "amrutha@123",
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push('/home');
      }
      updateCredits(e, typeHint) {
        if (typeHint === "password") {
          this.setState({
            password: e.target.value
          })
        }
        if (typeHint === "username") {
          this.setState({
            username: e.target.value
          })
        }
      }
      login = async (e) => {
        e.preventDefault();
    
        let payload = {
          userName: this.state.username.trim(),
          password: this.state.password
        }
        try {
          const { data } = await axios.post("http://localhost:3000/api/login", payload);
    
          if (data.response !== undefined) {
            localStorage.setItem('USER_ID', data.response.USER_ID);
            // localStorage.setItem('token', data.response.token);
            localStorage.setItem('date', new Date().toLocaleString('en-US', { hour12: false }));
            Alert('Login success');
          }
          if(this.state.username!='' && (this.state.password!='')){
              this.props.history.push('/home')
          }
          if (
            localStorage.getItem('USER_ID') !== null 
            && localStorage.getItem('USER_TYPE') !== null 
            // && localStorage.getItem('token') !== null
            ) {
            this.props.history.push('/')
          } else {
            this.props.history.push('/login')
          }
          return data;
        } catch (err) {
          //NotificationManager.warning('Login Failed');
          return err.message
        };
      }
    render() {
        return (
            <div className="login">
                <Card style={{width:"500px",height:"300px",marginLeft:"400px",marginTop:"150px",backgroundColor:"#f5f5f5"}}>
                    <CardBody>
                        <h5>Login Now</h5><br/>
                        <Row>
                            <Col xs="8" style={{marginLeft:"75px"}}>
                                <Input type="text" placeholder="Username" value={this.state.username} onChange={e => this.updateCredits(e, 'username')} ></Input><br/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="8" style={{marginLeft:"75px"}}>
                                <Input type="password" placeholder="Password" value={this.state.password} onChange={e => this.updateCredits(e, 'password')} />
                      <br/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="8">
                                <Button onClick= {e => this.login(e)} style={{width:"200px",marginLeft:"110px"}}>Login</Button>
                            </Col>
                        </Row><br/>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default withRouter(Login);