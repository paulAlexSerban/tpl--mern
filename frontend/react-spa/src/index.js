import React from 'react';
import './index.scss';
import App from './App';
import { createRoot } from 'react-dom/client';

console.log(process.env);

// Clear the existing HTML content
document.body.innerHTML = `<div id="drawer-hook"></div>
    <div id="modal-hook"></div>
    <div id="backdrop-hook"></div>
    <div id="root"></div>`;

// Create the script tag, set the appropriate attributes
const script = document.createElement('script');
const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
script.async = true;
script.defer = true;

// Attach your callback function to the `window` object
window.initMap = function () {
    // JS API is loaded and available
};

// Append the 'script' element to 'head'
document.head.appendChild(script);

// Render your React component instead
const root = createRoot(document.getElementById('root'));
root.render(<App />);
