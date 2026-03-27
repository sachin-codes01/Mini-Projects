import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");
    const [categories, setCategories] = useState([]);
    const [categoriesLoading, setCategoriesLoading] = useState(true);

    const BASE = "https://corsproxy.io/?";
    const KEY = import.meta.env.VITE_TMDB_KEY;

    const fetchCategories = async () => {
        setCategoriesLoading(true);
        const categoryList = [
            { title: "🔥 Popular",     endpoint: "movie/popular" },
            { title: "⭐ Top Rated",   endpoint: "movie/top_rated" },
            { title: "🎬 Now Playing", endpoint: "movie/now_playing" },
            { title: "🗓️ Upcoming",    endpoint: "movie/upcoming" },
        ];
        try {
            const results = await Promise.all(
                categoryList.map(async (cat) => {
                    const res = await fetch(`${BASE}https://api.themoviedb.org/3/${cat.endpoint}?api_key=${KEY}`);
                    const data = await res.json();
                    return { title: cat.title, movies: data.results || [] };
                })
            );
            setCategories(results);
        } catch (err) {
            console.error("Failed to fetch categories:", err);
        } finally {
            setCategoriesLoading(false);
        }
    };

    const getApiData = async (searchQuery) => {
        setLoading(true);
        setError(null);
        try {
            const API = `${BASE}https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${searchQuery}`;
            const res = await fetch(API);
            const data = await res.json();
            setMovies(data.results || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (!query) return;
        const timer = setTimeout(() => getApiData(query), 800);
        return () => clearTimeout(timer);
    }, [query]);

    return (
        <AppContext.Provider value={{ movies, loading, error, query, setQuery, categories, categoriesLoading }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider, useGlobalContext };