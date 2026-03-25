# 🔍 GitHub User Search (React)

A clean and responsive **GitHub User Search App** built using **React** and the **GitHub REST API**.  
This project demonstrates **API integration, debounced search, user profile display, repository listing, rate-limit handling, and dynamic UI rendering** in a real-world React application.

---

## 📸 Screenshot

![GitHub User Search Screenshot](public/GitHub%20User%20Search.png)

---

## 🚀 Features

* 🔍 **Search any GitHub user** by username in real time
* ⏱️ **Debounced input** (500ms) to minimize unnecessary API calls
* 👤 Displays **user profile** — avatar, name, bio, join date, and GitHub link
* 📊 Shows **public repos, followers, following, and gists** at a glance
* 📁 Lists **recent repositories** with stars, forks, and language tags
* ⚠️ Handles **GitHub API rate limiting** (60 req/hour) with friendly error messages
* ❌ **"User Not Found"** error state for invalid usernames
* ⏳ **Circular progress loader** while data is being fetched
* ✕ **Clear button** to instantly reset the search
* ⚡ Smooth, responsive, and interactive UI

---

## 🛠️ Technologies Used

* React
* JavaScript (ES6+)
* CSS3
* HTML5
* GitHub REST API (`api.github.com`)
* Material UI (`@mui/material` — CircularProgress)
* Vite (build tool)

---

## 📂 Project Structure

```
GitHub_User_Search/
│
├── public/
│   └── GitHub User Search.png
├── src/
│   ├── components/
│   │   ├── GitHubSearch.jsx
│   │   └── GitHubSearch.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
└── package.json
```

---

## ▶️ Run the Project

```bash
npm install
npm run dev
```

> No API key required — the GitHub REST API is publicly accessible (60 requests/hour for unauthenticated users).

---

## 💡 Key Concepts Used

* React Hooks (**useState, useEffect**)
* **Debouncing** with `setTimeout` / `clearTimeout`
* Async/Await & Fetch API
* GitHub REST API (Search, User Details, Repositories)
* Rate Limit Detection & Error Handling
* Conditional Rendering & Loading States
* Material UI Integration
* Component-based Architecture

---

## 👨‍💻 Author

Sachin  
[https://github.com/sachin-codes01](https://github.com/sachin-codes01)