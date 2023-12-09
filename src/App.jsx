import { React } from 'react';
import './App.css';
import SignUp from './components/Login/Signup';
import Login from './components/Login/Login';
import { Navigate } from 'react-router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <div className="flex justify-center flex-col max-w-[1396px] bg-white items-center px-16 py-12 rounded-[40px] max-md:px-5">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Redirect to login by default */}
            <Route path="/" element={<Navigate replace to="/login" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
