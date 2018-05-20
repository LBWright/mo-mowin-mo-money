import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import LotInfo from './LotInfo';
import ClaimLot from './ClaimLot';
import './SingleLot.css';

class SingleLot extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={3}>
                        <img src='' alt='lot-image' />
                    </Col>
                    <Col sm={9}>
                        <LotInfo />
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <img src='' alt="lot-map" />
                    </Col>
                    <Col sm={4}>
                        <ClaimLot />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default SingleLot;