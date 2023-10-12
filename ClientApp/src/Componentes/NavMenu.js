import 'bootstrap/dist/css/bootstrap.css';
import '../View/css/style.css'

const NavMenu = () => {

    return (

        <div className="navMenu" >
            <ul className="nav text-right">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Aplicaciones</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </div>
    )

};

export default NavMenu;