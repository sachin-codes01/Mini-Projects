import { createContext, useContext } from "react";
import React, { useEffect, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [query, setQuery] = useState("")


    const BASE = "https://corsproxy.io/?"

    const getApiData = async (searchQuery) => {
        // console.log("API called with:", searchQuery)
    // console.log(movies)

        setLoading(true)
        setError(null)
        try {
            const API = searchQuery
                ? `${BASE}https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&query=${searchQuery}`
                : `${BASE}https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}`
            const res = await fetch(API)
            const data = await res.json()
            setMovies(data.results || [])
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            getApiData(query)
        }, 800)
        return () => clearTimeout(timer)
    }, [query])

    return (
        <AppContext.Provider value={{ movies, loading, error, query, setQuery }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider, useGlobalContext }