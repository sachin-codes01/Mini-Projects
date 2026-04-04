import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    if (!selectedFile.type.startsWith("image/")) {
      setError("Only image files are allowed!");
      return;
    }

    // Validation (size < 2MB)
    if (selectedFile.size > 2 * 1024 * 1024) {
      setError("File size must be less than 2MB!");
      return;
    }
    setError("");
    setFile(selectedFile);
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div className="container">
      <h2>File Upload with Preview</h2>

      <div className="drop-zone" onDrop={handleDrop} onDragOver={handleDragOver}>
        <p>Drag & Drop image here</p>
        <span>or</span>
        <input type="file" onChange={handleChange} />
      </div>

      {error && <p className="error">{error}</p>}

      {preview && (
        <div className="preview">
          <img src={preview} alt="Preview" />
          <p>{file.name}</p>
        </div>
      )}
    </div>
  );
}