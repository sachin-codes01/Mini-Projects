import { useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ steps = 5, initialStep = 1, barColor = "#4caf50", height = 20 }) => {
    const [currentStep, setCurrentStep] = useState(initialStep);

    const percentage = (currentStep / steps) * 100;

    const increment = () => {
        if (currentStep < steps) setCurrentStep(currentStep + 1);
    };

    const decrement = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
        <div className="progress-bar-container">
            <div className="progress-bar-wrapper" style={{ height: height + "px" }}>
                <div
                    className="progress-bar-fill"
                    style={{ width: percentage + "%", backgroundColor: barColor }}
                ></div>
            </div>

            <div className="step-indicator">
                {Array.from({ length: steps }, (_, i) => (
                    <div
                        key={i}
                        className={`step ${i < currentStep ? "active" : ""}`}
                    >
                        {i + 1}
                    </div>
                ))}
            </div>

            <div className="buttons">
                <button onClick={decrement}>Prev</button>
                <button onClick={increment}>Next</button>
            </div>
        </div>
    );
};

export default ProgressBar;