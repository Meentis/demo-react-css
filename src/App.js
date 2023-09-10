import logo from './logo.svg';
import './App.css';
import "./input.css"
import { Routes, Route } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import DetailsPage from './page/DetailsPage';
import Navbar from './assets/components/Navbar';

 
function App() {
  return (
    <div className='bg-gradient-to-b from-[#2F112C] to-[#ff59c7] h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element = {<LandingPage/>}></Route>
        <Route path='/details' element = {<DetailsPage/>} />
      </Routes> 
    </div>
  );
}

export default App;
