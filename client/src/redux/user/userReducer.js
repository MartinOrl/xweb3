import { createSlice, createSelector } from "@reduxjs/toolkit"

const INITIAL = {
    currentUser: false
}

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