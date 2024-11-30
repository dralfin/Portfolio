import React from "react";
import Buttons from "./Buttons";

export default () => {
    return(
        <header className="Menu">
            {/* <div className="Social"> */}
                <div className="MenuItem">
                    <Buttons pageactive="homePage" link="/" page="HOME"/>
                </div>
                <div className="MenuItem">
                <Buttons pageactive="aboutPage" link="/about" page="SOBRE"/>
                </div>
                <div className="MenuItem">
                <Buttons pageactive="projectsPage" link="/projects" page="PROJETOS"/>
                </div>
            {/* </div> */}
        </header>
    )
}