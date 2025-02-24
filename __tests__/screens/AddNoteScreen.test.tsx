import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from '../../src/redux/store';
import AddNoteScreen from '../../src/screens/AddNoteScreen';

describe('AddNoteScreen Component', () => {
    it('renders the Add Note screen and adds a note', () => {
        const fetchNotesMock = jest.fn();

        const { getByPlaceholderText, getByText } = render(
            <Provider store={store}>
                <NavigationContainer>
                    <AddNoteScreen route={{ params: { fetchNotes: fetchNotesMock } }} />
                </NavigationContainer>
            </Provider>
        );

        fireEvent.changeText(getByPlaceholderText('Enter your note'), 'New Note');
        fireEvent.press(getByText('Save Note'));

        const state = store.getState();
        expect(state.notes).toEqual([{ id: expect.any(Number), content: 'New Note' }]);
    });
});