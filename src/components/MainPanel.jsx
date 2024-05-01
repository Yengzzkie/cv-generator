import { useState } from "react";
import PersonalPanel from "../components/PersonalPanel";
import PreviewPanel from "../components/PreviewPanel";
import EducationPanel from "../components/EducationPanel";
import '../styles/MainPanel.css';

export default function MainPanel() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('you@yourdomain.com');
  const [contact, setContact] = useState('123-456-7890')

  const [date, setDate] = useState({from: "2008", to: "2012"})
  const [school, setSchool] = useState('University of Youtube');

  function handleFromDateChange(from, to) {
    setDate({ from, to });
  }

  const clearPreview = () => {
    setName('Your Name'),
    setEmail('you@yourdomain.com')
    setContact('123-456-7890')
  }

  return (
    <div className="main-panel">
      <div className="sub-panel">
        <PersonalPanel setName={setName} setEmail={setEmail} setContact={setContact} clearPreview={clearPreview}/>
        <EducationPanel setSchool={setSchool} handleFromDateChange={handleFromDateChange} />
      </div>

      <PreviewPanel name={name} email={email} contact={contact} school={school} date={date} />
    </div>

  )
}

