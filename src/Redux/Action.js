

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

export const fetchLogin = user => {

return  dispatch => {
    return fetch("http://localhost:3005/api/v1/login", {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({user})
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            //need logic here to have an error pop up
            console.log("try again")
        } else {
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
        }
    })
}
}

export const userPostFetch = user => {
    //this function will send user's info to backend to be verified
    //upon success, expects a JSON object to be returned with user info and jwt
    return dispatch => {
        return fetch("http://localhost:3005/api/v1/users", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                //need logic here to have an error pop up
                console.log("try again")
            } else {
                console.log("this is the user obj", data)
                localStorage.setItem("token", data.jwt)
                dispatch(loginUser(data.user))
            }
        })
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const getProfileFetch = () => {
    return dispatch => {
      const token = localStorage.token;
      if (token) {
        return fetch("http://localhost:3005/api/v1/profile", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(resp => resp.json())
          .then(data => {
            if (data.message) {
              // An error will occur if the token is invalid.
              // If this happens, you may want to remove the invalid token.
              localStorage.removeItem("token")
            } else {
              dispatch(loginUser(data.user))
            }
          })
      }
    }
  }