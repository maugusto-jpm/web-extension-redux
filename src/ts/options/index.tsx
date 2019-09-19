import * as React from 'react';
import { Store } from 'react-chrome-redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import OptionsApp from './containers/OptionsApp';

const store = new Store({
  portName: 'ExPort' // Communication port between the background component and views such as browser tabs.
});

store.ready().then(() => {
  render(
    <Provider store={store}>
      <OptionsApp />
    </Provider>
    , document.getElementById('options-root'));
});
