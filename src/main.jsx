import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./app/app";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import './i18n.js';

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
    </StrictMode>,
);
