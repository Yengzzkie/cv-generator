import './PreviewPanel.css';

export default function PreviewPanel({ userInfo }) {
  return (
    <div className="preview-panel">
      <h1>Preview Panel</h1>
      <p>Name: {userInfo.name}</p>
      <p>Email: {userInfo.email}</p>
      <p>Contact Number: {userInfo.contactNumber}</p>
    </div>
  )
}
