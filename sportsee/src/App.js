import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from "./components/UserPage";
import "./css/App.css";

function App() {
  return (
    <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/user/:id" element={<UserPage />} />
                </Routes>
            </Router>
    </React.StrictMode>
  );
}

export default App;
