import '../styles/EducationPanel.css';
import '../styles/WorkPanel.css';

export default function WorkPanel({ work, setWork, handleAddWork }) {

  function handleFromChange(e, index) {
    const updatedWork = [...work];
    updatedWork[index] = { ...updatedWork[index], from: e.target.value };
    setWork(updatedWork);
  }

  function handleToChange(e, index) {
    const updatedWork = [...work];
    updatedWork[index] = { ...updatedWork[index], to: e.target.value };
    setWork(updatedWork);
  }

  function handleSchoolChange(e, index) {
    const updatedWork = [...work];
    updatedWork[index] = { ...updatedWork[index], company: e.target.value };
    setWork(updatedWork);
  }

  function handleFieldChange(e, index) {
    const updatedWork = [...work];
    updatedWork[index] = { ...updatedWork[index], position: e.target.value };
    setWork(updatedWork);
  }

  function handleWorkDescChange(e, index) {
    const updatedWork = [...work];
    updatedWork[index] = { ...updatedWork[index], description: e.target.value };
    setWork(updatedWork);
  }

  function handleDeleteWork(index) {
    const updatedWork = [...work];
    updatedWork.splice(index, 1);
    setWork(updatedWork);
  }

  return (
    <div className="user-panel">
      {work.map((work, index) => (
        <div key={index} className="education-panel">
          <button className='delete-education' onClick={() => {handleDeleteWork(index)}}><i className="fa-regular fa-trash-can"></i></button>
          <input type="number" placeholder="From" onChange={(e) => handleFromChange(e, index)} />
          <input type="number" placeholder="To" onChange={(e) => handleToChange(e, index)}/>
          <input type="text" placeholder="Company Name" onChange={(e) => handleSchoolChange(e, index)} />
          <input type="text" placeholder="Job Title / Position" onChange={(e) => handleFieldChange(e, index)} />
          <textarea name="" id="" cols="25" rows="10" placeholder='Job Description' onChange={(e) => handleWorkDescChange(e, index)}></textarea>
        </div>
      ))}
      <button onClick={handleAddWork}>Add New Work</button>
    </div>
  );
}
