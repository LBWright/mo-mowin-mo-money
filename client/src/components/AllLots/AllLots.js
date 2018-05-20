import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
// import './AllLots.css';

class AllLots extends Component {
    render() {
        return (
            <Grid className="pageContent">
                <Row className="pageHeader">
                    <Col md={4}>
                        <img src= {require("../../images/overgrown-lot.png")} alt='lot' />
                    </Col>
                    <Col md={8} className="lotInfo">
                        {/* <LotInfo /> */}
                        <p><span className="bold">Address: </span>151 Georgia St, Houston, TX 77029</p>
                        <p><span className="bold">Status: </span>Active</p>
                        <p><span className="bold">Super Neighborhood: </span>Clinton Park Tri-Community</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <img src= {require('../../images/google-map.png')} alt="map" />
                    </Col>
                    <Col md={4} className="claimLot">
                        {/* <ClaimLot /> */}
                        <h3>Do you want to claim this lot to work on?</h3>
                        <p className="equip">Remember, if you need equipment, please make a request while submitting claim.</p>
                        <Button bsStyle="primary">Claim Lot</Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default AllLots;