
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
    users: [
    {
      "id": 2,
      "first_name": "Meredith",
      "last_name": "Strickland",
      "trips": [
        {
          "id": 2,
          "name": "Mere <3 NY"
        }
      ],
      "locations": [
        {
          "id": 2,
          "name": "New York City",
          "coordinates": "40.7128, -74.0060"
        }
      ],
      "list_items": [
        {
          "id": 1,
          "name": "Noguchi Museum",
          "description": "museum housing Noguchi pieces featuring a sculpture garden",
          "img_url": "https://www.noguchi.org/sites/default/files/collection/vic1.jpg?1287004287",
          "category": "activity"
        }
      ]
    },
    {
        "id": 3,
        "first_name": "Jael",
        "last_name": "McPants",
        "trips": [],
        "locations": [],
        "list_items": []
      }
  ]
}





const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default reducer 