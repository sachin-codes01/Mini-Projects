# 🌡️ Temperature Converter App (React)

A clean and minimal **Temperature Converter App** built using **React** and the **useState Hook**.
This project demonstrates **bidirectional state updates, real-time conversion logic, and dynamic unit selection**.

---

## 📸 Screenshot

![Temperature Converter App Screenshot](public/temp.png)

---

## 🚀 Features

* 🌡️ Convert between **Celsius, Fahrenheit, and Kelvin** instantly
* 🔄 **Bidirectional input** — type from either side and get instant results
* 🔁 **Dynamic unit selectors** — change units on the fly without losing context
* 🧮 Accurate conversion with results rounded to **2 decimal places**
* 🧹 **Reset button** to clear both fields at once
* ⚡ Smooth and responsive UI

---

## 🛠️ Technologies Used

* React
* JavaScript (ES6)
* CSS3
* HTML5

---

## 📂 Project Structure

```
05_Temperature_Converter
│
├── public
│   └── temp.png
├── src
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

---

## 💡 Key Concepts Used

* React Hooks (**useState**)
* **Bidirectional data flow** — both inputs drive each other's values
* **Pure conversion function** — converts via Celsius as a universal intermediate
* Dynamic `<select>` unit switching with instant recalculation
* Controlled components with real-time derived state

---

## 🔢 Conversion Logic

All conversions go through **Celsius as the intermediate unit**:

| From → To    | Formula                        |
|-------------|--------------------------------|
| °C → °F     | `(9/5 × C) + 32`              |
| °C → K      | `C + 273.15`                  |
| °F → °C     | `(5/9) × (F − 32)`            |
| °F → K      | `(5/9 × (F − 32)) + 273.15`  |
| K → °C      | `K − 273.15`                  |
| K → °F      | `(9/5 × (K − 273.15)) + 32`  |

---

## 👨‍💻 Author

**Sachin**
[github.com/sachin-codes01](https://github.com/sachin-codes01)