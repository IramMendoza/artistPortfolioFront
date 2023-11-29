import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from "react-router-dom"
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import NextEvents from './pages/NextEvents'
import Contact from "./pages/Contact"
import Navbar from './components/navbar/Navbar'
import EventDetailPage from './pages/EventDetailPage'

function App() {


  return (
    <div className='bg-black'>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/events' element={<Events/>} />
          <Route path='/events/next_events' element={<NextEvents />} />
          <Route path='/events/event/:id' element={<EventDetailPage />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
