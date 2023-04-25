import React from 'react';


import './index.scss';
import App from './App';



import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="drawer-hook"></div><div id="backdrop-hook"></div><div id="root"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('root'));
root.render(<App />);