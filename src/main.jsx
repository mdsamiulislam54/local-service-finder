import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Componants/Home/Home.jsx";
import AboutUs from "./Componants/AboutUs/AboutUs.jsx";
import ServicesDetails from "./Componants/ServicesDetails/ServicesDetails.jsx";
import UserLoginContextProvider from "./ContextApi/UserLogin.jsx";
import Contact from "./Componants/Contact/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "services/:serviceName",
        element: <ServicesDetails />,
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserLoginContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserLoginContextProvider>
  </StrictMode>
);
