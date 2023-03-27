export default function shelterReducer(state = {shelters: []}, action) {

    switch (action.type) {
        case 'FETCH_SHELTERS':

         return {shelters: action.payload}
        case 'NEW_SHELTER':
            return {...state, shelters: [...state.shelters, action.payload]}
        case 'DELETE_SHELTER':
            return {...state, shelters: [...state.shelters.filter(shelter => shelter.id !== action.payload.id)]}
        case 'ADD_ANIMAL':
            let shelters = state.shelters.map(shelter => {
                if (shelter.id === action.payload.shelter_id) {
                  return {
                    ...shelter,
                    animals: [...shelter.animals, action.payload]
                  }
                } else {
                  return shelter
                }
            })
            return {...state, shelters: shelters}
            case 'DELETE_ANIMAL':
                let shelterz = state.shelters.map(shelter => {
                    if (shelter.id === action.payload.shelter_id) {
                      return {
                        ...shelter,
                        animals: [...shelter.animals.filter(animal => animal.id !== action.payload.id)]
                      }
                    } else {
                      return shelter
                    }
                })
                return {...state, shelters: shelterz}
            default:
                return state
    }


    
}