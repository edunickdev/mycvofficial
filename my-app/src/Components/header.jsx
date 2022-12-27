import images from "./images/images";

export function Header() {
    return <div className>
        <div className="container hcard h-50 mt-md-5 mb-md-4">
            <div className="row mt-md-2 mb-md-2">
                <div className="col-md-8 col-sm-4 col-xl-8">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade mt-md-4" data-bs-ride="carousel">
                        <div className="carousel-inner hcard">
                            <div className="carousel-item active">
                                <img src={images.logoREACT} className="h-100 w-100" alt="logoReact" />
                            </div>
                            <div className="carousel-item hcard">
                                <img src={images.logoPY} className="h-50 w-100" alt="logoPython" />
                                <img src={images.logoMYSQL} className="h-50 w-50" alt="logoMYSQL" />
                                <img src={images.logoJAVA} className="h-50 w-50" alt="logoJAVA" />
                            </div>
                            <div className="carousel-item hcard">
                                <img src={images.logoHTMLCSSJS} className="h-50 w-100" alt="logoHTMLCSSJS" />
                                <img src={images.logoBootstrap} className="h-50 w-100" alt="logoBootstrap" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon h-25 bg-opacity-10 bg-black rounded-4" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon h-25 bg-opacity-10 bg-dark rounded-4" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xl-4">
                    <div className="container">
                        <div className="row mt-md-3">
                            <div className="col-md-12 text-center">
                                <h2>Eduard Nicolás Sarmiento Herrera</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={images.port} className="h-75 w-100 rounded-circle mt-md-4" alt="" />
                                </div>
                                <div className="col-md-6 text-body text-center p-2">
                                    <p>Hi, I'm glad to see you here, i'm from Bogotá - Colombia, 31 years old and i'm a passionate for the Technology and the Social Sciences, yes Social Sciences, I believe that both disciplines can contribute to making the world a better place.</p>
                                    <ul className="list-unstyled">
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
