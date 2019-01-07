import logger from 'redux-logger';
// import thunk from 'redux-thunk';

import {applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

// export the needed middlewares
export default applyMiddleware(
    sagaMiddleware,
    logger
)

