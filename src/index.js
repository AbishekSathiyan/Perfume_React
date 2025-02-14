import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the App component
import "./style.css"; // Import styles
import './index.css'; // or wherever your tailwind CSS is stored

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
