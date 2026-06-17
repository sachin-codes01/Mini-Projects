import './Dashboard.css'
const Dashboard = ({ search, setSearch, data, setSelectMeal, loading, error, hasSearched }) => {

  return (
    <div>
      <div className="search-wrapper">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search recipes..." />

        {search && <span className='clear-btn' onClick={() => { setSearch(''); }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>}

      </div>

      {loading && (
        <p className="status-msg">⏳ Recipes dhundh rahe hain...</p>
      )}

      {!loading && error && (
        <p className="status-msg error">{error}</p>
      )}

      {!loading && !error && hasSearched && data.length === 0 && (
        <p className="status-msg">😕 "{search}" ke liye koi recipe nahi mili.</p>
      )}

      {!loading && !error && (
        <div className="cards-container">
          {data && data.map((item) => (<div className="cards" key={item.idMeal} onClick={() => setSelectMeal(item)}>
            <h3>{item.strMeal}</h3>
            <p><b>Category:</b> {item.strCategory}</p>
            <p><b>Area:</b> {item.strArea}</p>
            <div className="recipe-image">
              <img src={item.strMealThumb} alt={item.strMeal} />
            </div>

          </div>))}
        </div>
      )}




    </div>
  )
}

export default Dashboard
