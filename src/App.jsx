import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from "react-router-dom"
import Home from './pages/Home'
import NavbarTest from './components/navbar/NavbarTest'

function App() {


  return (
    <>
      <BrowserRouter>

        <NavbarTest/>
    
        <Routes>
          <Route path="/" element={ <Home/> }/>
        </Routes>

        </BrowserRouter>
    </>
  )
}

export default App
