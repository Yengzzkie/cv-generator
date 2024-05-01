import '../styles/PreviewPanel.css';

export default function PreviewPanel({ name, email, contact, school, date }) {

  return (
    <div className="preview-panel">
      <h1 className='name'>{name}</h1>
      <div className='socials'>
        <p><i className="fa-brands fa-github"></i> : </p>
        <p><i className="fa-brands fa-linkedin"></i> :</p>
        <p><span className="material-symbols-outlined">language</span> : {email}</p>
        <p><span className="material-symbols-outlined">phone_iphone</span>: {contact}</p>
      </div>
      <h2>Education</h2>
      <hr></hr>
      <span>{date.from}</span> - <span>{date.to}</span>
      <p><b>{school}</b></p>

    </div>
  )
}
