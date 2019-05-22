

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

export const filterUsers = (users) => ({
    type: 'FILTER_USERS',
    payload: users
})

export const fetchLogin = (currentUser) => dispatch => {
    const user = {user:{
        email: currentUser.email.toLowerCase(),
        password: currentUser.password
      }}
    fetch("http://localhost:3005/api/v1/login", {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'accept': "application/json",
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        dispatch({type: "LOGIN", payload: response})
    })
}