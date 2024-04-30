import { useState } from "react";
import UserPanel from "./UserPanel";
import PreviewPanel from "./PreviewPanel";
import './MainPanel.css';

export default function MainPanel() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    contactNumber: ''
  });

  const updatePreview = (name, value) => {
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const clearPreview = () => {
    setUserInfo({
      name: '',
      email: '',
      contactNumber: ''
    })
  }

  return (
    <div className="main-panel">
      <UserPanel updatePreview={updatePreview} clearPreview={clearPreview}/>
      <PreviewPanel userInfo={userInfo} />
    </div>
  )
}

