export const fetchLogIn = (userObj, push) => {
    return (dispatch) => {
      fetch("http://localhost:3005/login", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(userObj)
      })
      .then(res => res.json())
      .then((information) => {
        if (information.jwt) {
          dispatch(saveUserToState(information.user))
          dispatch(saveTokenToState(information.jwt))
          localStorage.setItem("jwt", information.jwt)
          push("/profile")
        }
      })
    }
  }

  export const saveUserToState = (userObj) => {
    return {type: "SAVE_USER_TO_STATE", payload: userObj}
  }
  
  export const saveTokenToState = (token) => {
    return {type: "SAVE_TOKEN_TO_STATE", payload: token}
  }
  