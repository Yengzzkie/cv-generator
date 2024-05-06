import { useState } from 'react';
import '../styles/Header.css';

export default function Header() {
  const [fontStyle, setFontStyle] = useState('Arial');

  function handleSetFontStyle(event) {
    setFontStyle(event.target.value);

    const previewPanel = document.querySelector('.preview-panel')
    previewPanel.style.fontFamily = event.target.value;
  }

  return (
    <header>
      <h1>Customize</h1>
      <span>Font Style : </span><select value={fontStyle} onChange={handleSetFontStyle}>
        <option value="Arial">Arial</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>
    </header>
  );
}
