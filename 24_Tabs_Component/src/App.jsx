import React from "react";
import Tabs from "./components/Tabs";
import './App.css';

function App() {

  const tabData = [
    { label: "Home", content: <p>Welcome to the Home page!</p> },
    { label: "Profile", content: <p>This is your profile.</p> },
    { label: "Settings", content: <p>Adjust your settings here.</p> },
  ];

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1>React Tabs Component</h1>
      <Tabs tabs={tabData} />
    </div>
  );
}

export default App;