import React from 'react';
import { Provider } from 'react-redux';
import Page from './components/Page/Page';
import store from './store/store';
import './styles/index.css';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="container">
        <Page />
      </div>
    </Provider>
  );
}

export default App;
