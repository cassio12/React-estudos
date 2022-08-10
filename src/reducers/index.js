import { combineReducers } from "redux";
import { reducers as userReducers } from './user.reducers'

const reducers = combineReducers({
    userReducers,

})

export { reducers } 