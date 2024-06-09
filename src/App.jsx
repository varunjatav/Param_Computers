
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'


function App() {
  

  return (
    <>
    <Header/>
    <Outlet/>
    <ScrollToTop/>
    <Footer/>
  
    </>
  )
}

export default App
