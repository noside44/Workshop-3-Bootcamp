import '../Styles/Navbar.css'
import Peaku from "../Assets/img/Peaku-logo.png"
import { MdLanguage } from "react-icons/md";
import { PiBellRingingFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";

function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid d-flex justify-content-between">
                    <img className='logo-company rounded' src={Peaku} alt = "Peaku"/>  
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Empleos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Bootcamp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Sobre nosotros</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Para profesionales
                                </a>
                                <ul className="dropdown-menu profesional-menu">
                                    <li><a className="dropdown-item" href="/">Empleos</a></li>
                                    <li><a className="dropdown-item" href="/">Inicio</a></li>
                                    <li><a className="dropdown-item" href="/">Cursos y retos</a></li>
                                    <li><a className="dropdown-item" href="/">Preguntas</a></li>
                                    <li><a className="dropdown-item" href="/">Profesores</a></li>
                                    <li><a className="dropdown-item" href="/">Bootcamp</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="!#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Para empresas
                                </a>
                                <ul className="dropdown-menu companies-menu">
                                    <li><a className="dropdown-item" href="/">Inicio</a></li>
                                    <li><a className="dropdown-item" href="/">Publicar empleo</a></li>
                                    <li><a className="dropdown-item" href="/">Nuestro empleo</a></li>
                                    <li><a className="dropdown-item" href="/">Precios</a></li>
                                    <li><a className="dropdown-item" href="/">Pruebas online</a></li>
                                    <li><a className="dropdown-item" href="/">Nómina</a></li>
                                    <li><a className="dropdown-item" href="/">Blog</a></li>
                                    <li><a className="dropdown-item" href="/">Comercial</a></li>
                                    <li><a className="dropdown-item" href="/">Calculadora de salario</a></li>
                                </ul>
                            </li>
                            <button className="btn btn-outline-secondary button1 py-0 mx-2" type="submit">
                                <MdLanguage className='icon-button1'/> Español
                            </button>
                            <button className="btn btn-outline-secondary me-2" type="submit">
                                <PiBellRingingFill className='icon-button2'/>
                            </button>
                            <button className="btn d-flex flex-row px-0" type="submit">
                                <FaUserCircle className='icon-button3'/>
                                <p className='mb-0 ms-1 user-text'>User</p> 
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export { Navbar }