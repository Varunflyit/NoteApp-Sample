import notesReducer, { addNote, updateNote, deleteNote } from './notesSlice';

test('should handle initial state', () => {
    expect(notesReducer(undefined, {})).toEqual([]);
});

test('should add a note', () => {
    const previousState = [];
    const note = { id: 1, content: 'Test Note' };
    expect(notesReducer(previousState, addNote(note))).toEqual([note]);
});

test('should update a note', () => {
    const previousState = [{ id: 1, content: 'Test Note' }];
    const updatedNote = { id: 1, content: 'Updated Note' };
    expect(notesReducer(previousState, updateNote(updatedNote))).toEqual([updatedNote]);
});

test('should delete a note', () => {
    const previousState = [{ id: 1, content: 'Test Note' }];
    expect(notesReducer(previousState, deleteNote(1))).toEqual([]);
});