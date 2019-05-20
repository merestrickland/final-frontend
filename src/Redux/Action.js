

export const getTrips = (tripArr) => ({
    type: "GET_TRIPS",
    payload: tripArr
})

export const getTripsCreator = () => {
    return (dispatch) => {
        return fetch("http://localhost:3005/api/v1/trips")
        .then(response => response.json())
        .then(tripArr => dispatch(getTrips(tripArr)))
    }
}

export const getUsers = (userArr) => ({
    type: 'GET_USERS',
    payload: userArr
})

export const getUsersCreator = () => {
    return (dispatch) => {
        return fetch("http://localhost:3005/api/v1/users")
        .then(response => response.json())
        .then(userArr => dispatch(getUsers(userArr)))
    }
}
