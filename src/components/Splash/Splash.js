import React, { Component } from 'react';
import './Splash.css';

class Splash extends Component {

    render() {
        return (
            <div className="splash-page">
                <div className="header-container">
                    <img src= {require("./header.jpg")} alt='header' />
                </div>
                <div className="splash-text">
                    <p>The Neighborhood Mow Down Program began as a pilot 
                    program in October 2013 to help tackle the problem of 
                    overgrown, abandoned lots in Houston.  In partnership 
                    with Keep Houston Beautiful 501(c)(3), the program 
                    supports civic groups and nonprofit organizations to 
                    maintain abandoned lots in their neighborhoods and 
                    help eliminate eyesores and public safety hazards.</p>
                    <h3>How the Program Works</h3>
                    <p>The program offers community groups a modest fee 
                    for mowing City-approved lots.  The first mowing is 
                    carried out by City crews to make sure any dangerous 
                    material is removed and that it is safe for community 
                    partners to mow.  Then, the community groups take 
                    responsibility for the lots.  Participating groups 
                    are paid $50 for each approved cut once the work has 
                    been completed and verified.   Keep Houston Beautiful 
                    provides participating groups with access to tools 
                    and supplies for the projects.</p>
                    <p>Abandoned properties approved for the program are 
                    located throughout the city.  Participating groups 
                    are assigned to an approved property in their 
                    neighborhood. Civic associations and nonprofit 
                    organizations interested in maintaining a 
                    City-approved abandoned property are eligible to 
                    apply for participation in the program.</p>
                    <h4>Quality of Life</h4>
                    <p>The Mow Down program improves the quality of life 
                    in neighborhoods by eliminating overgrown lots. 
                    Overgrown lots bring down property value and create 
                    dangerous conditions in neighborhoods. Working 
                    together, we help create conditions to empower 
                    neighborhoods to create positive change, build unity, 
                    and support neighborhood pride.</p>
                    <h4>Efficiency and Savings</h4>
                    <p>The Mow Down program makes it easier for community 
                    organizations to partner with the City of Houston to 
                    maintain lots in communities. Because of our 
                    cost-savings, we are able to eliminate more weeded lots 
                    for less money. At $50 per cut versus a conservative 
                    estimate of $300 per cut by a City contractor, the 
                    program has saved the City approximately <b>$275,000</b>.</p>
                </div>
            </div>
        );
    }
}

export default Splash;