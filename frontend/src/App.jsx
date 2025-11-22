import React from 'react'
import {  createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom"
import Home from './components/Home'
import MainLayout from './components/MainLayout'
import NewDevelop from './components/NewDevelop'
import OverProduct from './components/OverProduct'
import Contects from './components/Contects'
import Aboutus from './components/Aboutus'
import OurServices from './components/OurServices'
import Signup from './admin/Signup'
import Login from './admin/Login'
import Dashbord from './admin/Dashbord'
import { Toaster } from 'sonner';
import PageNoteFound from './components/PageNoteFound'


const appRouter = createBrowserRouter([
  
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/new-development",
        element:<NewDevelop/>
      },
      {
        path:"/flow-meter-electromagnetic-flow-meter-water-meters",
        element:<OverProduct/>
      },
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/our-servicess",
        element:<OurServices/>
      },
      {
        path:"/profile",
        element:<Aboutus/>
      },
      {
        path:"/enquiry",
        element:<Contects/>
      },
      
    ]
  },
  {
    path:"/admin/register",
    element:<Signup/>,
  },
  {
    path:"/admin/login",
    element:<Login/>,
  },
  {
    path:"/admin/dashbord",
    element: <Dashbord/>,
  },
  {
    path:"*",
    element:<PageNoteFound/>,
  },
])

const App = () => {


  return (
    <div className=''>
      <RouterProvider router={appRouter} />
      <Toaster/>
    </div>
  )
}

export default App
