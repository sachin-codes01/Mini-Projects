import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import './MovieRow.css';

const RowSkeleton = () => (
    <div className="row-card skeleton-row-card">
        <Skeleton variant="rectangular" sx={{ bgcolor: '#2e3345', height: 0, paddingBottom: '150%' }} animation="wave" />
        <div className="row-card-info">
            <Skeleton variant="text" width="80%" height={16} sx={{ bgcolor: '#2e3345' }} animation="wave" />
            <Skeleton variant="text" width="40%" height={13} sx={{ bgcolor: '#2e3345' }} animation="wave" />
        </div>
    </div>
);

const MovieRow = ({ title, movies, loading }) => {
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const hasDragged = useRef(false);

    const onMouseDown = (e) => {
        isDragging.current = true;
        hasDragged.current = false;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.cursor = 'grabbing';
    };

    const onMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX.current;
        if (Math.abs(walk) > 4) hasDragged.current = true;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const onMouseUp = () => {
        isDragging.current = false;
        scrollRef.current.style.cursor = 'grab';
    };

    const onMouseLeave = () => {
        isDragging.current = false;
        scrollRef.current.style.cursor = 'grab';
    };

    const handleClick = (e) => {
        if (hasDragged.current) e.preventDefault();
    };

    return (
        <section className="movie-row-section">
            <h2 className="row-title">{title}</h2>
            <div
                className="row-scroll-container"
                ref={scrollRef}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
            >
                <div className="row-track">
                    {loading
                        ? Array.from({ length: 10 }).map((_, i) => <RowSkeleton key={i} />)
                        : movies.map((movie) => (
                            <NavLink
                                to={`/movie/${movie.id}`}
                                key={movie.id}
                                className="row-card"
                                onClick={handleClick}
                                draggable={false}
                            >
                                <img
                                    src={movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                                        : `https://placehold.co/342x513?text=No+Poster`}
                                    alt={movie.title}
                                    draggable={false}
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                                <div className="row-card-info">
                                    <h3>{movie.title.length > 16 ? `${movie.title.slice(0, 16)}…` : movie.title}</h3>
                                    <p>⭐ {movie.vote_average?.toFixed(1)}</p>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default MovieRow;