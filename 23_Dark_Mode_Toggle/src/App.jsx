import React from 'react'
import useTheme from './ThemeContext/useTheme'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <h1>Simple Dark/Light Mode</h1>
      <button onClick={toggleTheme}> Switch to {theme === "light" ? "Dark" : "Light"}</button>
      <p>Current theme: {theme}</p>
    </div>
  )
}

export default App
