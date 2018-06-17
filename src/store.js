import { createStore, compose } from 'redux'
import combineReducers from './reducers/index.js'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const enhancer = compose(devTools)

const store = createStore(combineReducers, enhancer)

export default store