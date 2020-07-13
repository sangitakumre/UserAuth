import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './rootReducer'

const jwtToken = localStorage.getItem('JWT_TOKEN');

export const store = createStore(rootReducer, {
    auth: {
        token: jwtToken,
        isAuthenticated: jwtToken ? true : false
    }
}, applyMiddleware(reduxThunk))