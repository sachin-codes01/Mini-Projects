# 🌤️ Weather App (React)

A modern and responsive **Weather App** built using **React** and the **WeatherAPI**.  
This project demonstrates **API integration, multi-day forecasting, hourly breakdowns, skeleton loading states, and dynamic UI rendering** in a real-world React application.

---

## 📸 Screenshot

![Weather App Screenshot](public/Weather%20App.png)

---

## 🚀 Features

* 🔍 **Search any city** worldwide to get live weather data
* 📅 **7-day forecast** with daily highs, lows, and rain probability
* 🕐 **Hourly breakdown** with temperature and rain chance (drag to scroll)
* 🌡️ Displays **current temperature**, feels-like, humidity, UV index, wind speed, and precipitation
* 🌅 Shows **sunrise & sunset** times for any selected day
* ⏳ **Skeleton loading UI** while data is being fetched
* ❌ **"Not Found" error state** with a return button for invalid city searches
* 📍 Defaults to **India** on initial load
* ⚡ Smooth, responsive, and interactive UI

---

## 🛠️ Technologies Used

* React
* JavaScript (ES6+)
* CSS3
* HTML5
* WeatherAPI (`weatherapi.com`)
* Vite (build tool)

---

## 📂 Project Structure

```
Weather_App/
│
├── public/
│   └── Weather App.png
├── src/
│   ├── components/
│   │   ├── ApiCalling/
│   │   │   └── ApiCalling.jsx
│   │   ├── Loading/
│   │   │   ├── Loading.jsx
│   │   │   └── Loading.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.css
│   │   └── WeatherCard/
│   │       ├── WeatherCard.jsx
│   │       └── WeatherCard.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .env
├── index.html
└── package.json
```

---

## ▶️ Run the Project

```bash
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root of your project and add your WeatherAPI key:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

Get your free API key at [https://www.weatherapi.com](https://www.weatherapi.com)

---

## 💡 Key Concepts Used

* React Hooks (**useState, useEffect, useRef**)
* Async/Await & Fetch API
* Environment Variables with **Vite (`import.meta.env`)**
* Skeleton Loading State
* Conditional Rendering & Error Handling
* Component-based Architecture
* Drag-to-scroll Hourly UI

---

## 👨‍💻 Author

Sachin  
[https://github.com/sachin-codes01](https://github.com/sachin-codes01)