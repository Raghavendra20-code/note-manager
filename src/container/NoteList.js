import {useDispatch} from "react-redux";
import TextCard from '../components/TextCard/TextCard'
import {useNavigate} from "react-router-dom";
import s from './style.module.css'
import {NoteApi} from "../api/note-api";
import {deleteNote} from "../store/notes/notes-slice";

const NoteList = ({noteList}) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function deleteNote_(note) {
        if (window.confirm("Delete note ?")) {
            await NoteApi.deleteById(note.id);
            dispatch(deleteNote(note));
            navigate("/");
        }
    }

    return(
        <div className={`row justify-content-center`}>
            {noteList.map((note,id)=>{
            return(
                <div className={s.card_container} key={id}>
                <TextCard
                title={note.title}
                subtitle={note.created_at}
                content={note.content}
                onClick={()=>navigate('/note/'+note.id)}
                onClickTrash={() => deleteNote_(note)}
                />
                </div>
                )})}
        </div>
    )
}

export default NoteList;