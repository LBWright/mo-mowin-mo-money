import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './Login.css';

class AllLots extends Component {
    render() {
        return (
            <Grid>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                   <h1 class="display-4">Fluid jumbotron</h1>
                   <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                 </div>
                </div>
                <Row>
                <Col xs={12}>
                    <div class="card lotcard">
                      <img class="card-img-top lotimage" src={require("../../images/overgrown3.jpeg")} alt="Card image cap" />
                      <div class="card-body">
                        <h5 class="card-title">123 Talshire</h5>
                        <p class="card-text">This yard needs mowed.</p>
                        <a href="#" class="btn btn-primary btn-all">Go somewhere</a>
                      </div>
                    </div>
                  <div class="card lotcard">
                    <img class="card-img-top lotimage" src={require("../../images/overgrown1.jpg")} alt="Card image cap" />
                    <div class="card-body">
                      <h5 class="card-title">777 Boeing</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary btn-all">Go somewhere</a>
                    </div>
                  </div>
                  <div class="card">
                    <img class="card-img-top lotimage" src={require("../../images/overgrown2.jpeg")} alt="Card image cap" />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary btn-all">Go somewhere</a>
                    </div>
                  </div>
                  </Col>
                  <Col xs={12}>
                     <div class="card">
                       <img class="card-img-top" src={require("../../images/pseudo-map.JPG")} alt="Card image cap" />
                     </div>
                   </Col>
                </Row>
            </Grid>
        )
    }
}

export default AllLots;