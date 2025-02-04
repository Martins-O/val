import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// const fetchMessage = async () => {
//     try {
//         const response = await fetch('https://api.quotable.io/random');
//         const data = await response.json();
//         setMessage(data.content);
//     } catch (error) {
//         console.error('Error fetching message:', error);
//         // Use a random message from our messages array
//         const randomIndex = Math.floor(Math.random() * messages.length);
//         setMessage(messages[randomIndex]);
//         console.log(messages[randomIndex]);
//     }
// };