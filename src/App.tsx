import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PortfolioPage from './pages/PortfolioPage'
import ErrorPage from './pages/ErrorPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<PortfolioPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
