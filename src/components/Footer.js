import React, {useState} from 'react';
import "./Footer.css";
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { LinkedinShareButton, LinkedinIcon } from 'react-share';

function Footer() 
{
    const [isSubscriptionVisible, setSubscriptionVisible] = useState(false);

    const toggleSubscriptionForm = () => {
    setSubscriptionVisible(!isSubscriptionVisible);
  };

    return (
        <footer className = "main-footer">
            <h4 className= "header">QUICK LINKS</h4>
            <hr />
            <div className = "container">
                <div className = "row">
                    {/*column1 */}
                    <div className = "col">
                        <h4 className="header">Clinic App Pro</h4>
                        <p id ="p">Health care refers to the efforts that medical professionals make to restore our physical and
                            mental well being. 
                        </p>
                    </div>
                    {/*column2 */}
                    <div className = "col">
                        <h4 className = "header">OverView</h4>
                        <ul className = "list-unstyled">
                            <li><a href = "#Medicines"className ="a">Medicines</a></li>
                            <li><a href = "#Healthcare Devices"className ="a">Healthcare Devices</a></li>
                            <li><a href = "#Health Progress"className ="a">Health Progress</a></li>
                        </ul>
                    </div>
                    {/*column3 */}
                    <div className = "col">
                        <h4 className = "header"> Company</h4>
                        <ul className = "list-unstyled">
                            <li><a href = "#Home"className ="a">Home</a></li>
                            <li><a href = "#About Us"className ="a">About Us</a></li>
                            <li><a href = "#Services"className ="a">Services</a></li>
                        </ul>
                    </div>
                    {/*column4 */}
                    <div className = "col">
                        <h4 className = "header"> Explore </h4>
                        <ul className = "list-unstyled">
                            <li><a href = "#Blogs&Feeds" className ="a">Blogs&Feeds </a></li>
                            <li><a href = "#Privacy Policy"className ="a">Privacy Policy</a></li>
                            <li><a href = "#Cookies"className ="a">Cookies</a></li>
                        </ul>
                    </div>
                    {/*column5 */}
                    <div className = "col">
                        <h4 className =  "header">Get In Touch</h4>
                        <FacebookShareButton url={'https://www.example.com'}target="_blank">
                        
                       <FacebookIcon size={28} square />
                       </FacebookShareButton>

                        <TwitterShareButton url={'https://www.example.com'}target="_blank">
        
                       
                       <TwitterIcon size={28} square />
                       </TwitterShareButton>
                       
                       
                       <LinkedinShareButton url={'https://www.example.com'}target="_blank">
        
                        
                       <LinkedinIcon size={28} square />
                       </LinkedinShareButton>
                        
                    </div>

                    <div className="col">
                        <h4 className="header">Subscribe to Our Newsletter</h4>
                        <button className="subscribe-button" onClick={toggleSubscriptionForm}>
                        {isSubscriptionVisible ? 'Close Subscription Form' : 'Subscribe Now'}
                        </button>
                     {isSubscriptionVisible && (
                    <form className="subscription-form">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>)}
        </div>
                </div>
                <hr />
                <div className = "row">
                    <p className = "col-sm">
                        &copy;{new Date().getFullYear()} Clinic App Pro | All rights reserved
                    </p>

                </div>
            </div>
            
        </footer>
    )
}

export default Footer;
