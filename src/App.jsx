

import './App.css'
import Banner from './Componants/Navbar/Banner/Banner'
import Navbar from './Componants/Navbar/Banner/Navbar'
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import OurService from './Componants/OurServices/OurService'
import AboutUs from './Componants/AboutUs/AboutUs'


function App() {


  return (
    <>
    <Router>
    <Navbar/>
    <Banner/>
    <AboutUs/>
   
    </Router>
    
      
    </>
  )
}

export default App
