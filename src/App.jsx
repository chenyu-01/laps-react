import { React } from 'react';
import './App.css';
import AppRoutes from './AppRouts';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="flex justify-center">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
