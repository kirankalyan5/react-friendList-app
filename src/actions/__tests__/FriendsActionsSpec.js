import * as actions from '../FriendsActions'
import * as types from '../../constants/ActionTypes';

describe('actions', () => {
    it('Should create an action to add a friend', () => {
        const name = "Kiran"
        const expectedAction = {
            type: types.ADD_FRIEND,
            name
        }
        expect(actions.addFriend(name)).toEqual(expectedAction)
    })

    it('Should create an action to delete friend', () => {
        const id = 3
        const expectedAction = {
            type: types.DELETE_FRIEND,
            id
        }
        expect(actions.deleteFriend(id)).toEqual(expectedAction)
    })

    it('Should create an action to star a friend', () => {
        const id = 1
        const expectedAction = {
            type: types.STAR_FRIEND,
            id
        }
        expect(actions.starFriend(id)).toEqual(expectedAction)
    })
})