import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import NoteForm from "../../components/NoteForm/NoteForm";
import {NoteApi} from "../../api/note-api";
import {UpdateNote,deleteNote} from "../../store/notes/notes-slice";

const Note = () =>{
    const navigate = useNavigate();
    const {noteId} = useParams();//gets you the value of url in this case value is {noteId:2} that is why we took {noteId} thats what we are using in routers url as an id.
    const note = useSelector(store=>store.noteSlice.noteList.find((note)=>note.id === noteId))
    const [isEditable,setIsEditable] = useState(false);
    const dispatch = useDispatch();
    const submit = async (formValues) =>{
        const updateNote = await NoteApi.updateById(note.id,formValues)
        dispatch(UpdateNote(updateNote));
        setIsEditable(false);
    }
    async function deleteNote_() {
        if (window.confirm("Delete note ?s")) {
            await NoteApi.deleteById(note.id);
            dispatch(deleteNote(note));
            navigate("/");
        }
    }
    return <>{note && <NoteForm
        isEditable={isEditable}
        title={isEditable?"Edit Note":note.title}
        note={note}
        onClickDelete={deleteNote_}
        onClickEdit={() => setIsEditable(!isEditable)}
        onSubmit={isEditable && submit}
    />}</>
}

export default Note;