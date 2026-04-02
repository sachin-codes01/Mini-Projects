import React, { useState } from "react";
import Tab from "./Tab";
import './Tabs.css';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <Tab key={tab.label} label={tab.label} activeTab={activeTab} onClick={setActiveTab} />
        ))}
      </div>

      <div className="tabs-content">
        {tabs.map((tab) => tab.label === activeTab && (<div key={tab.label}>{tab.content}</div>))}
      </div>
    </div>
  );
};

export default Tabs;