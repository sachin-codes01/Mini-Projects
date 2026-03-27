import React from 'react'
import './Search.css'
import { useGlobalContext } from '../../Context'

const Search = () => {
  const { query, setQuery } = useGlobalContext()
  return (
    <div className="search-wrapper">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="search-input"
      />
      {query && (
        <button className="clear-btn" onClick={() => setQuery('')}>✕</button>
      )}
    </div>
  )
}

export default Search