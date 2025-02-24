import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/slices/notesSlice';

const AddNoteScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [note, setNote] = useState('');

    const handleAddNote = () => {
        const newNote = { id: Date.now(), content: note };
        dispatch(addNote(newNote));
        navigation.goBack();
    };

    return (
        <View>
            <TextInput
                placeholder="Enter your note"
                value={note}
                onChangeText={setNote}
            />
            <Button title="Save Note" onPress={handleAddNote} />
        </View>
    );
};

export default AddNoteScreen;