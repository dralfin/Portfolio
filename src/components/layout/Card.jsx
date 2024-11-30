import React from "react";
import { FaGithub, FaQuestion } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";


export default props => {
    return (
        <div className="Card">
            <img src="https://thumbs.dreamstime.com/b/temporary-rubber-stamp-over-white-background-86664158.jpg" width="100%" />

            <div className="Title">{props.titulo}</div>
            <div> 
                <a href={props.link} target="_blank"> <FaGithub /><div></div></a>
                <a href={props.link} target="_blank"> <IoEyeSharp /><div></div></a>
            </div>
        </div>

    )
}