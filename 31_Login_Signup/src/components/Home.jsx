import React from 'react'
import './Login_SignUp.css'
import { useNavigate } from 'react-router-dom'


const Home = ({ loggedInUser }) => {
    const navigate = useNavigate()

  return (
    <div>
      <h2>Welcome, {loggedInUser?.name}</h2>
      <p>Email: {loggedInUser?.email}</p>
     <button className="logout-btn" onClick={() => navigate('/')}>Log Out</button>
    </div>
  )
}

export default Home
