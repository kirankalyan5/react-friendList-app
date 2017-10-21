import * as types from '../constants/ActionTypes';

const initialState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      sex: 'male',
      starred: true
    },
    {
      name: 'Abraham Lincoln',
      sex: 'female',
      starred: false
    },
    {
      name: 'George Washington',
      sex: 'male',
      starred: false
    }
  ]
};

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
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => index !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find((item, index) => index === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };

    default:
      return state;
  }
}
