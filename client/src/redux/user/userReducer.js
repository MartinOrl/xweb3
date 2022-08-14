import { UserActionTypes } from "./userActions"
import { createSlice, createSelector } from "@reduxjs/toolkit"

const INITIAL = {
    currentUser: false
}


// const UserReducer = (state = INITIAL, action) => {
   
//     switch (action.type) {
//         case UserActionTypes.SET_CURRENT_USER:
//             return {
//                 ...state,
//                 currentUser: action.payload
//             }
            
//         case UserActionTypes.LOGOUT_USER:
//             return {
//                 ...state,
//                 currentUser: action.payload
//             }
//         case UserActionTypes.SET_TEMPLATE_DETAILS:
//             return {
//                 ...state,
//                 currentUser:{
//                     ...state.currentUser,
//                     templateDetails: action.payload
//                 }
//             }
//         case UserActionTypes.SET_TEMPLATE_ID:
//             if(state.currentUser){
//                 return {
//                     ...state,
//                     currentUser: {
//                         ...state.currentUser,
//                         templateId: action.payload
//                     }
//                 }
//             }
//             return state
//         default:
//             return state
//     }
// }

const UserReducer = createSlice({
    name: "user",
    initialState: INITIAL,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        logOutUser: (state, action) => {
            state.currentUser = action.payload
        },
        setTemplateId: (state, action) => {
            state.currentUser.templateID = action.payload
        },
        setTemplateDetails: (state, action) => {
            state.currentUser.templateDetails = action.payload
        }
    }
})

export const UserActions = UserReducer.actions

const selectSelf = state => state.user

export const selectActiveUser = createSelector(
    [selectSelf],
    user => user.currentUser
)

export default UserReducer