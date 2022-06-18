export function  fetchShelters() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/shelters')
        .then(response => response.json())
        .than(shelter => dispatch({
            type: 'FETCH_SHELTERS',
            payload: shelter
        }))
    }
}
