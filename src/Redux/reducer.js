
const initialState = {
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  token: '',
  trips: []
}




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRIPS': 
          return {...state, trips: action.payload}
        case 'GET_USERS':
          return {...state, users: action.payload}
        default:
            return state
    }

}

export default reducer 