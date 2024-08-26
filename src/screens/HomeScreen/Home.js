import React from "react";
import "../HomeScreen/Home.css";

// Import my personal image
import MyImage from "../../assets/me.jpg";

export default function Home() {
  return (
    <div className="homePage">
      <div className="profileDetailsContainer">
        <div className="webPageSectionContainer">
          <div className="webPageSection">
            <p className="webSectionText">HOME</p>
            <p className="webSectionText">PORTFOLIO</p>
            <p className="webSectionText">MY JOURNEY</p>
            <p className="webSectionText">CONTACT</p>
          </div>
        </div>
        <div className="introductoryContainer">
          <div className="introductory">
            <div className="hiContainer">
              <p className="hiText">Hi,</p>
            </div>
            <div className="myNameContainer">
              <p>I'm Jane Blanca</p>
            </div>
          </div>
        </div>
        <div className="detailsContainer">
          <div className="grayBox"></div>
        </div>
      </div>
      <div className="profilePictureContainer">
        <img src={MyImage} alt="MyImage" className="myProfilePicture" />
      </div>
    </div>
  );
}
