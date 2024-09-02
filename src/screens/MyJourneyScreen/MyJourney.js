import React, { useState, useEffect } from "react";
import "../MyJourneyScreen/MyJourney.css";

// Firestore
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

export default function MyJourney() {
  console.log("Hello world");

  const [workExp, setWorkExp] = useState([]);
  const [educBg, setEducBg] = useState([]);

  useEffect(() => {
    const fetchWorkExp = () => {
      const workExpRef = collection(firestore, "WORK_EXPERIENCE");
      const unsubscribeWorkExp = onSnapshot(workExpRef, (snapshot) => {
        const workExpData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        // Sort companies by monthEnded
        const sortedWorkExp = workExpData.sort((a, b) => {
          if (a.monthEnded === "PRESENT") return -1;
          if (b.monthEnded === "PRESENT") return 1;

          const [monthA, yearA] = a.monthEnded.split(" ");
          const [monthB, yearB] = b.monthEnded.split(" ");
          const dateA = new Date(
            `${yearA}-${new Date(`${monthA} 1`).getMonth() + 1}`
          );
          const dateB = new Date(
            `${yearB}-${new Date(`${monthB} 1`).getMonth() + 1}`
          );
          return dateB - dateA;
        });

        setWorkExp(sortedWorkExp);
        console.log(sortedWorkExp);
      });
      return unsubscribeWorkExp;
    };
    const subsribeWorkExp = fetchWorkExp();

    const fetchEducBg = () => {
      const educBgRef = collection(firestore, "EDUCATION_BG");
      const unsubscribeEducBg = onSnapshot(educBgRef, (snapshot) => {
        const educBgData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setEducBg(educBgData);
        console.log(educBgData);
      });
      return unsubscribeEducBg;
    };
    const subscribeEducBg = fetchEducBg();

    return () => {
      subsribeWorkExp();
      subscribeEducBg();
    };
  }, []);

  return (
    <div className="myJourneyPage">
      <div className="myJourneyHeader">
        <h1 className="myJourneyHeaderText">MY JOURNEY</h1>
      </div>
      <div className="educAndEmploy">
      <div className="educAndEmployContainer">
        <div className="educContainer">
          <div className="educTextContainer">
            <p className="educAndEmployText">EDUCATION</p>
          </div>
          {educBg.map((educationBg, educBgIndex) => (
            <div key={educBgIndex} className="educInfoContainer">
              <span className="uniText">{educationBg.programTaken}</span>
              <br />
              <span className="schoolText">
                {educationBg.schoolName} - {educationBg.schoolAddress}
              </span>
              <br />
              <span className="syText">
                {educationBg.yearStarted} - {educationBg.yearGraduated}
              </span>
            </div>
          ))}
        </div>
        <div className="employContainer">
          <div className="employTextContainer">
            <p className="educAndEmployText">EMPLOYMENT</p>
          </div>
          <div className="employInfoContainer">
            {workExp.map((workExperience, workExpIndex) => (
              <div key={workExpIndex} className="companyDetailsContainer">
                <div className="positionAndCompanyContainer">
                  <span className="uniText">{workExperience.workPosition}</span>
                  <span className="schoolText">
                    {workExperience.companyName}
                  </span>
                  <span className="syText">
                    {workExperience.monthStarted} - {workExperience.monthEnded}
                  </span>
                </div>
                <div className="workDetailsContainer">
                  <div className="workInfoContainer">
                    <span className="syText">
                      {workExperience.workDescription}{" "}
                    </span>
                  </div>
                  <div className="techStackContainer">
                    {Object.values(workExperience.techStack).map(
                      (tech, techIndex) => (
                        <div key={techIndex} className="techStack">
                          <span className="techStackText">{tech}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
