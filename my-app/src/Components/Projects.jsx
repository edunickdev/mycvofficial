import images from "./images/images";

export function Projects() {
    return <div>
        <div className="container container-fluid">
            <h1 className="text-center mt-md-5 pt-md-5 pb-md-3">PROJECTS</h1>
                <p className="text-center">Actually this space is in build, for the moment you can visit my networks doing click on each of the follow icons, into GitHub you will see all my projects, for the others platforms you can use it to type me.</p>
            <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center bg-opacity-50 bg-info rounded-5 w-25 mt-md-3">
                    <a href=""><img className="d-block mx-auto p-md-3" src={images.iconLinkedin} alt="" /></a>
                    <a href=""><img className="d-block mx-auto p-md-3" src={images.iconGithub} alt=""/></a>
                </div>
            </div>
        </div>
    </div>
}