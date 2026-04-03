import React from 'react'
import { useNavigate } from 'react-router-dom'
import './steps.css'

const Dashboard = ({ personData, setPersonData, setPersonAddress }) => {
  const navigate = useNavigate()
  const { firstName, lastName } = personData;

  return (
    <div className="dashboard-container">

      <div className="dashboard-card">

        <div className="success-icon">✔</div>

        <h2>Registration Successful</h2>

        <p className="dashboard-message">
          {firstName} {lastName}, your form has been submitted successfully 🎉
        </p>

        <div className="dashboard-data">
          <span>Welcome to your dashboard</span>
        </div>

        <button onClick={() => {
          setPersonData({})
          setPersonAddress({})
          navigate('/step1')
        }} type='button' className="dashboard-btn"> Register Another User</button>

      </div>

    </div>
  )
}

export default Dashboard