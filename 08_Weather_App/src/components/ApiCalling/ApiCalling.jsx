import React, { useEffect, useState } from 'react'

const ApiCalling = ({ search, sendApiData, sendLoading }) => {

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const ApiHandle = async (cityName) => {
    sendLoading(true)
    try {
      const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=7&aqi=yes`)
      const data = await res.json();

      if (!res.ok || data.error) {
        sendLoading(false)
        sendApiData(null)
        return
      }

      sendLoading(false)
      sendApiData(data)
    } catch (err) {
      sendLoading(false)
      sendApiData(null)
    }
  }

  useEffect(() => {
    ApiHandle(search?.trim() || 'India')
  }, [search])

  return null
}

export default ApiCalling