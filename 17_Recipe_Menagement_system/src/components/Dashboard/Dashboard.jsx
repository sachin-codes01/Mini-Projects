import './Dashboard.css'

const Dashboard = ({ setSearch, search, data, loading, error, setSelectedRecipe }) => {
    return (
        <div>
            <div className="search-wrapper">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search recipes..." />
                {search && (
                    <span className="clear-btn" onClick={() => { setSearch(""); setSelectedRecipe(null); }}>❌</span>
                )}
            </div>


            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="container">
                {!loading && !error && data?.map((item) => (
                    <div className="cards" key={item.idMeal} onClick={() => {
                        setSelectedRecipe(item)
                        window.scrollTo(0, 0)
                    }}>
                        <img src={item.strMealThumb} alt={item.strMeal} />

                        <h3>{item.strMeal.length > 50 ? item.strMeal.slice(0, 50) + "..." : item.strMeal}</h3>

                        <p><b>Category:</b> {item.strCategory}</p>
                        <p><b>Area:</b> {item.strArea}</p>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Dashboard
