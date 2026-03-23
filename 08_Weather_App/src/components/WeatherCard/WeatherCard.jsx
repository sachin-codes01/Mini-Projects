import React, { useState } from 'react'
import './WeatherCard.css'

const WeatherCard = ({ apiData, notFound, searchQuery, onReturn }) => {

    if (notFound) {
        return (
            <div className="error-card">
                <div className="error-icon">🔍</div>
                <h2 className="error-title">Data Not Available</h2>
                <p className="error-message">No weather data found for "{searchQuery}"</p>
                <button className="return-btn" onClick={onReturn}>↩ Return</button>
            </div>
        )
    }

    if (!apiData || !apiData.location) return null


    const [selectedDay, setSelectedDay] = useState(0)

    const hourlyRef = React.useRef(null)

    //date and time
    const formatDateTime = (localtime) => {
        if (!localtime) return {}

        const date = new Date(localtime)

        const day = date.toLocaleDateString('en-US', { weekday: 'long' })

        const datePart = date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long'
        })

        const time = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        })

        return {
            dateText: `${day}, ${datePart}`,
            timeText: time
        }
    }

    // Destructure
    const { current, location, forecast } = apiData;
    const forecastDays = forecast?.forecastday || []
    const selectedDayData = forecastDays[selectedDay] || {}

    //Toggle
    const isToday = selectedDay === 0

    const dateTime = isToday ? location.localtime : `${selectedDayData.date} 00:00`

    const { dateText, timeText } = formatDateTime(dateTime)

    const data = isToday ? current : selectedDayData.day
    const temp = isToday ? data.temp_c : data.avgtemp_c
    const feelslike = isToday ? data.feelslike_c : null
    const humidity = isToday ? data.humidity : data.avghumidity
    const uv = data.uv
    const precip = isToday ? data.precip_mm : data.totalprecip_mm
    const wind = isToday ? data.wind_kph : data.maxwind_kph
    const condText = data.condition.text
    const condIcon = `https:${data.condition.icon}`

    return (
        <div className="weather-card">
            <div className="weather-info">
                <div className="location-block">
                    <h1 className='city'>{location?.name},{location?.region}</h1>
                    <h1 className='country'>{location?.country}</h1>
                    <h3 className="date">{dateText}</h3>
                    <p className="time">{timeText}</p>
                </div>

                <div className="main-temp-block">
                    <div className="mist">
                        <img src={condIcon} alt="weather icon" />
                        <h2 className="condition">{condText}</h2>
                    </div>
                    <div className="temp-info">
                        <h1 className="temperature">{temp}°C</h1>
                        {feelslike && (<p className="feels-like">Feels like {feelslike}°C</p>)}
                    </div>
                </div>
            </div>

            <div className="details-grid">
                <div>💧 Humidity: {humidity}%</div>
                <div>☀️ UV Index: {uv}</div>
                <div>🌧️ Precip: {precip} mm</div>
                <div>🌬️ Wind: {wind} kph</div>
                <div>🌡️ Max: {selectedDayData?.day?.maxtemp_c}°C</div>
                <div>❄️ Min: {selectedDayData?.day?.mintemp_c}°C</div>
                <div>🌧️ Rain: {selectedDayData?.day?.daily_chance_of_rain}%</div>
            </div>

            <div className="astro">
                <p>🌅 Sunrise: {selectedDayData?.astro?.sunrise}</p>
                <p>🌇 Sunset: {selectedDayData?.astro?.sunset}</p>
            </div>

            <div className="forecast-days">
                {
                    forecastDays.map((day, index) => (
                        <div key={day.date}
                            className={`forecast-day ${selectedDay === index ? 'active' : ''}`}
                            onClick={() => setSelectedDay(index)}>
                            <p>{day.date}</p>
                            <img src={`https:${day.day.condition.icon}`} alt="icon" />
                            <p>{day.day.condition.text}</p>
                            <p>Max: {day.day.maxtemp_c}°C</p>
                            <p>Min: {day.day.mintemp_c}°C</p>
                            <p>🌧️ {day.day.daily_chance_of_rain}%</p>
                        </div>
                    ))
                }
            </div>

            <div className="hourly" ref={hourlyRef} onMouseDown={(e) => {
                const el = hourlyRef.current
                const startX = e.pageX
                const scrollStart = el.scrollLeft
                const move = (e) => {
                    e.preventDefault()
                    el.scrollLeft = scrollStart - (e.pageX - startX)
                }
                const up = () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up) }
                window.addEventListener('mousemove', move)
                window.addEventListener('mouseup', up)
            }}>
                {
                    selectedDayData?.hour?.map((h) => (
                        <div key={h.time_epoch} className="hour-item">
                            <p>{h.time.split(' ')[1]}</p>
                            <img src={`https:${h.condition.icon}`} alt="icon" />
                            <p>{h.temp_c}°C</p>
                            <p>🌧️ {h.chance_of_rain}%</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default WeatherCard