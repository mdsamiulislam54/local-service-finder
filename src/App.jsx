

import './App.css'
import Banner from './Componants/Banner/Banner.jsx'
import Navbar from './Componants/Navbar/Navbar'
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import OurService from './Componants/OurServices/OurService'
import AboutUs from './Componants/AboutUs/AboutUs'
import FeatureSection from './Componants/FeatureSection/FeatureSection.jsx'
import Testimonials from './Componants/Testimonials/Testimonials.jsx'
import Brand from './Componants/Brand/Brand.jsx'


function App() {


  return (
    <>
    <Router>
    <Navbar/>
    <Banner/>
    <AboutUs/>
   <OurService/>
   <FeatureSection/>
   <Testimonials/>
   <Brand/>
    </Router>
    
      
    </>
  )
}

export default App
