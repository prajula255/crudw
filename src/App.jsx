import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/loginpage/loginpage'
import RegisterPage from "./pages/registerpage/registerpage"
import HomePage from "./pages/homePage/homePage";
import ProtectedRoute from "./provider/protectedRoute";
import ProductDetails from "./pages/productDetails/productDetails";
import AdDetailsPage from "./pages/adsDetails";
import ProfilePage from "./pages/profilePages";
import EditProfile from "./pages/editProfile";
import MyAds from "./pages/postedAds";
import AdsList from "./pages/adsListOthers";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/product-details" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
          <Route path="/ads" element={<ProtectedRoute>< ProfilePage /></ProtectedRoute>} />
          <Route path="/addetails" element={<ProtectedRoute><AdDetailsPage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/edit" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
          <Route path="/myads" element={<ProtectedRoute><MyAds /></ProtectedRoute>} />
          <Route path="/adslist" element={<ProtectedRoute><AdsList/></ProtectedRoute>}/>
        </Routes>
      </Router>
    </>

  );
}

export default App;
