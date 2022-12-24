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
                    <img src={images.logoPY} alt="/" className="h-50 w-100"/>
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
        <div className="bg-primary w-50 m-2 rounded-3 text-white p-3">
            <div className="row">
                <h1 className="text-center col-lg-12 col-12 col-md-6 h-50 w-100">Eduard Nicolás <br/> Sarmiento Herrera</h1>
                <p className="container-fluid text-center mt-5">
                    Hey, i'm glad to see you here, i'm from Bogotá - Colombia, i'm a passionate person by Technology and Education, specially social sciences, yes yes social sciences
                    i'm strongh believer that the Social Sciences and the Development of Software are a good mix by the news generations and will make of the world a better place where live.
                </p>
            </div>
        </div>
    </div>
}
