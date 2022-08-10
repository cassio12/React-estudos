import userEvent from "@testing-library/user-event";
import { actionsType } from "../constants/users"; 

const actions = { 
    add: user => ({
        type: actionsType.ADD_USER,
        payload: user
    }),
    remove: userId => ({
        type: actionsType.REMOVE_USER,
        payload: userId
    })
}

export { actions }