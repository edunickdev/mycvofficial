export function Navbar() {
    return <div>
        <nav className="navbar navbar-expand-lg bg-primary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item navmenu">
                            <a className="nav-link text-md-center" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item navmenu">
                            <a className="nav-link text-md-center" href="/">About me</a>
                        </li>
                        <li className="nav-item navmenu">
                            <a className="nav-link text-md-center" href="/">Projects</a>
                        </li>
                        <li className="nav-item navmenu">
                            <a className="nav-link text-md-center" href="/">Contact me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
}