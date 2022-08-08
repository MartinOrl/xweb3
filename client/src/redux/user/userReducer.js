import { UserActionTypes } from "./userActions"

const INITIAL = {
    currentUser: false
}


const UserReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}


export default UserReducer