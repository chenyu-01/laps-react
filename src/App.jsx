import { React } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login/Login';
function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Footer></Footer>
        <Login></Login>
      </div>
    </>
  );
}

export default App;
