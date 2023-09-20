import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Resume from './Pages/Resume'




function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/about-me' element={<About />}/>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
