export const setTrip = (tripObj) => ({
    type: 'SET_TRIP',
    payload: tripObj
})

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
            console.log("jwt", data.token)
            localStorage.setItem("token", data.token)
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

export const getProfileFetch = () => {
    return dispatch => {
      const token = localStorage.token;
      if (token) {
        return fetch("http://localhost:3005/api/v1/autologin", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
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
                console.log(data.user)
              dispatch(loginUser(data.user))
            }
          })
      }
    }
  }

  const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const setCurrentUserTrips = (newTripObject) => {
    return {type: 'SET_USER_TRIPS', payload: newTripObject}
}


export const postTripRequest = (tripObject) => {
    return (dispatch) => {
        const token = localStorage.token
        console.log(tripObject)
        return fetch('http://localhost:3005/api/v1/trips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(tripObject)
        })
        .then(response => response.json())
        .then(tripArr => dispatch(setCurrentUserTrips(tripArr)))
    }
}


export const removeTrip = (tripObjId) => {
    console.log('removeTrip tripObj', tripObjId)
    return {type: 'REMOVE_TRIP', payload: tripObjId}
}

export const removeTripRequest = (tripId) => {
    return (dispatch) => {
        const token = localStorage.token
        console.log('tripObj in removeTripRequest', tripId)
        return fetch(`http://localhost:3005/api/v1/trips/${tripId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        // .then(console.log)
        // .then(tripObj => dispatch(removeTrip(tripObj)))
    }
}

export const addListItem = (newListObject) => {
    return {type: 'ADD_LIST_ITEM', payload: newListObject}
}

export const postListItemRequest = (listObject) => {
    return (dispatch) => {
        const token = localStorage.token 
        
        return fetch(`http://localhost:3005/api/v1/list_items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(listObject)
        })
        .then(response => response.json())
        .then(listItemArr => dispatch(addListItem(listItemArr)))
    }
}

export const removeListItem = (listObj) => {
    console.log('removeListItem listObj', listObj)
    return {type: 'REMOVE_LIST_ITEM', payload: listObj.id}
}


export const removeListItemRequest = (listObj) => {
    return (dispatch) => {
        const token = localStorage.token
        console.log('listObj in removeTripRequest', listObj)
        return fetch(`http://localhost:3005/api/v1/list_items/${listObj.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        // .then(console.log)
        // .then(listObj => dispatch(removeListItem(listObj)))
    }
}



