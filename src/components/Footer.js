import React, { Component } from 'react';
import {Card,CardBody} from 'reactstrap';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
               <section>
                    <footer>
                        <Card style = {{backgroundColor : "#363839",height:"100px",color:"white",textAlign:"center"}}>
                            <CardBody>
                                <p style={{marginTop:"20px"}}>Copyright © 2021. Designed & Developed by AHP Solutions Pvt Ltd</p>
                            </CardBody>
                        </Card>
                    </footer>
                </section>
            </div>
        )
    }
}

export default Footer;