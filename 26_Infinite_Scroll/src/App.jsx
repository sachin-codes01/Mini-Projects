import { useState, useEffect, useRef } from "react";
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const observerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const data = await res.json();
      setItems((prev) => [...prev, ...data]);
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    const lastItem = document.querySelector("#last-item");
    if (!lastItem) return;
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    observerRef.current.observe(lastItem);
    return () => observerRef.current.disconnect();
  }, [items]);

  return (
    <div className='main-container'>
      <h2>Infinite Scroll</h2>

      {items.map((item, index) => (
        <div key={item.id} id={index === items.length - 1 ? "last-item" : ""} className="items-box">
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default App;