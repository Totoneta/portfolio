import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar () {

    return(
        <nav className="navbarcontainer">
            <ul className="navbarcontainerlist">
                <li className="navbarcontaineritem"><a href='#proyectocardcontainer' >Proyectos</a></li>
                <li className="navbarcontaineritem"><a href='#misestudioscontainer'>Estudios</a></li>
                <li className="navbarcontaineritem"><a href="#sobremicontainer">Sobre Mi</a></li>
            </ul>
        </nav>
    )
}