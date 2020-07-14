import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './rootReducer'
import axios from 'axios'

const jwtToken = localStorage.getItem('JWT_TOKEN');

axios.defaults.headers.common['Authorization'] = jwtToken;

export const store = createStore(rootReducer, {
    auth: {
        token: jwtToken,
        isAuthenticated: jwtToken ? true : false
    }
}, applyMiddleware(reduxThunk))