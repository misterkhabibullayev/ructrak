import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./app/app";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
    </StrictMode>,
);
