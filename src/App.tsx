import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PortfolioPage from './pages/PortfolioPage'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<PortfolioPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
