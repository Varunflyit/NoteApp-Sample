import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { addNote } from '../../src/redux/slices/notesSlice';
import store from '../../src/redux/store';
import EditNoteScreen from '../../src/screens/EditNoteScreen';

describe('EditNoteScreen Component', () => {
    beforeEach(() => {
        store.dispatch(addNote({ id: 1, content: 'Old Note' }));
    });

    it('renders the Edit Note screen and updates a note', () => {
        const { getByPlaceholderText, getByText } = render(
            <Provider store={store}>
                <NavigationContainer>
                    <EditNoteScreen route={{ params: { note: { id: 1, content: 'Old Note' } } }} />
                </NavigationContainer>
            </Provider>
        );

        fireEvent.changeText(getByPlaceholderText('Edit your note'), 'Updated Note');
        fireEvent.press(getByText('Update Note'));

        const state = store.getState();
        expect(state.notes).toEqual([{ id: 1, content: 'Updated Note' }]);
    });
});