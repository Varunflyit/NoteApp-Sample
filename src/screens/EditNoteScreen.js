import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateNote } from '../redux/slices/notesSlice';

const EditNoteScreen = ({ route, navigation }) => {
    const { note } = route.params;
    const dispatch = useDispatch();
    const [updatedNote, setUpdatedNote] = useState(note.content);

    const handleEditNote = () => {
        const updatedNoteObject = { ...note, content: updatedNote };
        dispatch(updateNote(updatedNoteObject));
        navigation.goBack();
    };

    return (
        <View>
            <TextInput
                placeholder="Edit your note"
                value={updatedNote}
                onChangeText={setUpdatedNote}
            />
            <Button title="Update Note" onPress={handleEditNote} />
        </View>
    );
};

export default EditNoteScreen;