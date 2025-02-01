
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Blog from './component/Mode/Pages/Blog';
import Contact from './component/Mode/Pages/Contact';
import About from './component/Mode/Pages/About';
import Home from "./component/Mode/Pages/Home"
import Navbar from './component/Mode/Navbar';
import { ThemeProvider } from './component/Mode/Context';

function App() {
  return (
    <ThemeProvider>
   <BrowserRouter >
   <Navbar />
   <Routes >

    <Route path = "/" element ={<Home/>} />
    <Route path = "/about" element ={<About/>} />
    <Route path = "/blog" element ={<Blog/>} />
    <Route path = "/contact" element ={<Contact/>} />
  
    </Routes>

   </BrowserRouter>
   </ThemeProvider>
    
  )
}
export default App
