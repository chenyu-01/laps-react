import { React } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login/Login';
function App() {
  return (
    <>
      <div className="flex justify-center flex-col max-w-[1396px] bg-white items-center px-16 py-12 rounded-[40px] max-md:px-5">
        <Header></Header>
        <Login></Login>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
