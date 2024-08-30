import React from "react";
import "../HomeScreen/Home.css";

// Import my personal image
import MyImage from "../../assets/me.jpg";

export default function Home() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="homePage">
      <div className="profileDetailsContainer">
        <div className="webPageSectionContainer">
          <div className="webPageSection">
            <p
              className="webSectionText"
              onClick={() => scrollToSection("home")}
            >
              HOME
            </p>
            <p
              className="webSectionText"
              onClick={() => scrollToSection("myPortfolio")}
            >
              PORTFOLIO
            </p>
            <p
              className="webSectionText"
              onClick={() => scrollToSection("myJourney")}
            >
              MY JOURNEY
            </p>
            <p
              className="webSectionText"
              onClick={() => scrollToSection("contact")}
            >
              CONTACT
            </p>
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
                <a
                  href="https://www.linkedin.com/in/jane-blanca-ocampo-54361928a/"
                  className="linkedinText"
                >
                  LINKEDIN
                </a>
                <a
                  href="https://github.com/janeblanca"
                  className="githubText"
                >
                  GITHUB
                </a>
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
