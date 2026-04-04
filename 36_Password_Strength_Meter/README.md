# 🔐 Password Strength Meter

A lightweight React component that evaluates password strength in real time, with a color-coded progress bar and rule-by-rule validation checklist.

---

## ✨ Features

- **Live strength indicator** — updates instantly as the user types
- **Color-coded progress bar** — ranges from red (weak) to green (strong)
- **Rule-by-rule checklist** — shows ✔️ or ❌ for each requirement
- **Strength label** — displays Weak, Medium, or Strong
- **No external dependencies** — built with pure React and CSS

---

## 📂 Project Structure

```
src/
├── App.jsx       # Main component with strength logic
├── App.css       # Component styles
└── index.js      # React entry point
```

---

## ✅ Validation Rules

| Rule                | Regex Pattern    |
|---------------------|------------------|
| At least 8 chars    | `/.{8,}/`        |
| Uppercase letter    | `/[A-Z]/`        |
| Lowercase letter    | `/[a-z]/`        |
| Number              | `/[0-9]/`        |
| Special character   | `/[^A-Za-z0-9]/` |

Each rule is tested independently and reflected live in the checklist.

---

## 👤 GitHub

- **Author:** [your-username](https://github.com/your-username)
- **Repository:** [github.com/your-username/password-strength-meter](https://github.com/your-username/password-strength-meter)