import React,{Component} from 'react';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
        }
    }
    render(){
        return(
            <div>
                Register
            </div>
        )
    }
}

export default Register;
