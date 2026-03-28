import { useState } from 'react'
import './App.css'

function App() {
  const [palette, setPalette] = useState([])

  const randomColor = () => {
    const hex = Math.floor(Math.random() * 16777215).toString(16)
    return '#' + hex.padStart(6, '0')
  }

  const handleGenerate = () => {
    const newPalette = new Array(5).fill('').map(() => randomColor())
    setPalette(newPalette)
  }

  const copyToClipboard = (color) => {
    const textarea = document.createElement('textarea')
    textarea.value = color;
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)

    alert(`${color} copied!`);
  }

  return (
    <div className="app">
      <div className="header">
        <h1 className="title">🎨 Color Palette Generator</h1>
        <p className="subtitle">Click any color to copy its hex code</p>
        <button className="generate-btn" onClick={handleGenerate}>Generate Palette</button>
      </div>

      {palette.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">🌈</span>
          <p>Your palette will appear here</p>
        </div>
      ) : (
        <div className="colors">
          {palette.map((color, index) => (
            <div className="boxes-color" key={index} style={{ backgroundColor: color }}
              onClick={() => copyToClipboard(color)}>
              <div className="color-info">
                <span className="color-hex">{color.toUpperCase()}</span>
                <span className="color-copy">Copy</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App