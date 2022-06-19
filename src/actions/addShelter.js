export const addShelter = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/shelters',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)

        })
        .then(response => response.json())
        .than(shelter => dispatch({type: 'NEW_SHELTER', payload: shelter}))
    }
    
}