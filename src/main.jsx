import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./i18n";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Componants/Home/Home.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    Component:App,
    children:[
      {
        index:true , element:<Home/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
