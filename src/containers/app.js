import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import {
    Main
} from './../containers'

const logger = store => next => action => {
    //console.log()
    const result = next(action)
    return result
}
const middleware = [thunk, logger]
const initialState = {}
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default () => (
    <Provider store={store}>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="*" component={Main} />
        </Switch>
    </Provider>
)
