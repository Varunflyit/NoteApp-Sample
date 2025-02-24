import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { addNote } from '../../src/redux/slices/notesSlice';
import store from '../../src/redux/store';
import HomeScreen from '../../src/screens/HomeScreen';

describe('HomeScreen Component', () => {
    beforeEach(() => {
        // Pre-populate the store with some notes
        store.dispatch(addNote({ id: 1, content: 'First Note' }));
        store.dispatch(addNote({ id: 2, content: 'Second Note' }));
    });

    it('renders the home screen and displays notes', () => {
        const { getByText } = render(
            <Provider store={store}>
                <NavigationContainer>
                    <HomeScreen />
                </NavigationContainer>
            </Provider>
        );

        expect(getByText('Home Screen')).toBeTruthy();
        expect(getByText('First Note')).toBeTruthy();
        expect(getByText('Second Note')).toBeTruthy();
    });

    it('navigates to AddNote screen', () => {
        const { getByText } = render(
            <Provider store={store}>
                <NavigationContainer>
                    <HomeScreen />
                </NavigationContainer>
            </Provider>
        );

        fireEvent.press(getByText('Add Note'));
        expect(getByText('Enter your note')).toBeTruthy();
    });

    it('deletes a note', () => {
        const { getByText } = render(
            <Provider store={store}>
                <NavigationContainer>
                    <HomeScreen />
                </NavigationContainer>
            </Provider>
        );

        fireEvent.press(getByText('Delete'));
        expect(getByText('First Note')).toBeTruthy();
        expect(getByText('Second Note')).toBeTruthy();
    });
});