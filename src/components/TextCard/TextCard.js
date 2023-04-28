import React from "react";
import {useState} from "react";
import {Trash} from "react-bootstrap-icons";
import s from './style.module.css'

const TextCard = ({title,content,subtitle,onClick,onClickTrash}) =>{
    const [isCardHovered,setIsCardHovered] = useState(false);
    const [isTrashHovered,setIsTrashHovered] = useState(false);

    function onClickTrash_(e){
        onClickTrash();
        e.stopPropagation(); //It is saying to event don't continue after onclick on trash usually as an callback it calls cards on click as well but we don't need that.
    }

    return(
        <div
            onClick={onClick}
            className={`card ${s.container}`}
            style={{ borderColor: isCardHovered ? "#0d6efd" : "transparent" }}
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
        >
            <div className="card-body">
                <div className={s.title_row}>
                    <h5 className="card-title">{title}</h5>
                    <Trash
                        size={20}
                        onMouseEnter={() => setIsTrashHovered(true)}
                        onMouseLeave={() => setIsTrashHovered(false)}
                        style={{ color: isTrashHovered ? "#FF7373" : "#b8b8b8" }}
                        onClick={onClickTrash_}
                    />
                </div>
                <h6 className={`card-subtitle mb-2 text-muted`}>{subtitle}</h6>
                <p className={`card-text ${s.text_content}`}>{content}</p>
            </div>
        </div>
    )
}
export default TextCard
