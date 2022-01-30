import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="d-flex justify-content-around background">
                <div>
                <h4>SUPPORT</h4>
                <p>Help Center</p>
                <p>Documentation</p>
                <p>FAQs</p>
                <p>Open a Ticket</p>

                </div>
                <div>
                    <h4>follow</h4>
                    <div><input type="email" name="" id="" placeholder="Enter Email" /> <br /> 
                    <input type="button" value="Send" /></div>
                    <p>phone: 01726856456</p>
                    <p>Email:abc @gmail.com</p>
                </div>
                <div>
                    <h4>RESOURCES</h4>
                    <p>Pricing</p>
                    <p>Terms of Use</p>
                    <p>Legal Disclosure (Impressum)</p>
                    <p>Privacy Policy (Datenschutz)</p>
                    <p>Newsletter</p>
                    
                </div>
                
                
                
                
            </footer>
            <center>Nadim Ⓒ copyright 2021</center>
        </div>
    );
};

export default Footer;