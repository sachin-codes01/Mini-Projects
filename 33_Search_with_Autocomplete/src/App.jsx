import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [searchData, setSearchData] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [results, setResults] = useState([])
  const [activeIndex, setActiveIndex] = useState(-1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchData)
    }, 500)

    return () => clearTimeout(timer)
  }, [searchData])

  useEffect(() => {
    setActiveIndex(-1)
  }, [results])

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([])
      return
    }

    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${debouncedQuery}`
        );
        const data = await res.json()
        setResults(data.products || [])
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [debouncedQuery])

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))
    } else if (e.key === "Enter" && activeIndex >= 0) {
      setSearchData(results[activeIndex].title)
      setResults([]);
    }
  };

  return (
    <div className="container">
      <h2>Search Autocomplete</h2>

      <input type="text" placeholder="Search products..." value={searchData}
        onChange={(e) => setSearchData(e.target.value)} onKeyDown={handleKeyDown} className="input" />

      {loading && <p>Loading...</p>}

      {results.length > 0 && (
        <ul className="dropdown">
          {results.map((item, index) => (
            <li key={item.id} className={index === activeIndex ? "active" : ""}
              onClick={() => { setSearchData(item.title); setResults([]); }}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;