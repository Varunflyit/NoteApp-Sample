import React from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../redux/slices/notesSlice';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.notes);

    const deleteNoteHandler = (id) => {
        Alert.alert('Delete Note', 'Are you sure you want to delete this note?', [
            { text: 'Cancel' },
            { text: 'OK', onPress: () => dispatch(deleteNote(id)) },
        ]);
    };

    return (
        <View>
            <Button title="Add Note" onPress={() => navigation.navigate('AddNote')} />
            <FlatList
                data={notes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.content}</Text>
                        <Button title="Edit" onPress={() => navigation.navigate('EditNote', { note: item })} />
                        <Button title="Delete" onPress={() => deleteNoteHandler(item.id)} />
                    </View>
                )}
            />
        </View>
    );
};

export default HomeScreen;