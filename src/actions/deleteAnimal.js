export const deleteAnimal = (animalId, shelterId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/shelters/${shelterId}/animals/${animalId}`, {
            method: 'DELETE'
          })
          .then(response => response.json())
          .then(shelter => dispatch({type: 'DELETE_ANIMAL', payload: shelter}))
    }
}