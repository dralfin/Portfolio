import React from "react";
import { useState } from "react";


export default () => {

    const[isHover, setIsHover] = useState(false);
    const mouseEnter = () =>{
        setIsHover(true);
    }
    const MouseLeave = () => {
        setIsHover(false);
    }
    const estilo = isHover ? 'Social tooltip' : 'Social tooltip fa-bounce' 

    return (
        <footer className="Footer">
            {/* <div className="Social"> */}
                <div className={estilo} onMouseEnter={mouseEnter}
        onMouseLeave={MouseLeave}>
            <span className="tooltiptext">Instagram</span>
                    <a className="btn" target="_blank" href="https://www.instagram.com/tiaguinho652/"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className={estilo} onMouseEnter={mouseEnter}
        onMouseLeave={MouseLeave}>
            <span className="tooltiptext">Linkedin</span>

                    <a className="btn" target="_blank" href="https://www.linkedin.com/in/tiagomorato/#"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <div className={estilo} onMouseEnter={mouseEnter}
        onMouseLeave={MouseLeave}>
            <span className="tooltiptext">Github</span>

                    <a className="btn" target="_blank" href="https://github.com/dralfin"><i className="fa-brands fa-github"></i></a>
                </div>
                <div className={estilo} onMouseEnter={mouseEnter}
        onMouseLeave={MouseLeave}>
            <span className="tooltiptext">E-Mail</span>

                    <a className="btn" target="_blank" href="mailto:tiago.m.garcia@hotmail.com"><i className="fa-regular fa-envelope"></i></a>
                </div>
            {/* </div> */}
        </footer>
    )
}