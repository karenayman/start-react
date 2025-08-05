import { useState } from 'react'
import './App.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'
import NotFound from './pages/NotFound/NotFound'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'

function App() {
  const router = createBrowserRouter([
 {path: '' , element: <Layout />, children: [
  //  {index: true, element: <Home/> },
  {path: '', element: <Home/> },
  {path: 'home', element: <Navigate to={'/'}/> },
  {path: 'about', element: <About/> },
  {path: 'contact', element: <Contact/> },
  {path: 'portfolio', element: <Portfolio/> },
  {path: '*', element: <NotFound/> }
 ]}
  
 ])
  return (
    <>
        
            <RouterProvider router={router}></RouterProvider>
 
    </>
  )
}

export default App
