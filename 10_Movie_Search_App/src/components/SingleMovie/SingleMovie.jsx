import React, { useEffect, useState } from 'react'
import './SingleMovie.css'
import { useParams, useNavigate } from 'react-router-dom'

const BASE = "https://corsproxy.io/?"

const SingleMovie = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchMovie = async () => {
      try {
        const [movieRes, videoRes] = await Promise.all([
          fetch(`${BASE}https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`),
          fetch(`${BASE}https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_TMDB_KEY}`)
        ])
        const movieData = await movieRes.json()
        const videoData = await videoRes.json()
        setMovie(movieData)
        setTrailer(videoData.results?.find(v => v.type === "Trailer" && v.site === "YouTube") || null)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchMovie()
  }, [id])

  if (loading) return <p className="status">Loading...</p>
  if (!movie) return <p className="status">Movie not found.</p>

  return (
    <div className="single-movie">

      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="movie-top">
        <img
          src={movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : `https://placehold.co/300x450?text=No+Poster`}
          alt={movie.title}
        />

        <div className="movie-details">
          <h1>{movie.title || movie.original_title || "Untitled"}</h1>
          {movie.tagline && <p className="tagline">{movie.tagline}</p>}
          <p className="overview">{movie.overview}</p>

          <div className="info-grid">
            <span>⭐ {movie.vote_average?.toFixed(1)}</span>
            <span>📅 {movie.release_date || "Unknown"}</span>
            <span>⏱ {movie.runtime} min</span>
            <span>💰 {movie.budget > 0 ? `$${movie.budget.toLocaleString()}` : 'N/A'}</span>
          </div>

          <div className="genres">
            {movie.genres?.map(g => <span key={g.id}>{g.name}</span>)}
          </div>
        </div>
      </div>

      {trailer && (
        <div className="trailer">
          <h2>Trailer</h2>
          <div className="iframe-wrap">
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={trailer.name}
              allowFullScreen
            />
          </div>
        </div>
      )}

    </div>
  )
}

export default SingleMovie