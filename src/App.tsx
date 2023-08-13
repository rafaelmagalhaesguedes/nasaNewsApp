import Header from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import { Earth } from './pages/Earth'
import { Mars } from './pages/Mars'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/earth' element={<Earth />} />
        <Route path='/mars' element={<Mars />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
