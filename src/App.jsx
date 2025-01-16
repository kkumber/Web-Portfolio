import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
