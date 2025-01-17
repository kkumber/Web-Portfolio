import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'


function App() {

  return (
    <div className="mx-2 md:mx-4 lg:mx-20 xl:mx-60">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
