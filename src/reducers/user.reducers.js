import { actionsType } from "../constants/users";

const INITIAL_STATE = {
    user: []
}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionsType.ADD_USER:
            return { user: [...state.user, ...action.payload] }
        case actionsType.REMOVE_USER:
            return { user: state.user.filter( user => user.id !== action.payload ) }
        default:
            return state
    }
}

export { reducers }