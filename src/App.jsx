import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from "react-router-dom"
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Navbar from './components/navbar/Navbar'

function App() {


  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
