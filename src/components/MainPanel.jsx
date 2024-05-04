import { useState } from "react";
import { v4 as uuid } from "uuid";
import PersonalPanel from "../components/PersonalPanel";
import PreviewPanel from "../components/PreviewPanel";
import EducationPanel from "../components/EducationPanel";
import WorkPanel from "../components/WorkPanel";
import "../styles/MainPanel.css";

export default function MainPanel() {

  //states
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("you@yourdomain.com");
  const [contact, setContact] = useState("123-456-7890");
  const [education, setEducation] = useState([{id: uuid(), from: '2008', to: '2012', school: 'University of Youtube', field: 'BS Nursing'}])
  const [work, setWork] = useState([{id: uuid(), from: '2013', to: '2015', company: 'Apple Inc', position: 'iTunes Support', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, eveniet repellat! Labore earum ad sed iure a corrupti ratione tenetur quam. Sequi, magni quo. Et explicabo earum fuga illo iure.'}])
  
  //new object handlers
  function handleAddEducation() {
    let updatedEducation = [...education];
    updatedEducation.push({id: uuid(), from: '', to: '', school: '', field: ''})
    setEducation(updatedEducation)
  }

  function handleAddWork() {
    let updatedWork = [...work];
    updatedWork.push({id: uuid(), from: 'From', to: 'To', company: 'Company Name', position: 'Job Title / Position', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, eveniet repellat! Labore earum ad sed iure a corrupti ratione tenetur quam. Sequi, magni quo. Et explicabo earum fuga illo iure.'})
    setWork(updatedWork)
    console.log(updatedWork)
  }

  //clear input fields and preview
  const clearPreview = () => {
    setName("Your Name"), setEmail("you@yourdomain.com");
    setContact("123-456-7890");
  };


  return (
    <div className="main-panel"> 
      <div className="sub-panel">

      <a href="#preview-panel"><button className="preview-button">Preview</button></a>
        
        <PersonalPanel
          setName={setName}
          setEmail={setEmail}
          setContact={setContact}
          clearPreview={clearPreview}
        />

        <EducationPanel education={education} handleAddEducation={handleAddEducation} setEducation={setEducation} />

        <WorkPanel work={work} setWork={setWork} handleAddWork={handleAddWork} />
      
      </div>

      <PreviewPanel name={name} email={email} contact={contact} education={education} work={work} />

    </div>
  );
}