import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const[quoteData,setQuoteData] = useState('')
  const[loading,setLoading] = useState(true)
  const[error,setError] = useState(null)

  const QuoteApiFeatch = async () => {
    try {
      const res = await fetch('https://dummyjson.com/quotes/random')
      const data = await res.json();
      setLoading(false)
      setQuoteData(data)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  useEffect(()=>{ QuoteApiFeatch() },[])

  if(loading){
    return (
      <div className='loading'>
      <p>Loading...</p>
      </div>
    )
  }
  
  if(error){
    return (
      <div className='error'>
      <p>Could not load quote. Try again.</p>
      </div>
    )
  }

  return (
    <div className='box'>
      <p>" {quoteData.quote} "</p>
      <p>— {quoteData.author}</p>
      <div className="buttons">
      <button onClick={QuoteApiFeatch}>New quote</button>
      </div>
      </div>
  )
}

export default App