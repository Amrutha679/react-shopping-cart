import React, { Component } from 'react';
import register from './assets/img/register.png';
import nlogo from './assets/img/naukri_Logo.png';
import './css/Login.css';
import {Button, Card,CardBody} from 'reactstrap';
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
        }
    }
    render(){
        return(
        <div className = "row">
        <div className = "head">
            <ul>
            <img src = {nlogo} style = {{marginRight:"50px",marginTop:"10px"}}></img>
                <li><a href = "#">JOBS</a></li>
                <li><a href = "#">RECRUITERS</a></li>
                <li><a href = "#">COMPANIES</a></li>
                <li><a href = "#">TOOLS</a></li>
                <li><a href = "#">SERVICES</a></li>
                <li><a href = "#">MORE</a></li>
                <li><a href = "#">LOGIN</a></li>
                <li><a href = "#">FOR EMPLOYERS</a></li>
            </ul>
        </div>
        <hr style = {{backgroundColor:"#eee"}}/>
            <div className = "leftcard">
                <p style = {{fontSize : "20px"}}><b>New to Naukri?</b></p>
                <p><span>&#10004; </span> checkOne click apply using naukri profile.</p>
                <p>&#10004; Get relevant job recommendations.</p>
                <p>&#10004; Showcase profile to top companies and consultants.</p>
                <p>&#10004; Know application status on applied jobs.</p>
                <button type ="submit" style = {{color : "#4a90e2",backgroundColor:"#ffffff",width:"220px",padding : "10px",marginLeft:"30px",marginTop:"5px",borderColor:"#4a90e2"}}>Register For Free</button>
                <div>
                <img src = {register} style = {{width:"240px",height:"150px",marginLeft : "270px"}}></img>
                </div>
            </div>
            <div className = "rightcard">
                <form>
                    <h5 style = {{fontSize : "18px",textAlign:"left",marginLeft:"74px"}}>Login</h5><br/>
                    <label style = {{fontSize:"12px",marginRight:"180px"}} htmlFor = "email"><b>Email ID / Username</b></label><br/>
                    <input type = "text" name ="email" placeholder = "Email ID / Username"/><br/><br/>
                    <label style = {{fontSize : "12px",marginRight:"240px"}}><b>Password</b></label><br/>
                    <input type = "password" name ="pwd" placeholder = "Enter Password"/><br/>
                    <a href = "#" style = {{textAlign:"right",textDecoration : "none",marginLeft:"180px",padding:"10px",fontSize:"11px",color:"#4a90e2"}}>Forgot Password?</a><br/><br/>
                    <button type="submit">Login</button><br/><br/>
                    <a href = "#" style = {{color : "#4a90e2" ,fontSize:"14px",textDecoration:"none" }}>Use OTP to Login</a><br/><br/>
                    <hr style = {{width : "200px"}}/><br/>
                    <button type="submit" style = {{backgroundColor : "#fafafa",color : "black",borderRadius:"25px",boxShadow:"4px 5px 4px lightgray",border:"3px",width:"320px",height:"40px"}}>Sign in with Google</button><br/><br/>
                    <button type="submit" style = {{backgroundColor : "#fafafa",color:"black",borderRadius:"25px",boxShadow:"4px 5px 4px lightgray",border:"3px",width:"320px",height:"40px"}}>Sign in with Facebook</button>
                </form>
            </div>
        </div>
        )
    }
}
export default Login;