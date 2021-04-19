import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { Provider } from "react-redux"
import store from './store'




ReactDOM.render(
  <Provider store = {store}>
     <App userName='Beveloper' lang='TypeScript' />
  </Provider>,
  document.getElementById("output")
);