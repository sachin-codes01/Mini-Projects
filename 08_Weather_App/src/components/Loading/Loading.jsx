import React from 'react'
import './Loading.css'

const Loading = ({ loading }) => {
    if (!loading) return null

    return (
        <div className="weather-card">
            <div className="weather-info">
                <div className="location-block">
                    <div className="skel skel-city" />
                    <div className="skel skel-country" />
                    <div className="skel skel-date" />
                    <div className="skel skel-time" />
                </div>
                <div className="main-temp-block">
                    <div className="mist">
                        <div className="skel skel-icon" />
                        <div className="skel skel-cond" />
                    </div>
                    <div className="temp-info">
                        <div className="skel skel-temp" />
                        <div className="skel skel-feels" />
                    </div>
                </div>
            </div>

            <div className="details-grid">
                {[...Array(7)].map((_, i) => <div key={i} className="skel" />)}
            </div>

            <div className="astro">
                <div className="skel skel-astro" />
                <div className="skel skel-astro" />
            </div>

            <div className="forecast-days">
                {[...Array(7)].map((_, i) => (
                    <div key={i} className="forecast-day">
                        <div className="skel skel-fd-date" />
                        <div className="skel skel-icon" />
                        <div className="skel skel-fd-text" />
                        <div className="skel skel-fd-text" />
                        <div className="skel skel-fd-text" />
                    </div>
                ))}
            </div>

            <div className="hourly">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="hour-item">
                        <div className="skel skel-h-time" />
                        <div className="skel skel-icon-sm" />
                        <div className="skel skel-h-temp" />
                        <div className="skel skel-h-temp" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Loading