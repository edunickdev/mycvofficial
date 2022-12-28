import images from "./images/images";

export function SubHeader() {
    return <div className="container-fluid d-block">
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item bg-opacity-10 bg-info">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne">
                        <h4 className="text-black">Other aplications that I use...</h4>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                     aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        <div className="col-md-12">
                            <img className="col-md-3" src={images.logoExcel} alt="Microsoft Excel"/>
                            <img className="col-md-3" src={images.logoGIT} alt="Git"/>
                            <img className="col-md-3" src={images.logoGitHub} alt="Github"/>
                            <img className="col-md-3" src={images.logoUML} alt="StarUML"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}