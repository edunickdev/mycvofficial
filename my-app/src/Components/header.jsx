import images from "./images/images";

export function Header() {
    return <div>
        <div className="container h-100">
            <div className="row">
                <div className="col-md-8 col-sm-4 col-xl-8">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={images.logoREACT} className="d-block" alt="logoReact" />
                            </div>
                            <div className="carousel-item">
                                <img src={images.logoPY} className="d-block h-50 w-100" alt="logoPython" />
                                <img src={images.logoMYSQL} className="d-block h-50 w-100" alt="logoMYSQL" />
                            </div>
                            <div className="carousel-item">
                                <img src={images.logoHTMLCSSJS} className="d-block w-100" alt="logoHTMLCSSJS" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xl-8">

                </div>
            </div>
            <div className="row">
                <div className="col-md-12">

                </div>
            </div>
        </div>
    </div>
}
