
// const initialState = {
//   id: '',
//   first_name: '',
//   last_name: '',
//   email: '',
//   token: '',
//   trips: []
// }

const initialState = {
  trips: [],
  users: [],
  filteredUsers: [],
  currentUser: {},
  token: ''
}




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRIPS': 
          return {...state, trips: action.payload}
        case 'GET_USERS':
          return {...state, users: action.payload}
        case 'FILTER_USERS':
          return {...state, filteredUsers: action.payload}
        case 'LOGIN':
        // debugger;
        console.log(action)
          let loginInfo = {
            email: action.payload.user.email,
            firstName: action.payload.user.first_name, 
            lastName: action.payload.user.last_name,
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