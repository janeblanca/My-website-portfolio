import React from "react";
import "../ContactScreen/Contact.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  return (
    <div className="contactPage">
      <div className="contactPageContainer">
        <div className="contactHeaderContainer">
          <h1 className="contactHeaderText">GET IN TOUCH</h1>
        </div>
        <div className="contactDetailsContainer">
          <div className="contactDetails">
            <div className="phoneAndEmailContainer">
              <div className="phoneAndEmail">
                <span className="contactDetailsText">PHONE:</span>
                <span className="contactDetailsText">EMAIL ADDRESS:</span>
              </div>
              <div className="phoneAndEmailDetails">
                <span className="contactDetailsText">0929 - 215 - 9332</span>
                <span className="contactDetailsText">
                  janeblancaocampo@gmail.com
                </span>
              </div>
            </div>
            <div className="otherAccountsContainer">
              <div className="otherAccounts">
                <FacebookOutlinedIcon style={{ fontSize: 30, marginTop: 20 }} />
                <LinkedInIcon style={{ fontSize: 30, marginTop: 12 }} />
                <GitHubIcon style={{ fontSize: 30, marginTop: 12 }} />
              </div>
              <div className="otherAccountsDetails">
                <a
                  href="https://www.facebook.com/jnblnca13/"
                  className="otherAccountsText"
                >
                  https://www.facebook.com/jnblnca13/
                </a>
                <a
                  href="https://www.linkedin.com/in/jane-blanca-ocampo-54361928a/"
                  className="otherAccountsText"
                >
                  https://www.linkedin.com/in/jane-blanca-ocampo-54361928a/
                </a>
                <a
                  href="https://github.com/janeblanca"
                  className="otherAccountsText"
                >
                  https://github.com/janeblanca
                </a>
              </div>
            </div>
          </div>
          <div className="messageContainer">
            <span className="contactDetailsText">
              Or just write a message here:
            </span>
            <div className="emailContainer">
              <input
                type="text"
                placeholder="Your name"
                className="inputInfo"
              />
            </div>
            <div className="emailContainer">
              <input
                type="text"
                placeholder="Your email"
                className="inputInfo"
              />
            </div>
            <div className="inputMessageContainer">
              <textarea
                placeholder="Write your message..."
                className="inputMessage"
              ></textarea>
            </div>
            <div className="sendMessageContainer">
                <button className="sendMessageButton">
                    <span className="sendText">SEND</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
