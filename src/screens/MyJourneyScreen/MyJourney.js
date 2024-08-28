import React from "react"; 
import '../MyJourneyScreen/MyJourney.css'; 

export default function MyJourney () {
    return (
        <div className="myJourneyPage">
            <div className="myJourneyHeader">
                <h1 className="myJourneyHeaderText">MY JOURNEY</h1>
            </div>
            <div className="educAndEmployContainer">
                <div className="educContainer">
                    <div className="educTextContainer">
                        <p className="educAndEmployText">EDUCATION</p>
                    </div>
                    <div className="educInfoContainer">
                        <span className="uniText">BACHELOR OF SCIENCE IN COMPUTER ENGINEERING</span><br/>
                        <span className="schoolText">Technological Institute of the Philippines - Quezon City</span><br/>
                        <span className="syText">2020 - 2024</span>
                    </div>
                </div>
                <div className="employContainer">
                    <div className="employTextContainer">
                        <p className="educAndEmployText">EMPLOYMENT</p>
                    </div>
                    <div className="employInfoContainer">
                        <div className="companyDetailsContainer">
                            <div className="positionAndCompanyContainer">
                                <span className="uniText">FREELANCE FULL STACK DEVELOPER</span>
                                <span className="schoolText">Cafe Vanleroe</span>
                                <span className="syText">March 2024 - PRESENT</span>
                            </div>
                            <div className="workDetailsContainer">
                                <div className="workInfoContainer">
                                    <span className="syText">Currently developing a Point of Sale (POS) mobile application. 
                                                            Assigned to work on queue and history pages. </span>
                                </div>
                                <div className="techStackContainer">
                                    <div className="techStack">
                                        <span className="techStackText">HTML</span>
                                    </div>
                                    <div className="techStack">
                                        <span className="techStackText">CSS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}