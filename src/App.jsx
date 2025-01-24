import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/loginpage/loginpage'
import RegisterPage from "./pages/registerpage/registerpage"
import HomePage from "./pages/homePage/homePage";
import ProtectedRoute from "./provider/protectedRoute";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        </Routes>
      </Router>
    </>
   
  );
}

export default App;
