import React from "react"; 
import '../PortfolioScreen/Portfolio.css'; 
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Portfolio() {
    return (
        <div className="portfolioPage">
            <div className="headerContainer">
                <h1 className="headerText">MY PORTFOLIO</h1>
            </div>
            <div className="projectContainer">
                <div className="arrowContainer">
                <ArrowBackIosIcon className="arrowIcon" style={{ fontSize: 100 }}/>
                </div>
                <div className="demoVideoContainer">

                </div>
                <div className="projectDetailsContainer">
                    <div className="projectTitleContainer">

                    </div>
                    <div className="projectInfoContainer">

                    </div>
                    <div className="techToolsContainer">

                    </div>
                    <div className="projRoleContainer">

                    </div>
                </div>
                <div className="arrowContainer">
                    <ArrowForwardIosIcon className="arrowIcon" style={{ fontSize: 100 }}/>
                </div>
            </div>
        </div>
    );
}