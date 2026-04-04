# 📁 File Upload with Preview

A lightweight React component that supports drag-and-drop or manual image uploads, with live preview, file validation, and clean error handling.

---

## ✨ Features

- **Drag & Drop** support for intuitive file selection
- **Click-to-browse** fallback via native file input
- **Live image preview** rendered instantly after selection
- **File type validation** — accepts images only
- **File size validation** — rejects files larger than 2MB
- **Automatic memory cleanup** via `URL.revokeObjectURL`

---

## 📂 Project Structure

```
src/
├── App.jsx       # Main component with upload logic
├── App.css       # Component styles
└── index.js      # React entry point
```

---

## ✅ Validation Rules

| Rule        | Constraint                    |
|-------------|-------------------------------|
| File type   | Must be an image (`image/*`)  |
| File size   | Must be **< 2MB**             |

Violations display an inline error message below the drop zone in red.

---

## 👤 GitHub

- **Author:** [your-username](https://github.com/your-username)
- **Repository:** [github.com/your-username/file-upload-preview](https://github.com/your-username/file-upload-preview)
