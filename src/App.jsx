import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import GlobalBackground from './Components/GlobalBackground'


function App() {

  return (
    <BrowserRouter>
      <GlobalBackground />
      <Navbar />
      <div className="relative z-10 mx-2 md:mx-4 xl:mx-40">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
