//import logo from './logo.svg';
import React,{useState, useEffect}  from 'react';
import './App.css';
import Aboutus from './Components/Footer';
import NavBar from './Components/header';
import Main from './Components/Main';
import Login from "./Components/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Info from './Components/Info';
import Register from './Components/Register';
import { ThemeProvider } from './Context/ThemeContext';

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    //document.querySelector('main').classList.remove("light", "dark")
    document.getElementById('main').classList.add(themeMode)
  }, [themeMode])
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='light' id="main">
        <Router>
          {/* <Main/> */}
          {window.location.pathname !== "/" && window.location.pathname !=="/login" ? (
          <NavBar />
				) : null}
        
          <Routes>
            <Route path='/' element={<Register />}></Route>
            <Route path='/main' element={< Main/>}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/Info' element={<Info />}></Route>
            <Route path='/aboutus' element={<Aboutus />}></Route>
          </Routes>
          <Aboutus />
        </Router>
        
      </div>
    </ThemeProvider>
  )
};


export default App;
