# 🔐 OTP Input

A lightweight React component for entering a 6-digit OTP, with auto-focus, backspace navigation, and paste support.

---

## ✨ Features

- **Auto-focus** — moves to the next input automatically after each digit
- **Backspace navigation** — jumps back to the previous input on delete
- **Paste support** — fills all fields instantly when a 6-digit code is pasted
- **Digit-only validation** — rejects non-numeric input
- **Ref-based focus management** — using `useRef` for direct DOM control

---

## 📂 Project Structure

```
src/
├── App.jsx       # Main component with OTP logic
├── App.css       # Component styles
└── index.js      # React entry point
```

---

## ✅ Validation Rules

| Rule          | Constraint                        |
|---------------|-----------------------------------|
| Input type    | Digits only (0–9)                 |
| Length        | Exactly 6 characters              |
| Paste content | Must be numeric digits only       |

Invalid characters are silently rejected on both typing and paste.

---

## 👤 GitHub

- **Author:** [your-username](https://github.com/your-username)
- **Repository:** [github.com/your-username/otp-input](https://github.com/your-username/otp-input)