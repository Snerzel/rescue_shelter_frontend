export const deleteShelter = (shelterId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/shelters/${shelterId}`, {
            method: 'DELETE'
          })
          .then(response => response.json())
          .then(shelter => dispatch({type: 'DELETE_SHELTER', payload: shelter}))
    }
}