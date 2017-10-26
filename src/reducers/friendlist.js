import * as types from '../constants/ActionTypes'

const initialState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      sex: 'male',
      starred: true
    },
    {
      name: 'Sara george',
      sex: 'female',
      starred: false
    },
    {
      name: 'George Washington',
      sex: 'male',
      starred: false
    }
  ]
}

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            name: action.details.name,
            sex: action.details.sex,
            starred: false
          }
        ],
      }

    case types.DELETE_FRIEND:
      const reverserdArrayDelete = state.friendsById.slice().reverse()
      return {
        ...state,
        friendsById: reverserdArrayDelete.filter((item, index) => index !== action.id)
      }

    case types.STAR_FRIEND:
      let friends = [...state.friendsById]
      const reverserdArray = friends.slice().reverse()
      let friend = reverserdArray.find((item, index) => index === action.id)
      friend.starred = !friend.starred
      return {
        ...state,
        friendsById: friends
      }

    default:
      return state
  }
}
