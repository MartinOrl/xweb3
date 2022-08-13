export const UserActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    SET_TEMPLATE_ID: 'SET_TEMPLATE_ID',
    SET_TEMPLATE_DETAILS: 'SET_TEMPLATE_DETAILS'
}

export const SetCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const LogOutUser = () => ({
    type: UserActionTypes.LOGOUT_USER,
    payload: false
})

export const SetTemplateId = templateId => ({
    type: UserActionTypes.SET_TEMPLATE_ID,
    payload: templateId
})

export const SetTemplateDetails = templateDetails => ({
    type: UserActionTypes.SET_TEMPLATE_DETAILS,
    payload: templateDetails
})