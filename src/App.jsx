import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header";
import {useEffect} from "react";
import {NoteApi} from "./api/note-api";
import {useDispatch} from "react-redux";
import {setNoteList} from "./store/notes/notes-slice";
import s from './style.module.css'
export function App() {
    const dispatch = useDispatch();
    async function fetchAllNotes(){
        const noteList = await NoteApi.fetchAll();
        return dispatch(setNoteList(noteList));
    }
    useEffect(()=>{
        fetchAllNotes();
    },[])
  return (
      <div>
        <Header/>
          <div className={s.workspace}>
          <Outlet/>
          </div>
      </div>
  );
}


//Outlet is the dynamic layout of the children routes we are passing in index.js to app.
//we are telling react to render the route components as a children in App component where app components
//value will be static and others will be dynamic.
//Outlet will be replaced with children we send.