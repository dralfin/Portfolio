import React from "react";
import { FaGithub, FaQuestion } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";


export default props => {
    return (
        <div className="Card">
            <img src={props.img} width="100%" />

            <div className="Title">{props.nomeProjeto}</div>
            <div> 
                <a href={props.link1} target="_blank"> <FaGithub /><div></div></a>
                <a href={props.link2} target="_blank"> <IoEyeSharp /><div></div></a>
            </div>
        </div>

    )
}