import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/navbar'
import About from './components/About'
import Recipe from './components/Recipe'
import Contact from './components/Contact'
import Recipies from './components/Recipies'
import ChrismasRecipes from './components/ChrismasRecipes'
import ErrorPage from './components/ErrorPage'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/recipies' element={<Recipies />} />
          <Route path='/chrismas-recipies' element={<ChrismasRecipes />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/recipe/:id' element={<Recipe />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
