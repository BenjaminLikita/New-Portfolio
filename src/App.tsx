import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Resume from './Pages/Resume'

export type LinkProps = {
  text: string,
  url: string
}


function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
