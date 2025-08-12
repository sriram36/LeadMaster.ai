import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Exam from './pages/Exam';
import Result from './pages/Result';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/exam" element={<PrivateRoute><Exam /></PrivateRoute>} />
                <Route path="/result" element={<PrivateRoute><Result /></PrivateRoute>} />
            </Routes>
        </Router>
    );
}

export default App;
