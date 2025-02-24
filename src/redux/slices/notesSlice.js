import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers: {
        addNote: (state, action) => {
            state.push(action.payload);
        },
        updateNote: (state, action) => {
            const index = state.findIndex((note) => note.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteNote: (state, action) => {
            return state.filter((note) => note.id !== action.payload);
        },
    },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;