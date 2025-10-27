import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Route from './routes/routes';

export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

