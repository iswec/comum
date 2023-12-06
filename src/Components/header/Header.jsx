import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo-black.png';
import './Header.css';
import './NavProdutos.css'

function Header() {
  return (
    <>
    <div className='espaco'>
        <div className="fixed-top">
              <header className="navbar navbar-expand-lg bg-white fixed-top">
                <div className="container-fluid container text-center">
                  <Link className="navbar-brand" to="/" aria-label="Comum - Home"> 
                    <img className="img-fluid" src={Logo} alt='Logo-comum' title='Logo-comum'/>
                  </Link> 
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar produtos" aria-label="Search"/>
                  </form>
                  <Link className="btn btn-outline-warning" to="/login" aria-label="Comum - Home"> 
                    Entre ou cadastre-se
                  </Link>
                </div>
              </header>
              <div className="pt-5 bg-white"> 
              <nav className='navbar navbar-expand-lg container pt-5 '>
              <div className='container'>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNav'
                  aria-controls='navbarNav'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='navbar-toggler-icon'></span>
                </button>
              <div className="container-fluid">
              <ul className="navbar-nav nav-fill collapse navbar-collapse ml-auto" id='navbarNav'>
                  <li className="nav-item">
                    <Link className="nav-link" to="/masculina">Masculina</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/feminina">Feminina</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/esportivo">Esportivo</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/jeans">Jeans</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/novidades">Novidades</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/infantil">Infantil</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/acessorios">Acessórios</Link>
                  </li>
                </ul>
                </div>
              </div>
            </nav>  
          </div>
          </div>
        </div>

      
    </>
  )
}

export default Header;
