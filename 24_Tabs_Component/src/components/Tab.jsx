import React from "react";

const Tab = ({ label, activeTab, onClick }) => {
  return (
    <button className={`tab-button ${activeTab === label ? "active" : ""}`}
      onClick={() => onClick(label)}> {label}</button>
  );
};

export default Tab;