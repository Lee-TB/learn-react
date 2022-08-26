import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterProvider } from './contexts';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
);
