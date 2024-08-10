import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignUp from "./SignUp.tsx";
import App from "./App.tsx";
import Header from "./header.tsx";

// TODO Figure out what the '!' does in the container variable and find out what problem it solves
const container = document.getElementById("root")!;

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
