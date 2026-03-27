import React from 'react'
import { useGlobalContext } from "../../Context"
import './Movies.css'
import { NavLink } from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton'

const MovieSkeleton = () => (
  <div className="movie-card skeleton-card">
    <Skeleton
      variant="rectangular"
      sx={{ bgcolor: '#2e3345', height: 0, paddingBottom: '150%' }}
      animation="wave"
    />
    <div className="skeleton-info">
      <Skeleton variant="text" width="80%" height={18} sx={{ bgcolor: '#2e3345' }} animation="wave" />
      <Skeleton variant="text" width="40%" height={14} sx={{ bgcolor: '#2e3345' }} animation="wave" />
    </div>
  </div>
)

const Movies = () => {
  const { movies, loading, error } = useGlobalContext()

  if (error) return <p className="movies-status">Error: {error}</p>

  if (loading) return (
    <div className="container">
      <div className="movies-container">
        {Array.from({ length: 12 }).map((_, i) => (
          <MovieSkeleton key={i} />
        ))}
      </div>
    </div>
  )

  if (movies.length === 0) return <p className="movies-status">No movies found.</p>

  return (
    <div className="container">
      <div className='movies-container'>
        {movies.map((movie) => (
          <NavLink to={`/movie/${movie.id}`} key={movie.id} className='movie-card'>
            <img
              src={movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : `https://placehold.co/500x750?text=No+Poster`}
              alt={movie.title}
            />
            <h3>{movie.title.length > 15 ? `${movie.title.slice(0, 15)}...` : movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Movies