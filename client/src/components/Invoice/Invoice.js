import React, { Component } from 'react';
import './Invoice.css';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { Label } from 'react-bootstrap';

class Invoice extends Component {

  render() {
    return (

      <div className="invoice">
        <form className="invoice-form" action="register" method="POST">
          <h3>Neighborhood Mow Down Program</h3>
          <p>The City of Houston Department of Neighborhoods is proud to partner with community organizations and Keep Houston Beautiful to help prevent vacant lots from becoming overgrown. For safety reasons, all lots in the program must be approved by the City of Houston. Please feel free to contact us with questions at neighborhoods@houstontx.gov or 832.394.0678.</p>
          <p>Community organizations who have been approved for the Neighborhood Mow Down program should use this page to submit invoices.</p>
          <div className='overarchingdiv'>
            <div className='inline'>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>
                  Select your community group *
                </ControlLabel>
                <FormControl className='select' componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>

              <FormGroup className='select' controlId="formControlsSelect">
                <ControlLabel>
                  Select the street address for the lot you mowed *
                </ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>

              <FormGroup controlId="formControlsSelect">
                <ControlLabel>
                  City *
                </ControlLabel>
                <Checkbox>
                  Houston
                </Checkbox>
              </FormGroup>

              <FormGroup controlId="formControlsSelect">
                <ControlLabel>
                  State *
                </ControlLabel>
                <Checkbox>
                  Texas
                </Checkbox>
              </FormGroup>
            </div>

            <div className='upload'>
              <FormGroup controlId="formControlsFile" >
                <ControlLabel>
                  Upload a picture of the lot before it was mowed *
                </ControlLabel>
                <ControlLabel htmlFor="fileUpload" style={{ cursor: "pointer", display: "block" }}><h4><Label bsStyle="success">Add file</Label></h4></ControlLabel>
                <FormControl.Static>"Before picture" must demonstrate that the grass on the lot was at least nine inches tall before it was mowed. Picture must be less than 4GB.</FormControl.Static>
              </FormGroup>

              <FormGroup controlId="formControlsFile" >
                <ControlLabel>
                  Upload a picture of the lot after it was mowed *
                </ControlLabel>
                <ControlLabel htmlFor="fileUpload" style={{ cursor: "pointer", display: "block" }}><h4><Label bsStyle="success">Add file</Label></h4></ControlLabel>
                <FormControl.Static>"After picture" must demonstrate that the grass on the lot was at least nine inches tall before it was mowed. Picture must be less than 4GB.</FormControl.Static>
              </FormGroup>
            </div>
          </div>

          <FormGroup className='textBox' controlId="formControlsText">
            <ControlLabel>
              Enter the HCAD Number for the lot you mowed *
            </ControlLabel>
            <FormControl placeholder=" Enter 13 digit number located on your property profile" />
          </FormGroup>

          <FormGroup className='textBox' controlId="formControlsText">
            <ControlLabel>
              Enter the date the property was mowed *
            </ControlLabel>
            <FormControl placeholder="mm/dd/yy" />
          </FormGroup>

          <FormGroup className='textBox' controlId="formControlsText">
            <ControlLabel>
              Invoice date (Please enter today's date) *
            </ControlLabel>
            <FormControl placeholder="mm/dd/yy" />
          </FormGroup>

          <FormGroup className='textBox' controlId="formControlsText">
            <ControlLabel>
              Your first name *
            </ControlLabel>
            <FormControl placeholder="First Name" />
          </FormGroup>

          <FormGroup className='textBox' controlId="formControlsText">
            <ControlLabel>
              Your last name *
            </ControlLabel>
            <FormControl placeholder="Last Name" />
          </FormGroup>

          <FormGroup className='textBox' controlId="formControlsText">
            <ControlLabel>
              E-mail *
            </ControlLabel>
            <FormControl placeholder="E-mail" />
          </FormGroup>

          <FormGroup className='textBox' controlId="formControlsText">
            <ControlLabel>
              Best phone number to contact you *
            </ControlLabel>
            <FormControl placeholder="Phone" />
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Questions and Comments</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Please share any questions or comments you have about the program in this space." />
          </FormGroup>

        </form>
      </div>

    );
  }
}

export default Invoice;
