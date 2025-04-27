

import './App.css'
import Navbar from './Componants/Navbar/Navbar'


import Footer from './Componants/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <>
    
    <Navbar/>
    <Outlet/>
   <Footer/>
   
    
      
    </>
  )
}

export default App
