import React,{useState} from 'react'
import logo from '/assets/logo.png'
import { Link} from 'react-router-dom'


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light p-1 bg-transparent px-md-3" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Mama's Kitchen" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isNavOpen ? 'show collapsing' : ''}`} id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link className="nav-link mx-2" aria-current="page" to={'/'} onClick={handleLinkClick}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to={'/about'} onClick={handleLinkClick}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to={'/recipies'} onClick={handleLinkClick}>Recipe</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to={'/contact'} onClick={handleLinkClick}>Contact</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
              <form className="d-flex" role="search">
                <input className="form-control me-0" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar