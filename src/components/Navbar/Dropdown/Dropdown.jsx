const Dropdown = () => {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Juguetes</a></li>
            <li><a className="dropdown-item" href="#">Decoracion</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Tus Diseños</a></li>
          </ul>
        </li>
    );
}

export default Dropdown;
