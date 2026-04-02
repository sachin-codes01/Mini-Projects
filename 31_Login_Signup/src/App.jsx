import React, { useState } from 'react'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const [users, setUsers] = useState([])
  const [loggedInUser, setLoggedInUser] = useState(null)

  const registerUser = (newUser) => {
    setUsers([...users, newUser])
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login users={users} setLoggedInUser={setLoggedInUser} />} />
        <Route path="/signup" element={<SignUp registerUser={registerUser} />} />
        <Route path="/home" element={<Home loggedInUser={loggedInUser} />} />
      </Routes>
    </Router>
  )
}

export default App
