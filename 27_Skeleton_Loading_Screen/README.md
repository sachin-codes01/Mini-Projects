# 💀 Skeleton Loading Screen (React)

A clean and minimal **Skeleton Loading Screen** built using **React**.  
This project demonstrates **reusable skeleton components, shimmer animation, and simulated async data fetching** as a smooth loading state alternative to traditional spinners.

---

## 📸 Screenshots

<p align="left">
  <img src="public/1.png" width="48%" />
  <img src="public/2.png" width="48%" />
</p>

---

## 🚀 Features

* 💀 **Reusable `<Skeleton />` component** — accepts `width`, `height`, and `circle` props for flexible use anywhere
* ✨ **Shimmer animation** — smooth left-to-right shimmer effect using CSS `::after` pseudo-element and `@keyframes`
* ⏳ **Simulated async loading** — `setTimeout` mimics a real API fetch before rendering user cards
* 🃏 **User card component** — displays avatar, name, and email after data loads
* 🔄 **Seamless transition** — skeletons are replaced by real content once loading completes
* 📱 Fully **responsive** flex layout

---

## 🛠️ Technologies Used

* React
* JavaScript (ES6+)
* CSS3
* HTML5
* Vite (build tool)

---

## 📂 Project Structure

```
Skeleton_Loading_Screen/
│
├── public/
│   ├── 1.png
│   └── 2.png
├── src/
│   ├── Skeleton/
│   │   ├── Skeleton.jsx
│   │   ├── Skeleton.css
│   │   └── Card.jsx
│   ├── App.jsx
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

---

## 💡 Key Concepts Used

* React Hooks (`useState`, `useEffect`)
* Reusable component design with configurable props (`width`, `height`, `circle`)
* CSS `::after` pseudo-element for the shimmer overlay
* `@keyframes` animation with `translateX` for the sliding shimmer effect
* Conditional rendering — skeleton array shown while `loading` is `true`, real cards after
* `Array(n).fill(0).map()` pattern to render a fixed number of skeleton placeholders

---

## 👨‍💻 Author

Sachin  
[https://github.com/sachin-codes01](https://github.com/sachin-codes01)