import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import {BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import Login from './Pages/Login'


function App() {
  

  return ( <div> 
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
   <Route path='login' element={<Login />}/>
   </Routes>
   </BrowserRouter>
   </div>
    
   
  )
}

export default App
