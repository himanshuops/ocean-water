import React from 'react'
import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home'
import MainLayout from './components/MainLayout'
import Navbar from './components/Navbar'
import Header from './components/Header'
import NewDevelop from './components/NewDevelop'
import OverProduct from './components/OverProduct'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/new-development",
        element:<NewDevelop/>
      },
      {
        path:"/flow-meter-electromagnetic-flow-meter-water-meters",
        element:<OverProduct/>
      },
      
    ]
  },
])

const App = () => {

  return (
    <div className='bg-zinc-100'>
      <Header/>
      <RouterProvider router={appRouter} />

    </div>
  )
}

export default App
