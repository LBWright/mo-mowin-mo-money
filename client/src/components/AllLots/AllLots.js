import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
// import './AllLots.css';

class AllLots extends Component {
    render() {
        return (
            <Grid className="pageContent">
                <Row className="pageHeader">
                    <Col md={4}>
                        <img src= {require("../../images/overgrown1.jpg")} alt='lot' />
                    </Col>
                    <Col md={8} className="lotInfo">
                        {/* <LotInfo /> */}
                        <p><span className="bold">Address: </span>151 Georgia St, Houston, TX 77029</p>
                        <p><span className="bold">Status: </span><b>Active</b></p>
                        <p><span className="bold">Super Neighborhood: </span>Clinton Park Tri-Community</p>
                    </Col>
                </Row>
                <Row className="pageHeader">
                    <Col md={4}>
                        <img src= {require("../../images/overgrown2.jpeg")} alt='lot' />
                    </Col>
                    <Col md={8} className="lotInfo">
                        {/* <LotInfo /> */}
                        <p><span className="bold">Address: </span>2712 Drew St, Houston, TX 77029</p>
                        <p><span className="bold">Status: </span>Claimed</p>
                        <p><span className="bold">Super Neighborhood: </span>Third Ward</p>
                    </Col>
                </Row>
                <Row className="pageHeader">
                    <Col md={4}>
                        <img src= {require("../../images/overgrown3.jpeg")} alt='lot' />
                    </Col>
                    <Col md={8} className="lotInfo">
                        {/* <LotInfo /> */}
                        <p><span className="bold">Address: </span>151 Georgia St, Houston, TX 77029</p>
                        <p><span className="bold">Status: </span>Active</p>
                        <p><span className="bold">Super Neighborhood: </span>Clinton Park Tri-Community</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default AllLots;