import { DASHBOARD_GET_DATA } from './AuthType'

const initialState ={
    secret: '',
}

export const DashboardReducer = (state = initialState, action) =>{
    switch(action.type){
        case DASHBOARD_GET_DATA:
            console.log('secret called')
            return{
                ...state,
                secret: action.payload,
            }
        
        default:
            return state
    }
}