import logger from 'redux-logger';
// import thunk from 'redux-thunk';

import {applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

// sagaMiddleware.run(saga)
export default applyMiddleware(
    sagaMiddleware,
    logger
)

