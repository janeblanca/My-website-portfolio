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
              <p className="imText">I'm</p>
              <p className="nameText">Jane Blanca</p>
            </div>
            <div className="linkContainer">
              <p className="linkedinText">LINKEDIN</p>
              <p className="githubText">GITHUB</p>
            </div>
          </div>
        </div>
        <div className="mainButtonContainer">
          <div className="buttonContainer">
            <button className="downloadButton">
              <text className="downloadText">DOWNLOAD CV</text>
            </button>
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
