import images from "./images/images";

export function Header() {
    return <div className="d-flex">
        <div id="carouselExampleControls" className="carousel slide w-50 m-2" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active hcard">
                    <img src={images.logoREACT} alt="/" className="h-100 w-100"/>
                </div>

                <div className="carousel-item hcard">
                    <img src={images.logoBootstrap} alt="/" className="h-50 w-100"/>
                    <img src={images.logoHTMLCSSJS} alt="/" className="h-50 w-100"/>
                </div>

                <div className="carousel-item hcard">
                    <img src={images.logoPY} alt="/" className="h-50"/>
                    <img src={images.logoMYSQL} alt="/" className="h-50 w-50"/>
                    <img src={images.logoJAVA} alt="/" className="h-50 w-50"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-dark bg-opacity-75 rounded-3 h-25" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-dark bg-opacity-75 rounded-3 h-25" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className="bg-primary w-50 m-2 rounded-3 text-white">
            <h1 className="text-center">Eduard Nicolás <br/> SARMIENTO HERRERA</h1>
            <div className="card text-bg-dark m-2 col-5">
                <img src={images.port} className="card-img port" alt="/" />
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small>Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
}
