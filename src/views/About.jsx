import React from "react";
import { GrMysql } from "react-icons/gr";
import { FaHtml5, FaCss3Alt, FaReact, FaPhp,FaBootstrap, FaGithub, FaDiceD20    } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCsharp } from "react-icons/si";
import { DiMaterializecss } from "react-icons/di";
import tiago from "../img/Tiago.jpg"




export default props => {
    
    return (
        <div className="Content About">
            <div className="Content">
            <div>
                <div className="AboutText">
                    <h1>Olá,</h1><p>Sou <strong>Tiago Morato Garcia</strong>, um desenvolvedor web apaixonado por criar soluções criativas e eficientes para o mundo digital.</p>
                    <p>Tenho cinco anos de experiência desenvolvendo sites responsivos e funcionais, utilizando tecnologias como <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>PHP</strong> e atualmente estou estudando frameworks modernos como <strong>React</strong>.</p>
                    <p>Meu foco é oferecer experiências únicas para o usuário, com código limpo e design funcional.</p>
                    <p>Quando não estou codificando, adoro explorar novas tecnologias, jogar videogames e RPG de mesa <strong><FaDiceD20/></strong>.</p> 
                    <p>Se quiser conversar sobre projetos ou ideias, entre em contato! Ficarei feliz em colaborar e espero que goste do meu portfólio.</p>
                    <div className="border">
                        <h3>Skills</h3>
                        <div className="grid-container">
                        <div className="grid-item">
                        <FaHtml5 />
                            <span>HTML</span>
                        </div>
                        <div className="grid-item">
                        <FaCss3Alt />

                            <span>CSS</span>
                        </div>
                        <div className="grid-item">
                        <IoLogoJavascript />

                            <span>JavaScript</span>
                        </div>
                        <div className="grid-item">
                        <FaReact className="react" />
                            <span>ReactJS</span>
                        </div>
                        <div className="grid-item">
                        <FaPhp />
                            <span>PHP</span>
                        </div>
                        <div className="grid-item">
                        <FaBootstrap />
                            <span>Bootstrap</span>
                        </div>
                        <div className="grid-item">
                        <FaGithub />
                            <span>GitHub</span>
                        </div>
                        <div className="grid-item">
                        <GrMysql />
                            <span>Mysql</span>
                        </div>
                        <div className="grid-item">
                        <DiMaterializecss />
                            <span>Materialize</span>
                        </div>
                        <div className="grid-item">
                        <SiCsharp />
                            <span>C#</span>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="img"><img src={tiago} alt="" /></div>
            </div>
        </div>
        </div>
    )
}
