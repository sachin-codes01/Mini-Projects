import React from 'react';
import { useLocation } from 'react-router-dom';
import './steps.css';

const ProgressIndicator = () => {

    const location = useLocation();

    let currentStep = 1;

    if (location.pathname === '/step2') currentStep = 2;
    if (location.pathname === '/step3') currentStep = 3;

    return (
        <div className="progress-indicator step-card">
            <h2>REGISTRATION</h2>
            <p>Let's get you set up</p>

            <div className="progress-wrapper">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${(currentStep - 1) * 50}%` }}></div>
                </div>

                <div className="steps">
                    <div className={`circle ${currentStep >= 1 ? 'active' : ''}`}>1</div>
                    <div className={`circle ${currentStep >= 2 ? 'active' : ''}`}>2</div>
                    <div className={`circle ${currentStep >= 3 ? 'active' : ''}`}>3</div>
                </div>

            </div>
        </div>
    );
};

export default ProgressIndicator;