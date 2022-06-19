export default function shelterReducer(state = {shelters: []}, action) {

    switch (action.type) {
        case 'FETCH_SHELTERS':
            return {shelters: action.payload}
        case 'NEW_SHELTER':
            return {...state, shelters: [...state.shelters, action.payload]}

            default:
                return state
    }


    
}