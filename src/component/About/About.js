import React from 'react';
import phone from "../../image/phone.png"
import chat from "../../image/chat.jpg"
import file from "../../image/file.png"
const About = () => {
    return (
        <div>
            <center><h1 className="background">Live Contact Us</h1></center>
            <div className="d-flex justify-content-around my-5">
                <div>
                    <img src={phone} alt="" srcset="" />
                <h4>BY PHONE</h4>
                <p>(Monday to Friday, 9am to 6pm PST)</p>
                <h5>North America Toll-Free:1-877-930-7483</h5>
                <br />
                <p>International: 1-604-637-0780</p>

                </div>
                <div>
                    <img src={file} alt="" srcset="" />
                    <h4>START A NEW CASE</h4>
                    <p>Just send us your questions or concerns <p> by starting a new case and we will</p> give you the help you need.</p>
                    <br />

                   <button>Start</button>
                    
                </div>
                <div>
                    <img src={chat} alt="" srcset="" />
                    <h4>LIVE CHAT</h4>
                    <p>Chat with a member of our .</p>
                    <p>in-house team</p>
                    <button>Chat Here</button>
                    
                </div>
                
                
                
                
            </div>
        </div>
    );
};

export default About;