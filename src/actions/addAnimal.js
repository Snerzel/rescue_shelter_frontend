export const addAnimal = (animal, shelterId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/shelters/${shelterId}/animals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(animal)
        }

        )
        .then(response => response.json())
        .than(shelter => dispatch({type: 'ADD_ANIMAL', payload: shelter}))
    }
}