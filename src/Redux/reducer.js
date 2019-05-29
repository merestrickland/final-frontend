


const initialState = {
  // trips: [],
  users: [],
  filteredUsers: [],
  currentUser: {},
  currentUserTrips: [],
  token: ''
}




const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'GET_TRIPS': 
        //   return {...state, trips: action.payload}
          //This is supposed to take the current users trips, and set them to their own state. 
        case 'SET_USER_TRIPS':
        console.log(state.currentUserTrips)
          return {...state, currentUserTrips: [...state.currentUserTrips, action.payload]}
        case 'REMOVE_TRIP':
          let idOfTripToRemove = action.payload 
          let filteredArray = state.trips.filter(trip => trip.id !== idOfTripToRemove)
          return {...state, trips: filteredArray}
        case 'GET_USERS':
          return {...state, users: action.payload}
        case 'FILTER_USERS':
          return {...state, filteredUsers: action.payload}
        case 'USER_SHOW':
          return {...state, userShow: action.payload}
        case 'LOGIN_USER':
          return {...state, currentUser: action.payload}
        case 'LOGIN':
       
        console.log("action", action)
          let loginInfo = {
            email: action.payload.user.email,
            first_name: action.payload.user.first_name, 
            last_name: action.payload.user.last_name,
            trips: action.payload.user.trips
          }
          localStorage.setItem('token', action.payload.token)
          return {
            currentUser: {...loginInfo},
            token: action.payload.token
          }
        default:
            return state
        
    }

}

export default reducer 