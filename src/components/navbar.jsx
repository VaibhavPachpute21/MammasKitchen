import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light p-1">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="Mama's Kitchen" />
            </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <Link class="nav-link mx-2" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link mx-2" to={'/about'}>About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link mx-2" to={'/recipies'}>Recipe</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link mx-2" to={'/contact'}>Contact</Link>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
              <form class="d-flex" role="search">
                <input class="form-control me-0" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar