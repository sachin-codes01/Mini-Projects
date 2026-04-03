import React, { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Progressindicator from './components/Progressindicator';
import Step1PersonalInfo from './components/Step1PersonalInfo';
import Step2Address from './components/Step2Address';
import Step3confirmation from './components/Step3confirmation';
import Dashboard from './components/Dashboard';

const App = () => {
  const [personData, setPersonData] = useState({})
  const [personAddress, setPersonAddress] = useState({})

  const location = useLocation()

  return (
    <div className='main-container'>
      {location.pathname !== '/dashboard' && <Progressindicator />}
      <Routes>
        <Route path="/" element={<Navigate to="/step1" />} />
        <Route path="/step1" element={<Step1PersonalInfo setPersonData={setPersonData} personData={personData} />} />
        <Route path="/step2" element={<Step2Address setPersonAddress={setPersonAddress} personAddress={personAddress} />} />
        <Route path="/step3" element={<Step3confirmation personData={personData} personAddress={personAddress} />} />
        <Route path="/dashboard" element={<Dashboard personData={personData} setPersonData={setPersonData} setPersonAddress={setPersonAddress} />} />
      </Routes>
    </div>
  )
}

export default App