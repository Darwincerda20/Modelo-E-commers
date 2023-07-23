import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import CartWidget from "./CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export const NavBar = () => (
    <nav className="navbar navbar-expand-lg  navbar-dark menu shadow fixed-top"> {/* eliminar container */}
      <div className="container">
        <Link to='/'> {/* Link directo a inicio o reset del filtro */}
        <img src='./Logo Empresa DC.png' alt="LogoEmpresa_Nav" width="60px" />
        <Link className="navbar-brand" href="MantencionesDC">
          Mantenciones DC
        </Link>
        </Link>
        <button className="navbar-toggler"type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon "></span> 
        </button>
        <div className="Categories">
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav ms-auto w-100 justify-content-end">
            <li className="nav-item m-2">
            <NavLink to={'/Categoria/Visita'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Visita</NavLink>
            </li>
            <li className="nav-item m-2">
            <NavLink to={'/Categoria/Cuadro'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cuadro</NavLink>
            </li>
            <li className="nav-item m-2">
            <NavLink to={'/Categoria/Piezas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Piezas</NavLink>
            </li>
            <li className="nav-item m-2">
            <NavLink to={'/Categoria/Mantención'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mantención</NavLink>
            </li>
            <li className="nav-item m-2">
            <NavLink className="nav-link" to={'/Cart'}><CartWidget/></NavLink>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
)
export default NavBar;