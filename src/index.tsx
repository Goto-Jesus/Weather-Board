import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { InfinitySpin } from 'react-loader-spinner';

import { Provider } from 'react-redux';
import store from './store/store';
import './locales/i18';

import { App } from './App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={(
        <div className="loader">
          <InfinitySpin width="200" color="#ffa25b" />
        </div>
      )}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
