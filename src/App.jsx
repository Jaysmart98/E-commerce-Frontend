import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import ContactUs from './pages/ContactUs'
import About from './pages/About'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<Error404/>} />
        <Route path="contact" element={<ContactUs/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </>
  )
}

export default App
