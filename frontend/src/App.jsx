import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Deepfake from "./pages/Deepfake";
import CompareFaces from "./pages/CompareFaces";
import About from "./pages/About";

export default function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/deepfake"
                    element={<Deepfake />}
                />

                <Route
                    path="/compare"
                    element={<CompareFaces />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

            </Routes>

        </BrowserRouter>

    );

}