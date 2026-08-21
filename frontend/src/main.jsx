import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./styles/theme";

import { PredictionProvider } from "./context/PredictionContext";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>

        <PredictionProvider>

            <ThemeProvider theme={theme}>

                <CssBaseline />

                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />

                <App />

            </ThemeProvider>

        </PredictionProvider>

    </React.StrictMode>

);