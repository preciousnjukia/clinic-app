import React from 'react';
import { ShareButtons } from 'react-share';
import "./Footer.css";
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { LinkedinShareButton, LinkedinIcon } from 'react-share';


function Footer() {
    return (
        <div className = "main-footer">
            <div className = "container">
                <div className = "row">
                    {/*column1 */}
                    <div className = "col">
                        <h4 className="header">Clinic App Pro</h4>
                        <p>Health care refers to the efforts that medical professionals make to restore our physical and
                            mental well-being. The term also includes the provision of services to maintain emotional well-being. 
                            We call people and organizations that provide these services health-care providers.
                        </p>
                    </div>
                    {/*column2 */}
                    <div className = "col">
                        <h4 className = "header">OverView</h4>
                        <ul className = "list-unstyled">
                            <li><a href = "#"className ="a">Medicines</a></li>
                            <li><a href = "#"className ="a">Healthcare Devices</a></li>
                            <li><a href = "#"className ="a">Health Progress</a></li>
                        </ul>
                    </div>
                    {/*column3 */}
                    <div className = "col">
                        <h4 className = "header"> Company</h4>
                        <ul className = "list-unstyled">
                            <li><a href = "#"className ="a">Home</a></li>
                            <li><a href = "#"className ="a">About Us</a></li>
                            <li><a href = "#"className ="a">Services</a></li>
                        </ul>
                    </div>
                    {/*column4 */}
                    <div className = "col">
                        <h4 className = "header"> Explore </h4>
                        <ul className = "list-unstyled">
                            <li><a href = "#" className ="a">Blogs&Feeds </a></li>
                            <li><a href = "#"className ="a">Privacy Policy</a></li>
                            <li><a href = "#"className ="a">Cookies</a></li>
                        </ul>
                    </div>
                    {/*column5 */}
                    <div className = "col">
                        <h4 className =  "header">Follow us</h4>
                        <FacebookShareButton url={'https://www.example.com'}>
                          <FacebookIcon size={28} round />
                        </FacebookShareButton>

                        <TwitterShareButton url={'https://www.example.com'}>
                          <TwitterIcon size={28} round />
                        </TwitterShareButton>

                        <LinkedinShareButton url={'https://www.example.com'}>
                          <LinkedinIcon size={28} round />
                        </LinkedinShareButton>                        
                      
                        
                    </div>
                </div>
                <hr />
                <div className = "row">
                    <p className = "col-sm">
                        &copy;{new Date().getFullYear()} Clinic App Pro | All rights reserved
                    </p>

                </div>
            </div>
            
        </div>
    )
}

export default Footer;
