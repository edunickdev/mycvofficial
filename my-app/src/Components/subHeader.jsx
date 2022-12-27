import images from "./images/images";

export function SubHeader() {
    return <div className="container-fluid d-block">
        <div className="row bg-opacity-10 bg-info">
            <h3 className="text-center mt-md-3">Other aplications that I use...</h3>
            <div className="col-md-12">
                <img className="col-md-3" src={images.logoExcel} alt=""/>
                <img className="col-md-3" src={images.logoGIT} alt=""/>
                <img className="col-md-3" src={images.logoGitHub} alt=""/>
                <img className="col-md-3" src={images.logoUML} alt=""/>
            </div>
        </div>
    </div>
}