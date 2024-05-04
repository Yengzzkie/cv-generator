import '../styles/EducationPanel.css';

export default function EducationPanel({ education, handleAddEducation, setEducation }) {

  function handleFromChange(e, id) {
    const updatedEducation = education.map(educ => educ.id === id ? {...educ, from: e.target.value} : educ);
    setEducation(updatedEducation);
  }

  function handleToChange(e, id) {
    const updatedEducation = education.map(educ => educ.id === id ? {...educ, to: e.target.value} : educ);
    setEducation(updatedEducation);
  }

  function handleSchoolChange(e, id) {
    const updatedEducation = education.map(educ => educ.id === id ? {...educ, school: e.target.value} : educ);
    setEducation(updatedEducation);
  }

  function handleFieldChange(e, id) {
    const updatedEducation = education.map(educ => educ.id === id ? {...educ, field: e.target.value} : educ);
    setEducation(updatedEducation);
  }

  function handleDeleteEducation(id) {
    const updatedEducation = education.filter(educ => educ.id !== id);
    setEducation(updatedEducation);
  }

  return (
    <div className="user-panel">
      {education.map((educ, index) => (
        <div key={index} className="education-panel">
          <button className='delete-education' onClick={() => {handleDeleteEducation(educ.id)}}><i className="fa-regular fa-trash-can"></i></button>
          <input type="number" placeholder="From" value={educ.from} onChange={(e) => handleFromChange(e, educ.id)} />
          <input type="number" placeholder="To" value={educ.to} onChange={(e) => handleToChange(e, educ.id)}/>
          <input type="text" placeholder="School / University" value={educ.school} onChange={(e) => handleSchoolChange(e, educ.id)} />
          <input type="text" placeholder="Field of Study" value={educ.field} onChange={(e) => handleFieldChange(e, educ.id)} />
        </div>
      ))}
      <button onClick={handleAddEducation}>Add New Education</button>
    </div>
  );
}
