import { useState } from "react";
import PersonalPanel from "../components/PersonalPanel";
// import PreviewPanel from "../components/PreviewPanel";
import EducationPanel from "../components/EducationPanel";
import "../styles/MainPanel.css";

export default function MainPanel() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("you@yourdomain.com");
  const [contact, setContact] = useState("123-456-7890");

  const [education, setEducation] = useState([{from: '2008', to: '2012', school: 'University of Youtube', field: 'BS Nursing'}])
  
  function handleAddEducation() {
    let updatedEducation = [...education];
    updatedEducation.push({from: '', to: '', school: '', field: ''})
    setEducation(updatedEducation)
    console.log(education)
  }

  const clearPreview = () => {
    setName("Your Name"), setEmail("you@yourdomain.com");
    setContact("123-456-7890");
  };

  return (
    <div className="main-panel">
      <div className="sub-panel">
        <PersonalPanel
          setName={setName}
          setEmail={setEmail}
          setContact={setContact}
          clearPreview={clearPreview}
        />

        <h2>Education</h2>
        <EducationPanel education={education} handleAddEducation={handleAddEducation} setEducation={setEducation} />
      </div>
 
 
      <div className="preview-panel">

        <h1 className="name">{name}</h1>
        <div className="socials">
          <p>
            <i className="fa-brands fa-github"></i> :{" "}
          </p>
          <p>
            <i className="fa-brands fa-linkedin"></i> :
          </p>
          <p>
            <span className="material-symbols-outlined">language</span> :{" "}
            {email}
          </p>
          <p>
            <span className="material-symbols-outlined">phone_iphone</span>:{" "}
            {contact}
          </p>
        </div>


        <h2>Education</h2>
        <hr></hr>
        {education.map((edu, index) => (
          <div key={index}>
            <div className="educ-info">
              <div><span>{edu.from}</span> - <span>{edu.to}</span></div>
              <p><b>{edu.school}</b></p>
              <p>{edu.field}</p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
