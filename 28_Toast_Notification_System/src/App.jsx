import React from 'react';
import { ToastProvider, useToast } from './Toast_Notification/ToastContext';
import ToastContainer from './Toast_Notification/ToastContainer';

const App = () => {
  return (
    <ToastProvider>
      <Main />
      <ToastContainer />
    </ToastProvider>
  );
};

const Main = () => {
  const { addToast } = useToast();

  return (
    <div style={{ padding: '50px' }}>
      <h1>React Toast Notification</h1>
      <button onClick={() => addToast('Success message!', 'success')}>Show Success</button>
      <button onClick={() => addToast('Error message!', 'error')}>Show Error</button>
      <button onClick={() => addToast('Warning message!', 'warning')}>Show Warning</button>
    </div>
  );
};

export default App;