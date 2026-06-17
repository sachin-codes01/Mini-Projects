import { useState } from 'react'
import './App.css'
import Api from './components/Api/Api.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Recipe from './components/Recipe/Recipe.jsx'

const App = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [selectMeal, setSelectMeal] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

  return (
    <div>
      <h3 className='heading'>Recipe Management System</h3>

      <Api search={search} setData={setData} setLoading={setLoading} setError={setError} setHasSearched={setHasSearched}></Api>
      {selectMeal === null ?
        <Dashboard search={search} setSearch={setSearch} data={data} setSelectMeal={setSelectMeal} loading={loading} error={error} hasSearched={hasSearched} ></Dashboard>
        :
        <Recipe selectMeal={selectMeal} setSelectMeal={setSelectMeal}></Recipe>}
    </div>
  )
}

export default App
