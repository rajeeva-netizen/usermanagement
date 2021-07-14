import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import reducer from './Reducers/submitreducer'

const middleware = [thunk]
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store