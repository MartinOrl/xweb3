import { UserActionTypes } from "./userActions"
import { createSlice } from "@reduxjs/toolkit"

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
            
        case UserActionTypes.LOGOUT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.SET_TEMPLATE_DETAILS:
            return {
                ...state,
                currentUser:{
                    ...state.currentUser,
                    templateDetails: action.payload
                }
            }
        case UserActionTypes.SET_TEMPLATE_ID:
            if(state.currentUser){
                return {
                    ...state,
                    currentUser: {
                        ...state.currentUser,
                        templateId: action.payload
                    }
                }
            }
            return state
        default:
            return state
    }
}


export default UserReducer