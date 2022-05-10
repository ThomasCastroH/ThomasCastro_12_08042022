import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from "./views/UserPage";
import Home from "./views/Home";
import ErrorPage from "./views/ErrorPage";
import "./css/App.css";

function App() {
  return (
    <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user/:id" element={<UserPage />} />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
            </Router>
    </React.StrictMode>
  );
}

export default App;
