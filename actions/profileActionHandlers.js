import { profileActionTypes } from "../actionTypeConstants/profileActionTypes"
export const editProfile = (editDetails) => {
    return (dispatch,getState)=>{
        let state = getState()['appData']
        Object.keys(editDetails).map(key=>{
            state.users[state.currentUser].profile[key] = editDetails[key]
        })
        return dispatch({
            type:profileActionTypes.EDIT_PROFILE,
            newState:state
        })
    }
}