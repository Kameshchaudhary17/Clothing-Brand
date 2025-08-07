import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>

      <Route path = '/' element={<Home/>}/>
      <Route path = '/sidebar' element={<Sidebar/>}/>
      <Route path = '/sidebar' element={<Navbar/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
