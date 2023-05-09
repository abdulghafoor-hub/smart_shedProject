//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Aboutus from './Components/Footer';
import NavBar from './Components/header';
import Main from './Components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Info from './Components/Info';


function App() {
  return (
    <>
      <div className='bg-white'>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/Info' element={<Info />}></Route>
            <Route path='/aboutus' element={<Aboutus />}></Route>
          </Routes>
        </Router>
        <Aboutus />
      </div>
    </>
  )
};


export default App;
