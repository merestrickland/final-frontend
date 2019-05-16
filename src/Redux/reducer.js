
const initialState = {
    trips: [
        {
          "id": 2,
          "name": "Mere <3 NY",
          "user": {
            "id": 2,
            "first_name": "Meredith",
            "last_name": "Strickland"
          },
          "location": {
            "id": 2,
            "name": "New York City",
            "coordinates": "40.7128, -74.0060"
          }
        }
      ],
    user: ""
}





const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default reducer 