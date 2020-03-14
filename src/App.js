import React from 'react';
import './App.css';
import UserPage from './screens/UsersPage';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <UserPage />
      </Provider>
    </>
  );
}

export default App;
