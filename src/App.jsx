import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Product from './components/Product'
import Dashboard from './pages/Dashboard'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>

      <Route path = '/' element={<Product/>}/>
      <Route path = '/sidebar' element={<Sidebar/>}/>
      <Route path = '/navbar' element={<Navbar/>}/>
      <Route path = '/dashboard' element={<Dashboard/>}/>


      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
