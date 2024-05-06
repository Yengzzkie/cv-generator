import '../styles/PersonalInfo.css';

export default function PersonalInfo({ name, email, contact }) {
  return (
    <div className="personal-info">
      <h1 className="name">{name}</h1>
      <div className="socials">
        <p>
          <i className="fa-brands fa-github"></i> :{" "}
        </p>
        <p>
          <i className="fa-brands fa-linkedin"></i> :
        </p>
        <p>
          <span className="material-symbols-outlined">language</span> : {email}
        </p>
        <p>
          <span className="material-symbols-outlined">phone_iphone</span>:{" "}
          {contact}
        </p>
      </div>
    </div>
  );
}
