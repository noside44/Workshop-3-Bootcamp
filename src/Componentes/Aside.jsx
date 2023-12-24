import "../Styles/Aside.css"
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { RiQuestionnaireFill } from "react-icons/ri";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { GiTrophyCup } from "react-icons/gi";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useState } from "react";

function Aside(){
    const [newClass, setNewClass] = useState(true);

    const addClass = () => {
        setNewClass(newClass => !newClass)
    }
    

    return(
        <div className={newClass ? "aside" : "clickaside"}>
            <div className={newClass ? "aside-container" : "clickaside-container"}>
                <div className="row row-cols-1 m-0 text-center">
                    <div className="col">
                        <BsFillBriefcaseFill className="aside-logo" />
                        <p className="empleos">Empleos</p>
                    </div>
                    <div className="col">
                        <BsFileEarmarkCheckFill className="aside-logo" />
                        <p>Postulaciones</p>
                    </div>
                    <div className="col">
                        <IoGameController className="aside-logo" />
                        <p>Cursos</p>
                    </div>
                    <div className="col">
                        <RiQuestionnaireFill className="aside-logo" />
                        <p>Preguntas</p>
                    </div>
                    <div className="col">
                        <HiMiniCodeBracketSquare className="aside-logo" />
                        <p>Bootcamp</p>
                    </div>
                    <div className="col">
                        <GiTrophyCup className="aside-logo" />
                        <p>Premios</p>
                    </div>
                    <div className="col">
                        <BsFillFileEarmarkPersonFill className="aside-logo" />
                        <p>Tu CV</p>
                    </div>
                </div>
                <span className={newClass ? "aside-arrow-container" : "clickaside-arrow-container"}
                    onClick={ () => { 
                        addClass()
                        console.log("holis")
                    }}
                >
                    <IoIosArrowDroprightCircle className="arrow" />
                </span>
            </div>
        </div>
    )
}

export { Aside }