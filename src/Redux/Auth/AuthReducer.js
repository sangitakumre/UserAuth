import { AUTH_SIGNUP, AUTH_SIGNIN, AUTH_SIGNOUT, AUTH_ERROR } from './AuthType'

const initialState ={
    isAuthenticated: false,
    token: '',
    errorMessage: ''
}

export const AuthReducer = (state = initialState, action) =>{
    switch(action.type){
        case AUTH_SIGNUP:
            console.log('auth sighup called')
            return{
                ...state,
                token: action.payload,
                isAuthenticated: true,
                errorMessage: ''
            }
        case AUTH_SIGNIN:
            console.log('auth sighin called')
            return{
                ...state,
                token: action.payload,
                isAuthenticated: true,
                errorMessage: ''
            }
        case AUTH_SIGNOUT:
                return{
                    ...state,
                    token: action.payload,
                    isAuthenticated: false,
                    errorMessage: ''
                }
        case AUTH_ERROR:
            console.log('auth error called')
            return{
                ...state,
                errorMessage: action.payload
            }
        
        default:
            return state
    }
}