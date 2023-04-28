import React from "react";
import NoteForm from "../../components/NoteForm/NoteForm";
import {NoteApi} from "../../api/note-api";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addNote} from "../../store/notes/notes-slice";

const NoteCreate = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submit = async (formValues) =>{
        const createNote = await NoteApi.create({...formValues,created_at:new Date().toLocaleDateString()
        });
        dispatch(addNote(createNote));
        alert('Note created')
        navigate('/');
    }
    return <><NoteForm title='New Note' onSubmit={submit}/></>
}

export default NoteCreate;