import React, { Component } from 'react';
import './Register.css';

class Register extends Component {

    render() {
        return (
            <React.Fragment className="register">
                <form className="registration-form" action="register" method="POST">
                    <h2>Neighborhood Mow Down Application</h2>
                    <h3>Thank you for your interest in the Neighborhood Mow Down program!</h3>
                    <p>Non-profit organizations with 501(c)(3) and 501(c)(4) status (including
                    Civic Clubs and Super Neighborhoods) are encouraged to apply. Individuals,
                    for-profit business, community development corporations, and political
                    organizations are not eligible to apply for the program.</p>
                    <p className="lastp">Please allow at least 10 days for your application to be processed.
                    This form is a statement of request and by receiving it the City of
                    Houston does not commit to transfer property.</p>
                    <label>Select Organization Type</label>
                    <select name="org_type">
                        <option value="nonprofit">Non-Profit Organization</option>
                        <option value="religious">Religious Institution</option>
                        <option value="civic">Civic Club</option>
                        <option value="council">Super Neighborhood Council</option>
                    </select>
                    <label>Please submit a copy of your Articles of Incorporation.</label>
                    <input type="file" />
                    <label>Please submit a copy of your IRS Letter of Determination (with your Federal Tax ID).</label>
                    <input type="file" />
                    <label>Organization Name</label>
                    <input type="text" />
                    <label>Contact Name</label>
                    <input type="text" />
                    <label>First Name</label>
                    <input type="text" />
                    <label>Last Name</label>
                    <input type="text" />
                    <label>Contact Phone</label>
                    <input type="text" />
                    <label>Contact Email</label>
                    <input type="email" />
                    <p><em>Please enter a mailing address where we may send correspondence related to the program.</em></p>
                    <label>Street Address</label>
                    <input type="text" />
                    <label>City</label>
                    <input type="text" />
                    <label>Zip Code</label>
                    <input type="text" />
                    <label>Questions or Comments</label>
                    <textarea></textarea>
                    <div className="button-container">
                        <button className="submit-button" type="submit">REGISTER</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default Register;
