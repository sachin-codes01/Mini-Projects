import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const INC = () => {
    setCount(count + 1)
  }
  const DEC = () => {
    setCount(count - 1)

    // if(count===0){
    //   setCount(0)
    // }else{
    // setCount(count-1)
    // }

    // count === 0 ? setCount(0) : setCount(count-1)

    // setCount(c => (c === 0 ? 0 : c - 1))
  }

  return (
    <div className="box">
      <div className="counter">
        <span className={count > 99 ? 'high' : ''}>{count}</span>
        <div className="buttons">
          <button onClick={INC} disabled={count === 1000}>+</button>
          <button onClick={DEC} disabled={count === 0}>-</button>
        </div>
        <button onClick={() => { setCount(0) }}>Reset</button>
      </div>
    </div>
  )
}

export default App
