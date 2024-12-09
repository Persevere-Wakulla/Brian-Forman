import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './boilerPlate/App.jsx';
import './boilerPlate/index.css';
import Components from './components demo/components/Components.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Components />
  </React.StrictMode>
);
