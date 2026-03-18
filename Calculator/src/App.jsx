import { useState, useEffect } from 'react'
import './App.css'

import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isCalculated, setIsCalculated] = useState(false)

  const operators = ["+", "-", "*", "/", "%"]

  const handleClick = (value) => {
    const lastChar = input.slice(-1)

    if (isCalculated) {
      if (operators.includes(value)) {
        setInput(output + value)
      } else {
        setInput(value)
      }
      setOutput('')
      setIsCalculated(false)
      return
    }

    if (input === "" && operators.includes(value) && value !== "-") return

    if (operators.includes(value) && operators.includes(lastChar)) {
      setInput(input.slice(0, -1) + value)
      return
    }

    if (value === ".") {
      const parts = input.split(/[\+\-\*\/%]/)
      const lastNumber = parts[parts.length - 1]
      if (lastNumber.includes(".")) return
    }

    if (input === "" && value === ".") {
      setInput("0.")
      return
    }

    setInput(input + value)
  }

  const simpleCalc = (expression) => {

    let numbers = expression.split(/[\+\-\*\/%]/).map(Number)
    let ops = expression.replace(/[0-9.]/g, "").split("")

    for (let i = 0; i < ops.length; i++) {

      if (ops[i] === "*" || ops[i] === "/" || ops[i] === "%") {
        let a = numbers[i]
        let b = numbers[i + 1]
        let result

        if (ops[i] === "*") result = a * b
        if (ops[i] === "/") {
          if (b === 0) throw Error()
          result = a / b
        }
        if (ops[i] === "%") {
          result = (a * b) / 100
        }
        numbers.splice(i, 2, result)
        ops.splice(i, 1)
        i--
      }
    }

    let result = numbers[0]
    for (let i = 0; i < ops.length; i++) {
      if (ops[i] === "+") result += numbers[i + 1]
      if (ops[i] === "-") result -= numbers[i + 1]
    }
    return parseFloat(result.toFixed(10))
  }

  const calculate = () => {
    const lastChar = input.slice(-1)

    if (!input || operators.includes(lastChar)) return

    try {
      const result = simpleCalc(input)
      setOutput(result.toString())
      setIsCalculated(true)
    } catch {
      setOutput("Error")
      setIsCalculated(true)
    }
  }

  useEffect(() => {

    const handleKeyDown = (e) => {
      const key = e.key

      if (!isNaN(key)) handleClick(key)
      else if (operators.includes(key)) handleClick(key)
      else if (key === ".") handleClick(".")
      else if (key === "Enter") {
        e.preventDefault()
        calculate()
      }
      else if (key === "Backspace") {
        setInput(prev => prev.slice(0, -1))
      }
      else if (key === "Escape") {
        setInput('')
        setOutput('')
        setIsCalculated(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => { window.removeEventListener("keydown", handleKeyDown) }
  }, [input, output, isCalculated])


  return (
    <div className="box">
      <div className="container">

        <div className="screen">
          {!output && <div className="output"></div>}
          <div className="input">{input || '0'}</div>
          {output && ( <div className="output" style={{ fontSize: output.length > 15 ? "20px" : "28px" }}>{output}</div>)}
        </div>

        <div className="buttons">

          <button className="action ac"
            onClick={() => {
              setInput('')
              setOutput('')
              setIsCalculated(false)
            }}>AC</button>
          <button className="action" onClick={() => setInput(prev => prev.slice(0, -1))}><BackspaceOutlinedIcon className='mui-btn' /></button>
          <button className="operator" onClick={() => handleClick('%')}>%</button>
          <button className="operator" onClick={() => handleClick('/')}>/</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button className="operator" onClick={() => handleClick('*')}><CloseOutlinedIcon className='mui-btn' /></button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button className="operator" onClick={() => handleClick('-')}><RemoveOutlinedIcon className='mui-btn' /></button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button className="operator" onClick={() => handleClick('+')}><AddOutlinedIcon className='mui-btn' /></button>

          <button className="zero-btn" onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button className="equal" onClick={calculate}>=</button>

        </div>
      </div>
    </div>
  )
}

export default App