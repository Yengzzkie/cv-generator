import '../styles/PreviewPanel.css';
import PersonalInfo from '../components/PersonalInfo';

export default function PreviewPanel({ name, email, contact, education, work }) {

  return (
    <div className="preview-panel" id="preview-panel">
      <PersonalInfo name={name} email={email} contact={contact} />
        <h3>Education</h3>
        <hr></hr>
        {education.map((educ) => (
          <div key={educ.id}>
            <div className="educ-info">
              <div><span>{educ.from}</span> - <span>{educ.to}</span></div>
              <p><b>{educ.school}</b></p>
              <p>{educ.field}</p>
            </div>
          </div>
        ))}

        <h3>Work Experience</h3>
        <hr></hr>
        {work.map((work) => (
          <div className="work-info-wrapper" key={work.id}>
            <div className="work-info">
              <div><span>{work.from}</span> - <span>{work.to}</span></div>
              <p><b>{work.company}</b></p>
              <p>{work.position}</p>
            </div>
            <div>
              <h4>Job description</h4>
              {work.description}
            </div>
        </div>
        ))}

      </div>
  )
}
