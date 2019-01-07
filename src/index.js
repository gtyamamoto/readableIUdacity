import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';

import App from './components/App';
import middleware,{sagaMiddleware} from './middleware'
import sagas from './actions/sagas'

const store = createStore(reducer,middleware);
sagaMiddleware.run(sagas)
ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with 
