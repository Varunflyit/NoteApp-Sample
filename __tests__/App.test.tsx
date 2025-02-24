import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from '../src/redux/store';
import App from '../src/App';

describe('App Component', () => {
  it('renders the app correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </Provider>
    );

    expect(getByText('Home Screen')).toBeTruthy();
  });

  it('navigates to Add Note screen', () => {
    const { getByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </Provider>
    );

    const addNoteButton = getByText('Add Note');
    fireEvent.press(addNoteButton);
    expect(getByText('Enter your note')).toBeTruthy();
  });
});