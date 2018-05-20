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
                        <p><span className="bold">Address: </span>4910 Avenue I, Houston, TX 77029</p>
                        <p><span className="bold">Status: </span><b>Active</b></p>
                        <p><span className="bold">Super Neighborhood: </span>Second Ward</p>
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
                        <p><span className="bold">Address: </span>4510 Siegel Rd, Houston, TX 77029</p>
                        <p><span className="bold">Status: </span>Active</p>
                        <p><span className="bold">Super Neighborhood: </span>Near Northside</p>
                    </Col>
                </Row>
                <Row className="pageHeader">
                    <Col md={4}>
                        <img src= {require("../../images/overgrown4.png")} alt='lot' />
                    </Col>
                    <Col md={8} className="lotInfo">
                        {/* <LotInfo /> */}
                        <p><span className="bold">Address: </span>5926 High Star Dr, Houston, TX 77029</p>
                        <p><span className="bold">Status: </span>Active</p>
                        <p><span className="bold">Super Neighborhood: </span>Gulfton</p>
                    </Col>
                </Row>
                <Row className="pageHeader">
                    <Col md={4}>
                        <img src= {require("../../images/overgrown5.png")} alt='lot' />
                    </Col>
                    <Col md={8} className="lotInfo">
                        {/* <LotInfo /> */}
                        <p><span className="bold">Address: </span>1620 Bland St, Houston, TX 77029</p>
                        <p><span className="bold">Status: </span>Active</p>
                        <p><span className="bold">Super Neighborhood: </span>Acres Home</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default AllLots;