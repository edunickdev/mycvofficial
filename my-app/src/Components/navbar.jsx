import {Link} from "react-router-dom";

const Navbar = () => {
    return <div>
        <nav className="navbar navbar-expand-lg bg-primary fixed-top bg-opacity-75">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item navmenu">
                            <Link className="nav-link text-md-center text-white" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item navmenu">
                            <Link className="nav-link text-md-center text-white" to="/about">About me</Link>
                        </li>
                        <li className="nav-item navmenu">
                            <Link className="nav-link text-md-center text-white" to="/projects">Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}

export default Navbar;