import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Loader from './layout/Loader'

// Layout
import Navbar from './layout/Navbar.jsx'
import NavbarM from './layout/NavbarM.jsx'
import Footer from './layout/Footer.jsx'

// Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Partners from './pages/Partners.jsx'
import Contact from './pages/Contact.jsx'

const PageWrapper = ({ children }) => {
  const location = useLocation()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  },[location.pathname]);

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {loading && <Loader />}
      <div
      className={`${loading ? "opacity-80" : "opacity-100"} transition-all duration-500`}
      >
        { children }
      </div>
    </>
  )
}

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <PageWrapper>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/partners' element={<Partners />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </PageWrapper>
      </Router>
    </div>
  )
}

export default App