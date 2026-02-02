import './App.css'
import './components/navbar.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import News from './pages/News'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {

const router = createBrowserRouter([
  {
    path:'/',
    element: <><NavBar/><Home/><Footer/></>
  },
  {
    path:'/news',
    element: <><NavBar/><News/><Footer/></>
  },
  {
    path:'/login',
    element: <><NavBar/><Login/><Footer/></>
  }
])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
