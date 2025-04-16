

import './App.css'
import Banner from './Componants/Navbar/Banner/Banner'
import Navbar from './Componants/Navbar/Navbar'
import { BrowserRouter as Router, Route  } from 'react-router-dom'


function App() {


  return (
    <>
    <Router>
    <Navbar/>
    <Banner/>
    </Router>
    
      
    </>
  )
}

export default App
