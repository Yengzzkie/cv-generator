import '../styles/EducationPanel.css';

export default function EducationPanel({ education, handleAddEducation, setEducation }) {

  function handleFromChange(e, index) {
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], from: e.target.value };
    setEducation(updatedEducation);
  }

  function handleToChange(e, index) {
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], to: e.target.value };
    setEducation(updatedEducation);
  }

  function handleSchoolChange(e, index) {
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], school: e.target.value };
    setEducation(updatedEducation);
  }

  function handleFieldChange(e, index) {
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], field: e.target.value };
    setEducation(updatedEducation);
  }

  function handleDeleteEducation(index) {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  }

  return (
    <div className="user-panel">
      {education.map((educ, index) => (
        <div key={index} className="education-panel">
          <button className='delete-education' onClick={() => {handleDeleteEducation(index)}}><i className="fa-regular fa-trash-can"></i></button>
          <input type="number" placeholder="From" value={educ.from} onChange={(e) => handleFromChange(e, index)} />
          <input type="number" placeholder="To" value={educ.to} onChange={(e) => handleToChange(e, index)}/>
          <input type="text" placeholder="School / University" value={educ.school} onChange={(e) => handleSchoolChange(e, index)} />
          <input type="text" placeholder="Field of Study" value={educ.field} onChange={(e) => handleFieldChange(e, index)} />
        </div>
      ))}
      <button onClick={handleAddEducation}>Add New Education</button>
    </div>
  );
}
