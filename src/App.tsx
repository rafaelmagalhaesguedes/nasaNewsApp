import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Apollo from './pages/Apollo'
import Curiosity from './pages/Curiosity'
import Earth from './pages/Earth'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apollo' element={<Apollo />} />
        <Route path='/curiosity' element={<Curiosity />} />
        <Route path='/earth' element={<Earth />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
