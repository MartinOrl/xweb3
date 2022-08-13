import { createSelector } from 'reselect';


const UserState = state => state.user;

export const selectActiveUser = createSelector(
    [UserState],
    user => user.currentUser
)