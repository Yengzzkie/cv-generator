import "../styles/PersonalPanel.css";

export default function PersonalPanel({ setName, setEmail, setContact, clearPreview }) {

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handleContactChange(e) {
    setContact(e.target.value)
  }

  const handleClearInput = () => {
    clearPreview();
    const inputFields = document.querySelectorAll('.user-panel input');
    inputFields.forEach(input => {
      input.value = '';
    });
  };

  return (
    <div className="user-panel">
      <h1>Personal</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleNameChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleEmailChange}
      />
      <input
        type="tel"
        name="tel"
        placeholder="Contact"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        onChange={handleContactChange}
      />
      <button onClick={handleClearInput}>Clear</button>
    </div>
  );
}
