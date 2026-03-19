import { useState } from 'react'
import './App.css'

function App() {

  const [left, setLeft] = useState('')
  const [right, setRight] = useState('')
  const [from, setFrom] = useState('C')
  const [to, setTo] = useState('F')

  const convertTemp = (val, fromUnit, toUnit) => {
    if (val === '') return ''

    const num = parseFloat(val)
    if (isNaN(num)) return ''

    let tempInC

    if (fromUnit === 'C') tempInC = num
    else if (fromUnit === 'F') tempInC = (5 / 9) * (num - 32)
    else if (fromUnit === 'K') tempInC = num - 273.15

    if (toUnit === 'C') return tempInC.toFixed(2)
    if (toUnit === 'F') return ((9 / 5) * tempInC + 32).toFixed(2)
    if (toUnit === 'K') return (tempInC + 273.15).toFixed(2)
  }

  const handleLeft = (val) => {
    setLeft(val)
    const res = convertTemp(val, from, to)
    setRight(res)
  }

  const handleRight = (val) => {
    setRight(val)
    const res = convertTemp(val, to, from)
    setLeft(res)
  }

  const reset=()=>{
    setLeft('')
    setRight('')
  }

  return (
    <div className="box">
      <div className="container">

        <div className="field-1">
        <input value={left} onChange={(e) => handleLeft(e.target.value)} />

        <select value={from} onChange={(e) => {
          setFrom(e.target.value)
          handleLeft(left)
        }}>
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>
        </div>

        <div className="equals">=</div>

        <div className="field-2">
        <input value={right} onChange={(e) => handleRight(e.target.value)} />

        <select value={to} onChange={(e) => {
          setTo(e.target.value)
          handleLeft(left)
        }}>
          <option value="F">Fahrenheit</option>
          <option value="C">Celsius</option>
          <option value="K">Kelvin</option>
        </select>
        </div>

      </div>

      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App