import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date()

      const intervalTime = now.toLocaleTimeString('en-IN', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).toUpperCase()

      const intervalDate = now.toLocaleDateString('en-IN', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })

      setTime(intervalTime)
      setDate(intervalDate)

    }, 1000)

    return () => clearInterval(id)
  }, [])

  return (
    <div className="box">
      <div className="container">
        <div className="time"> <h2>{time}</h2> </div>
        <div className="date"> <p>{date}</p> </div>
      </div>
    </div>
  )
}

export default App
