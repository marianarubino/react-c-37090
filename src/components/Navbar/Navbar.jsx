import {Link} from 'react-router-dom';
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import Dropdown from './Dropdown/Dropdown';

const Navbar = () => {
    return (

<nav className=" navbarstyle navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='nav-link' to= "/">
            <button className='btn btn-secondary'>Elvira juguetes</button>
          </Link>  
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contacto</a>
        </li>
        <Dropdown/>
      </ul>
      <CartWidget/>
      <FormBusqueda busqueda={"Buscar Productos"}/>
    </div>
  </div>
</nav>

    );
}
export default Navbar;