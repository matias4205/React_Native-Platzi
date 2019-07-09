import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import Loading from './src/sections/componentes/Loading'
import AppLayout from './src/app';

// import { fetchCategoryList, fetchSuggestionList } from './src/actions/videos';
import {store, persistor} from './store';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}