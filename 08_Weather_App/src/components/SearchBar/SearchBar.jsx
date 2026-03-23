import React, { useState, useEffect } from 'react'
import './SearchBar.css'

const SearchBar = ({ sendSearch, notFound }) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (!notFound) setSearch('')
  }, [notFound])

  const handleSearch = () => {
    sendSearch(search)
  }

  return (
    <div className="search-wrapper">
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search city..." />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar