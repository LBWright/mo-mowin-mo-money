import React, { Component } from 'react';
import './Invoice.css';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';

class Invoice extends Component {

  render() {
    return (
      <div className="invoice">
        <h3>Neighborhood Mow Down Program</h3>
        <p>The City of Houston Department of Neighborhoods is proud to partner with community organizations and Keep Houston Beautiful to help prevent vacant lots from becoming overgrown. For safety reasons, all lots in the program must be approved by the City of Houston. Please feel free to contact us with questions at neighborhoods@houstontx.gov or 832.394.0678.</p>
        <p>Community organizations who have been approved for the Neighborhood Mow Down program should use this page to submit invoices.</p>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>
            Select your community group(*required)
          </ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>
            Select the street address for the lot you mowed(*required)
          </ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>
            City(*required)
          </ControlLabel>
          <Checkbox>
            Houston
          </Checkbox>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>
            State(*required)
          </ControlLabel>
          <Checkbox>
            Texas
          </Checkbox>
        </FormGroup>

      </div>

    );
  }
}

export default Invoice;
