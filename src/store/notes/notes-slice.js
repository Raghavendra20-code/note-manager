import {createSlice} from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name:'noteSlice',
    initialState:{
        noteList:[]
    },
    reducers:{
        setNoteList:(currentSlice,action)=>{
            currentSlice.noteList = action.payload;
        },
        addNote:(currentSlice,action)=> {
            currentSlice.noteList.push(action.payload);
        },
        UpdateNote: (currentSlice, action) => {
            const indexToUpdate = currentSlice.noteList.findIndex(
                (note) => note.id === action.payload.id
            );
            currentSlice.noteList[indexToUpdate] = action.payload;
        },
        deleteNote: (currentSlice, action) => {
            const filteredNoteList = currentSlice.noteList.filter(
                (note) => note.id !== action.payload.id
            );
            currentSlice.noteList = filteredNoteList;
        },
    }
})

export const {setNoteList,addNote,UpdateNote,deleteNote} = notesSlice.actions;