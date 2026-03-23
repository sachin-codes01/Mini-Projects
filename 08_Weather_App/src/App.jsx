import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import ApiCalling from './components/ApiCalling/ApiCalling'
import WeatherCard from './components/WeatherCard/WeatherCard'
import Loading from './components/Loading/Loading'

function App() {
  const [getsearch, setGetSearch] = useState('')
  const [apiData, setGetApiData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const handleApiData = (data) => {
    if (!data) {
      setNotFound(true)
      setGetApiData(null)
    } else {
      setNotFound(false)
      setGetApiData(data)
    }
  }

  return (
    <>
      <SearchBar sendSearch={setGetSearch} notFound={notFound} />
      <ApiCalling search={getsearch} sendApiData={handleApiData} sendLoading={setLoading} />
      <Loading loading={loading} />
      {!loading && (<WeatherCard apiData={apiData} notFound={notFound} searchQuery={getsearch} onReturn={() => setGetSearch('')} />)}
    </>
  )
}

export default App
