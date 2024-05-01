import { useState } from "react";

export default function EducationPanel({setSchool, setStudy, handleFromDateChange,}) {
  
  const [fromDate, setFromDate] = useState("January 2008");
  const [toDate, setToDate] = useState("January 2012");

  function handleSchoolChange(e) {
    setSchool(e.target.value);
  }

  function handleStudyChange(e) {
    setStudy(e.target.value);
  }

  function handleFromDateInputChange(e) {
    console.log(e.target.value);
    setFromDate(e.target.value);
    handleFromDateChange(e.target.value, toDate);
  }

  function handleToDateInputChange(e) {
    setToDate(e.target.value);
    handleFromDateChange(fromDate, e.target.value);
  }

  return (
    <div className="user-panel">
      <h1>Education</h1>
      <label htmlFor="from">From</label>
      <input type="number" onChange={handleFromDateInputChange} />

      <label htmlFor="to">To</label>
      <input type="number" onChange={handleToDateInputChange} />

      <input
        type="text"
        placeholder="School / University"
        onChange={handleSchoolChange}
      />

      <input
        type="text"
        placeholder="Field of study"
        onChange={handleStudyChange}
      />
    </div>
  );
}
