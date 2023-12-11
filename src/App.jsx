import { React } from 'react';
import './App.css';
import SignUp from './components/Authentification/Signup';
import Login from './components/Authentification/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
function App() {
  return (
    <div className="flex justify-center">
      <BrowserRouter basename="/chenyu-01/laps-react">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Redirect to login by default */}
          <Route path="/" element={<Navigate replace to={'/login'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
