import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/navbar'
import About from './components/About'
import Recipe from './components/Recipies'
import Contact from './components/Contact'
import Recipies from './components/Recipies'

function App() {

  return (
    <>
      <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/recipies' element={<Recipies/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/recipe/:id' element={<Recipe/>}/>
          </Routes>
          <Footer/>
      </div>
    </>
  )
}

export default App
