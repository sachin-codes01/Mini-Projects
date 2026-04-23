import { useState } from 'react'
import './App.css'
import Api from './components/Api/Api.jsx'
import Dashboard from './components/Dashboard/Dashboard'
import Recipe from './components/Recipe/Recipe'

function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  return (
    <>
      <h3 className='heading'>Recipe Management System</h3>

      <Api search={search} setData={setData} setLoading={setLoading} setError={setError} />
      {selectedRecipe ? (
        <Recipe recipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe} />
      ) : (
        <Dashboard setSearch={setSearch} search={search} data={data} loading={loading} error={error} setSelectedRecipe={setSelectedRecipe} />)}
    </>
  )
}

export default App
