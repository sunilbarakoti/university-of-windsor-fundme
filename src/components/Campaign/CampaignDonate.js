/*Onclick of the donate button on campaign card users are redirected to this component.
This page gives details about how donations are to be made.*/

import React from 'react';
import {Link} from 'react-router-dom';
import {
    Grid,
    Row,
    Col
  } from "react-bootstrap";
import { Card } from "../Card/Card.jsx";

const StreamDelete = () =>{
    return(
        <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            title="Contact Details"
                            content={
                                <div>
                                    <p>Please contact respective department MGO's(Major Gift Officer) for further information.</p>
                                    <div><h4>Faculty of Science</h4></div>
                                    <div>Name : Frank Lampard</div>
                                    <div>Phone : xxx-xxx-xxxx</div>
                                    <div>Email : xxxxxxxx@gmail.com</div>
                                    <br></br>
                                    <div><h4>Faculty of Law</h4></div>
                                    <div>Name : David Miller</div>
                                    <div>Phone : xxx-xxx-xxxx</div>
                                    <div>Email : xxxxxxxx@gmail.com</div>
                                    <br></br>
                                    <Link to={"/"} className="ui labeled icon basic button"><i class="left chevron icon"></i>Go Back</Link>
                                </div>
                            }
                        />
                    </Col>
                </Row>
            </Grid>
        </div>
    )
  }
export default StreamDelete;