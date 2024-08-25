import React from "react";
import '../HomeScreen/Home.css';

// Import my personal image 
import MyImage from "../../assets/me.jpg"; 

export default function Home() { 
    return (
        <div className="homeSizePage">
            <div className="infoAboutMe">
                <div className="websiteOptions">
                    <div className="optionsContainer">
                        <p>HELLO</p>
                        <p>PORTFOLIO</p>
                        <p>MY JOURNEY</p>
                        <p>CONTACT</p>
                    </div>
                </div>
            </div>
            <div className="profileContainer">
                <div className="grayProfileContainer">
                    <img src={MyImage} alt="MyImage" className="myImage"/>
                </div>
            </div>
        </div>
    );
}