import images from "./images/images";

export function Cards() {
    return <div>
        <div className="container-fluid mt-5 h-75">
            <div className="row bg-opacity-25 bg-info">
                <div className="col-md-5 col-sm-5 col-xl-6 d-flex align-items-center justify-content-center flex-column container-fluid">
                    <h3 className="text-center mt-md-2 mb-md-4">My Studies</h3>
                    <p className="text-center text-body m-3">I'm studing with SENA Technology in analizes and development of Software, too I'm a graduated of the Mission TIC 2022 diploma course on Software Development and I also Studying a degree in Social Sciences with Politecnico Grancolombiano, because my goal is to integrate development with education, especially Social Sciences.</p>
                </div>
                <div className="col-md-5 col-sm-5 col-xl-6 h-100">
                    <div className="d-flex justify-content-center align-content-center">
                        <img className="h-25 w-50 mt-5 rounded-5 img-fluid" src={images.logoPoli} alt="Politecnico Grancolombiano"/>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="h-50 w-50 img-fluid" src={images.logoUIS} alt="Universidad industrial de Santander"/>
                        <img className="h-25 w-25 rounded-4 img-fluid" src={images.logoSENA} alt="SENA servicio nacional de aprendizaje"/>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="row mt-md-5 mb-md-4 container-fluid">
                <div className="col-md-6 col-sm-6 col-xl-6">
                        <img className="img-fluid h-50 w-50 mx-md-auto" src={images.logoSCC} alt=""/>
                        <img className="img-fluid h-50 w-50" src={images.logoCB} alt=""/>
                        <img className="img-fluid h-50 w-50 mx-md-auto" src={images.logoBBVA} alt=""/>
                </div>
                <div className="col-md-6 col-sm-6 col-xl-6 d-flex flex-column justify-content-center align-items-center">
                    <h3 className="text-center mt-md-4 mb-md-4">My Experience</h3>
                    <p className="text-center text-body">My most important experience was with Citibank Colombia S.A. called today Scotiabank Colpatria S.A. because there i did and learned around 95% of process related to my position, too had the oportunity to coordinate the flow of tasks for me and my colaborators.</p>
                </div>
            </div>
            </div>
            <div className="row bg-opacity-25 bg-info d-flex">
                <div className="col-md-4">
                    <img className="img-fluid mt-md-5" src={images.logoGOT} alt=""/>
                </div>
                <div className="col-md-4 container-fluid">
                    <h3 className="text-center mt-md-5 mb-md-4">More about me...</h3>
                    <p className="text-body text-center mb-md-5 p-md-3">I born in Bogotá, I like watch series and movies, too I like read books, my hobbies can jump between mystery at history novels.
                    <br/>my favorite author: Eduardo Galeano
                    <br/>my favorite color: Blue, but can be too gray or black
                    <br/>my favorite movie: Avatar 1
                    <br/>my favorite serie: Game of Thrones, i love all about this history (books, series or whatever).</p>
                </div>
                <div className="col-md-4 container-fluid">
                    <img className="img-fluid h-25 w-25 mt-md-5" src={images.logoApple} alt=""/>
                    <img className="img-fluid" src={images.logoDC} alt=""/>
                </div>
            </div>
        </div>
}