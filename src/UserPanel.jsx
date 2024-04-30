import "./UserPanel.css";

export default function UserPanel({ updatePreview, clearPreview }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updatePreview(name, value);
  };

  const handleClearInput = () => {
    clearPreview();
    const inputFields = document.querySelectorAll('.user-panel input');
    inputFields.forEach(input => {
      input.value = '';
    });
  };

  return (
    <div className="user-panel">
      <h1>User Panel</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleInputChange}
      />
      <input
        type="tel"
        name="contactNumber"
        placeholder="Contact Number"
        onChange={handleInputChange}
      />
      <button onClick={handleClearInput}>Clear</button>
    </div>
  );
}
