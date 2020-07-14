import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { AuthReducer } from '../Redux/Auth/AuthReducer'
import { DashboardReducer } from '../Redux/Auth/DashboardReducer'

const rootReducer = combineReducers({
    form: formReducer,
    auth: AuthReducer,
    dash: DashboardReducer
});

export default rootReducer