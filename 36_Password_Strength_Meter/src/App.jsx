import { useState } from "react";
import "./App.css";

export default function App() {
  const [password, setPassword] = useState("");

  const rules = [
    { label: "At least 8 characters", test: /.{8,}/ },
    { label: "Uppercase letter", test: /[A-Z]/ },
    { label: "Lowercase letter", test: /[a-z]/ },
    { label: "Number", test: /[0-9]/ },
    { label: "Special character", test: /[^A-Za-z0-9]/ },
  ];
  const passedRules = rules.filter((rule) =>
    rule.test.test(password)
  );

  const strength = passedRules.length;

  const getStrengthLabel = () => {
    if (strength === 0) return "";
    if (strength <= 2) return "Weak";
    if (strength === 3 || strength === 4) return "Medium";
    return "Strong";
  };

  return (
    <div className="container">
      <h2>Password Strength Meter</h2>

      <input type="password" placeholder="Enter password..." value={password}
        onChange={(e) => setPassword(e.target.value)} />

      <div className="strength-bar">
        <div
          className={`strength-fill strength-${strength}`}></div>
      </div>

      <p className="strength-text">{getStrengthLabel()}</p>

      <ul className="rules">
        {rules.map((rule, index) => (
          <li key={index} className={
            rule.test.test(password) ? "valid" : "invalid"
          }>
            {rule.test.test(password) ? "✔️" : "❌"} {rule.label}
          </li>
        ))}
      </ul>
    </div>
  );
}